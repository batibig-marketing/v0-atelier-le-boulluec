import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import PhotoGrid from "@/components/PhotoGrid";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { photosByCategories } from "@/lib/photos";
import { NAP } from "@/lib/nap";

export const metadata: Metadata = {
  title: "Belles portes de Paris — un petit musée par l'Atelier Le Boulluec",
  description:
    "Archives illustrées des portes cochères, portes bâtardes et portes d'immeuble parisiennes restaurées ou refabriquées par l'Atelier Le Boulluec depuis 2012.",
  alternates: { canonical: "/belles-portes-de-paris" },
  openGraph: {
    title: "Belles portes de Paris — un petit musée par l'Atelier Le Boulluec",
    description: "Archives photographiques des portes cochères parisiennes traitées à l'atelier de Massy depuis 2012.",
    images: ["https://ucarecdn.com/f5dfb801-e487-4e9e-90e1-caf0d743f8ce/-/format/auto/-/quality/smart/-/resize/1600x/"],
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Belles portes de Paris",
  description: "Archives photographiques des portes d'immeuble parisiennes restaurées par l'Atelier Le Boulluec.",
  url: `${NAP.website}/belles-portes-de-paris`,
};

export default function BellesPortesPage() {
  const portesCochere = photosByCategories(["porte-cochere"], 18);
  const portes = photosByCategories(["porte"], 12);
  return (
    <>
      <JsonLd data={collectionSchema} />
      <PageHeader
        photoUuid="f5dfb801-e487-4e9e-90e1-caf0d743f8ce"
        eyebrow="Petit musée"
        title="Belles portes de Paris."
        subtitle="Un petit musée des portes d'immeuble parisiennes, restaurées ou refabriquées par l'Atelier Le Boulluec depuis 2012."
      />

      <article className="py-20 md:py-24 bg-[#F5EFE3]">
        <Container size="narrow" className="prose-marine">
          <blockquote>
            Chaque pièce est documentée par son adresse, son année et les opérations menées à l&apos;atelier de Massy.
          </blockquote>

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
            Hauteur 4 à 5 mètres, deux vantaux pleins en chêne, traverse basse pleine, traverses intermédiaires moulurées, panneaux à grands cadres, imposte vitrée à grille en fer forgé. C&apos;est la porte des immeubles haussmanniens des grands boulevards, des hôtels particuliers, des fonds de cour de la rive droite.
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
            Apparue plus tardivement, souvent en acier serrurier et verre, elle constitue aujourd&apos;hui le standard de sécurisation des immeubles parisiens contemporains.
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

      <CTASection
        eyebrow="Visite d'atelier"
        title="Demander une visite d'atelier."
        cta={{ label: "Nous écrire", href: "/contact" }}
      />
    </>
  );
}
