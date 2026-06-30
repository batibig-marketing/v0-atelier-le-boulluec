import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import References from "@/components/References";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import FaqSection from "@/components/FaqSection";
import RelatedPages from "@/components/RelatedPages";
import { aboutPageSchema, faqPageSchema } from "@/lib/schema";

const ABOUT_FAQ = [
  {
    q: "Depuis quand l'Atelier Le Boulluec existe-t-il ?",
    a: "L'Atelier Le Boulluec a été fondé en 1964 à Fontenay-aux-Roses, soit plus de 60 ans d'activité ininterrompue. Trois adresses se sont succédé : Fontenay-aux-Roses de 1964 à 2015, Châtenay-Malabry de 2015 à 2020, puis Massy (91300) depuis septembre 2020.",
  },
  {
    q: "Combien de menuisiers travaillent à l'atelier ?",
    a: "Dix-sept menuisiers travaillent à l'atelier de Massy, complétés par deux compagnons spécialisés au département serrurerie et une équipe administrative et commerciale. Plusieurs compagnons sont avec nous depuis plus de quinze ans ; d'autres sont arrivés plus récemment, formés au CAP ou au Brevet Professionnel.",
  },
  {
    q: "Quelles sont vos principales références clients ?",
    a: "Nous travaillons pour les Maisons Cartier et Van Cleef & Arpels, le groupe Dassault, Yves Rocher, les Bateaux Parisiens et Schlumberger, ainsi que pour de nombreux syndics de copropriété d'Île-de-France et architectes du patrimoine en lien avec les Bâtiments de France.",
  },
  {
    q: "Êtes-vous certifiés ou labellisés ?",
    a: "Oui. Nous sommes membres du réseau Bricard Serruriers Confiance — label que le fabricant historique réserve à un cercle restreint d'artisans formés à toute sa gamme de haute sûreté. Nous sommes également membres du Groupe BATIBIG, fédération d'entreprises artisanales du second œuvre en Île-de-France.",
  },
  {
    q: "Sous-traitez-vous certains métiers ?",
    a: "Non. Nous ne sous-traitons ni la menuiserie, ni la serrurerie, ni la vitrerie. Tout passe par l'atelier de Massy, sous le même toit, sous la responsabilité du même chef d'atelier. Cette intégration est la condition pour que chaque pièce sorte juste, sans rupture de chaîne entre métiers.",
  },
  {
    q: "Comment obtenir un devis ou un rendez-vous ?",
    a: "Par téléphone au 01 60 12 06 49, par courriel à contact@leboulluec.fr, ou via le formulaire de la page Contact. Nous reviendrons vers vous sous 48 heures ouvrées. Une visite d'atelier de vingt minutes est généralement le meilleur point de départ pour les syndics et architectes qui nous découvrent.",
  },
];

export const metadata: Metadata = {
  title: "L'atelier — histoire & équipe depuis 1964",
  description:
    "Soixante ans de menuiserie, serrurerie et restauration patrimoniale à Paris et en Île-de-France. Histoire, équipe et références de l'Atelier Le Boulluec.",
  alternates: { canonical: "https://leboulluec.com/a-propos" },
  openGraph: {
    title: "L'atelier — histoire & équipe de l'Atelier Le Boulluec depuis 1964",
    description: "Trois adresses, une méthode : un atelier intégré, plusieurs métiers réunis.",
    url: "https://leboulluec.com/a-propos",
    images: ["https://ucarecdn.com/40e2cd05-e893-45b2-a4fe-0743c5e2e887/-/format/auto/-/quality/smart/-/resize/1600x/"],
  },
};

export default function AProposPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema()} />
      <JsonLd data={faqPageSchema(ABOUT_FAQ)} />
      <Breadcrumb items={[{ label: "L'atelier", href: "/a-propos" }]} />
      <PageHeader
        photoUuid="40e2cd05-e893-45b2-a4fe-0743c5e2e887"
        eyebrow="L'atelier"
        title="Soixante ans, trois adresses, une méthode."
        subtitle="Fondé en 1964 à Fontenay-aux-Roses, installé à Massy depuis 2020. Le Boulluec reste Le Boulluec."
        imageAlt="Atelier de menuiserie Le Boulluec à Massy — 17 menuisiers, soixante ans de pratique en Île-de-France."
      />

      <article className="py-20 md:py-24 bg-[#F5EFE3]">
        <Container size="narrow" className="prose-marine">
          <p className="text-lg leading-relaxed text-[#1A1A1A]/85">
            <strong>L&apos;Atelier Le Boulluec est une entreprise familiale artisanale fondée en 1964, spécialisée en menuiserie, serrurerie, vitrerie, escaliers sur mesure et restauration patrimoniale.</strong> 17 menuisiers travaillent aujourd&apos;hui à l&apos;atelier de Massy (91300). L&apos;entreprise est membre du réseau Bricard Serruriers Confiance et du Groupe BATIBIG.
          </p>

          <h2>Notre histoire en dates clés</h2>
          <ul>
            <li><strong>1964</strong> — Fondation de l&apos;Atelier Le Boulluec à Fontenay-aux-Roses (Hauts-de-Seine).</li>
            <li><strong>Années 1980</strong> — Intégration progressive du métier de serrurier en complément de la menuiserie.</li>
            <li><strong>2012</strong> — Lancement des archives photographiques des portes cochères parisiennes restaurées.</li>
            <li><strong>2015</strong> — Déménagement de l&apos;atelier à Châtenay-Malabry.</li>
            <li><strong>Septembre 2020</strong> — Installation dans les locaux actuels du 6 Rue de l&apos;Aulnaye Dracourt, à Massy (Essonne).</li>
            <li><strong>2024-2026</strong> — Plus de 60 ans d&apos;activité ininterrompue ; rattachement au Groupe BATIBIG.</li>
          </ul>

          <h2>Notre équipe en chiffres</h2>
          <ul>
            <li><strong>17 menuisiers</strong> à plein temps à l&apos;atelier de Massy.</li>
            <li><strong>2 compagnons spécialisés serrurerie</strong> + 1 poste d&apos;apprentissage permanent.</li>
            <li><strong>1 département vitrerie</strong> en lien avec un partenaire verrier historique de la couronne parisienne.</li>
            <li><strong>Plusieurs compagnons</strong> avec plus de 15 ans d&apos;ancienneté dans l&apos;atelier.</li>
            <li><strong>Note Google 4,2 / 5</strong> sur 40 avis clients.</li>
          </ul>

          <h2>Nos références</h2>
          <p>
            L&apos;atelier travaille pour les <strong>Maisons Cartier</strong> et <strong>Van Cleef &amp; Arpels</strong> (boutiques de prestige), le <strong>groupe Dassault</strong>, <strong>Yves Rocher</strong>, les <strong>Bateaux Parisiens</strong> et <strong>Schlumberger</strong>, ainsi que pour de nombreux syndics de copropriété d&apos;Île-de-France et architectes du patrimoine en lien avec les Architectes des Bâtiments de France.
          </p>

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
            Nous ne sous-traitons pas la <Link href="/menuiserie" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">menuiserie</Link>. Nous ne sous-traitons pas la <Link href="/serrurerie" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">serrurerie</Link>. Nous ne sous-traitons pas la <Link href="/vitrerie" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">vitrerie</Link>. Tout passe par Massy, sous le même toit, sous la responsabilité du même chef d&apos;atelier.
          </p>
          <h3>2. Restaurer plutôt que remplacer</h3>
          <p>
            Quand l&apos;ouvrage le permet. Nous orientons systématiquement vers la solution la plus respectueuse de l&apos;existant, même quand elle est moins rentable pour nous à court terme. Sur dix ans, c&apos;est la seule façon de garder des clients. C&apos;est l&apos;esprit de notre activité de <Link href="/restauration-patrimoniale" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">restauration patrimoniale</Link>, et c&apos;est ce que documentent les archives des <Link href="/belles-portes-de-paris" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">belles portes de Paris</Link>.
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

      <FaqSection items={ABOUT_FAQ} />

      <RelatedPages
        eyebrow="Nos métiers"
        heading="Découvrir les ateliers"
        items={[
          {
            title: "Menuiserie sur mesure",
            href: "/menuiserie",
            blurb:
              "Le métier historique de l'atelier depuis 1964 : portes d'immeuble, fenêtres, agencement bois et mobilier sur mesure.",
          },
          {
            title: "Serrurerie & ferronnerie",
            href: "/serrurerie",
            blurb:
              "Pose et entretien des serrures Bricard, blindage, contrôle d'accès, motorisation et ferronnerie d'art.",
          },
          {
            title: "Vitrerie sur mesure",
            href: "/vitrerie",
            blurb:
              "Vitrages isolants, verres feuilletés et trempés, miroirs sur mesure et dépannage 24-48h en Île-de-France.",
          },
          {
            title: "Escaliers sur mesure",
            href: "/escaliers",
            blurb:
              "Escaliers suspendus, en colimaçon, autoportants ou à limon acier — dessinés, façonnés et posés au même atelier.",
          },
          {
            title: "Restauration patrimoniale",
            href: "/restauration-patrimoniale",
            blurb:
              "Portes cochères, ferronneries, menuiseries d'époque restaurées en lien avec les Architectes des Bâtiments de France.",
          },
          {
            title: "Belles portes de Paris",
            href: "/belles-portes-de-paris",
            blurb:
              "Notre petit musée en ligne des portes d'immeuble parisiennes restaurées ou refabriquées depuis 2012.",
          },
        ]}
      />

      <CTASection
        eyebrow="Venir nous voir"
        title="L'atelier de Massy se visite sur rendez-vous."
        text="Vingt minutes sur place suffisent à comprendre comment l'on travaille ici — les établis, les machines, les pièces en cours, les portes cochères démontées qui attendent leur repose dans un immeuble parisien."
        cta={{ label: "Prendre rendez-vous", href: "/contact" }}
      />
    </>
  );
}
