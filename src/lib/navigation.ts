/**
 * Arborescence du site — reprise à l'identique du site historique
 * www.leboulluec.com : même ordre, mêmes libellés, mêmes cibles.
 *
 * Deux rubriques ouvrent un sous-menu. Les entrées de ces sous-menus NE SONT
 * PAS des pages séparées : ce sont des ancres dans la page parente. Les
 * identifiants sont ceux réellement en ligne, et leur orthographe est
 * irrégulière — « Escaliersencolimacon » sans cédille, et surtout
 * « Escaliersenlimonacier » alors que le libellé dit « à limon acier ».
 * Ne pas les corriger : ce sont les cibles que le web connaît déjà.
 */

export type SousEntree = { href: string; label: string };
export type Entree = { href: string; label: string; sous?: SousEntree[] };

export const MENUISERIE_SOUS: SousEntree[] = [
  { href: "/menuiserie#Portescocheres", label: "Portes cochères" },
  { href: "/menuiserie#Portesetfenetres", label: "Portes et fenêtres" },
  { href: "/menuiserie#Agencement", label: "Agencement" },
  { href: "/menuiserie#Mobiliersinterieurs", label: "Mobiliers intérieurs" },
  { href: "/menuiserie#Amenagementsexterieurs", label: "Aménagements extérieurs" },
];

export const ESCALIERS_SOUS: SousEntree[] = [
  { href: "/escaliers#Escalierssuspendus", label: "Escaliers suspendus" },
  { href: "/escaliers#Escaliersencolimacon", label: "Escaliers en colimaçon" },
  { href: "/escaliers#Escaliersautoporteurs", label: "Escaliers autoporteurs" },
  { href: "/escaliers#Escaliersenlimonacier", label: "Escaliers à limon acier" },
];

export const NAV: Entree[] = [
  { href: "/", label: "Accueil" },
  { href: "/menuiserie", label: "Menuiserie", sous: MENUISERIE_SOUS },
  { href: "/escaliers", label: "Escaliers", sous: ESCALIERS_SOUS },
  { href: "/serrurerie", label: "Serrurerie" },
  { href: "/vitrerie", label: "Vitrerie" },
  { href: "/photos", label: "Nos réalisations" },
  {
    href: "/belle-portes-rue-sur-paris-et-ailleurs",
    label: "Belles portes vues sur Paris",
  },
  { href: "/actualite", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];
