import type { Metadata } from "next";
import SectionTitre from "@/components/SectionTitre";
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
  alternates: { canonical: "https://www.leboulluec.com/menuiserie" },
  openGraph: {
    title: "Menuiserie sur mesure à Paris & Île-de-France — Atelier Le Boulluec",
    description:
      "Portes d'entrée, portes cochères, fenêtres, agencement bois et mobilier sur mesure depuis 1964.",
    url: "https://www.leboulluec.com/menuiserie",
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

      <article className="py-20 md:py-24 bg-[#1C1714]">
        <Container size="narrow" className="prose-atelier">
          <p className="text-lg leading-relaxed text-[#EDE6DA]/85">
            <strong className="text-[#EDE6DA]">En bref —</strong> <strong>La menuiserie désigne le métier de façonnage du bois en pièces d&apos;ouvrage : portes, fenêtres, escaliers, agencements, mobilier.</strong> L&apos;Atelier Le Boulluec pratique la menuiserie depuis 1964 en Île-de-France, dans son atelier de Massy où dix-sept menuisiers fabriquent chaque année des centaines de pièces pour immeubles, commerces et maisons.
          </p>

          {/* Sommaire — les cinq rubriques du menu « Menuiserie » du site
              historique, adressees par ancre dans cette meme page. */}
          <nav aria-label="Les rubriques de la menuiserie">
            <ul className="sommaire">
              <li><a href="#Portescocheres">Portes cochères</a></li>
              <li><a href="#Portesetfenetres">Portes et fenêtres</a></li>
              <li><a href="#Agencement">Agencement</a></li>
              <li><a href="#Mobiliersinterieurs">Mobiliers intérieurs</a></li>
              <li><a href="#Amenagementsexterieurs">Aménagements extérieurs</a></li>
            </ul>
          </nav>

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

          <h2 id="Portescocheres" className="ancre">Portes cochères</h2>
          <p>
            Création et rénovation de porte cochère — travaux de réfection et de conception.
          </p>
          <p>
            Nous concevons et restaurons au sein de nos ateliers des portes cochères. Grâce à nos compétences accrues et aiguisées dans le domaine de la menuiserie, nous façonnons et restaurons tous les types de portes cochères. Nous travaillons le bois de façon à magnifier la peinture et le matériau, afin de rendre à vos portes cochères leur état d&apos;origine. Quelle que soit la taille de vos fermetures, nous sommes à même d&apos;intervenir sur des portes cochères à vantaux de grande comme de petite dimension.
          </p>
          <p>
            Notre équipe de menuiserie façonne vos portes à votre convenance : portillon inséré dans un vantail, remise en peinture complète, reprise des moulures, mise en accessibilité PMR du seuil. Nous pouvons bien entendu automatiser l&apos;ouverture de vos portes cochères, selon le système de motorisation désiré.
          </p>
          <p>
            La porte d&apos;entrée d&apos;un immeuble est un ouvrage technique avant d&apos;être un objet décoratif. Elle doit résister à plusieurs décennies d&apos;intempéries, supporter des dizaines de manœuvres quotidiennes, conserver son aplomb malgré les jeux de structure, et respecter — quand le bâtiment l&apos;impose — un dessin patrimonial que la copropriété ou l&apos;architecte des Bâtiments de France a validé.
          </p>
          <p>
            Nous façonnons des portes neuves en chêne, en sapin du Nord, en moabi ou en bois exotiques certifiés, selon le cahier des charges et le budget. Nous restaurons aussi des portes existantes lorsque la structure le permet — c&apos;est souvent la solution la plus sage, à la fois pour la cohérence architecturale et pour le coût global sur vingt ans. Pour les ouvrages historiques inscrits ou classés, voir notre activité de <Link href="/restauration-patrimoniale" className="text-[#B08D57] hover:text-[#C9AB78] underline underline-offset-4 decoration-1">restauration patrimoniale</Link>, conduite en lien avec les Architectes des Bâtiments de France.
          </p>
          <p>
            Toutes nos portes sont assemblées à tenon et mortaise, panneautées selon le dessin d&apos;origine ou un dessin nouveau, équipées de la quincaillerie adaptée à l&apos;usage (paumelles à billes, ferme-porte hydraulique, système de contrôle d&apos;accès, motorisation sur demande). Pour la pose de serrures de haute sûreté, la motorisation des vantaux ou le contrôle d&apos;accès, nous mobilisons notre <Link href="/serrurerie" className="text-[#B08D57] hover:text-[#C9AB78] underline underline-offset-4 decoration-1">département serrurerie</Link>, intégré au même atelier.
          </p>

          <h2 id="Portesetfenetres" className="ancre">Portes et fenêtres</h2>
          <p>
            Menuiserie intérieure et extérieure — bois, aluminium, acier et PVC.
          </p>
          <p>
            Projet d&apos;installation de portes ? Travaux de rénovation pour remplacer vos fenêtres ? L&apos;Atelier Le Boulluec prend en compte toutes les contraintes qui se posent et vous apporte une solution personnalisée et pertinente. Que vous souhaitiez une reproduction à l&apos;identique de vos portes et fenêtres, ou une rénovation complète de vos ouvertures et fermetures, nous menons votre projet à bien avec une grande implication.
          </p>
          <p>
            Notre expérience dans le domaine de la menuiserie nous permet de restaurer des portes et fenêtres anciennes avec différents matériaux. Que ces dernières soient partiellement ou fortement endommagées, nous aimons relever les défis et mettons à profit notre savoir-faire pour refaçonner vos huisseries : porte ornée, réfection de panneaux, reprise d&apos;une grille ancienne.
          </p>
          <p>
            Nous fabriquons des fenêtres bois sur mesure pour les immeubles soumis à des contraintes patrimoniales — petits bois rapportés, dormants fins, doubles vitrages discrètement insérés dans des moulures d&apos;époque. Pour les bâtiments contemporains, nous proposons des menuiseries mixtes bois-aluminium qui conjuguent l&apos;intérieur chaud d&apos;un châssis bois et la durabilité d&apos;un parement aluminium en façade.
          </p>
          <p>
            Les volets — pleins, persiennés, à projection — sont façonnés au même atelier que les châssis qui les portent. Cette unité de fabrication garantit l&apos;ajustement parfait des pièces entre elles. Les vitrages isolants et acoustiques associés à ces châssis sont fournis et posés par notre <Link href="/vitrerie" className="text-[#B08D57] hover:text-[#C9AB78] underline underline-offset-4 decoration-1">département vitrerie</Link>.
          </p>

          <h2 id="Agencement" className="ancre">Agencement</h2>
          <p>
            Agencement sur mesure de votre intérieur — espaces de rangement, dressings, portes intérieures moulurées.
          </p>
          <p>
            Grâce à notre atelier, réagencez votre intérieur selon toutes vos envies : nos solutions d&apos;agencement vous permettent de modeler votre espace de vie en fonction de vos besoins. Nous tenons compte de l&apos;aménagement intérieur de votre habitation afin de créer des pièces de menuiserie correspondant exactement à votre projet. Une étude personnalisée met également en lumière toutes vos attentes avant que le chantier ne commence.
          </p>
          <p>
            Conception de dressing sur mesure, création de meubles uniques, intégration de placards de toutes dimensions, portes intérieures moulurées, bibliothèque encastrée : émettez vos idées, nous nous chargeons de leur conception. Nos compagnons ont façonné en atelier des bibliothèques éclairées par bandeau LED, des façades de rangement toute hauteur à parement miroir et des agencements en médium épais destinés à recevoir une laque.
          </p>
          <p>
            Bibliothèques toute hauteur, dressings, meubles TV, panneaux muraux, banquettes, marches d&apos;estrade : nous traitons les projets d&apos;agencement dans le même atelier que les portes d&apos;immeuble. Les contraintes ne sont pas les mêmes — l&apos;agencement intérieur tolère des bois plus tendres et des finitions plus expressives — mais l&apos;exigence d&apos;ajustement reste identique.
          </p>

          <h2 id="Mobiliersinterieurs" className="ancre">Mobiliers intérieurs</h2>
          <p>
            Création de mobiliers d&apos;intérieur — aménagez tous les mobiliers de vos envies.
          </p>
          <p>
            Notre équipe de menuisiers est à votre disposition pour concevoir des meubles sur mesure à votre image. Nous travaillons tous les types de matériaux bois : massifs, panneaux mélaminés et stratifiés. À votre écoute, nous consacrons à votre projet toute l&apos;attention nécessaire pour qu&apos;il prenne vie. Une analyse approfondie par un menuisier de notre équipe détermine les dimensions, le matériau, le coloris ainsi que la forme de votre mobilier.
          </p>
          <p>
            Notre savoir-faire nous permet de réaliser tous travaux de conception de meubles d&apos;angle, bureaux et présentoirs pour commerces. Prenez également rendez-vous avec nos équipes pour l&apos;installation des <Link href="/serrurerie" className="text-[#B08D57] hover:text-[#C9AB78] underline underline-offset-4 decoration-1">serrures</Link> et des <Link href="/vitrerie" className="text-[#B08D57] hover:text-[#C9AB78] underline underline-offset-4 decoration-1">vitrages</Link> qui accompagnent ces ouvrages.
          </p>
          <p>
            Pour les hôtels, les boutiques de prestige et les particuliers exigeants, nous façonnons des pièces de mobilier — comptoirs, vitrines, présentoirs, meubles d&apos;appoint — dessinées avec l&apos;architecte ou le designer intérieur du projet. Ces commandes représentent une part minoritaire mais croissante de notre activité.
          </p>

          <h2 id="Amenagementsexterieurs" className="ancre">Aménagements extérieurs</h2>
          <p>
            Équipez vos espaces extérieurs de pièces de menuiserie sur mesure.
          </p>
          <p>
            Pour sublimer la décoration extérieure de votre lieu de vie, nous concevons des menuiseries extérieures uniques. Quelle que soit la nature de votre projet de travaux, notre entreprise se charge de la conception et de la réalisation de votre pièce de menuiserie, en tenant compte du budget que vous souhaitez lui allouer.
          </p>
          <p>
            Faites appel à notre équipe pour créer sur mesure des rampes d&apos;accès, des garde-corps, des terrasses, des abris de jardin ou des abris bus. Notre atelier réalise la fabrication et la pose de menuiseries intérieures et extérieures dans le respect des délais convenus. Nous intervenons pour toute demande de travaux sur mesure en Essonne, dans les Yvelines et dans toute l&apos;Île-de-France : n&apos;hésitez pas à demander dès maintenant votre devis gratuit et personnalisé.
          </p>
          <p>
            À l&apos;extérieur, nous intervenons aussi sur les claustras, les bardages, les capotages techniques (caches-poubelles, caches-compteurs, locaux à vélos) qui réclament une menuiserie résistant à l&apos;eau et au vandalisme tout en restant cohérente avec la façade.
          </p>

          <h2>Une méthode héritée, un outillage actualisé</h2>
          <p>
            Nos compagnons travaillent à la fois sur des machines numériques — CNC pour les pièces complexes ou répétitives — et sur des établis à main. Chaque pièce passe entre les deux : la précision de la machine pour le débit et le calibrage, la main de l&apos;artisan pour l&apos;assemblage, l&apos;ajustement et la finition.
          </p>
        </Container>
      </article>

      <section className="py-16 md:py-20 bg-[#241E1A] bois">
        <Container size="wide">
          <SectionTitre index="01" rubrique="Quelques ouvrages" titre="Portes et façonnages récents" action={<Link href="/photos" className="cartouche text-[#C9AB78] hover:text-[#EDE6DA] transition-colors">Archive des ouvrages →</Link>} />
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
            href: "/belle-portes-rue-sur-paris-et-ailleurs",
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
