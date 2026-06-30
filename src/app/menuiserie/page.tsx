import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import PhotoGrid from "@/components/PhotoGrid";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { photosByCategories } from "@/lib/photos";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Menuiserie sur mesure à Paris & Île-de-France",
  description:
    "Portes d'entrée, portes cochères, fenêtres, agencement bois et mobilier sur mesure. Atelier de menuiserie traditionnelle à Massy, intervention en Île-de-France.",
  alternates: { canonical: "/menuiserie" },
  openGraph: {
    title: "Menuiserie sur mesure à Paris & Île-de-France — Atelier Le Boulluec",
    description:
      "Portes d'entrée, portes cochères, fenêtres, agencement bois et mobilier sur mesure depuis 1964.",
    images: ["https://ucarecdn.com/8ee1618b-2bb1-4d73-8fad-61df8074ae06/-/format/auto/-/quality/smart/-/resize/1600x/"],
  },
};

export default function MenuiseriePage() {
  const photos = photosByCategories(["porte", "porte-cochere", "faconnage"], 6);
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "Menuiserie sur mesure",
          metadata.description as string,
          "Menuiserie"
        )}
      />
      <PageHeader
        photoUuid="8ee1618b-2bb1-4d73-8fad-61df8074ae06"
        eyebrow="Menuiserie"
        title="Menuiserie sur mesure — portes, fenêtres, agencements."
        subtitle="À l'atelier de Massy, dix-sept menuisiers façonnent chaque année des centaines de pièces de bois pour les immeubles, commerces et maisons d'Île-de-France."
      />

      <article className="py-20 md:py-24 bg-[#F5EFE3]">
        <Container size="narrow" className="prose-marine">
          <p className="text-lg leading-relaxed text-[#1A1A1A]/85">
            La menuiserie est le métier historique de l&apos;Atelier Le Boulluec depuis 1964 — celui par lequel l&apos;entreprise s&apos;est construite, et celui qui irrigue tous les autres.
          </p>

          <h2>Portes d&apos;entrée et portes cochères</h2>
          <p>
            La porte d&apos;entrée d&apos;un immeuble est un ouvrage technique avant d&apos;être un objet décoratif. Elle doit résister à plusieurs décennies d&apos;intempéries, supporter des dizaines de manœuvres quotidiennes, conserver son aplomb malgré les jeux de structure, et respecter — quand le bâtiment l&apos;impose — un dessin patrimonial que la copropriété ou l&apos;architecte des Bâtiments de France a validé.
          </p>
          <p>
            Nous façonnons des portes neuves en chêne, en sapin du Nord, en moabi ou en bois exotiques certifiés, selon le cahier des charges et le budget. Nous restaurons aussi des portes existantes lorsque la structure le permet — c&apos;est souvent la solution la plus sage, à la fois pour la cohérence architecturale et pour le coût global sur vingt ans.
          </p>
          <p>
            Toutes nos portes sont assemblées à tenon et mortaise, panneautées selon le dessin d&apos;origine ou un dessin nouveau, équipées de la quincaillerie adaptée à l&apos;usage (paumelles à billes, ferme-porte hydraulique, système de contrôle d&apos;accès, motorisation sur demande).
          </p>

          <h2>Fenêtres et volets</h2>
          <p>
            Nous fabriquons des fenêtres bois sur mesure pour les immeubles soumis à des contraintes patrimoniales — petits bois rapportés, dormants fins, doubles vitrages discrètement insérés dans des moulures d&apos;époque. Pour les bâtiments contemporains, nous proposons des menuiseries mixtes bois-aluminium qui conjuguent l&apos;intérieur chaud d&apos;un châssis bois et la durabilité d&apos;un parement aluminium en façade.
          </p>
          <p>
            Les volets — pleins, persiennés, à projection — sont façonnés au même atelier que les châssis qui les portent. Cette unité de fabrication garantit l&apos;ajustement parfait des pièces entre elles.
          </p>

          <h2>Agencement bois — intérieur et extérieur</h2>
          <p>
            Bibliothèques toute hauteur, dressings, meubles TV, panneaux muraux, banquettes, marches d&apos;estrade : nous traitons les projets d&apos;agencement dans le même atelier que les portes d&apos;immeuble. Les contraintes ne sont pas les mêmes — l&apos;agencement intérieur tolère des bois plus tendres et des finitions plus expressives — mais l&apos;exigence d&apos;ajustement reste identique.
          </p>
          <p>
            À l&apos;extérieur, nous intervenons sur les claustras, les bardages, les capotages techniques (caches-poubelles, caches-compteurs, locaux à vélos) qui réclament une menuiserie résistant à l&apos;eau et au vandalisme tout en restant cohérente avec la façade.
          </p>

          <h2>Mobilier sur mesure</h2>
          <p>
            Pour les hôtels, les boutiques de prestige et les particuliers exigeants, nous façonnons des pièces de mobilier — comptoirs, vitrines, présentoirs, meubles d&apos;appoint — dessinées avec l&apos;architecte ou le designer intérieur du projet. Ces commandes représentent une part minoritaire mais croissante de notre activité.
          </p>

          <h2>Une méthode héritée, un outillage actualisé</h2>
          <p>
            Nos compagnons travaillent à la fois sur des machines numériques — CNC pour les pièces complexes ou répétitives — et sur des établis à main. Chaque pièce passe entre les deux : la précision de la machine pour le débit et le calibrage, la main de l&apos;artisan pour l&apos;assemblage, l&apos;ajustement et la finition.
          </p>
        </Container>
      </article>

      <section className="py-16 md:py-20 bg-white">
        <Container size="wide">
          <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Quelques ouvrages</p>
          <h2 className="font-serif text-2xl md:text-3xl text-[#15294E] mb-10">
            Portes et façonnages récents
          </h2>
          <PhotoGrid photos={photos} columns={3} />
        </Container>
      </section>

      <CTASection
        eyebrow="Chiffrage menuiserie"
        title="Décrivez-nous votre projet."
        text="Porte d'immeuble, fenêtres, agencement, mobilier — par téléphone, par courriel ou en venant nous voir à Massy. Les premiers conseils sont gratuits ; le chiffrage détaillé suit la visite sur site."
      />
    </>
  );
}
