import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

function walkFiles(directory) {
  if (!existsSync(directory)) {
    return [];
  }

  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = join(directory, entry.name);
    return entry.isDirectory() ? walkFiles(filePath) : [filePath];
  });
}

function pruneHeavyPublicAssets() {
  return {
    name: 'pruneHeavyPublicAssets',
    closeBundle() {
      const root = process.cwd();
      const publicAssetsDir = join(root, 'public/assets');
      const distAssetsDir = join(root, 'dist/assets');
      const source = readFileSync(join(root, 'src/main.jsx'), 'utf8');
      const referencedAssets = new Set(
        [...source.matchAll(/\/assets\/[^'")\s]+/g)].map((match) => match[0])
      );

      for (const publicFile of walkFiles(publicAssetsDir)) {
        const publicRelativePath = relative(publicAssetsDir, publicFile).split(sep).join('/');
        const publicUrl = `/assets/${publicRelativePath}`;
        const outputFile = join(distAssetsDir, publicRelativePath);

        if (!existsSync(outputFile)) {
          continue;
        }

        const outputStats = statSync(outputFile);
        const shouldPrune =
          outputStats.size === 0 ||
          publicRelativePath.endsWith('.mov') ||
          !referencedAssets.has(publicUrl);

        if (shouldPrune) {
          rmSync(outputFile);
        }
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), pruneHeavyPublicAssets()],
  server: {
    host: '127.0.0.1',
    port: 5173
  },
  preview: {
    host: '127.0.0.1',
    port: 4173
  }
});
