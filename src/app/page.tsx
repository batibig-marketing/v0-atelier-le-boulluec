import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { AppelContact, Bande, Ouverture, Questions, Rangee, Suite } from "@/components/Blocs";
import { Planche } from "@/components/Archive";
import { References, Reperes } from "@/components/Maison";
import { faqPageSchema, SCHEMA_IDS, mentionsMetier } from "@/lib/schema";
import { NAP } from "@/lib/nap";
import { OUVRAGES, PHOTOS } from "@/data/ouvrages";
import { galerie, photo } from "@/lib/photos";
import { uploadcareUrl } from "@/lib/uploadcare";

const OG_IMAGE = uploadcareUrl(PHOTOS.cardinalMercierApres, 1200);

export const metadata: Metadata = {
  title: "Atelier Le Boulluec — Menuiserie & serrurerie d'art depuis 1964",
  description:
    "Atelier de menuiserie, serrurerie, vitrerie et escaliers sur mesure à Massy. 60 ans de façonnage bois et acier pour syndics, architectes et grands comptes en Île-de-France.",
  alternates: { canonical: "https://www.leboulluec.com/" },
  openGraph: {
    url: "https://www.leboulluec.com/",
    type: "website",
    locale: "fr_FR",
    siteName: "Atelier Le Boulluec",
    title: "Atelier Le Boulluec — Menuiserie & serrurerie d'art depuis 1964",
    description:
      "Soixante ans de menuiserie, serrurerie, vitrerie et escaliers sur mesure à Massy, pour Paris et l'Île-de-France.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Porte cochère restaurée par l'Atelier Le Boulluec",
      },
    ],
  },
};

/**
 * Les six entrées de l’accueil. Chaque carte porte une photographie de
 * l’ouvrage, dans l’ordre de la galerie « accueil-metiers ».
 */
const SERVICES = [
  {
    title: "Menuiserie",
    href: "/menuiserie",
    matieres: "Chêne · Sapin du Nord · Moabi",
    description:
      "Portes d'entrée d'immeuble, portes cochères, fenêtres, agencements bois intérieurs et extérieurs, mobilier sur mesure.",
  },
  {
    title: "Escaliers sur mesure",
    href: "/escaliers",
    matieres: "Acier · Chêne · Verre feuilleté",
    description:
      "Escaliers suspendus, en colimaçon, autoportants, à limon acier. Conception, fabrication atelier, pose.",
  },
  {
    title: "Serrurerie & ferronnerie",
    href: "/serrurerie",
    matieres: "Acier forgé · Haute sûreté",
    description:
      "Pose et remplacement de serrures, blindage, contrôle d'accès, motorisation. Membre Bricard Serruriers Confiance.",
  },
  {
    title: "Vitrerie",
    href: "/vitrerie",
    matieres: "Feuilleté · Trempé · Miroir",
    description:
      "Double et simple vitrage, verre feuilleté et trempé, vitrage de protection, miroirs sur mesure, dépannage.",
  },
  {
    title: "Restauration patrimoniale",
    href: "/restauration-patrimoniale",
    matieres: "Enture de chêne sec · Fer forgé",
    description:
      "Restauration de portes cochères historiques, d'ouvrages bois et fer forgé. Immeubles classés et ERP.",
  },
  {
    title: "Belles portes de Paris",
    href: "/belle-portes-rue-sur-paris-et-ailleurs",
    matieres: "Archive éditoriale · depuis 2012",
    description:
      "Un petit musée en ligne des portes d'immeuble parisiennes traitées par l'atelier depuis 2012.",
  },
];

const HOME_FAQ = [
  {
    q: "Qu'est-ce que l'Atelier Le Boulluec ?",
    a: "L'Atelier Le Boulluec est une entreprise artisanale de menuiserie, serrurerie, vitrerie, escaliers sur mesure et restauration patrimoniale, fondée en 1964 et installée à Massy (91300) depuis 2020. L'atelier emploie 17 menuisiers et intervient en Île-de-France pour les syndics, architectes et grands comptes.",
  },
  {
    q: "Où se trouve l'atelier et quelle est sa zone d'intervention ?",
    a: "L'atelier est situé au 6 Rue de l'Aulnaye Dracourt, 91300 Massy, dans l'Essonne. Nous intervenons dans tout Paris et l'Île-de-France : Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Yvelines, Val-d'Oise et Seine-et-Marne.",
  },
  {
    q: "Depuis quand l'Atelier Le Boulluec existe-t-il ?",
    a: "L'entreprise a été fondée en 1964 à Fontenay-aux-Roses, soit plus de 60 ans d'activité ininterrompue. Trois adresses se sont succédé : Fontenay-aux-Roses (1964-2015), Châtenay-Malabry (2015-2020) puis Massy depuis septembre 2020.",
  },
  {
    q: "Quels métiers regroupe l'atelier ?",
    a: "Cinq métiers sous un même toit : menuiserie bois, serrurerie et ferronnerie, vitrerie, escaliers sur mesure (bois, acier, mixtes) et restauration patrimoniale (portes cochères, fenêtres anciennes, ouvrages classés). Aucun de ces métiers n'est sous-traité — tout est façonné à Massy.",
  },
  {
    q: "L'atelier est-il certifié ou labellisé ?",
    a: "Oui. Nous sommes membres du réseau Bricard Serruriers Confiance, label réservé par le fabricant à un cercle restreint d'artisans formés sur toute sa gamme de haute sûreté. Tous nos ouvrages neufs et restaurés sont couverts par la garantie décennale.",
  },
  {
    q: "Quelles sont vos principales références ?",
    a: "Nous travaillons pour les Maisons Cartier et Van Cleef & Arpels, le groupe Dassault, Yves Rocher, les Bateaux Parisiens et Schlumberger, ainsi que pour de nombreux syndics de copropriété d'Île-de-France et architectes du patrimoine en lien avec les Bâtiments de France.",
  },
  {
    q: "Restaurer une porte cochère ou la remplacer ?",
    a: "Tant que le bâti et les montants sont sains, la restauration est presque toujours préférable : elle conserve le dessin d'origine, satisfait l'Architecte des Bâtiments de France, et coûte moins cher sur vingt ans qu'un remplacement. Le remplacement s'impose quand la structure a cédé.",
  },
  {
    q: "Peut-on voir des chantiers déjà réalisés ?",
    a: "Oui. L'archive des ouvrages publie des chantiers datés et situés — adresse, année, matières, geste réalisé — photographiés avant, pendant et après les travaux. Elle couvre des portes cochères, portes bâtardes, grilles de sas et escaliers repris entre 2012 et 2025.",
  },
];

const servicesItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Métiers de l'Atelier Le Boulluec",
  description:
    "Cinq métiers du second œuvre réunis sous un même atelier à Massy : menuiserie, escaliers, serrurerie, vitrerie, restauration patrimoniale.",
  numberOfItems: SERVICES.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `${NAP.website}${s.href}`,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      url: `${NAP.website}${s.href}`,
      provider: { "@id": SCHEMA_IDS.BUSINESS_ID },
    },
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${NAP.website}/#webpage`,
  url: NAP.website,
  name: "Atelier Le Boulluec — Menuiserie & serrurerie d'art depuis 1964",
  description:
    "Atelier de menuiserie, serrurerie, vitrerie et escaliers sur mesure à Massy. Soixante ans de pratique pour les syndics, architectes et grands comptes d'Île-de-France.",
  inLanguage: "fr-FR",
  isPartOf: { "@id": SCHEMA_IDS.WEBSITE_ID },
  about: { "@id": SCHEMA_IDS.BUSINESS_ID },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: uploadcareUrl(PHOTOS.cardinalMercierApres, 1600),
  },
  // Carte sémantique du domaine métier — Bible SEO §15.7 (déclaration d'entités).
  mentions: mentionsMetier(),
  mainEntity: { "@id": SCHEMA_IDS.BUSINESS_ID },
};

export default function HomePage() {
  const vedette = photo("longchamp");
  const vitrine = OUVRAGES[0];
  const cartes = galerie("accueil-metiers");

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={servicesItemListSchema} />
      <JsonLd data={faqPageSchema(HOME_FAQ)} />

      {/* L’ouvrage de tête : une porte cochère reposée et remise en peinture,
          le dessin ancien conservé, les grilles forgées en place. */}
      <section className="hero">
        <img
          src={`/photos/${vedette.slug}-bandeau.webp`}
          srcSet={`/photos/${vedette.slug}-bandeau-900.webp 900w, /photos/${vedette.slug}-bandeau.webp 1800w`}
          sizes="100vw"
          width={vedette.w}
          height={vedette.h}
          alt={vedette.alt}
          fetchPriority="high"
        />
        <div className="hero__voile" />
        <div className="hero__texte">
          <div className="contenu contenu--large">
            <p className="surtitre">Massy · Paris &amp; Île-de-France · depuis 1964</p>
            <h1>Bois et acier, façonnés depuis 1964.</h1>
            <p className="hero__chapeau">
              L&apos;Atelier Le Boulluec est une entreprise artisanale fondée en 1964, spécialisée en
              menuiserie, serrurerie, vitrerie, escaliers sur mesure et restauration patrimoniale.
              17 menuisiers à Massy, au service des syndics, architectes et grands comptes
              d&apos;Île-de-France.
            </p>
            <div className="boutons">
              <Link className="bouton bouton--clair" href="/contact">
                Demander un chiffrage
              </Link>
              <Link className="bouton bouton--clair" href="/photos">
                L&apos;archive des ouvrages
              </Link>
            </div>
          </div>
        </div>
        <p className="hero__cartel">
          Porte cochère du 111 rue de Longchamp
          <br />
          reposée et remise en peinture
        </p>
      </section>

      {/* Réponse directe — bloc citable placé sous le H1 (Bible SEO §13.2),
          adossé à la première photographie de contenu. */}
      <Ouverture photo={photo("bonvin")}>
        <p className="surtitre">L&apos;atelier</p>
        <p className="en-bref">
          <strong>En bref —</strong>{" "}L&apos;Atelier Le Boulluec est un atelier de menuiserie et de
          ferronnerie d&apos;art fondé en 1964, installé au {NAP.street}, {NAP.postalCode}{" "}
          {NAP.city}. Dix-sept menuisiers y façonnent et y restaurent des portes cochères, portes
          bâtardes, grilles de sas, escaliers et châssis acier pour Paris et l&apos;{NAP.areaServed}.
          Les cinq métiers — menuiserie, serrurerie, ferronnerie, vitrerie, escaliers — sont exécutés
          dans le même atelier, sans sous-traitance, sous garantie décennale.
        </p>
      </Ouverture>

      <Rangee photos={galerie("accueil-atelier")} />

      <Suite
        blocs={[
          {
            surtitre: "L’atelier au travail",
            titre: "D'abord le geste, ensuite l'ouvrage.",
            niveau: 2,
            photo: photo("richer"),
            corps: (
              <>
                <p>
                  Une porte finie ne dit rien de la façon dont elle a été faite. Ces vues sont prises
                  à l&apos;établi, sous la meuleuse et au moment de la repose — c&apos;est là que se
                  décide la qualité de la pièce.
                </p>
                <p>
                  Dix-sept menuisiers travaillent au 6 rue de l&apos;Aulnaye Dracourt, à Massy. Le
                  bois arrive en plots, l&apos;acier en barres ; les épures sont dessinées, agrafées
                  sur le panneau, puis suivies jusqu&apos;à la pose. Rien ne repart de l&apos;atelier
                  sans avoir été monté à blanc sur place. C&apos;est la raison pour laquelle nous
                  montrons l&apos;établi avant la façade :{" "}
                  <Link href="/photos">l&apos;archive des ouvrages</Link>{" "}donne le résultat,
                  l&apos;atelier donne la méthode. <Link href="/a-propos">Visiter l&apos;atelier</Link>.
                </p>
              </>
            ),
          },
          {
            surtitre: "L’atelier intégré",
            titre: "Un atelier intégré, quatre métiers réunis.",
            niveau: 2,
            photo: photo("marquise-duvernet"),
            corps: (
              <>
                <p>
                  Sous le même toit, dix-sept menuisiers façonnent ce que d&apos;autres ateliers
                  répartissent chez plusieurs sous-traitants : la porte d&apos;entrée d&apos;un
                  immeuble haussmannien, l&apos;escalier d&apos;un hôtel particulier, la grille de
                  défense d&apos;un porche du Marais, le vitrage de protection d&apos;une vitrine de
                  prestige.
                </p>
                <p>
                  Cette concentration des savoir-faire — bois, acier, verre, serrurerie — n&apos;est
                  pas une posture commerciale. C&apos;est la condition pour que chaque pièce sorte
                  juste, sans rupture de chaîne, sans interface tendue entre métiers.
                </p>
                <p>
                  Nous travaillons à Massy depuis 2020. La méthode est demeurée : un relevé soigné,
                  une épure dessinée à la planche, un façonnage exécuté à l&apos;atelier, une pose
                  accompagnée par celles et ceux qui ont fabriqué la pièce.
                </p>
              </>
            ),
          },
        ]}
      />

      {/* Pièce maîtresse : une séquence avant / en cours / après. */}
      <Bande
        surtitre="Avant · en cours · après"
        titre="Une porte cochère du 9e, reprise en 2018."
        chapeau="C'est ainsi que se juge un atelier : sur l'état trouvé autant que sur la pièce reposée. Les cinq planches ci-dessous montrent le même ouvrage, dans l'ordre."
      >
        <Planche ouvrage={vitrine} />
        <div className="texte" style={{ borderTop: "1px solid var(--filet)", paddingTop: 20 }}>
          <p>
            Six autres chantiers sont documentés de la même façon —{" "}
            <Link href="/photos">l&apos;archive des ouvrages</Link>{" "}réunit les portes cochères du 16
            rue de Condé et du 3 rue de la Perle, la porte d&apos;acier de l&apos;Institut des Jeunes
            Aveugles, les escaliers de la rue de Vaucouleurs et de Paray-Vieille-Poste. Le{" "}
            <Link href="/actualite">journal des chantiers</Link>{" "}en donne la liste datée.
          </p>
        </div>
      </Bande>

      {/* Les métiers : une carte par entrée, chacune avec sa photographie. */}
      <Bande
        fond="pierre"
        surtitre="Les métiers"
        titre="Six savoir-faire, un seul atelier."
        chapeau="Cinq métiers du second œuvre et une archive éditoriale. Aucun n'est confié à un sous-traitant : c'est la même main qui relève, façonne et pose."
      >
        <div className="metiers metiers--trois">
          {SERVICES.map((s, i) => (
            <Link className="metier" href={s.href} key={s.href}>
              {/* L’image est inscrite dans une hauteur fixe, sans recadrage ; son
                  cartel reste dans la figure. */}
              <figure className="cliche">
                <div className="metier__image">
                  <img
                    src={`/photos/${cartes[i].slug}-520.webp`}
                    width={cartes[i].w}
                    height={cartes[i].h}
                    alt={cartes[i].alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="cartel">{cartes[i].leg}</figcaption>
              </figure>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <span className="metier__lien">{s.matieres}</span>
            </Link>
          ))}
        </div>
      </Bande>

      <Reperes />

      <References />

      <Questions items={HOME_FAQ} fond="pierre" />

      <AppelContact
        surtitre="Visite d'atelier"
        titre="Demander une visite d'atelier ou un chiffrage."
        texte="Les syndics, architectes et directions immobilières qui nous découvrent passent presque tous par notre atelier de Massy avant de nous confier un premier ouvrage. Vingt minutes sur place suffisent à comprendre comment l'on travaille ici. La visite se prend sur rendez-vous."
        cta={{ label: "Nous écrire", href: "/contact" }}
      />
    </>
  );
}
