// Inserta el HTML renderizado de la app dentro de dist/index.html.
// Así el navegador pinta la página antes de ejecutar el JavaScript y React solo la hidrata.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ssrDir = path.join(root, "dist-ssr");
const indexPath = path.join(root, "dist", "index.html");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const appHtml = render();

const template = fs.readFileSync(indexPath, "utf8");
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
    throw new Error("No se encontró el contenedor #root vacío en dist/index.html");
}
fs.writeFileSync(indexPath, template.replace(placeholder, `<div id="root">${appHtml}</div>`));
fs.rmSync(ssrDir, { recursive: true, force: true });

console.log(`Prerender OK: ${(appHtml.length / 1024).toFixed(1)} KB de HTML insertados en dist/index.html`);
