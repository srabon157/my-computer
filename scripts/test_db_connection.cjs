const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Load .env from project root
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
  console.log('✓ Found and loaded .env file from:', envPath);
} else {
  console.error('✗ ERROR: .env file not found in project root!');
  process.exit(1);
}

const uri = process.env.MONGODB_URI;
const dbName = process.env.DATABASE_NAME || 'my_computer';

if (!uri) {
  console.error('✗ ERROR: MONGODB_URI is not set in your .env file!');
  process.exit(1);
}

// Mask password for safe console logging
const maskedUri = uri.replace(/\/\/(.*?):(.*?)@/, '//$1:••••••••@');
console.log('Testing connection to:', maskedUri);
console.log('Target Database:', dbName);

async function testConnection() {
  console.log('\n--- 1. Testing with Native MongoDB Driver (MongoClient) ---');
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    serverSelectionTimeoutMS: 6000,
  });

  try {
    await client.connect();
    // Send ping to confirm a successful connection
    const adminDb = client.db('admin');
    const pingResult = await adminDb.command({ ping: 1 });
    console.log('✓ Ping MongoDB Atlas SUCCESS:', pingResult);

    const db = client.db(dbName);
    const collections = await db.listCollections().toArray();
    console.log(`✓ Connected to "${dbName}" database. Found ${collections.length} collections:`, collections.map(c => c.name));

    await client.close();
    console.log('✓ MongoClient test completed successfully.\n');

    console.log('--- 2. Testing with Mongoose ---');
    await mongoose.connect(uri, {
      dbName: dbName,
      serverSelectionTimeoutMS: 6000,
    });
    console.log('✓ Mongoose connected successfully to:', mongoose.connection.name);
    await mongoose.disconnect();
    console.log('✓ Mongoose test completed successfully.\n');

    console.log('==================================================');
    console.log(' SUCCESS: MongoDB Atlas is 100% connected & ready!');
    console.log('==================================================');
    process.exit(0);
  } catch (err) {
    console.error('\n✗ Connection Failed! Error details:');
    console.error('Message:', err.message);
    console.error('Code:', err.code || err.codeName || 'N/A');

    console.log('\n--- Diagnostic Recommendations ---');
    if (err.message.includes('ENOTFOUND')) {
      console.log('1. Hostname DNS error: The cluster address might have a typo.');
      console.log('   In MongoDB Atlas > Database > Connect > Drivers, verify the exact cluster URI.');
      console.log('   Example: mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/my_computer');
    } else if (err.message.includes('bad auth') || err.message.includes('Authentication failed')) {
      console.log('1. Authentication error: Username or password is incorrect.');
      console.log('   Check Database Access in MongoDB Atlas to verify username & password.');
      console.log('   If your password has special characters like @, #, $, URL-encode them (e.g. @ becomes %40).');
    } else if (err.message.includes('timed out') || err.message.includes('selection timed out')) {
      console.log('1. IP Whitelist issue: In MongoDB Atlas > Network Access, ensure IP 0.0.0.0/0 is added.');
    }
    process.exit(1);
  }
}

testConnection();

