import { readFile } from 'node:fs/promises';

const html = await readFile('dist/zh-tw/local-zines/index.html', 'utf8');
const payloadMatch = html.match(/<script id="zine-data" type="application\/json">([\s\S]*?)<\/script>/);

if (!payloadMatch) throw new Error('Cannot find the local-zine data payload. Run the Astro build first.');

const records = JSON.parse(payloadMatch[1]);
const gaps = records
  .filter((record) => !record.socials?.length)
  .map(({ name, publisher, city, url }) => ({ name, publisher, city, url }));

console.log(`TOTAL_RECORDS=${records.length}`);
console.log(`SOCIAL_LINK_COVERAGE=${records.length - gaps.length}`);
console.log(`SOCIAL_LINK_GAPS=${gaps.length}`);
console.log(JSON.stringify(gaps, null, 2));
