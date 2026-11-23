#!/usr/bin/env node
// Post-build checks for the portfolio. Run with: npm run verify  (builds first, then checks dist/).
// No dependencies. Exits 1 and lists every problem if any check fails.
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const ORIGIN = 'https://sandeepmalviya.dev';
const PAGES = ['/', '/case-studies/trading-research', '/case-studies/chatbud-evaluation'];

// Strings that must never appear in the built site (stale domains, retired or unverified claims, private repos).
const FORBIDDEN = [
  ['sandeepmalviya.me', 'old domain (no longer resolves)'],
  ['sandeep-malviya.web.app', 'old Firebase domain'],
  ['69.2%', 'unverified directional-accuracy claim'],
  ['exeter_academic_agent/', 'dead Exeter demo URL'],
  ['SandyCompetent/professional-profile', 'private repository (404 for visitors)'],
  ['SandyCompetent/finpal', 'private repository (404 for visitors)'],
];

const problems = [];
const fail = (msg) => problems.push(msg);

const fileFor = (urlPath) => {
  const clean = urlPath.split('#')[0].split('?')[0];
  const candidates = clean === '/' ? ['index.html'] : [clean.slice(1), join(clean.slice(1), 'index.html'), `${clean.slice(1)}.html`];
  return candidates.map((c) => join(DIST, c)).find((p) => existsSync(p) && statSync(p).isFile());
};

const pageHtml = {};
for (const page of PAGES) {
  const file = fileFor(page);
  if (!file) {
    fail(`missing page: ${page}`);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  pageHtml[page] = html;

  const expectedCanonical = page === '/' ? `${ORIGIN}/` : `${ORIGIN}${page}`;
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical !== expectedCanonical) fail(`${page}: canonical is ${canonical}, expected ${expectedCanonical}`);
  if (!/<title>[^<]{10,}<\/title>/.test(html)) fail(`${page}: missing or too-short <title>`);
  if (!/<meta name="description" content="[^"]{50,}"/.test(html)) fail(`${page}: missing or short meta description`);
  const h1s = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1s !== 1) fail(`${page}: expected exactly one <h1>, found ${h1s}`);
  const og = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  if (!og || !og.startsWith(ORIGIN) || !existsSync(join(DIST, new URL(og).pathname))) fail(`${page}: og:image missing or not built (${og})`);
  if (!/<meta property="og:title"/.test(html) || !/<meta name="twitter:card"/.test(html)) fail(`${page}: missing Open Graph / Twitter tags`);

  for (const [needle, why] of FORBIDDEN) {
    if (html.includes(needle)) fail(`${page}: contains "${needle}" (${why})`);
  }

  // Astro's HTML compression can drop the space between text and an inline tag at a line break
  // ("properly:<em>does"). Catch any word glued to <em>, <strong>, <a> or <code>.
  const article = html.includes('<article') ? html.slice(html.indexOf('<article')) : '';
  const glued = new Set();
  for (const m of article.matchAll(/([A-Za-z0-9:,.?!;])<(?:em|strong|a|code)[ >]/g)) glued.add(article.slice(Math.max(0, m.index - 20), m.index + 25));
  for (const m of article.matchAll(/<\/(?:em|strong|a|code)>([A-Za-z0-9])/g)) glued.add(article.slice(Math.max(0, m.index - 20), m.index + 25));
  for (const g of glued) fail(`${page}: missing space around an inline tag: ...${g.replace(/\n/g, ' ')}...`);

  // internal links and anchors
  for (const [, href] of html.matchAll(/<a\s[^>]*?href="([^"]+)"/g)) {
    if (href.startsWith('#') && href.length > 1) {
      if (!html.includes(`id="${href.slice(1)}"`)) fail(`${page}: anchor ${href} has no matching id`);
    } else if (href.startsWith('/') && !href.startsWith('//')) {
      if (!fileFor(href)) fail(`${page}: internal link ${href} does not resolve to a built file`);
    }
  }
}

// sitemap and robots
const sitemapPath = join(DIST, 'sitemap.xml');
if (!existsSync(sitemapPath)) fail('missing sitemap.xml');
else {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  for (const loc of locs) {
    if (!loc.startsWith(ORIGIN)) fail(`sitemap: ${loc} is not on ${ORIGIN}`);
    else if (!fileFor(loc.slice(ORIGIN.length) || '/')) fail(`sitemap: ${loc} has no built page`);
  }
  for (const page of PAGES) {
    const want = page === '/' ? `${ORIGIN}/` : `${ORIGIN}${page}`;
    if (!locs.includes(want)) fail(`sitemap: missing ${want}`);
  }
}
const robotsPath = join(DIST, 'robots.txt');
if (!existsSync(robotsPath) || !readFileSync(robotsPath, 'utf8').includes(`${ORIGIN}/sitemap.xml`)) fail('robots.txt must point to the .dev sitemap');

// CV download
const cv = join(DIST, 'cv.pdf');
if (!existsSync(cv) || statSync(cv).size < 10_000) fail('cv.pdf missing or suspiciously small');
else {
  const head = readFileSync(cv).subarray(0, 5).toString();
  if (head !== '%PDF-') fail('cv.pdf is not a PDF');
}

if (problems.length) {
  console.error(`\nverify: ${problems.length} problem(s)\n` + problems.map((p) => `  - ${p}`).join('\n'));
  process.exit(1);
}
console.log(`verify: OK (${PAGES.length} pages, sitemap, robots, CV, no forbidden strings)`);
