import { readFile } from 'node:fs/promises';

const html = await readFile('dist/zh-tw/local-zines/index.html', 'utf8');
const payloadMatch = html.match(/<script id="zine-data" type="application\/json">([\s\S]*?)<\/script>/);

if (!payloadMatch) throw new Error('Cannot find the local-zine data payload. Run the Astro build first.');

const records = JSON.parse(payloadMatch[1]);
const allSources = [...new Map(records.filter((record) => /^https?:/.test(record.url)).map((record) => [record.url, record])).values()];
const start = Number.parseInt(process.argv[2] || '0', 10);
const count = Number.parseInt(process.argv[3] || String(allSources.length), 10);
const uniqueSources = allSources.slice(start, start + count);
const results = [];
let cursor = 0;

const ignoredSocialUrls = /(sharer|share\.php|dialog\/|plugins\/|intent\/|facebook\.com\/(?:$|tr\/?$)|instagram\.com\/(?:$|accounts\/))/i;

async function inspect(record) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(record.url, {
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; elephlow-local-zine-audit/1.0)' },
      signal: controller.signal,
    });
    const source = await response.text();
    const links = [...source.matchAll(/href=["']([^"']*(?:facebook\.com|instagram\.com)[^"']*)["']/gi)]
      .map((match) => {
        try { return new URL(match[1].replaceAll('&amp;', '&'), record.url).href; }
        catch { return ''; }
      })
      .filter((url) => url && !ignoredSocialUrls.test(url));

    if (links.length) {
      results.push({
        name: record.name,
        publisher: record.publisher,
        source: record.url,
        social: [...new Set(links)].slice(0, 8),
      });
    }
  } catch {
    // A failed or blocked publisher page remains for manual search.
  } finally {
    clearTimeout(timeout);
  }
}

async function worker() {
  while (cursor < uniqueSources.length) {
    const record = uniqueSources[cursor++];
    await inspect(record);
  }
}

await Promise.all(Array.from({ length: 8 }, () => worker()));
results.sort((a, b) => a.name.localeCompare(b.name, 'zh-Hant'));
console.log(`SOCIAL_AUDIT_HITS=${results.length}`);
console.log(JSON.stringify(results, null, 2));
