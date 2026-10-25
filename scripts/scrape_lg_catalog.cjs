const https = require('https');

function fetchPage(page) {
  return new Promise((resolve) => {
    https.get(`https://www.startech.com.bd/lg-monitor?page=${page}`, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let html = '';
      res.on('data', c => html += c);
      res.on('end', () => {
        const itemRegex = /<h4 class="p-item-name">\s*<a href="([^"]+)">([^<]+)<\/a>[\s\S]*?<img src="([^"]+)"/g;
        let match;
        const items = [];
        while ((match = itemRegex.exec(html)) !== null) {
          items.push({
            name: match[2].trim(),
            img: match[3]
          });
        }
        resolve(items);
      });
    }).on('error', e => resolve([]));
  });
}

async function run() {
  let all = [];
  for (let p = 1; p <= 4; p++) {
    const list = await fetchPage(p);
    all = all.concat(list);
  }
  console.log(`Found ${all.length} products on Star Tech LG page:`);
  console.log(JSON.stringify(all, null, 2));
}
run();
