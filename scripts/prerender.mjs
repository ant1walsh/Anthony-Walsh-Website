// Build-time prerender: renders every route from the same source of truth the
// browser runs (src/site.ts) and writes real HTML files into dist/.
// No headless browser, no maintained snapshots — content can't drift.
// Runs after `npm run build` in CI. React re-renders #root on load.
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';

const ORIGIN = 'https://anthony-walsh.com';
const DIST = 'dist';

// 1. Bundle the site module for Node and import it.
const outfile = join(DIST, '.prerender-site.mjs');
await build({ entryPoints: ['src/site.ts'], bundle: true, format: 'esm', platform: 'neutral', outfile });
const site = await import(pathToFileURL(outfile).href);
const { SHELL_HTML, renderRoute, routeList, routeTitle, NAV } = site;
rmSync(outfile);

// 2. Read the built shell (has hashed asset refs + favicon + JSON-LD).
const shell = readFileSync(join(DIST, 'index.html'), 'utf8');
if (!/<div id="root"><\/div>/.test(shell)) {
  console.error('prerender: expected empty <div id="root"></div> in dist/index.html');
  process.exit(1);
}

const navItems = (path) => NAV.map(n => {
  const active = n.path === path || (n.path !== '/' && path.startsWith(n.path));
  return `<a href="${n.path}" data-path="${n.path}"${active ? ' class="active"' : ''}>${n.label}</a>`;
}).join('');

function pageHTML(path) {
  let body = SHELL_HTML
    .replace('<nav class="nav-links" id="navLinks"></nav>', `<nav class="nav-links" id="navLinks">${navItems(path)}</nav>`)
    .replace('<main id="app"></main>', `<main id="app">${renderRoute(path)}</main>`)
    .replace('<span id="year"></span>', `<span id="year">${new Date().getFullYear()}</span>`);
  // Scroll-reveal elements are hidden until JS adds .in — pre-add it so the
  // static page is visible without JS (React re-renders and re-animates anyway).
  body = body.replace(/class="([^"]*\b(?:reveal|tl-item)\b[^"]*)"/g, (m, cls) =>
    cls.split(/\s+/).includes('in') ? m : `class="${cls} in"`);

  const canonical = ORIGIN + (path === '/' ? '/' : path + '/');
  return shell
    .replace('<div id="root"></div>', `<div id="root"><div>${body}</div></div>`)
    .replace(/<title>[^<]*<\/title>/, `<title>${routeTitle(path)}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${routeTitle(path)}$2`);
}

// 3. Emit every route.
const routes = routeList();
let total = 0;
for (const path of routes) {
  const html = pageHTML(path);
  const file = path === '/' ? join(DIST, 'index.html') : join(DIST, path.slice(1), 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  const words = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  total += words;
  console.log(`prerender: ${path.padEnd(38)} ${String(words).padStart(5)} words`);
  if (words < 40) { console.error(`prerender: ${path} suspiciously thin`); process.exit(1); }
}

// 4. SPA fallback for unknown paths (GitHub Pages serves 404.html).
cpSync(join(DIST, 'index.html'), join(DIST, '404.html'));

// 5. Sitemap.
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes.map(p => `  <url><loc>${ORIGIN}${p === '/' ? '/' : p + '/'}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
  `\n</urlset>\n`;
writeFileSync(join(DIST, 'sitemap.xml'), sitemap);

console.log(`prerender: ${routes.length} routes, ${total} extractable words, sitemap.xml + 404.html written`);
