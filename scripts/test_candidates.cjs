const https = require('https');

const candidates = [
  // 27UP600
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27up600-w/27up600-w-02-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27up600-w/27up600-w-500x500.jpg',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27up600k-w/27up600k-w-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27up600/27up600-01-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg/27up600-w-500x500.webp',
  
  // 32UN650
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/32un650/32un650-01-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg/32un650-w-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/32un650-w/32un650-w-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/32un650k-w/32un650k-w-500x500.webp',

  // 27GP850
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gp850/27gp850-01-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gp850-b/27gp850-b-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg/27gp850-b-500x500.webp',

  // 27GS75Q
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gs75q-b/27gs75q-b-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gs75q/27gs75q-01-500x500.webp',

  // 27GS65F
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gs65f-b/27gs65f-b-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gs65f/27gs65f-01-500x500.webp',

  // 39GS95QE
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/39gs95qe/39gs95qe-01-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/39gs95qe-b/39gs95qe-b-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg/39gs95qe-b-500x500.webp',

  // 27EP950
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27ep950/27ep950-01-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27ep950-b/27ep950-b-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg/27ep950-b-500x500.webp',

  // 32EP950
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/32ep950/32ep950-01-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/32ep950-b/32ep950-b-500x500.webp',

  // 27US500
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27us500/27us500-01-500x500.webp',
  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27us500-w/27us500-w-500x500.webp',
];

function check(url) {
  return new Promise(resolve => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      resolve({ url, status: res.statusCode });
    }).on('error', e => resolve({ url, error: e.message }));
  });
}

async function run() {
  for (const c of candidates) {
    const res = await check(c);
    if (res.status === 200) {
      console.log('200 OK:', c);
    }
  }
  console.log('Done test');
}
run();
