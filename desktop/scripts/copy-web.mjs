// Copia la app web (la carpeta principal del proyecto) a desktop/dist, que es
// lo que Tauri mete dentro del .exe. Así la app web sigue siendo la única
// fuente: cualquier cambio en ella entra en la próxima compilación.
import { cpSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const web = resolve(here, '../..');
const dist = resolve(here, '../dist');

// Solo lo que necesita la app; nada de server/, desktop/, documentación…
// Ni la página de inicio ni la de descarga tienen sentido dentro de la app de
// escritorio: la ventana abre directamente la app (app/index.html).
const SKIP = /^(index\.html|home\.|i18n-home\.js|theme-init\.js|descargar\.)/;
const files = readdirSync(web).filter((f) => /\.(html|js|css|webmanifest)$/.test(f) && !SKIP.test(f));
const folders = ['icons'];

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
for (const f of files) cpSync(join(web, f), join(dist, f));
cpSync(join(web, 'app', 'index.html'), join(dist, 'index.html'));
for (const d of folders) cpSync(join(web, d), join(dist, d), { recursive: true });
console.log(`App web copiada a desktop/dist: ${files.length} archivos + ${folders.join(', ')}`);
