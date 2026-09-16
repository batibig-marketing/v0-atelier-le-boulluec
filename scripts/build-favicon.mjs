/**
 * Favicon commune aux trois sites Atelier Le Boulluec, d'après le motif du
 * logo officiel : le panneau carré et l'équerre bleue qui le borde (#0E4A7A).
 *
 * Ce site déclare ses icônes lui-même (layout.tsx et manifest.webmanifest) :
 * on conserve donc les noms et chemins existants et on n'en remplace que le
 * contenu, pour ne rien avoir à retoucher dans la configuration.
 */
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const BLEU = "#0E4A7A";
const motif = `<rect x="9" y="9" width="34" height="34" fill="none" stroke="${BLEU}" stroke-width="3"/>
  <path d="M52 17 V52 H17" fill="none" stroke="${BLEU}" stroke-width="9" stroke-linejoin="miter"/>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#ffffff"/>
  ${motif}
</svg>`;

// Icône « maskable » : Android la découpe en cercle ou en goutte. Seul le
// disque central de 80 % est garanti visible ; on réduit donc le motif pour
// qu'aucun trait ne soit rogné.
const svgMasquable = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#ffffff"/>
  <g transform="translate(32 32) scale(0.68) translate(-32 -32)">${motif}</g>
</svg>`;

const png = (src, t) => sharp(Buffer.from(src)).resize(t, t).png().toBuffer();

writeFileSync("public/icon.svg", svg);
writeFileSync("public/icon-192.png", await png(svg, 192));
writeFileSync("public/icon-512.png", await png(svg, 512));
writeFileSync("public/icon-maskable-512.png", await png(svgMasquable, 512));
writeFileSync("public/apple-touch-icon.png", await png(svg, 180));

const tailles = [16, 32, 48];
const images = await Promise.all(tailles.map((t) => png(svg, t)));
const entete = Buffer.alloc(6);
entete.writeUInt16LE(0, 0); entete.writeUInt16LE(1, 2); entete.writeUInt16LE(tailles.length, 4);
let decalage = 6 + 16 * tailles.length;
const repertoire = Buffer.concat(images.map((img, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(tailles[i], 0); e.writeUInt8(tailles[i], 1);
  e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
  e.writeUInt32LE(img.length, 8); e.writeUInt32LE(decalage, 12);
  decalage += img.length;
  return e;
}));
const ico = Buffer.concat([entete, repertoire, ...images]);
// Le fichier existe aux deux endroits dans ce dépôt : on les garde identiques.
writeFileSync("public/favicon.ico", ico);
writeFileSync("src/app/favicon.ico", ico);

await sharp(await png(svgMasquable, 64)).resize(256, 256, { kernel: "nearest" }).toFile("/tmp/favicon-test/masquable.png");
console.log("favicon commune posée");
