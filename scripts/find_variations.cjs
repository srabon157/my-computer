const https = require('https');

const missing = [
  '24MS570-B', '27EP950-B', '27US500-W', '27UP600K-W', '32UN650K-W',
  '32EP950-B', '25G523B-B', '27GS65F-B', '27G523B-B', '27GS75Q-B',
  '27GP850-B', '39GS95QE-B', '32G810SA-W'
];

function check(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      resolve({ url, status: res.statusCode });
    });
    req.on('error', e => resolve({ url, error: e.message }));
    req.setTimeout(2500, () => { req.destroy(); resolve({ url, timeout: true }); });
  });
}

async function run() {
  for (const m of missing) {
    const s = m.toLowerCase();
    const variations = [
      s,
      s.replace(/-b$/, ''),
      s.replace(/-w$/, ''),
      s.replace(/k-w$/, '-w'),
      s.replace(/k-w$/, ''),
      s.replace(/k-b$/, '-b'),
      s.replace(/k-b$/, ''),
      s.replace(/^24ms570-b$/, '24ms570b-b'),
      s.replace(/^27gp850-b$/, '27gp850'),
      s.replace(/^27up600k-w$/, '27up600-w'),
      s.replace(/^32un650k-w$/, '32un650-w'),
      s.replace(/^27ep950-b$/, '27ep950'),
      s.replace(/^32ep950-b$/, '32ep950'),
      s.replace(/^39gs95qe-b$/, '39gs95qe'),
      s.replace(/^27us500-w$/, '27us500'),
      s.replace(/^27gs75q-b$/, '27gs75q'),
      s.replace(/^27gs65f-b$/, '27gs65f'),
    ];

    let found = null;
    for (const v of variations) {
      const candidates = [
        `https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/${v}/${v}-01-500x500.webp`,
        `https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/${v}/${v}-500x500.webp`,
        `https://www.startech.com.bd/image/cache/catalog/monitor/lg/${v}/${v}-01-500x500.webp`,
        `https://www.startech.com.bd/image/cache/catalog/monitor/lg/${v}-500x500.webp`,
        `https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/${v}-500x500.webp`,
        `https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/${v}-01-500x500.webp`
      ];
      for (const c of candidates) {
        const r = await check(c);
        if (r.status === 200) {
          found = c;
          break;
        }
      }
      if (found) break;
    }
    console.log(m + ' => ' + (found ? 'FOUND: ' + found : 'NOT FOUND'));
  }
}
run();
