/**
 * Photographie du hero de l accueil.
 *
 * Source : mediatheque, paris-portes-cocheres.com/parquets-tables-saillantes/
 *          86-bd-malesherbes-4-apres-restauration.jpg (3024 x 4032, sans filigrane).
 *
 * Deux cadrages tires du meme original :
 *  - bureau : bande 16:9 de 2500 px prise sur le bord gauche, pour que la porte
 *    tombe a droite et laisse la facade de pierre sous le texte ;
 *  - mobile : bande 9:16 centree sur la porte.
 * Chaque cadrage sort en WebP et en AVIF. sharp n ecrit aucune metadonnee par
 * defaut : les EXIF (dont le GPS) de l original ne sont pas repris.
 *
 * Sortie : public/photos/hero-porte-cochere-86-boulevard-malesherbes[-mobile]-<largeur>.<webp|avif>
 * Usage   : node scripts/build-hero.mjs   (sharp, fourni avec Next.js)
 */
import sharp from "sharp";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const RACINE = join(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE =
  "C:/Users/fbaghdadi/BATIBIG/BATIBIG - Communication_Marketing/Marketing/BATIBIG/Digital/Médiathèque/Photos/ATELIER LE BOULLUEC/paris-portes-cocheres.com/parquets-tables-saillantes/86-bd-malesherbes-4-apres-restauration.jpg";
const NOM = "hero-porte-cochere-86-boulevard-malesherbes";
const SORTIE = join(RACINE, "public", "photos");

const CADRAGES = [
  // left/top/width/height en pixels de l original (3024 x 4032)
  { suffixe: "", zone: { left: 0, top: 990, width: 2500, height: 1406 }, largeurs: [1200, 2400] },
  { suffixe: "-mobile", zone: { left: 378, top: 0, width: 2268, height: 4032 }, largeurs: [600, 1000] },
];

for (const { suffixe, zone, largeurs } of CADRAGES) {
  for (const largeur of largeurs) {
    const base = sharp(SOURCE).rotate().extract(zone).resize({ width: largeur });
    const fichier = join(SORTIE, `${NOM}${suffixe}-${largeur}`);
    const w = await base.clone().webp({ quality: 80 }).toFile(`${fichier}.webp`);
    const a = await base.clone().avif({ quality: 55, effort: 6 }).toFile(`${fichier}.avif`);
    console.log(`${NOM}${suffixe}-${largeur}`, `${w.width}x${w.height}`, `webp ${Math.round(w.size / 1024)} ko`, `avif ${Math.round(a.size / 1024)} ko`);
  }
}
