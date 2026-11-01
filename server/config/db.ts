import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.DATABASE_NAME || 'my_computer';

/* ── Mongoose Global Cache to Prevent Duplicate Pools in Dev / Serverless ── */
declare global {
  var _mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose | null> | null;
    lastError: { phase: string; code: string; message: string } | null;
  } | undefined;
}

let cached = global._mongooseCache || { conn: null, promise: null, lastError: null };
if (!global._mongooseCache) {
  global._mongooseCache = cached;
}

/**
 * Categorizes connection errors into precise network / security layers
 */
export function categorizeMongoError(err: any): { phase: string; code: string; message: string } {
  const msg = err?.message || String(err || '');
  const code = err?.code || 'UNKNOWN';

  if (msg.includes('ENOTFOUND') || msg.includes('querySrv') || code === 'ENOTFOUND') {
    return { phase: 'DNS_RESOLUTION', code: 'ENOTFOUND', message: `DNS SRV lookup failed for cluster hostname: ${msg}` };
  }
  if (msg.includes('ECONNREFUSED') || msg.includes('ETIMEDOUT') || code === 'ECONNREFUSED') {
    return { phase: 'TCP_CONNECTION', code: code || 'ETIMEDOUT', message: `TCP port 27017 connection timed out or refused: ${msg}` };
  }
  if (msg.includes('SSL') || msg.includes('tlsv1 alert') || msg.includes('certificate') || msg.includes('ERR_SSL')) {
    const alertMatch = msg.match(/SSL alert number (\d+)/);
    const alertNum = alertMatch ? alertMatch[1] : '';
    let explanation = 'TLS Handshake rejected by Atlas.';
    if (alertNum === '80') {
      explanation = 'Atlas rejected TLS (SSL alert 80: internal_error). This occurs when the client IP is not whitelisted in Atlas Network Access or dynamic ISP IP changed.';
    }
    return { phase: 'TLS_HANDSHAKE', code: alertNum ? `TLS_ALERT_${alertNum}` : 'SSL_ERROR', message: `${explanation} Details: ${msg}` };
  }
  if (msg.includes('AuthenticationFailed') || msg.includes('auth error') || code === 18) {
    return { phase: 'AUTHENTICATION', code: 'AUTH_FAILED', message: `Database user credentials rejected: ${msg}` };
  }
  if (msg.includes('not authorized') || code === 13) {
    return { phase: 'AUTHORIZATION', code: 'UNAUTHORIZED', message: `User not authorized to access database "${dbName}": ${msg}` };
  }

  return { phase: 'GENERAL_ERROR', code: String(code), message: msg };
}

/**
 * Connect to MongoDB Atlas using Mongoose with production-ready security.
 * Certificate verification is NEVER disabled.
 */
export async function connectDB(): Promise<typeof mongoose | null> {
  if (!uri || uri.includes('YOUR_PASSWORD') || uri.trim() === '') {
    cached.lastError = { phase: 'CONFIGURATION', code: 'MISSING_URI', message: 'MONGODB_URI is not set or contains default placeholder in .env' };
    return null;
  }

  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      dbName,
      bufferCommands: false,
      maxPoolSize: 10,
      minPoolSize: 1,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 5000,
    };

    cached.promise = mongoose
      .connect(uri, opts)
      .then((m) => {
        cached.lastError = null;
        console.log(`[MongoDB] Connected successfully to Atlas database: "${dbName}"`);
        return m;
      })
      .catch((err) => {
        cached.promise = null;
        const diagnosed = categorizeMongoError(err);
        cached.lastError = diagnosed;
        console.warn(`[MongoDB ${diagnosed.phase}] Connection failed [${diagnosed.code}]: ${diagnosed.message}`);
        return null;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error: any) {
    cached.promise = null;
    const diagnosed = categorizeMongoError(error);
    cached.lastError = diagnosed;
    return null;
  }
}

/**
 * Returns whether MongoDB connection is actively established and ready
 */
export function isDbConnected(): boolean {
  return mongoose.connection.readyState === 1;
}

/**
 * Get the last detailed connection error
 */
export function getDbLastError() {
  return cached.lastError;
}

/**
 * Returns the underlying native MongoClient from the active Mongoose pool.
 * Prevents allocating redundant MongoClient instances.
 */
export function getMongoClient(): MongoClient | null {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.getClient() as unknown as MongoClient;
  }
  return null;
}

/**
 * Legacy clientPromise compatibility for endpoints expecting clientPromise.
 * Dynamically resolves through the unified connection pool.
 */
export const clientPromise: Promise<MongoClient | null> = {
  then<TResult1 = MongoClient | null, TResult2 = never>(
    onfulfilled?: ((value: MongoClient | null) => TResult1 | PromiseLike<TResult1>) | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null
  ): Promise<TResult1 | TResult2> {
    return connectDB().then((m) => {
      const client = m ? (m.connection.getClient() as unknown as MongoClient) : null;
      return onfulfilled ? onfulfilled(client) : (client as any);
    }, onrejected);
  },
  catch<TResult = never>(
    onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null
  ): Promise<MongoClient | null | TResult> {
    return connectDB().then(
      (m) => (m ? (m.connection.getClient() as unknown as MongoClient) : null),
      onrejected
    );
  },
  finally(onfinally?: (() => void) | null): Promise<MongoClient | null> {
    return connectDB().then(
      (m) => {
        if (onfinally) onfinally();
        return m ? (m.connection.getClient() as unknown as MongoClient) : null;
      },
      (err) => {
        if (onfinally) onfinally();
        throw err;
      }
    );
  },
} as any;

/**
 * Safely disconnects database
 */
export async function closeDB(): Promise<void> {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
    cached.conn = null;
    cached.promise = null;
    cached.lastError = null;
  }
}
