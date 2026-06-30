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

const ESCALIERS_FAQ = [
  {
    q: "Quel est le délai pour un escalier sur mesure ?",
    a: "Un escalier sur mesure demande 3 à 4 mois entre le premier rendez-vous et la livraison : relevé sur site, dessin, étude de structure, façonnage à l'atelier de Massy et pose. Les escaliers suspendus, qui nécessitent une étude structurelle plus poussée, peuvent demander 4 à 5 mois.",
  },
  {
    q: "Quels types d'escaliers fabriquez-vous ?",
    a: "Quatre familles : escaliers à limon acier (droits, courbés, débillardés), escaliers suspendus (fixation murale ou câble inox), escaliers en colimaçon (hélicoïdaux pour combles et mezzanines) et escaliers autoportants (sans appui mural intermédiaire). Tous fabriqués à l'atelier de Massy.",
  },
  {
    q: "Vos escaliers sont-ils conformes à la norme NF P01-012 ?",
    a: "Oui. Tous nos escaliers et garde-corps respectent la norme NF P01-012 (hauteur de marche, garde-corps, échappée). Nous prenons en charge la vérification réglementaire dès la phase d'étude de structure, avant fabrication.",
  },
  {
    q: "Travaillez-vous avec des architectes et des bureaux d'études ?",
    a: "Oui. Nous travaillons régulièrement à partir de plans d'architecte et nous nous insérons dans des équipes de maîtrise d'œuvre. Notre bureau d'études interne peut produire les plans d'exécution à partir d'une intention esquissée, ou exécuter au trait juste un plan déjà figé.",
  },
  {
    q: "Quels matériaux utilisez-vous pour les marches et les garde-corps ?",
    a: "Marches : bois massif (chêne huilé, hêtre, frêne), pierre reconstituée, métal laqué ou brut verni. Garde-corps : acier forgé, acier serrurier, câble inox tendu, verre feuilleté trempé, ou bois — selon le dessin choisi et la compatibilité visuelle avec l'escalier qui l'accompagne.",
  },
];

export const metadata: Metadata = {
  title: "Escaliers sur mesure bois & acier",
  description:
    "Escaliers suspendus, en colimaçon, autoportants ou à limon acier. Conception, fabrication atelier et pose. Atelier Le Boulluec — Massy, Île-de-France.",
  alternates: { canonical: "https://leboulluec.com/escaliers" },
  openGraph: {
    title: "Escaliers sur mesure bois & acier — Atelier Le Boulluec",
    description: "Escaliers suspendus, colimaçon, autoportants ou à limon acier — fabrication atelier.",
    url: "https://leboulluec.com/escaliers",
    images: ["https://ucarecdn.com/029f59c0-f79a-44d7-9773-de7a099813f4/-/format/auto/-/quality/smart/-/resize/1600x/"],
  },
};

export default function EscaliersPage() {
  const photos = photosByCategories(["escalier"], 6);
  return (
    <>
      <JsonLd data={serviceSchema("Escaliers sur mesure", metadata.description as string, "Escaliers")} />
      <JsonLd data={faqPageSchema(ESCALIERS_FAQ)} />
      <Breadcrumb items={[{ label: "Escaliers", href: "/escaliers" }]} />
      <PageHeader
        photoUuid="029f59c0-f79a-44d7-9773-de7a099813f4"
        eyebrow="Escaliers"
        title="Escaliers sur mesure — bois, acier, mixtes."
        subtitle="L'escalier est l'un des rares ouvrages où la justesse millimétrique se voit immédiatement. C'est pourquoi nous le traitons comme un objet à part entière."
        imageAlt="Escalier sur mesure bois et acier fabriqué par l'Atelier Le Boulluec à Massy."
      />

      <article className="py-20 md:py-24 bg-[#F5EFE3]">
        <Container size="narrow" className="prose-marine">
          <p className="text-lg leading-relaxed text-[#1A1A1A]/85">
            <strong>Un escalier sur mesure est un ouvrage conçu, dessiné, façonné et posé spécifiquement pour un site donné, par opposition à un escalier de série livré en kit.</strong> L&apos;Atelier Le Boulluec fabrique des escaliers sur mesure depuis 1964, dans son atelier de Massy : escaliers à limon acier, suspendus, en colimaçon ou autoportants, en bois, acier ou mixtes. Délai standard : 3 à 4 mois entre le premier rendez-vous et la pose.
          </p>

          <h2>Quels sont nos escaliers sur mesure phares ?</h2>
          <ul>
            <li><strong>Escaliers à limon acier</strong> : limon central ou latéraux, marches bois massif ou métal, signature des lofts contemporains.</li>
            <li><strong>Escaliers suspendus</strong> : marches retenues par fixation murale dissimulée ou câble inox tendu.</li>
            <li><strong>Escaliers en colimaçon</strong> : solution hélicoïdale pour combles, mezzanines et duplex à surface réduite.</li>
            <li><strong>Escaliers autoportants</strong> : sans appui mural intermédiaire, pour espaces ouverts contemporains.</li>
            <li><strong>Garde-corps acier, verre, bois ou câble inox</strong> conformes à la norme NF P01-012.</li>
          </ul>

          <h2>Pourquoi nous choisir pour votre escalier sur mesure ?</h2>
          <ol>
            <li><strong>Atelier intégré bois + acier + verre</strong> : pas de coordination entre sous-traitants, l&apos;escalier sort juste.</li>
            <li><strong>Bureau d&apos;études interne</strong> capable de produire les plans d&apos;exécution ou d&apos;exécuter un plan d&apos;architecte au trait juste.</li>
            <li><strong>Étude de structure systématique</strong> en lien avec un bureau partenaire pour les escaliers suspendus et autoportants.</li>
          </ol>

          <h2>Quatre familles d&apos;escaliers</h2>

          <h3>Escaliers à limon acier</h3>
          <p>
            Un limon central ou deux limons latéraux en acier — droit, courbé, débillardé — reçoivent des marches en bois massif, en pierre reconstituée ou en métal. C&apos;est l&apos;une de nos signatures : la pureté du dessin métallique mariée à la chaleur d&apos;une marche en chêne huilé. Les pièces acier sont dessinées et soudées par notre <Link href="/serrurerie" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">département serrurerie-ferronnerie</Link>. Adapté aux lofts, aux duplex contemporains et aux réhabilitations industrielles.
          </p>

          <h3>Escaliers suspendus</h3>
          <p>
            Les marches semblent flotter, retenues par une fixation murale dissimulée ou par un câble inox tendu. L&apos;effet visuel est saisissant, mais la mise en œuvre exige une étude structurelle préalable que nous menons systématiquement avec un bureau d&apos;études partenaire.
          </p>

          <h3>Escaliers en colimaçon</h3>
          <p>
            Pour les contraintes de surface réduite — accès à des combles, à une mezzanine, à un duplex — l&apos;escalier hélicoïdal demeure la solution la plus efficiente. Nous en façonnons en acier laqué, en acier brut verni, ou en mixte acier-bois.
          </p>

          <h3>Escaliers autoportants</h3>
          <p>
            Sans appui mural intermédiaire, l&apos;escalier autoportant repose uniquement sur ses départs et ses arrivées. Solution élégante pour des espaces ouverts, mais exigeante en calcul de section et en fixation.
          </p>

          <h2>La méthode atelier</h2>
          <ol>
            <li><strong>Relevé sur site</strong> — mesures laser, prise des cotes structurelles, repérage des contraintes (poutres, gaines, fenêtres).</li>
            <li><strong>Épure et dessin</strong> — plan d&apos;exécution à l&apos;échelle 1, validation avec le client et l&apos;architecte si présent.</li>
            <li><strong>Étude de structure</strong> — calcul de section, vérification réglementaire (hauteur de marche, garde-corps, échappée).</li>
            <li><strong>Façonnage à l&apos;atelier de Massy</strong> — débit, assemblage, soudure pour les pièces acier, vernissage ou laquage en cabine.</li>
            <li><strong>Pose</strong> — dépose de l&apos;ancien escalier le cas échéant, repose protégée, ajustements finaux, réception avec le client.</li>
          </ol>

          <h2>Garde-corps et rampes</h2>
          <p>
            Tout escalier vient avec son garde-corps, qui doit conjuguer sécurité (norme NF P01-012), esthétique et compatibilité visuelle avec l&apos;escalier qu&apos;il accompagne. Acier forgé, acier serrurier, câble inox tendu, <Link href="/vitrerie" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">verre feuilleté trempé</Link>, ou bois — selon le dessin choisi. Pour les escaliers anciens d&apos;immeubles patrimoniaux (limons bois, balustres, rampes en ferronnerie), voir notre activité de <Link href="/restauration-patrimoniale" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">restauration patrimoniale</Link>.
          </p>

          <h2>Pour les architectes et maîtres d&apos;œuvre</h2>
          <p>
            Nous travaillons régulièrement à partir de plans d&apos;architecte et savons nous insérer dans une équipe de maîtrise d&apos;œuvre. Notre bureau d&apos;études peut produire les plans d&apos;exécution à partir d&apos;une intention esquissée, ou exécuter au trait juste un plan déjà figé.
          </p>
        </Container>
      </article>

      <section className="py-16 md:py-20 bg-white">
        <Container size="wide">
          <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Réalisations</p>
          <h2 className="font-serif text-2xl md:text-3xl text-[#15294E] mb-10">
            Quelques escaliers façonnés à Massy
          </h2>
          <PhotoGrid photos={photos} columns={3} />
        </Container>
      </section>

      <FaqSection items={ESCALIERS_FAQ} />

      <RelatedPages
        eyebrow="Métiers liés"
        heading="L'atelier intégré"
        items={[
          {
            title: "Serrurerie & ferronnerie",
            href: "/serrurerie",
            blurb:
              "Limons acier, garde-corps en fer forgé ou acier serrurier, soudures et finitions exécutés au même atelier que la partie bois.",
          },
          {
            title: "Menuiserie sur mesure",
            href: "/menuiserie",
            blurb:
              "Marches bois massif (chêne, hêtre, frêne), main-courantes et habillages bois façonnés en parallèle de l'ossature acier.",
          },
          {
            title: "Vitrerie sur mesure",
            href: "/vitrerie",
            blurb:
              "Garde-corps en verre feuilleté trempé et marches en verre — fournis et posés par notre département vitrerie.",
          },
          {
            title: "Restauration patrimoniale",
            href: "/restauration-patrimoniale",
            blurb:
              "Restauration des escaliers anciens : limons bois, marches, balustres, rampes en ferronnerie d'époque.",
          },
        ]}
      />

      <CTASection
        eyebrow="Projet d'escalier"
        title="Un escalier sur mesure demande trois à quatre mois."
        text="Entre le premier rendez-vous et la livraison. Les meilleurs projets commencent par une visite d'atelier où l'on peut toucher les bois, voir les soudures, sentir les finitions."
        cta={{ label: "Prendre rendez-vous", href: "/contact" }}
      />
    </>
  );
}
