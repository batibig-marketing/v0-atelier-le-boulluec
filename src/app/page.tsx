import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import Stats from "@/components/Stats";
import References from "@/components/References";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema, SCHEMA_IDS } from "@/lib/schema";
import { NAP } from "@/lib/nap";

export const metadata: Metadata = {
  title: "Atelier Le Boulluec — Menuiserie & serrurerie d'art depuis 1964",
  description:
    "Atelier de menuiserie, serrurerie, vitrerie et escaliers sur mesure à Massy. 60 ans de façonnage bois et acier pour syndics, architectes et grands comptes en Île-de-France.",
  alternates: { canonical: "https://leboulluec.com/" },
  openGraph: {
    url: "https://leboulluec.com/",
    type: "website",
    locale: "fr_FR",
    siteName: "Atelier Le Boulluec",
    title: "Atelier Le Boulluec — Menuiserie & serrurerie d'art depuis 1964",
    description:
      "Soixante ans de menuiserie, serrurerie, vitrerie et escaliers sur mesure à Massy, pour Paris et l'Île-de-France.",
    images: [
      {
        url: "https://ucarecdn.com/ac23114b-a402-4794-898e-02def630f916/-/format/auto/-/quality/smart/-/resize/1200x630/",
        width: 1200,
        height: 630,
        alt: "Porte cochère restaurée par l'Atelier Le Boulluec",
      },
    ],
  },
};

const SERVICES = [
  {
    title: "Menuiserie",
    href: "/menuiserie",
    photoUuid: "8ee1618b-2bb1-4d73-8fad-61df8074ae06",
    description:
      "Portes d'entrée d'immeuble, portes cochères, fenêtres, agencements bois intérieurs et extérieurs, mobilier sur mesure.",
  },
  {
    title: "Escaliers sur mesure",
    href: "/escaliers",
    photoUuid: "029f59c0-f79a-44d7-9773-de7a099813f4",
    description:
      "Escaliers suspendus, en colimaçon, autoportants, à limon acier. Conception, fabrication atelier, pose.",
  },
  {
    title: "Serrurerie",
    href: "/serrurerie",
    photoUuid: "2ea887a0-7113-4e97-973c-7478c48e6ebe",
    description:
      "Pose et remplacement de serrures, blindage, contrôle d'accès, motorisation. Membre Bricard Serruriers Confiance.",
  },
  {
    title: "Vitrerie",
    href: "/vitrerie",
    photoUuid: "f428b023-f076-4e97-8df8-9a56954eb8af",
    description:
      "Double et simple vitrage, verre feuilleté et trempé, vitrage de protection, miroirs sur mesure, dépannage.",
  },
  {
    title: "Restauration patrimoniale",
    href: "/restauration-patrimoniale",
    photoUuid: "26525e22-2374-4191-b30c-b805af59fc7e",
    description:
      "Restauration de portes cochères historiques, d'ouvrages bois et fer forgé. Immeubles classés et ERP.",
  },
  {
    title: "Belles portes de Paris",
    href: "/belles-portes-de-paris",
    photoUuid: "f5dfb801-e487-4e9e-90e1-caf0d743f8ce",
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
    url: "https://ucarecdn.com/ac23114b-a402-4794-898e-02def630f916/-/format/auto/-/quality/smart/-/resize/1600x/",
  },
  mainEntity: { "@id": SCHEMA_IDS.BUSINESS_ID },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={servicesItemListSchema} />
      <JsonLd data={faqPageSchema(HOME_FAQ)} />
      <Hero
        photoUuid="ac23114b-a402-4794-898e-02def630f916"
        eyebrow="Massy · Île-de-France · depuis 1964"
        title="Bois et acier, façonnés depuis 1964."
        subtitle="L'Atelier Le Boulluec est une entreprise artisanale fondée en 1964, spécialisée en menuiserie, serrurerie, vitrerie, escaliers sur mesure et restauration patrimoniale. 17 menuisiers à Massy, au service des syndics, architectes et grands comptes d'Île-de-France."
        cta={{ label: "Demander un chiffrage", href: "/contact" }}
        imageAlt="Porte cochère parisienne restaurée par l'Atelier Le Boulluec, menuiserie d'art depuis 1964 à Massy."
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-[#F5EFE3]">
        <Container size="default">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                L&apos;atelier intégré
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#15294E] leading-tight">
                Un atelier intégré, quatre métiers réunis.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[#1A1A1A]/80 leading-relaxed text-lg">
              <p>
                Sous le même toit, dix-sept menuisiers façonnent ce que d&apos;autres ateliers répartissent chez plusieurs sous-traitants : la porte d&apos;entrée d&apos;un immeuble haussmannien, l&apos;escalier d&apos;un hôtel particulier, la grille de défense d&apos;un porche du Marais, le vitrage de protection d&apos;une vitrine de prestige.
              </p>
              <p>
                Cette concentration des savoir-faire — bois, acier, verre, serrurerie — n&apos;est pas une posture commerciale. C&apos;est la condition pour que chaque pièce sorte juste, sans rupture de chaîne, sans interface tendue entre métiers.
              </p>
              <p>
                Nous travaillons à Massy depuis 2020. La méthode est demeurée : un relevé soigné, une épure dessinée à la planche, un façonnage exécuté à l&apos;atelier, une pose accompagnée par celles et ceux qui ont fabriqué la pièce.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-24 bg-white">
        <Container size="wide">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Nos métiers
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#15294E] leading-tight">
                Six savoir-faire, un seul atelier.
              </h2>
            </div>
            <Link href="/a-propos" className="text-[#C46B2E] hover:text-[#1F3A6B] text-sm font-medium transition-colors">
              En savoir plus sur l&apos;atelier →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </Container>
      </section>

      <Stats />

      <References />

      <FaqSection items={HOME_FAQ} />

      <CTASection
        eyebrow="Visite d'atelier"
        title="Demander une visite d'atelier ou un chiffrage."
        text="Les syndics, architectes et directions immobilières qui nous découvrent passent presque tous par notre atelier de Massy avant de nous confier un premier ouvrage. Vingt minutes sur place suffisent à comprendre comment l'on travaille ici. La visite se prend sur rendez-vous."
        cta={{ label: "Nous écrire", href: "/contact" }}
      />
    </>
  );
}
