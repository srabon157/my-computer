const https = require('https');

function fetchCatalog(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      let html = '';
      res.on('data', d => html += d);
      res.on('end', () => {
        const regex = /<div class="p-item-inner">[\s\S]*?<img src="([^"]+)"[\s\S]*?<h4 class="p-item-name">\s*<a[^>]*>([^<]+)<\/a>/g;
        let m;
        const found = [];
        while ((m = regex.exec(html)) !== null) {
          found.push({ name: m[2].trim(), img: m[1] });
        }
        resolve(found);
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  const p1 = await fetchCatalog('https://www.startech.com.bd/lg-monitor-price-in-bangladesh?page=1');
  const p2 = await fetchCatalog('https://www.startech.com.bd/lg-monitor-price-in-bangladesh?page=2');
  const p3 = await fetchCatalog('https://www.startech.com.bd/lg-monitor-price-in-bangladesh?page=3');
  const all = [...p1, ...p2, ...p3];
  console.log('Total LG products on Star Tech:', all.length);
  for (const item of all) {
    console.log(item.name, '=>', item.img);
  }
}
run();
