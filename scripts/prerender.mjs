// Prerender: render App ke HTML statis lalu suntikkan ke dist/index.html.
// Hasilnya crawler (Google, Bing, GPTBot, dll.) melihat konten penuh tanpa menjalankan JS;
// browser tetap menjalankan React seperti biasa (createRoot menimpa markup yang sama).
import { readFileSync, writeFileSync } from "node:fs";
import { render } from "../dist-ssr/entry-server.js";

const html = render();
const file = "dist/index.html";
const raw = readFileSync(file, "utf8");

const marker = '<div id="root"></div>';
if (!raw.includes(marker)) {
  throw new Error("Marker <div id=\"root\"></div> tidak ditemukan di dist/index.html");
}

writeFileSync(file, raw.replace(marker, `<div id="root">${html}</div>`));
console.log(`Prerender OK — ${html.length.toLocaleString()} karakter HTML disuntikkan.`);