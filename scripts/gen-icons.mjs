import { Resvg } from "@resvg/resvg-js";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, "..", "public");
mkdirSync(outDir, { recursive: true });

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#87c8e4"/>
      <stop offset="1" stop-color="#a6d8af"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="#1a1815"/>
  <g fill="none" stroke="#f7f4ec" stroke-width="50" stroke-linecap="round" stroke-linejoin="round">
    <path d="M158 348 V184 L256 300 L354 184 V348"/>
  </g>
  <rect x="158" y="372" width="196" height="22" rx="11" fill="url(#g)"/>
</svg>`;

const sizes = [
  { name: "pwa-512.png", size: 512 },
  { name: "pwa-192.png", size: 192 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "favicon.png", size: 64 },
];

for (const { name, size } of sizes) {
  const png = new Resvg(svg, { fitTo: { mode: "width", value: size } })
    .render()
    .asPng();
  writeFileSync(resolve(outDir, name), png);
  console.log(`wrote public/${name} (${size}px, ${png.length} bytes)`);
}
