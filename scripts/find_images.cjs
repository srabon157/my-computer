const https = require('https');

const models = [
  '24U411A-B', '24MS570-B', '27U411A-B', '24U631A-B', '27U631A-B', '32U631A-B',
  '27EP950-B', '27US500-W', '27UP600K-W', '27UP850K-W', '32UN650K-W', '32UN880K-B',
  '32EP950-B', '24GS65F-B', '25G523B-B', '27GS65F-B', '27G523B-B', '27GS75Q-B',
  '27GP850-B', '27GR95QE-B', '34GS95QE-B', '38WR85QC-W', '39GS95QE-B', '49U950A-W',
  '27SR50F-W', '32G810SA-W', '43SQ700S-W', '34U640B-B', '34U650A-B'
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
  const results = {};
  for (const m of models) {
    const slug = m.toLowerCase();
    const cleanSlug = slug.replace(/k-w$/, '-w').replace(/k-b$/, '-b');
    const withoutSuffix = slug.replace(/-[a-z0-9]+$/, '');
    const urls = [
      'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/' + slug + '/' + slug + '-01-500x500.webp',
      'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/' + slug + '/' + slug + '-500x500.webp',
      'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/' + cleanSlug + '/' + cleanSlug + '-01-500x500.webp',
      'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/' + cleanSlug + '/' + cleanSlug + '-500x500.webp',
      'https://www.startech.com.bd/image/cache/catalog/monitor/lg/' + slug + '/' + slug + '-01-500x500.webp',
      'https://www.startech.com.bd/image/cache/catalog/monitor/lg/' + slug + '-500x500.webp',
      'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/' + withoutSuffix + '/' + withoutSuffix + '-01-500x500.webp'
    ];
    let found = null;
    for (const u of urls) {
      const r = await check(u);
      if (r.status === 200) {
        found = u;
        break;
      }
    }
    results[m] = found;
    console.log(m + ' => ' + (found ? 'FOUND: ' + found : 'NOT FOUND'));
  }
}
run();
