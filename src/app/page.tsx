import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import SectionTitre from "@/components/SectionTitre";
import Stats from "@/components/Stats";
import References from "@/components/References";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import PlancheOuvrage from "@/components/PlancheOuvrage";
import { faqPageSchema, SCHEMA_IDS, mentionsMetier } from "@/lib/schema";
import { NAP } from "@/lib/nap";
import { OUVRAGES, PHOTOS, cartouche } from "@/data/ouvrages";
import Image from "next/image";
import { uploadcareAtelier, uploadcareThumb, uploadcareUrl } from "@/lib/uploadcare";

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
 * Le geste avant le résultat. Ces cinq vues sont prises à l'établi, sous la
 * meuleuse ou au moment de la repose : elles passent devant les photographies
 * d'ouvrages finis, qui restent consultables dans l'archive.
 * Les quatre premières portent un filigrane sur leur bord droit — d'où le
 * recadrage `uploadcareAtelier`, qui ne retire jamais de sujet.
 */
const ATELIER = {
  repose: {
    uuid: "0f4e294e-6a6f-4566-b019-7fb61d617e42",
    filigrane: true,
    alt: "Un menuisier de l'atelier, aspirateur en main, au moment de reposer la porte du 2 rue Richer, Paris 9e, après façonnage.",
    legende: "La repose — 2 rue Richer, Paris 9e — 2022 · après façonnage à Massy",
  },
  plongee: {
    uuid: "7752b0ad-e220-401b-88ce-c40b2d8113f7",
    filigrane: true,
    alt: "Vue plongeante de l'atelier de Massy : deux vantaux de chêne posés sur tréteaux, l'épure agrafée sur le panneau, un menuisier au sol.",
    legende: "L'atelier en plan — 13 rue Las Cases, Paris 7e — 2023 · chêne, épure agrafée sur le panneau",
  },
  etabli: {
    uuid: "40e2cd05-e893-45b2-a4fe-0743c5e2e887",
    filigrane: false,
    alt: "Établi de l'atelier : plan de fabrication déplié, mètre à ruban, équerre et boîte de vis devant un agencement en cours de montage.",
    legende: "L'établi — plan, mètre, équerre, boîte de vis · agencement en médium épais, 2018",
  },
  soudure: {
    uuid: "b8cd362a-18cc-4d44-abd3-e9d8a30f9ca9",
    filigrane: true,
    alt: "Ossature d'acier d'une marquise en cours d'assemblage à l'atelier, meuleuse et disques posés au premier plan, racks de fers en fond.",
    legende: "La forge — marquise de la rue Saint-Honoré, Paris 1er — 2020 · acier assemblé et meulé",
  },
  scellement: {
    uuid: "b5ab320c-3b76-4ffb-ab18-a998e56ea209",
    filigrane: true,
    alt: "Volutes de fer forgé d'une marquise posées à plat sur le sol de l'atelier, bouteilles de gaz et rack d'outils en arrière-plan.",
    legende: "Les volutes — marquise du 14 rue Mouton-Duvernet, Paris 14e — 2021 · fer forgé à chaud",
  },
} as const;

const SERVICES = [
  {
    title: "Menuiserie",
    href: "/menuiserie",
    photoUuid: "8ee1618b-2bb1-4d73-8fad-61df8074ae06",
    matieres: "Chêne · Sapin du Nord · Moabi",
    description:
      "Portes d'entrée d'immeuble, portes cochères, fenêtres, agencements bois intérieurs et extérieurs, mobilier sur mesure.",
  },
  {
    title: "Escaliers sur mesure",
    href: "/escaliers",
    photoUuid: "029f59c0-f79a-44d7-9773-de7a099813f4",
    matieres: "Acier · Chêne · Verre feuilleté",
    description:
      "Escaliers suspendus, en colimaçon, autoportants, à limon acier. Conception, fabrication atelier, pose.",
  },
  {
    title: "Serrurerie & ferronnerie",
    href: "/serrurerie",
    photoUuid: "2ea887a0-7113-4e97-973c-7478c48e6ebe",
    matieres: "Acier forgé · Haute sûreté",
    description:
      "Pose et remplacement de serrures, blindage, contrôle d'accès, motorisation. Membre Bricard Serruriers Confiance.",
  },
  {
    title: "Vitrerie",
    href: "/vitrerie",
    photoUuid: "f428b023-f076-4e97-8df8-9a56954eb8af",
    matieres: "Feuilleté · Trempé · Miroir",
    description:
      "Double et simple vitrage, verre feuilleté et trempé, vitrage de protection, miroirs sur mesure, dépannage.",
  },
  {
    title: "Restauration patrimoniale",
    href: "/restauration-patrimoniale",
    photoUuid: "26525e22-2374-4191-b30c-b805af59fc7e",
    matieres: "Enture de chêne sec · Fer forgé",
    description:
      "Restauration de portes cochères historiques, d'ouvrages bois et fer forgé. Immeubles classés et ERP.",
  },
  {
    title: "Belles portes de Paris",
    href: "/belle-portes-rue-sur-paris-et-ailleurs",
    photoUuid: "f5dfb801-e487-4e9e-90e1-caf0d743f8ce",
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
  const vitrine = OUVRAGES[0];

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={servicesItemListSchema} />
      <JsonLd data={faqPageSchema(HOME_FAQ)} />

      <Hero
        photoUuid={ATELIER.repose.uuid}
        atelier
        cadrage="50% 72%"
        eyebrow="Massy · Paris & Île-de-France · depuis 1964"
        title="Bois et acier, façonnés depuis 1964."
        subtitle="L'Atelier Le Boulluec est une entreprise artisanale fondée en 1964, spécialisée en menuiserie, serrurerie, vitrerie, escaliers sur mesure et restauration patrimoniale. 17 menuisiers à Massy, au service des syndics, architectes et grands comptes d'Île-de-France."
        cta={{ label: "Demander un chiffrage", href: "/contact" }}
        imageAlt={ATELIER.repose.alt}
        legende={ATELIER.repose.legende}
      />

      {/* Réponse directe — bloc citable placé sous le H1 (Bible SEO §13.2) */}
      <section className="bg-[#241E1A] bois border-b border-[#3A322C]">
        <Container size="default" className="py-10 md:py-12">
          <p className="text-[1.0625rem] md:text-lg leading-relaxed text-[#EDE6DA]">
            <strong className="text-[#EDE6DA]">En bref —</strong> L&apos;Atelier Le Boulluec est un
            atelier de menuiserie et de ferronnerie d&apos;art fondé en 1964, installé au{" "}
            {NAP.street}, {NAP.postalCode} {NAP.city}. Dix-sept menuisiers y façonnent et y
            restaurent des portes cochères, portes bâtardes, grilles de sas, escaliers et châssis
            acier pour Paris et l&apos;{NAP.areaServed}. Les cinq métiers — menuiserie, serrurerie,
            ferronnerie, vitrerie, escaliers — sont exécutés dans le même atelier, sans
            sous-traitance, sous garantie décennale.
          </p>
        </Container>
      </section>

      {/* Le geste avant le résultat : l'atelier au travail. */}
      <section
        id="atelier-au-travail"
        className="scroll-mt-4 py-16 md:py-24 bg-[#1C1714] border-b border-[#3A322C]"
      >
        <Container size="wide">
          <SectionTitre
            index="01"
            rubrique="L'atelier au travail"
            titre="D'abord le geste, ensuite l'ouvrage."
            chapo="Une porte finie ne dit rien de la façon dont elle a été faite. Ces cinq vues sont prises à l'établi, sous la meuleuse et au moment de la repose — c'est là que se décide la qualité de la pièce."
            action={
              <Link
                href="/a-propos"
                className="cartouche text-[#9DB2C2] hover:text-[#EDE6DA] transition-colors"
              >
                Visiter l&apos;atelier →
              </Link>
            }
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-9 list-none p-0 m-0">
            {[ATELIER.etabli, ATELIER.plongee, ATELIER.soudure, ATELIER.scellement].map(
              (vue, i) => (
                <li
                  key={vue.uuid}
                  className={`m-0 ${i === 0 ? "lg:col-span-2 sm:col-span-2" : ""}`}
                >
                  <figure className="m-0">
                    <div
                      className={`relative bg-[#2A2320] border border-[#3A322C] ${
                        i === 0 ? "aspect-[4/3] lg:aspect-[16/9]" : "aspect-[4/5]"
                      }`}
                    >
                      <Image
                        src={
                          vue.filigrane
                            ? uploadcareAtelier(vue.uuid, 1200)
                            : uploadcareThumb(vue.uuid, 1200)
                        }
                        alt={vue.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={80}
                        loading="lazy"
                        className="object-cover object-center"
                      />
                    </div>
                    <figcaption className="mt-2 pt-2 border-t border-[#3A322C]">
                      <span className="cartouche text-[#7E96A8]">
                        {String(i + 1).padStart(2, "0")} · Atelier
                      </span>
                      <span className="block mt-1 text-sm leading-snug text-[#EDE6DA]/85">
                        {vue.legende}
                      </span>
                    </figcaption>
                  </figure>
                </li>
              )
            )}
          </ul>
          <p className="mt-10 pt-6 border-t border-[#3A322C] text-[#EDE6DA]/85 leading-relaxed max-w-3xl">
            Dix-sept menuisiers travaillent au 6 rue de l&apos;Aulnaye Dracourt, à Massy. Le bois
            arrive en plots, l&apos;acier en barres ; les épures sont dessinées, agrafées sur le
            panneau, puis suivies jusqu&apos;à la pose. Rien ne repart de l&apos;atelier sans avoir
            été monté à blanc sur place. C&apos;est la raison pour laquelle nous montrons
            l&apos;établi avant la façade :{" "}
            <Link
              href="/photos"
              className="text-[#9DB2C2] underline underline-offset-4 decoration-[#7E96A8] hover:text-[#EDE6DA]"
            >
              l&apos;archive des ouvrages
            </Link>{" "}
            donne le résultat, l&apos;atelier donne la méthode.
          </p>
        </Container>
      </section>

      {/* L'atelier intégré */}
      <section className="py-16 md:py-24 bg-[#1C1714]">
        <Container size="default">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="cartouche text-[#7E96A8] mb-3 pb-2 border-b border-[#3A322C]">
                L&apos;atelier intégré
              </p>
              <h2 className="font-display text-[1.75rem] md:text-[2.25rem] text-[#EDE6DA] leading-tight">
                Un atelier intégré, quatre métiers réunis.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[#EDE6DA]/85 leading-relaxed text-[1.0625rem]">
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
            </div>
          </div>
        </Container>
      </section>

      {/* Pièce maîtresse : une séquence avant / en cours / après */}
      <section className="py-16 md:py-24 bg-[#241E1A] bois border-t border-[#3A322C]">
        <Container size="wide">
          <SectionTitre
            index="02"
            rubrique="Avant · en cours · après"
            titre="Une porte cochère du 9e, reprise en 2018."
            chapo="C'est ainsi que se juge un atelier : sur l'état trouvé autant que sur la pièce reposée. Les cinq planches ci-dessous montrent le même ouvrage, dans l'ordre."
            action={
              <Link
                href="/photos"
                className="cartouche text-[#9DB2C2] hover:text-[#EDE6DA] transition-colors"
              >
                Toute l&apos;archive →
              </Link>
            }
          />
          <PlancheOuvrage ouvrage={vitrine} headingLevel={3} />
          <p className="mt-10 pt-6 border-t border-[#3A322C] text-[#EDE6DA]/80 leading-relaxed max-w-3xl">
            Six autres chantiers sont documentés de la même façon —{" "}
            <Link
              href="/photos"
              className="text-[#9DB2C2] underline underline-offset-4 decoration-[#7E96A8]"
            >
              l&apos;archive des ouvrages
            </Link>{" "}
            réunit les portes cochères du 16 rue de Condé et du 3 rue de la Perle, la porte
            d&apos;acier de l&apos;Institut des Jeunes Aveugles, les escaliers de la rue de
            Vaucouleurs et de Paray-Vieille-Poste. Le{" "}
            <Link
              href="/actualite"
              className="text-[#9DB2C2] underline underline-offset-4 decoration-[#7E96A8]"
            >
              journal des chantiers
            </Link>{" "}
            en donne la liste datée.
          </p>
        </Container>
      </section>

      {/* Métiers */}
      <section className="py-16 md:py-24 bg-[#1C1714] border-t border-[#3A322C]">
        <Container size="wide">
          <SectionTitre
            index="03"
            rubrique="Les métiers"
            titre="Six savoir-faire, un seul atelier."
            chapo="Cinq métiers du second œuvre et une archive éditoriale. Aucun n'est confié à un sous-traitant : c'est la même main qui relève, façonne et pose."
            action={
              <Link
                href="/a-propos"
                className="cartouche text-[#9DB2C2] hover:text-[#EDE6DA] transition-colors"
              >
                L&apos;atelier →
              </Link>
            }
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {SERVICES.map((s, i) => (
              <ServiceCard
                key={s.title}
                {...s}
                index={String(i + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </Container>
      </section>

      <Stats />

      <References />

      <FaqSection index="06" items={HOME_FAQ} />

      <CTASection
        eyebrow="Visite d'atelier"
        title="Demander une visite d'atelier ou un chiffrage."
        text="Les syndics, architectes et directions immobilières qui nous découvrent passent presque tous par notre atelier de Massy avant de nous confier un premier ouvrage. Vingt minutes sur place suffisent à comprendre comment l'on travaille ici. La visite se prend sur rendez-vous."
        cta={{ label: "Nous écrire", href: "/contact" }}
      />
    </>
  );
}
