import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import PhotoGrid from "@/components/PhotoGrid";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedPages from "@/components/RelatedPages";
import { photosByCategories } from "@/lib/photos";
import { serviceSchema, faqPageSchema } from "@/lib/schema";

const MENUISERIE_FAQ = [
  {
    q: "Quel est le délai pour fabriquer une porte d'immeuble sur mesure ?",
    a: "Le délai standard est de 8 à 12 semaines entre le relevé sur site et la pose pour une porte cochère ou une porte d'entrée d'immeuble en chêne massif. Les portes destinées à un immeuble sous avis ABF peuvent demander 14 à 16 semaines en raison du dialogue avec les services patrimoniaux.",
  },
  {
    q: "Quels bois utilisez-vous pour vos menuiseries ?",
    a: "Nous travaillons principalement le chêne massif français pour les portes cochères et ouvrages patrimoniaux, le sapin du Nord pour les châssis de fenêtres, le moabi et les bois exotiques certifiés FSC pour les commandes spécifiques, ainsi que des essences mixtes bois-aluminium pour les bâtiments contemporains.",
  },
  {
    q: "Intervenez-vous sur des immeubles sous avis des Bâtiments de France (ABF) ?",
    a: "Oui. Nous produisons les plans d'épure, les descriptifs techniques et les relevés photographiques nécessaires aux autorisations de travaux délivrées par l'Architecte des Bâtiments de France. Nous sommes habitués au dialogue avec les ABF d'Île-de-France.",
  },
  {
    q: "Vos menuiseries sont-elles couvertes par la garantie décennale ?",
    a: "Oui. Tous nos ouvrages neufs et restaurés sont garantis 10 ans à partir de la date de réception. Nous conservons l'historique de chaque chantier et intervenons sous garantie sur les pièces que nous avons posées.",
  },
  {
    q: "Faites-vous de la fenêtre bois ou bois-alu pour des particuliers ?",
    a: "Oui, sur les projets de rénovation patrimoniale et sur les commandes architecte. Nous fabriquons fenêtres bois traditionnelles (chêne, sapin du Nord), fenêtres mixtes bois-aluminium pour bâtiments contemporains, ainsi que volets pleins, persiennés et à projection. Pose en Île-de-France uniquement.",
  },
];

export const metadata: Metadata = {
  title: "Menuiserie sur mesure à Paris & Île-de-France",
  description:
    "Portes d'entrée, portes cochères, fenêtres, agencement bois et mobilier sur mesure. Atelier de menuiserie traditionnelle à Massy, intervention en Île-de-France.",
  alternates: { canonical: "https://leboulluec.com/menuiserie" },
  openGraph: {
    title: "Menuiserie sur mesure à Paris & Île-de-France — Atelier Le Boulluec",
    description:
      "Portes d'entrée, portes cochères, fenêtres, agencement bois et mobilier sur mesure depuis 1964.",
    url: "https://leboulluec.com/menuiserie",
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
      <JsonLd data={faqPageSchema(MENUISERIE_FAQ)} />
      <Breadcrumb items={[{ label: "Menuiserie" }]} />
      <PageHeader
        photoUuid="8ee1618b-2bb1-4d73-8fad-61df8074ae06"
        eyebrow="Menuiserie"
        title="Menuiserie sur mesure — portes, fenêtres, agencements."
        subtitle="À l'atelier de Massy, dix-sept menuisiers façonnent chaque année des centaines de pièces de bois pour les immeubles, commerces et maisons d'Île-de-France."
        imageAlt="Atelier de menuiserie de l'Atelier Le Boulluec à Massy — façonnage de portes et fenêtres bois sur mesure."
      />

      <article className="py-20 md:py-24 bg-[#F5EFE3]">
        <Container size="narrow" className="prose-marine">
          <p className="text-lg leading-relaxed text-[#1A1A1A]/85">
            <strong>La menuiserie désigne le métier de façonnage du bois en pièces d&apos;ouvrage : portes, fenêtres, escaliers, agencements, mobilier.</strong> L&apos;Atelier Le Boulluec pratique la menuiserie depuis 1964 en Île-de-France, dans son atelier de Massy où dix-sept menuisiers fabriquent chaque année des centaines de pièces pour immeubles, commerces et maisons.
          </p>

          <h2>Quels sont nos ouvrages de menuiserie phares ?</h2>
          <ul>
            <li><strong>Portes cochères et portes d&apos;entrée d&apos;immeuble</strong> en chêne massif, assemblées tenon-mortaise.</li>
            <li><strong>Fenêtres bois et bois-alu sur mesure</strong>, conformes aux exigences ABF pour les immeubles patrimoniaux.</li>
            <li><strong>Volets pleins, persiennés ou à projection</strong> façonnés au même atelier que les châssis qui les portent.</li>
            <li><strong>Agencement bois intérieur</strong> : bibliothèques, dressings, panneaux muraux, marches d&apos;estrade.</li>
            <li><strong>Agencement bois extérieur</strong> : claustras, bardages, capotages techniques (caches-poubelles, locaux vélos).</li>
            <li><strong>Mobilier sur mesure</strong> pour hôtels, boutiques de prestige et particuliers exigeants.</li>
          </ul>

          <h2>Pourquoi nous choisir pour vos menuiseries ?</h2>
          <ol>
            <li><strong>60 ans de pratique continue depuis 1964</strong> — l&apos;un des plus anciens ateliers de menuiserie d&apos;Île-de-France.</li>
            <li><strong>17 menuisiers sous un seul toit à Massy</strong>, sans sous-traitance : la même main façonne la pièce, la pose et assure le service après-vente.</li>
            <li><strong>Garantie décennale sur tous les ouvrages</strong>, qu&apos;ils soient neufs ou restaurés.</li>
          </ol>

          <h2>Portes d&apos;entrée et portes cochères</h2>
          <p>
            La porte d&apos;entrée d&apos;un immeuble est un ouvrage technique avant d&apos;être un objet décoratif. Elle doit résister à plusieurs décennies d&apos;intempéries, supporter des dizaines de manœuvres quotidiennes, conserver son aplomb malgré les jeux de structure, et respecter — quand le bâtiment l&apos;impose — un dessin patrimonial que la copropriété ou l&apos;architecte des Bâtiments de France a validé.
          </p>
          <p>
            Nous façonnons des portes neuves en chêne, en sapin du Nord, en moabi ou en bois exotiques certifiés, selon le cahier des charges et le budget. Nous restaurons aussi des portes existantes lorsque la structure le permet — c&apos;est souvent la solution la plus sage, à la fois pour la cohérence architecturale et pour le coût global sur vingt ans. Pour les ouvrages historiques inscrits ou classés, voir notre activité de <Link href="/restauration-patrimoniale" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">restauration patrimoniale</Link>, conduite en lien avec les Architectes des Bâtiments de France.
          </p>
          <p>
            Toutes nos portes sont assemblées à tenon et mortaise, panneautées selon le dessin d&apos;origine ou un dessin nouveau, équipées de la quincaillerie adaptée à l&apos;usage (paumelles à billes, ferme-porte hydraulique, système de contrôle d&apos;accès, motorisation sur demande). Pour la pose de serrures de haute sûreté, la motorisation des vantaux ou le contrôle d&apos;accès, nous mobilisons notre <Link href="/serrurerie" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">département serrurerie</Link>, intégré au même atelier.
          </p>

          <h2>Fenêtres et volets</h2>
          <p>
            Nous fabriquons des fenêtres bois sur mesure pour les immeubles soumis à des contraintes patrimoniales — petits bois rapportés, dormants fins, doubles vitrages discrètement insérés dans des moulures d&apos;époque. Pour les bâtiments contemporains, nous proposons des menuiseries mixtes bois-aluminium qui conjuguent l&apos;intérieur chaud d&apos;un châssis bois et la durabilité d&apos;un parement aluminium en façade.
          </p>
          <p>
            Les volets — pleins, persiennés, à projection — sont façonnés au même atelier que les châssis qui les portent. Cette unité de fabrication garantit l&apos;ajustement parfait des pièces entre elles. Les vitrages isolants et acoustiques associés à ces châssis sont fournis et posés par notre <Link href="/vitrerie" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">département vitrerie</Link>.
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

      <FaqSection items={MENUISERIE_FAQ} />

      <RelatedPages
        eyebrow="Métiers liés"
        heading="Aller plus loin avec l'atelier"
        items={[
          {
            title: "Serrurerie & ferronnerie",
            href: "/serrurerie",
            blurb:
              "Pose et entretien des serrures Bricard, blindage, contrôle d'accès, motorisation et ferronnerie sur mesure — département intégré à l'atelier de Massy.",
          },
          {
            title: "Vitrerie sur mesure",
            href: "/vitrerie",
            blurb:
              "Vitrages isolants, verres feuilletés et trempés, miroirs sur mesure : tous les vitrages des menuiseries que nous fabriquons sont posés au même atelier.",
          },
          {
            title: "Escaliers sur mesure",
            href: "/escaliers",
            blurb:
              "Escaliers suspendus, en colimaçon, autoportants ou à limon acier — dessinés, façonnés et posés sous la responsabilité d'un seul atelier.",
          },
          {
            title: "Belles portes de Paris",
            href: "/belles-portes-de-paris",
            blurb:
              "Notre petit musée en ligne des portes cochères et portes d'immeuble parisiennes traitées à Massy depuis 2012.",
          },
        ]}
      />

      <CTASection
        eyebrow="Chiffrage menuiserie"
        title="Décrivez-nous votre projet."
        text="Porte d'immeuble, fenêtres, agencement, mobilier — par téléphone, par courriel ou en venant nous voir à Massy. Les premiers conseils sont gratuits ; le chiffrage détaillé suit la visite sur site."
      />
    </>
  );
}
