const https = require('https');

const pages = [
  { model: '27UP600K-W', url: 'https://www.startech.com.bd/lg-27up600-w-27-inch-4k-uhd-ips-monitor' },
  { model: '32UN650K-W', url: 'https://www.startech.com.bd/lg-32un650-w-31-5-inch-4k-uhd-monitor' },
  { model: '27GP850-B', url: 'https://www.startech.com.bd/lg-27gp850-b-27-inch-ultragear-qhd-nano-ips-gaming-monitor' },
  { model: '27GS75Q-B', url: 'https://www.startech.com.bd/lg-ultragear-27gs75q-b-27-inch-200hz-qhd-gaming-monitor' },
  { model: '27GS65F-B', url: 'https://www.startech.com.bd/lg-27gs65f-b-27-inch-ultragear-fhd-gaming-monitor' },
  { model: '27US500-W', url: 'https://www.startech.com.bd/lg-27us500-w-27-inch-uhd-4k-ips-monitor' },
  { model: '27EP950-B', url: 'https://www.startech.com.bd/lg-27ep950-b-27-inch-ultrafine-oled-pro-4k-monitor' },
  { model: '32EP950-B', url: 'https://www.startech.com.bd/lg-32ep950-b-31-5-inch-ultrafine-oled-pro-4k-monitor' },
  { model: '39GS95QE-B', url: 'https://www.startech.com.bd/lg-ultragear-39gs95qe-b-39-inch-oled-gaming-monitor' },
  { model: '32G810SA-W', url: 'https://www.startech.com.bd/lg-myview-32g810sa-w-31-5-inch-4k-smart-monitor' },
];

function fetchPage(p) {
  return new Promise((resolve) => {
    https.get(p.url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let html = '';
      res.on('data', c => html += c);
      res.on('end', () => {
        const matches = html.match(/https:\/\/www\.startech\.com\.bd\/image\/cache\/catalog\/[^\s"']+\.(webp|jpg|png)/gi);
        resolve({ model: p.model, status: res.statusCode, images: matches ? Array.from(new Set(matches)).filter(img => img.includes('500x500')) : [] });
      });
    }).on('error', e => resolve({ model: p.model, error: e.message }));
  });
}

async function run() {
  for (const p of pages) {
    const res = await fetchPage(p);
    console.log(res.model, 'Status:', res.status, 'Img:', res.images && res.images[0]);
  }
}
run();
