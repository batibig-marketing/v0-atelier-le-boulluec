/**
 * Prepare les photographies du site (repris du site frere atelierdemenuiserie).
 *
 * Les originaux de la mediatheque pesent de 100 ko a 6 Mo. On en tire deux
 * variantes WebP par photo — 520 px pour les grilles, 1100 px pour la pleine
 * colonne — que le navigateur choisit via srcset, plus deux variantes de
 * bandeau (900 et 1800 px) pour les photos qui portent un hero.
 *
 * Pourquoi des fichiers statiques plutot que le CDN Uploadcare employe jusqu ici :
 * pour inscrire une photo sans la recadrer, le navigateur doit connaitre son
 * rapport de forme avant de la charger. Les dimensions reelles sont donc
 * relevees a la sortie et ecrites dans le manifeste ; la place de chaque image
 * est reservee des le rendu du serveur et la page ne saute pas.
 *
 * Filigrane : une grande partie du fonds porte « www.atelierdemenuiserie.fr »
 * le long du bord droit et un logo dans l un des angles droits. Sauf mention
 * `net`, on coupe la bande droite et le pied — le sujet n y est jamais.
 *
 * Sortie : public/photos/<slug>[-520|-bandeau|-bandeau-900].webp
 *          src/data/photos.json
 * Usage   : node scripts/build-photos.mjs   (ffmpeg et ffprobe requis)
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync, readFileSync, readdirSync, rmSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PHOTOS, GALERIES, DOSSIERS_ARCHIVE } from "./selection.mjs";

const ICI = dirname(fileURLToPath(import.meta.url));
const RACINE = join(ICI, "..");
const MED =
  "C:/Users/fbaghdadi/BATIBIG/BATIBIG - Communication_Marketing/Marketing/BATIBIG/Digital/Médiathèque/Photos/ATELIER LE BOULLUEC";
const SORTIE = join(RACINE, "public", "photos");
// Le logo tombe tantot en haut, tantot en bas du bord droit, et commence vers
// 83 % de la largeur sur les vues serrees : on garde 82 % par defaut. Une photo dont le sujet touche
// le bord droit peut demander une coupe plus legere (champ `coupe`).
const recadrage = (garde = 0.82) => `crop=iw*${garde}:ih*0.93:0:0,`;
// Photos d archive dont le sujet touche le bord droit.
const COUPES_ARCHIVE = {
  "2019-12-porte-cochere-42-rue-du-cardinal-lemoine-paris-5-vue-ensemble.jpg": 0.9,
};

function slugifie(s) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function dimensions(fichier) {
  const out = execFileSync(
    "ffprobe",
    ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0:s=x", fichier],
    { encoding: "utf8" }
  ).trim();
  const [w, h] = out.split("x").map(Number);
  return { w, h };
}

function webp(source, cible, filtre) {
  execFileSync("ffmpeg", [
    "-loglevel", "error", "-y", "-i", source,
    "-vf", filtre,
    "-quality", "72", "-compression_level", "6",
    "-frames:v", "1", cible,
  ]);
}

/** Convertit une photo et renvoie ses dimensions (celles de la variante 1100). */
function convertit(source, slug, { net = false, grand = false, coupe: garde } = {}) {
  const coupe = net ? "" : recadrage(garde);
  // Les images deja plus petites ne sont pas agrandies : un agrandissement ne
  // cree pas de detail, il ne cree que des octets.
  for (const [suffixe, largeur] of [["-520", 520], ["", 1100]]) {
    webp(source, join(SORTIE, `${slug}${suffixe}.webp`), `${coupe}scale='min(${largeur},iw)':-2:flags=lanczos`);
  }
  if (grand) {
    // Le bandeau est toujours recadre, meme sur une photo nette : en pleine
    // largeur, le moindre logo d angle se voit.
    for (const [suffixe, largeur] of [["-bandeau-900", 900], ["-bandeau", 1800]]) {
      webp(source, join(SORTIE, `${slug}${suffixe}.webp`), `${recadrage(garde)}scale='min(${largeur},iw)':-2:flags=lanczos`);
    }
  }
  return dimensions(join(SORTIE, `${slug}.webp`));
}

// Index de la mediatheque, compare en forme normalisee : les noms accentues y
// sont tantot composes, tantot decomposes.
const n = (s) => s.normalize("NFC");
const tous = [];
(function parcours(dossier) {
  for (const e of readdirSync(join(MED, dossier), { withFileTypes: true })) {
    const rel = dossier ? `${dossier}/${e.name}` : e.name;
    if (e.isDirectory()) parcours(rel);
    else tous.push(rel);
  }
})("");
const parChemin = new Map(tous.map((p) => [n(p), p]));
function trouve(relatif) {
  const p = parChemin.get(n(relatif));
  if (!p) throw new Error("Source absente : " + relatif);
  return join(MED, p);
}

rmSync(SORTIE, { recursive: true, force: true });
mkdirSync(SORTIE, { recursive: true });

const photos = {};
// Les vues de rue des belles portes portent leur logo plus a gauche que le
// reste du fonds : on les coupe davantage (la porte y est toujours centree).
const COUPE_VUES_DE_RUE = 0.78;
for (const [id, p] of Object.entries(PHOTOS)) {
  const coupe = p.coupe ?? (p.f.startsWith("leboulluec.com/belles-portes-de-rue/") ? COUPE_VUES_DE_RUE : undefined);
  const d = convertit(trouve(p.f), id, { ...p, coupe });
  photos[id] = { w: d.w, h: d.h, alt: p.alt, leg: p.leg, grand: Boolean(p.grand) };
}

for (const [cle, ids] of Object.entries(GALERIES)) {
  for (const id of ids) if (!photos[id]) throw new Error(`Galerie ${cle} : photo inconnue ${id}`);
}

// Archive : les fichiers nommes dans src/data/ouvrages.ts. Leur texte de
// remplacement et leur cartel sont composes par la page a partir des notes.
const ouvrages = readFileSync(join(RACINE, "src", "data", "ouvrages.ts"), "utf8");
const fichiers = {};
for (const [, nom] of ouvrages.matchAll(/"fichier": "([^"]+)"/g)) {
  if (fichiers[nom]) continue;
  const rel = tous.find((p) =>
    DOSSIERS_ARCHIVE.some((d) => n(p).startsWith(n(d) + "/")) && n(p).endsWith("/" + n(nom))
  );
  if (!rel) throw new Error("Fichier d archive absent : " + nom);
  // Nom complet, sans troncature : tronques a 70 caracteres, les fichiers
  // « travaux-cours-1 » et « travaux-cours-2 » donnaient le meme nom et le
  // second ecrasait le premier. Le controle ci-dessous empeche toute rechute.
  const slug = "archive-" + slugifie(nom.replace(/\.[a-z]+$/i, ""));
  if (photos[slug]) throw new Error("Nom de sortie en double : " + slug);
  const d = convertit(join(MED, rel), slug, { coupe: COUPES_ARCHIVE[nom] });
  photos[slug] = { w: d.w, h: d.h, alt: "", leg: "", grand: false };
  fichiers[nom] = slug;
}

writeFileSync(
  join(RACINE, "src", "data", "photos.json"),
  JSON.stringify({ photos, galeries: GALERIES, fichiers }, null, 1) + "\n"
);

let poids = 0;
const liste = readdirSync(SORTIE);
for (const f of liste) poids += statSync(join(SORTIE, f)).size;
console.log(`${Object.keys(photos).length} photos, ${liste.length} fichiers, ${(poids / 1048576).toFixed(1)} Mo`);
if (!existsSync(join(RACINE, "src", "data", "photos.json"))) process.exit(1);
