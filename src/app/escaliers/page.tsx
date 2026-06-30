import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import PhotoGrid from "@/components/PhotoGrid";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { photosByCategories } from "@/lib/photos";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Escaliers sur mesure bois & acier",
  description:
    "Escaliers suspendus, en colimaçon, autoportants ou à limon acier. Conception, fabrication atelier et pose. Atelier Le Boulluec — Massy, Île-de-France.",
  alternates: { canonical: "/escaliers" },
  openGraph: {
    title: "Escaliers sur mesure bois & acier — Atelier Le Boulluec",
    description: "Escaliers suspendus, colimaçon, autoportants ou à limon acier — fabrication atelier.",
    images: ["https://ucarecdn.com/029f59c0-f79a-44d7-9773-de7a099813f4/-/format/auto/-/quality/smart/-/resize/1600x/"],
  },
};

export default function EscaliersPage() {
  const photos = photosByCategories(["escalier"], 6);
  return (
    <>
      <JsonLd data={serviceSchema("Escaliers sur mesure", metadata.description as string, "Escaliers")} />
      <PageHeader
        photoUuid="029f59c0-f79a-44d7-9773-de7a099813f4"
        eyebrow="Escaliers"
        title="Escaliers sur mesure — bois, acier, mixtes."
        subtitle="L'escalier est l'un des rares ouvrages où la justesse millimétrique se voit immédiatement. C'est pourquoi nous le traitons comme un objet à part entière."
      />

      <article className="py-20 md:py-24 bg-[#F5EFE3]">
        <Container size="narrow" className="prose-marine">
          <p className="text-lg leading-relaxed text-[#1A1A1A]/85">
            Une marche qui flotte d&apos;un demi-millimètre, un limon qui dévie, une rampe trop haute : l&apos;œil de l&apos;usager perçoit l&apos;écart même sans le formuler. Chaque escalier est étudié, dessiné, façonné, posé sous la responsabilité d&apos;un seul atelier.
          </p>

          <h2>Quatre familles d&apos;escaliers</h2>

          <h3>Escaliers à limon acier</h3>
          <p>
            Un limon central ou deux limons latéraux en acier — droit, courbé, débillardé — reçoivent des marches en bois massif, en pierre reconstituée ou en métal. C&apos;est l&apos;une de nos signatures : la pureté du dessin métallique mariée à la chaleur d&apos;une marche en chêne huilé. Adapté aux lofts, aux duplex contemporains et aux réhabilitations industrielles.
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
            Tout escalier vient avec son garde-corps, qui doit conjuguer sécurité (norme NF P01-012), esthétique et compatibilité visuelle avec l&apos;escalier qu&apos;il accompagne. Acier forgé, acier serrurier, câble inox tendu, verre feuilleté trempé, ou bois — selon le dessin choisi.
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

      <CTASection
        eyebrow="Projet d'escalier"
        title="Un escalier sur mesure demande trois à quatre mois."
        text="Entre le premier rendez-vous et la livraison. Les meilleurs projets commencent par une visite d'atelier où l'on peut toucher les bois, voir les soudures, sentir les finitions."
        cta={{ label: "Prendre rendez-vous", href: "/contact" }}
      />
    </>
  );
}
