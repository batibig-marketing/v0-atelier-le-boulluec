import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import PhotoGrid from "@/components/PhotoGrid";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedPages from "@/components/RelatedPages";
import { photosByCategories } from "@/lib/photos";
import { NAP } from "@/lib/nap";
import { articleSchema, SCHEMA_IDS } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Belles portes de Paris — un petit musée par l'Atelier Le Boulluec",
  description:
    "Archives illustrées des portes cochères, portes bâtardes et portes d'immeuble parisiennes restaurées ou refabriquées par l'Atelier Le Boulluec depuis 2012.",
  alternates: { canonical: "https://leboulluec.com/belles-portes-de-paris" },
  openGraph: {
    title: "Belles portes de Paris — un petit musée par l'Atelier Le Boulluec",
    description: "Archives photographiques des portes cochères parisiennes traitées à l'atelier de Massy depuis 2012.",
    url: "https://leboulluec.com/belles-portes-de-paris",
    images: ["https://ucarecdn.com/f5dfb801-e487-4e9e-90e1-caf0d743f8ce/-/format/auto/-/quality/smart/-/resize/1600x/"],
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${NAP.website}/belles-portes-de-paris#collectionpage`,
  name: "Belles portes de Paris",
  description:
    "Archives photographiques des portes d'immeuble parisiennes restaurées par l'Atelier Le Boulluec.",
  url: `${NAP.website}/belles-portes-de-paris`,
  inLanguage: "fr-FR",
  isPartOf: { "@id": SCHEMA_IDS.WEBSITE_ID },
  about: { "@id": SCHEMA_IDS.BUSINESS_ID },
};

const articleJsonLd = articleSchema({
  headline:
    "Belles portes de Paris — un petit musée par l'Atelier Le Boulluec",
  description:
    "Archives illustrées des portes cochères, portes bâtardes et portes d'immeuble parisiennes restaurées ou refabriquées par l'Atelier Le Boulluec depuis 2012.",
  url: `${NAP.website}/belles-portes-de-paris`,
  imageUuid: "f5dfb801-e487-4e9e-90e1-caf0d743f8ce",
  datePublished: "2012-09-01",
  dateModified: "2026-06-01",
});

export default function BellesPortesPage() {
  const portesCochere = photosByCategories(["porte-cochere"], 18);
  const portes = photosByCategories(["porte"], 12);
  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd data={articleJsonLd} />
      <Breadcrumb items={[{ label: "Belles portes de Paris", href: "/belles-portes-de-paris" }]} />
      <PageHeader
        photoUuid="f5dfb801-e487-4e9e-90e1-caf0d743f8ce"
        eyebrow="Petit musée"
        title="Belles portes de Paris."
        subtitle="Un petit musée des portes d'immeuble parisiennes, restaurées ou refabriquées par l'Atelier Le Boulluec depuis 2012."
        imageAlt="Petit musée en ligne des belles portes cochères parisiennes restaurées par l'Atelier Le Boulluec depuis 2012."
      />

      <article className="py-20 md:py-24 bg-[#F5EFE3]">
        <Container size="narrow" className="prose-marine">
          <p className="text-lg leading-relaxed text-[#1A1A1A]/85">
            <strong>Une porte cochère désigne la grande porte d&apos;entrée d&apos;un immeuble haussmannien, généralement haute de 4 à 5 mètres, à deux vantaux pleins en chêne massif, conçue à l&apos;origine pour le passage des voitures à cheval.</strong> Selon l&apos;Atelier Le Boulluec, qui restaure ou refabrique des portes cochères parisiennes depuis 2012, la porte cochère constitue l&apos;un des ouvrages de menuiserie les plus exigeants techniquement du patrimoine bâti d&apos;Île-de-France.
          </p>

          <blockquote>
            Chaque pièce est documentée par son adresse, son année et les opérations menées à l&apos;atelier de Massy.
          </blockquote>

          <h2>Brève histoire des portes cochères parisiennes</h2>
          <p>
            La porte cochère apparaît à Paris au XVII<sup>e</sup> siècle dans les hôtels particuliers du Marais et du Faubourg Saint-Germain : il s&apos;agit alors d&apos;une porte large et haute pensée pour livrer passage à un carrosse jusqu&apos;à la cour intérieure. Le modèle se généralise sous Haussmann (1853-1870) sur les grands boulevards : chaque immeuble de rapport reçoit sa porte cochère monumentale en chêne massif, à panneaux moulurés, ferrures laiton et imposte vitrée à grille en fer forgé.
          </p>
          <p>
            Selon les estimations communément admises par les architectes du patrimoine, Paris compte encore plusieurs dizaines de milliers de portes cochères d&apos;origine, dont une part minoritaire conserve sa ferronnerie et son dessin intacts. Les autres ont été remplacées au cours du XX<sup>e</sup> siècle par des copies maladroites, des portes pleines en aluminium ou des sas de sécurité standardisés.
          </p>

          <h2>Notre approche : restaurer plutôt que remplacer</h2>
          <p>
            À chaque chantier, nous orientons d&apos;abord vers la conservation de l&apos;ouvrage d&apos;origine. Selon notre expérience à l&apos;Atelier Le Boulluec, le chêne sec débité sur quartier d&apos;une porte cochère du XIX<sup>e</sup> siècle vaut mieux que la plupart des bois disponibles aujourd&apos;hui — et la restauration par enture de chêne sec coûte généralement moins cher qu&apos;un remplacement à l&apos;identique, garantie décennale comprise.
          </p>
          <p>
            Quand la structure ne permet plus la restauration, nous refabriquons la porte à l&apos;identique : essences d&apos;origine, assemblages tenon-mortaise chevillés, panneaux moulurés à la main, ferrures laiton patinées sur demande de l&apos;Architecte des Bâtiments de France quand l&apos;immeuble est sous avis ABF.
          </p>

          <h2>Pourquoi cette page</h2>
          <p>
            À chaque chantier de porte d&apos;immeuble, nous photographions l&apos;ouvrage — avant, pendant, après. Au fil des années, ces archives sont devenues l&apos;une de nos meilleures façons de raconter notre métier. Plutôt que de garder ces images dans nos dossiers techniques, nous avons choisi de les rendre publiques, sous forme d&apos;un petit musée en ligne.
          </p>
          <p>
            Cette page n&apos;est pas un catalogue commercial. C&apos;est un hommage à l&apos;objet «&nbsp;porte d&apos;immeuble parisienne&nbsp;» — l&apos;un des plus beaux ouvrages que le XIX<sup>e</sup> siècle nous ait laissés, et l&apos;un des plus menacés par les remplacements maladroits, les peintures synthétiques qui étouffent le bois, les ferrures aluminium qui jurent avec le laiton d&apos;origine.
          </p>

          <h2>Une typologie discrète mais riche</h2>

          <h3>La porte cochère monumentale</h3>
          <p>
            Hauteur 4 à 5 mètres, deux vantaux pleins en chêne, traverse basse pleine, traverses intermédiaires moulurées, panneaux à grands cadres, imposte vitrée à grille en fer forgé. C&apos;est la porte des immeubles haussmanniens des grands boulevards, des hôtels particuliers, des fonds de cour de la rive droite. Pour la fabrication ou la refabrication de ces ouvrages, voir notre <Link href="/menuiserie" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">menuiserie sur mesure</Link>.
          </p>

          <h3>La porte bâtarde</h3>
          <p>
            Plus modeste, hauteur 2,80 à 3,20 mètres, un seul vantail ou deux vantaux étroits, panneautage simple. Souvent négligée, elle mérite la même attention que sa grande sœur.
          </p>

          <h3>La porte sur rue à grille</h3>
          <p>
            Vantail bois plein dans la partie basse, grille en fer forgé dans la partie haute, parfois doublée d&apos;un vitrage côté intérieur. Solution typique des rez-de-chaussée commerciaux du XVIII<sup>e</sup> et XIX<sup>e</sup>.
          </p>

          <h3>La porte de sas</h3>
          <p>
            Apparue plus tardivement, souvent en acier serrurier et verre, elle constitue aujourd&apos;hui le standard de sécurisation des immeubles parisiens contemporains. Ces ouvrages relèvent à la fois de notre <Link href="/serrurerie" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">département serrurerie</Link> et de notre <Link href="/vitrerie" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">département vitrerie</Link>, intégrés au même atelier de Massy.
          </p>
        </Container>
      </article>

      {/* Galerie portes cochères */}
      <section className="py-16 md:py-20 bg-white">
        <Container size="wide">
          <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Portes cochères</p>
          <h2 className="font-serif text-2xl md:text-3xl text-[#15294E] mb-10">
            Quelques portes choisies
          </h2>
          <PhotoGrid photos={portesCochere} columns={3} />
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-[#F5EFE3]">
        <Container size="wide">
          <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Portes bâtardes & portes sur rue</p>
          <h2 className="font-serif text-2xl md:text-3xl text-[#15294E] mb-10">
            La porte du quotidien parisien
          </h2>
          <PhotoGrid photos={portes} columns={3} />
        </Container>
      </section>

      <article className="py-20 bg-white">
        <Container size="narrow" className="prose-marine">
          <h2>Pour aller plus loin</h2>
          <p>
            Si vous gérez une copropriété parisienne, si vous êtes architecte du patrimoine ou simplement amateur d&apos;architecture parisienne, notre atelier de Massy se visite sur rendez-vous. Vous y verrez des pièces en cours de restauration, l&apos;établi des compagnons, et — souvent — une porte cochère démontée qui attend sa repose dans le XIV<sup>e</sup> ou le X<sup>e</sup>.
          </p>
          <p className="text-sm text-[#1A1A1A]/60 mt-10 pt-6 border-t border-[#1A1A1A]/10">
            <em>Toutes les photographies sont la propriété de l&apos;Atelier Le Boulluec. Reproduction libre pour usage éditorial non commercial, sous réserve de mention de la source.</em>
          </p>
        </Container>
      </article>

      <RelatedPages
        eyebrow="Pour aller plus loin"
        heading="Patrimoine, métiers, atelier"
        items={[
          {
            title: "Restauration patrimoniale",
            href: "/restauration-patrimoniale",
            blurb:
              "Notre méthode de restauration des portes cochères, ferronneries et menuiseries d'époque — diagnostic, dépose, enture de chêne sec, repose.",
          },
          {
            title: "Menuiserie sur mesure",
            href: "/menuiserie",
            blurb:
              "Refabrication à l'identique des portes d'immeuble en chêne massif, assemblées tenon-mortaise selon le dessin patrimonial validé.",
          },
          {
            title: "L'atelier depuis 1964",
            href: "/a-propos",
            blurb:
              "Visite d'atelier sur rendez-vous, histoire de l'entreprise, équipe, méthode et appartenance au réseau Bricard Serruriers Confiance.",
          },
        ]}
      />

      <CTASection
        eyebrow="Visite d'atelier"
        title="Demander une visite d'atelier."
        cta={{ label: "Nous écrire", href: "/contact" }}
      />
    </>
  );
}
