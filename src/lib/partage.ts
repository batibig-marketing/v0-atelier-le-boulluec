/**
 * Carte de partage commune à tout le site.
 *
 * La carte est posée par la convention de fichier (src/app/opengraph-image.jpg),
 * mais Next.js ne la transmet pas aux pages qui déclarent leur propre bloc
 * `openGraph` : le bloc de la page remplace celui du parent en entier. Chaque
 * page qui en déclare un doit donc la reprendre explicitement.
 */
export const CARTE_PARTAGE = [
  {
    url: "/opengraph-image.jpg",
    width: 1200,
    height: 630,
    alt: "Atelier Le Boulluec, menuiserie et serrurerie d’art depuis 1964",
  },
];
