import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const mainSource = readFileSync(join(root, 'src/main.jsx'), 'utf8');
const viteConfig = readFileSync(join(root, 'vite.config.js'), 'utf8');

const failures = [];

function fail(message) {
  failures.push(message);
}

if (!mainSource.includes('function LazyVideo')) {
  fail('Background videos should use the LazyVideo component.');
}

if (/<video[^>]*className="[^"]*(heroVideo|brandBgVideo|strengthsVideo|contactVideo)/.test(mainSource)) {
  fail('Background video elements should be wrapped by LazyVideo instead of raw <video> tags.');
}

const sourceMatches = [
  ...mainSource.matchAll(/<source\s+src="([^"]+)"/g),
  ...mainSource.matchAll(/src:\s+'([^']+\.(?:mp4|mov))'/g)
].map((match) => match[1]);
for (const source of sourceMatches) {
  if (source.endsWith('.mov')) {
    fail(`MOV source should not be exposed to the page: ${source}`);
  }

  if (source.startsWith('/assets/') && source.endsWith('.mp4')) {
    const filePath = join(root, 'public', source);
    if (statSync(filePath).size === 0) {
      fail(`MP4 source is empty: ${source}`);
    }
  }
}

if (!viteConfig.includes('pruneHeavyPublicAssets')) {
  fail('Vite build should prune unused heavy public assets.');
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Performance guardrails passed.');
