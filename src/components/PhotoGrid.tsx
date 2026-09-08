import Image from "next/image";
import { uploadcareThumb } from "@/lib/uploadcare";
import type { PhotoEntry } from "@/lib/photos";

type Props = {
  photos: PhotoEntry[];
  columns?: 2 | 3 | 4;
  /** Contexte métier ajouté à l'alt, p. ex. « Menuiserie sur mesure ». */
  altContext?: string;
};

const MOIS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

/**
 * Les noms de fichiers de la médiathèque portent la date, l'adresse, l'ouvrage
 * et souvent la matière. On les remonte en cartouche plutôt que de les jeter :
 * « 2019-12-porte-cochere-42-rue-du-cardinal-lemoine-paris-5-vue-ensemble.jpg »
 * devient « Décembre 2019 » + « porte cochère 42 rue du Cardinal-Lemoine Paris 5 ».
 */
export function lireNomFichier(filename: string): { date: string | null; sujet: string } {
  const base = filename.replace(/\.(jpg|jpeg|png|webp)$/i, "");
  const m = /^(\d{4})-(\d{2})-(.*)$/.exec(base);
  if (!m) {
    return { date: null, sujet: base.replace(/-/g, " ").trim() };
  }
  const [, annee, mois, reste] = m;
  const idx = Number(mois) - 1;
  const libelle =
    idx >= 0 && idx < 12
      ? `${MOIS[idx][0].toUpperCase()}${MOIS[idx].slice(1)} ${annee}`
      : annee;
  return { date: libelle, sujet: reste.replace(/-/g, " ").trim() };
}

function alt(filename: string, altContext?: string) {
  const { date, sujet } = lireNomFichier(filename);
  const objet = sujet.length > 0 ? sujet : "Ouvrage de l'Atelier Le Boulluec";
  const ctx = altContext ? `${altContext} — ` : "";
  const quand = date ? ` (${date})` : "";
  return `${ctx}${objet}${quand} — Atelier Le Boulluec, Massy, Île-de-France`;
}

export default function PhotoGrid({ photos, columns = 3, altContext }: Props) {
  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <ul className={`grid grid-cols-1 ${colClass} gap-x-5 gap-y-8 list-none p-0 m-0`}>
      {photos.map((p) => {
        const { date, sujet } = lireNomFichier(p.local_filename);
        return (
          <li key={p.uploadcare_uuid} className="m-0">
            <figure className="m-0">
              <div className="relative aspect-[4/5] bg-[#2A2320] border border-[#3A322C]">
                <Image
                  src={uploadcareThumb(p.uploadcare_uuid, 800)}
                  alt={alt(p.local_filename, altContext)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                  quality={78}
                />
              </div>
              <figcaption className="mt-2 pt-2 border-t border-[#3A322C]">
                {date && <span className="cartouche text-[#7E96A8]">{date}</span>}
                <span className="block mt-1 text-sm leading-snug text-[#EDE6DA]/80 first-letter:uppercase">
                  {sujet}
                </span>
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
