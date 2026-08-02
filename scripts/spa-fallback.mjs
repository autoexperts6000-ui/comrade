// GitHub Pages serves a static 404.html for unknown paths. Since this is a
// client-side-routed SPA, we copy index.html to 404.html so deep links and
// refreshes on any path fall back to the app shell instead of a hard 404.
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve(import.meta.dirname, '..', 'dist');
copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
console.log('Created dist/404.html SPA fallback.');
