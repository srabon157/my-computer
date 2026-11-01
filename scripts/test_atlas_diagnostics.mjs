import dns from 'dns';
import net from 'net';
import tls from 'tls';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.DATABASE_NAME || 'my_computer';

console.log('===============================================================');
console.log('     MONGODB ATLAS MULTI-LAYER DIAGNOSTIC VERIFICATION        ');
console.log('===============================================================\n');

const maskedUri = uri.replace(/:([^@]+)@/, ':••••••••@');
console.log(`[Configuration] MONGODB_URI: ${maskedUri}`);
console.log(`[Configuration] DATABASE_NAME: ${dbName}\n`);

async function runDiagnostics() {
  const report = {
    dns: { status: 'PENDING', shards: [] },
    tcp: { status: 'PENDING', results: [] },
    tls: { status: 'PENDING', results: [] },
    authPing: { status: 'PENDING', details: null },
    crud: { status: 'PENDING', insertId: null, verified: false },
  };

  // 1. Parse Cluster Hostname
  const match = uri.match(/@([^/?]+)/);
  if (!match) {
    console.error('❌ Could not extract cluster hostname from MONGODB_URI');
    process.exit(1);
  }
  const clusterHost = match[1].split(':')[0];
  console.log(`>>> [LAYER 1: DNS RESOLUTION] Querying SRV records for "${clusterHost}"...`);

  let shardHosts = [];
  try {
    const srvRecords = await dns.promises.resolveSrv(`_mongodb._tcp.${clusterHost}`);
    shardHosts = srvRecords.map(r => ({ host: r.name, port: r.port }));
    console.log(`✓ DNS SRV Success! Found ${shardHosts.length} replica set shards:`);
    for (const sh of shardHosts) {
      try {
        const ips = await dns.promises.resolve4(sh.host);
        sh.ips = ips;
        console.log(`  - ${sh.host}:${sh.port} -> IPv4: [${ips.join(', ')}]`);
      } catch (ipErr) {
        sh.ips = [];
        console.log(`  - ${sh.host}:${sh.port} -> IPv4 resolution failed: ${ipErr.message}`);
      }
    }
    report.dns = { status: 'PASS', shards: shardHosts };
  } catch (dnsErr) {
    console.error(`❌ DNS SRV Lookup FAILED [${dnsErr.code}]: ${dnsErr.message}`);
    report.dns = { status: 'FAIL', error: dnsErr.message, code: dnsErr.code };
    return report;
  }

  // 2. LAYER 2: TCP Port 27017 Connectivity Check
  console.log('\n>>> [LAYER 2: TCP CONNECTIVITY] Probing Port 27017 on all shards...');
  for (const sh of shardHosts) {
    const start = Date.now();
    const tcpResult = await new Promise((resolve) => {
      const socket = net.createConnection({ host: sh.host, port: sh.port, timeout: 5000 }, () => {
        const latency = Date.now() - start;
        socket.destroy();
        resolve({ host: sh.host, status: 'PASS', latency: `${latency}ms` });
      });
      socket.on('error', (err) => resolve({ host: sh.host, status: 'FAIL', error: err.message, code: err.code }));
      socket.on('timeout', () => {
        socket.destroy();
        resolve({ host: sh.host, status: 'FAIL', error: 'TCP connection timed out (5000ms)' });
      });
    });
    report.tcp.results.push(tcpResult);
    console.log(`  - ${sh.host}: ${tcpResult.status === 'PASS' ? `✓ OPEN (${tcpResult.latency})` : `❌ ${tcpResult.error}`}`);
  }
  report.tcp.status = report.tcp.results.every(r => r.status === 'PASS') ? 'PASS' : 'PARTIAL';

  // 3. LAYER 3: TLS / SSL Handshake Verification (Strict, Secure, No tlsInsecure)
  console.log('\n>>> [LAYER 3: TLS/SSL HANDSHAKE] Performing strict TLS handshake on all shards...');
  for (const sh of shardHosts) {
    const start = Date.now();
    const tlsResult = await new Promise((resolve) => {
      const socket = tls.connect({
        host: sh.host,
        port: sh.port,
        servername: sh.host,
        timeout: 6000,
      }, () => {
        const latency = Date.now() - start;
        const cert = socket.getPeerCertificate();
        const info = {
          host: sh.host,
          status: 'PASS',
          protocol: socket.getProtocol(),
          cipher: socket.getCipher()?.name,
          authorized: socket.authorized,
          validTo: cert.valid_to,
          cn: cert.subject?.CN,
          latency: `${latency}ms`,
        };
        socket.end();
        resolve(info);
      });

      socket.on('error', (err) => {
        const msg = err.message || '';
        let explanation = 'TLS handshake rejected.';
        if (msg.includes('SSL alert number 80')) {
          explanation = 'SSL alert 80 (internal_error): Atlas dropped TLS because this client IP is not in Network Access whitelist or dynamic IP changed.';
        }
        resolve({
          host: sh.host,
          status: 'FAIL',
          error: err.message,
          code: err.code,
          explanation,
        });
      });

      socket.on('timeout', () => {
        socket.destroy();
        resolve({ host: sh.host, status: 'FAIL', error: 'TLS handshake timed out (6000ms)' });
      });
    });

    report.tls.results.push(tlsResult);
    if (tlsResult.status === 'PASS') {
      console.log(`  - ${sh.host}: ✓ TLS SUCCESS (${tlsResult.protocol}, ${tlsResult.cipher}, Cert: ${tlsResult.cn})`);
    } else {
      console.log(`  - ${sh.host}: ❌ TLS FAILED [${tlsResult.code || 'ALERT'}] -> ${tlsResult.explanation || tlsResult.error}`);
    }
  }
  report.tls.status = report.tls.results.every(r => r.status === 'PASS') ? 'PASS' : (report.tls.results.some(r => r.status === 'PASS') ? 'PARTIAL' : 'FAIL');

  // 4. LAYER 4: MongoDB Authentication & Ping
  console.log('\n>>> [LAYER 4: REPLICA SET AUTHENTICATION & PING]');
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 6000, connectTimeoutMS: 6000 });
  try {
    await client.connect();
    const pingRes = await client.db(dbName).command({ ping: 1 });
    console.log(`✓ MongoDB Atlas Ping SUCCESSFUL! [ok: ${pingRes.ok}]`);
    report.authPing = { status: 'PASS', ping: pingRes };

    // 5. LAYER 5: Real Document Insert, Direct Read-Back, and Cleanup
    console.log('\n>>> [LAYER 5: CRUD REAL INSERT & DIRECT READ-BACK TEST]');
    const testDoc = {
      orderId: `DIAG-${Date.now()}`,
      customerName: 'Atlas Diagnostic QA',
      phone: '01700000000',
      address: 'Dhaka Test Lab, Diagnostic Runner',
      district: 'Dhaka',
      total: 3970,
      createdAt: new Date(),
      isDiagnosticTest: true,
    };

    const ordersCol = client.db(dbName).collection('orders');
    const insertResult = await ordersCol.insertOne(testDoc);
    console.log(`✓ Inserted diagnostic test document with _id: ${insertResult.insertedId}`);

    // Direct read-back verification
    const readBack = await ordersCol.findOne({ _id: insertResult.insertedId });
    if (readBack && readBack.orderId === testDoc.orderId) {
      console.log(`✓ Direct DB Read-Back SUCCESS! Verified document orderId: "${readBack.orderId}"`);
      report.crud = { status: 'PASS', insertId: insertResult.insertedId, verified: true };
    } else {
      console.error('❌ Direct DB Read-Back failed: Document could not be read back');
      report.crud = { status: 'FAIL', reason: 'Read back document mismatch' };
    }

    // Cleanup test record
    await ordersCol.deleteOne({ _id: insertResult.insertedId });
    console.log(`✓ Cleaned up test document.`);
  } catch (clientErr) {
    console.error(`❌ Atlas Replica Set Connection FAILED: ${clientErr.message}`);
    report.authPing = { status: 'FAIL', error: clientErr.message };
    report.crud = { status: 'BLOCKED BY CONNECTION' };
  } finally {
    await client.close().catch(() => {});
  }

  console.log('\n===============================================================');
  console.log('                 DIAGNOSTIC SUMMARY REPORT                     ');
  console.log('===============================================================');
  console.log(JSON.stringify(report, null, 2));
  return report;
}

runDiagnostics().catch(e => {
  console.error('Fatal Diagnostic Error:', e);
  process.exit(1);
});

