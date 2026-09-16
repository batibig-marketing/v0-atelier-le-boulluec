import manifeste from "@/data/photos.json";

/**
 * Photographies du site, servies depuis public/photos.
 *
 * Le manifeste est produit par scripts/build-photos.mjs a partir de
 * scripts/selection.mjs : chaque photo y porte ses dimensions reelles, pour
 * que la place de l image soit reservee des le rendu du serveur, et son texte
 * de remplacement, redige apres avoir regarde l image.
 */
export type Photo = {
  slug: string;
  w: number;
  h: number;
  alt: string;
  leg: string;
  /** Une variante `-bandeau` (1800 px, filigrane recadre) existe. */
  grand: boolean;
};

type Manifeste = {
  photos: Record<string, Omit<Photo, "slug">>;
  galeries: Record<string, string[]>;
  fichiers: Record<string, string>;
};

const data = manifeste as Manifeste;

export function photo(id: string): Photo {
  const p = data.photos[id];
  if (!p) throw new Error("Photo inconnue : " + id);
  return { slug: id, ...p };
}

export function galerie(cle: string): Photo[] {
  const liste = data.galeries[cle];
  if (!liste) throw new Error("Galerie inconnue : " + cle);
  return liste.map(photo);
}

/**
 * Photo d archive retrouvee par le nom de fichier consigne dans
 * src/data/ouvrages.ts. Le texte de remplacement et le cartel sont fournis
 * par l appelant, qui les compose a partir des notes de l ouvrage.
 */
export function photoArchive(fichier: string, alt: string, leg: string): Photo {
  const slug = data.fichiers[fichier];
  if (!slug) throw new Error("Fichier d archive inconnu : " + fichier);
  return { ...photo(slug), alt, leg };
}
