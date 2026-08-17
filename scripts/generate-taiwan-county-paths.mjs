import { writeFile } from 'node:fs/promises';

const endpoint = 'https://trms.tycg.gov.tw/server/rest/services/Hosted/COUNTY_MOI_1090820/FeatureServer/0/query?where=1%3D1&outFields=countyname,countycode&returnGeometry=true&outSR=4326&f=json';
const response = await fetch(endpoint);
if (!response.ok) throw new Error(`Boundary request failed: ${response.status}`);
const collection = await response.json();

const inset = {
  澎湖縣: { x: 95, y: 330, width: 100, height: 95 },
  金門縣: { x: 70, y: 520, width: 125, height: 70 },
  連江縣: { x: 105, y: 105, width: 82, height: 115 },
};

function ringsOf(geometry) {
  if (geometry.rings) return geometry.rings;
  if (geometry.type === 'Polygon') return geometry.coordinates;
  return geometry.coordinates.flatMap((polygon) => polygon);
}

function bounds(rings) {
  const points = rings.flat();
  const xs = points.map(([x]) => x);
  const ys = points.map(([, y]) => y);
  return { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) };
}

function project(name, point, featureBounds) {
  const [lon, lat] = point;
  if (inset[name]) {
    const box = inset[name];
    const spanX = Math.max(featureBounds.maxX - featureBounds.minX, .001);
    const spanY = Math.max(featureBounds.maxY - featureBounds.minY, .001);
    const scale = Math.min(box.width / spanX, box.height / spanY);
    const width = spanX * scale;
    const height = spanY * scale;
    return [
      box.x + (box.width - width) / 2 + (lon - featureBounds.minX) * scale,
      box.y + (box.height - height) / 2 + (featureBounds.maxY - lat) * scale,
    ];
  }
  return [245 + (lon - 120) * 210, 18 + (25.55 - lat) * 188];
}

function perpendicularDistance(point, start, end) {
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  if (dx === 0 && dy === 0) return Math.hypot(point[0] - start[0], point[1] - start[1]);
  const t = Math.max(0, Math.min(1, ((point[0] - start[0]) * dx + (point[1] - start[1]) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(point[0] - (start[0] + t * dx), point[1] - (start[1] + t * dy));
}

function simplify(points, tolerance = .72) {
  if (points.length <= 3) return points;
  let maxDistance = 0;
  let index = 0;
  for (let i = 1; i < points.length - 1; i += 1) {
    const distance = perpendicularDistance(points[i], points[0], points.at(-1));
    if (distance > maxDistance) { maxDistance = distance; index = i; }
  }
  if (maxDistance <= tolerance) return [points[0], points.at(-1)];
  const left = simplify(points.slice(0, index + 1), tolerance);
  const right = simplify(points.slice(index), tolerance);
  return [...left.slice(0, -1), ...right];
}

function makePath(name, geometry) {
  const rings = ringsOf(geometry);
  const featureBounds = bounds(rings);
  return rings.map((ring) => {
    const projected = ring.map((point) => project(name, point, featureBounds));
    const projectedBounds = bounds([projected]);
    if (!inset[name] && (projectedBounds.minX > 720 || projectedBounds.maxX < 220 || projectedBounds.minY > 760 || projectedBounds.maxY < 0)) return '';
    const reduced = simplify(projected);
    if (reduced.length < 3 || (projectedBounds.maxX - projectedBounds.minX < .35 && projectedBounds.maxY - projectedBounds.minY < .35)) return '';
    return `${reduced.map(([x, y], index) => `${index ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join('')}Z`;
  }).join('');
}

const paths = Object.fromEntries(
  collection.features
    .map((feature) => [feature.attributes.countyname, makePath(feature.attributes.countyname, feature.geometry)])
    .sort(([a], [b]) => a.localeCompare(b, 'zh-Hant')),
);

const output = `// Generated from government open county boundary data.\n// Source: ${endpoint}\nexport const taiwanCountyPaths = ${JSON.stringify(paths, null, 2)} as const;\n`;
await writeFile(new URL('../src/data/taiwan-county-paths.ts', import.meta.url), output, 'utf8');
