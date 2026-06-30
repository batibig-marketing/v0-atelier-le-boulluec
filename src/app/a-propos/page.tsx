import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import References from "@/components/References";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "L'atelier — histoire & équipe depuis 1964",
  description:
    "Soixante ans de menuiserie, serrurerie et restauration patrimoniale à Paris et en Île-de-France. Histoire, équipe et références de l'Atelier Le Boulluec.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "L'atelier — histoire & équipe de l'Atelier Le Boulluec depuis 1964",
    description: "Trois adresses, une méthode : un atelier intégré, plusieurs métiers réunis.",
    images: ["https://ucarecdn.com/40e2cd05-e893-45b2-a4fe-0743c5e2e887/-/format/auto/-/quality/smart/-/resize/1600x/"],
  },
};

export default function AProposPage() {
  return (
    <>
      <PageHeader
        photoUuid="40e2cd05-e893-45b2-a4fe-0743c5e2e887"
        eyebrow="L'atelier"
        title="Soixante ans, trois adresses, une méthode."
        subtitle="Fondé en 1964 à Fontenay-aux-Roses, installé à Massy depuis 2020. Le Boulluec reste Le Boulluec."
      />

      <article className="py-20 md:py-24 bg-[#F5EFE3]">
        <Container size="narrow" className="prose-marine">
          <h2>Soixante ans, trois adresses, une méthode</h2>
          <p>
            L&apos;Atelier Le Boulluec a été fondé en 1964 à Fontenay-aux-Roses, dans les Hauts-de-Seine, par un menuisier qui voulait travailler le bois pour les immeubles parisiens — sans le compromis qu&apos;imposait alors la spécialisation industrielle. L&apos;atelier est resté à Fontenay pendant cinquante ans, le temps de bâtir une réputation auprès des syndics de copropriété de la rive gauche et des grands comptes corporate.
          </p>
          <p>
            En 2015, l&apos;atelier déménage à Châtenay-Malabry. Cinq années plus tard, en septembre 2020, il s&apos;installe à Massy — dans des locaux dimensionnés pour la cadence actuelle : façonnage parallèle, machines numériques, espace de stockage pour les pièces en attente de pose, et — surtout — la possibilité de recevoir les clients et leur faire visiter les chantiers en cours.
          </p>
          <p>
            Trois adresses, mais une même méthode héritée : un atelier intégré, plusieurs métiers réunis, un compagnon qui suit sa pièce du relevé jusqu&apos;à la pose.
          </p>

          <h2>L&apos;équipe aujourd&apos;hui</h2>
          <p>
            Dix-sept menuisiers travaillent à l&apos;atelier de Massy. À leurs côtés, une équipe administrative et commerciale assure le lien avec les syndics, les architectes et les directions immobilières. Plusieurs compagnons sont avec nous depuis plus de quinze ans ; d&apos;autres sont arrivés plus récemment, formés au CAP ou au Brevet Professionnel de menuisier, parfois en alternance dans notre atelier.
          </p>
          <p>
            Le métier de serrurier est entré progressivement dans l&apos;atelier dans les années 1980, comme un prolongement naturel de la menuiserie. Le département compte aujourd&apos;hui deux compagnons spécialisés et un poste d&apos;apprentissage permanent. Le département vitrerie fonctionne en lien direct avec un partenaire verrier historique de la couronne parisienne.
          </p>

          <h2>Notre éthique de travail</h2>
          <h3>1. Un seul atelier, plusieurs métiers</h3>
          <p>
            Nous ne sous-traitons pas la menuiserie. Nous ne sous-traitons pas la serrurerie. Nous ne sous-traitons pas la vitrerie. Tout passe par Massy, sous le même toit, sous la responsabilité du même chef d&apos;atelier.
          </p>
          <h3>2. Restaurer plutôt que remplacer</h3>
          <p>
            Quand l&apos;ouvrage le permet. Nous orientons systématiquement vers la solution la plus respectueuse de l&apos;existant, même quand elle est moins rentable pour nous à court terme. Sur dix ans, c&apos;est la seule façon de garder des clients.
          </p>
          <h3>3. Une garantie réelle</h3>
          <p>
            Décennale sur les ouvrages neufs et restaurés. Nous savons où sont les pièces que nous avons posées il y a vingt ans, et nous y retournons quand il le faut.
          </p>
          <h3>4. Pas de discours superflu</h3>
          <p>
            Nous laissons l&apos;ouvrage parler. Cette page elle-même se veut courte par principe.
          </p>

          <h2>L&apos;atelier dans le Groupe BATIBIG</h2>
          <p>
            Depuis quelques années, l&apos;Atelier Le Boulluec a rejoint le Groupe BATIBIG, qui réunit plusieurs entreprises artisanales du second œuvre du bâtiment en Île-de-France. Cette appartenance nous a apporté un accès à des moyens administratifs et commerciaux mutualisés, sans rien changer à l&apos;organisation de l&apos;atelier ni à la signature des chantiers.
          </p>

          <h2>Réseau Bricard Serruriers Confiance</h2>
          <p>
            Nous sommes l&apos;un des serruriers d&apos;Île-de-France membres du réseau <strong>Bricard Serruriers Confiance</strong>. Cette appartenance, attribuée à un cercle restreint d&apos;artisans, certifie notre compétence sur la gamme complète des serrures Bricard — et conditionne nos interventions sous garantie constructeur sur ces équipements.
          </p>
        </Container>
      </article>

      <Stats />
      <References />

      <CTASection
        eyebrow="Venir nous voir"
        title="L'atelier de Massy se visite sur rendez-vous."
        text="Vingt minutes sur place suffisent à comprendre comment l'on travaille ici — les établis, les machines, les pièces en cours, les portes cochères démontées qui attendent leur repose dans un immeuble parisien."
        cta={{ label: "Prendre rendez-vous", href: "/contact" }}
      />
    </>
  );
}
