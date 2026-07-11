// Post-build prerender injection.
// Injects static homepage content into dist/index.html so crawlers and
// no-JS visitors see the full page. Runs after `npm run build` in CI.
// The React app re-renders #root on load, so runtime behavior is unchanged.
import { readFileSync, writeFileSync } from 'node:fs';

const DIST = 'dist/index.html';
const html = readFileSync(DIST, 'utf8');
const snapshot = readFileSync('prerender/root-snapshot.html', 'utf8').trim();
const headExtras = readFileSync('prerender/head-extras.html', 'utf8').trim();

const ROOT_RE = /<div id="root">\s*<\/div>/;
if (!ROOT_RE.test(html)) {
  console.error('prerender: could not find empty <div id="root"></div> in dist/index.html');
  process.exit(1);
}

let out = html.replace(ROOT_RE, `<div id="root">${snapshot}</div>`);
if (!out.includes('application/ld+json')) {
  out = out.replace('</head>', `${headExtras}\n</head>`);
}

writeFileSync(DIST, out);

// Sanity check: report extractable words so the CI log proves content exists.
const words = out
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .split(/\s+/)
  .filter(Boolean).length;
console.log(`prerender: injected snapshot into ${DIST} (${words} extractable words)`);
if (words < 300) {
  console.error('prerender: word count suspiciously low — snapshot may be broken');
  process.exit(1);
}
