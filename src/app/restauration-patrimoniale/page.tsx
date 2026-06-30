import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import PhotoGrid from "@/components/PhotoGrid";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import FaqSection from "@/components/FaqSection";
import RelatedPages from "@/components/RelatedPages";
import { photosByCategories } from "@/lib/photos";
import { serviceSchema, faqPageSchema } from "@/lib/schema";

const RESTAURATION_FAQ = [
  {
    q: "Intervenez-vous sur les immeubles classés Monuments Historiques ou inscrits à l'inventaire ?",
    a: "Oui. Nous travaillons régulièrement sur des immeubles classés ou inscrits, en lien avec les Architectes des Bâtiments de France (ABF) et les architectes du patrimoine. Nous produisons les plans d'épure, descriptifs techniques, relevés photographiques avant-après et notes de méthode qui accompagnent les autorisations de travaux.",
  },
  {
    q: "Comment se déroule la restauration d'une porte cochère ?",
    a: "Quatre étapes : 1) diagnostic sur site (essences, assemblages, ferrures, humidité) avec rapport chiffré ; 2) dépose et transport à l'atelier de Massy avec fermeture provisoire du bâtiment ; 3) travail à l'atelier (entures de chêne sec, réfection des panneaux, remise en état des ferrures laiton, peinture ou lasure d'origine) ; 4) repose, ajustement et réception. Garantie décennale.",
  },
  {
    q: "Restaurer ou remplacer : que recommandez-vous ?",
    a: "Nous orientons systématiquement vers la restauration quand l'ouvrage le permet. Le chêne sec d'une porte cochère du XIXe siècle vaut souvent mieux que les bois disponibles aujourd'hui, et restaurer coûte généralement moins cher à 20 ans, garantie décennale comprise. Nous le disons aussi clairement quand la restauration n'est plus possible.",
  },
  {
    q: "Quels ouvrages patrimoniaux restaurez-vous ?",
    a: "Portes cochères en chêne massif, portes bâtardes, fenêtres anciennes (petits bois, châssis, dormants), escaliers anciens, marquises et auvents, grilles et garde-corps en fer forgé ou fonte d'art, boiseries intérieures (lambris, soubassements, parquets). Compatibilité ABF systématiquement vérifiée.",
  },
  {
    q: "Le diagnostic patrimonial est-il payant ?",
    a: "Le diagnostic est facturé symboliquement et déduit du chantier si vous nous confiez les travaux. Il comprend une visite sur site, un rapport écrit qui distingue trois scénarios (restauration légère, restauration lourde, remplacement à l'identique) et un chiffrage pour chaque option.",
  },
];

export const metadata: Metadata = {
  title: "Restauration patrimoniale — portes cochères & menuiseries d'époque",
  description:
    "Restauration de portes cochères, fenêtres et menuiseries d'immeubles classés ou haussmanniens. Bois, fer forgé, ferrures laiton. Atelier Le Boulluec, Île-de-France.",
  alternates: { canonical: "https://leboulluec.com/restauration-patrimoniale" },
  openGraph: {
    title: "Restauration patrimoniale — Atelier Le Boulluec",
    description: "Portes cochères, ferronneries, menuiseries d'époque restaurées dans le respect des techniques d'origine.",
    url: "https://leboulluec.com/restauration-patrimoniale",
    images: ["https://ucarecdn.com/26525e22-2374-4191-b30c-b805af59fc7e/-/format/auto/-/quality/smart/-/resize/1600x/"],
  },
};

export default function RestaurationPage() {
  const photos = photosByCategories(["porte-cochere", "batiment-patrimoine"], 6);
  return (
    <>
      <JsonLd data={serviceSchema("Restauration patrimoniale", metadata.description as string, "Restauration patrimoniale")} />
      <JsonLd data={faqPageSchema(RESTAURATION_FAQ)} />
      <Breadcrumb items={[{ label: "Restauration patrimoniale", href: "/restauration-patrimoniale" }]} />
      <PageHeader
        photoUuid="26525e22-2374-4191-b30c-b805af59fc7e"
        eyebrow="Patrimoine"
        title="Restauration patrimoniale — portes cochères, ferronneries, menuiseries d'époque."
        subtitle="Restaurer un ouvrage existant plutôt que le remplacer demande davantage de métier que façonner du neuf. Il faut lire la pièce, reconnaître les essences, distinguer ce qui doit être conservé."
        imageAlt="Restauration patrimoniale d'une porte cochère parisienne par l'Atelier Le Boulluec, immeubles classés et ABF."
      />

      <article className="py-20 md:py-24 bg-[#F5EFE3]">
        <Container size="narrow" className="prose-marine">
          <p className="text-lg leading-relaxed text-[#1A1A1A]/85">
            <strong>La restauration patrimoniale désigne la remise en état d&apos;un ouvrage ancien (porte, fenêtre, escalier, ferronnerie) par conservation du bois et des ferrures d&apos;origine, en respectant les techniques et matériaux d&apos;époque.</strong> L&apos;Atelier Le Boulluec pratique la restauration patrimoniale depuis 1964 sur des immeubles haussmanniens, classés Monuments Historiques ou inscrits, en lien direct avec les Architectes des Bâtiments de France d&apos;Île-de-France.
          </p>

          <h2>Quels ouvrages patrimoniaux restaurons-nous ?</h2>
          <ul>
            <li><strong>Portes cochères en chêne massif</strong> avec ferrures laiton patinées et motorisation discrète possible.</li>
            <li><strong>Portes bâtardes et portes sur rue à grille</strong>, restaurées ou refabriquées à l&apos;identique.</li>
            <li><strong>Fenêtres anciennes</strong> : petits bois rapportés, dormants fins, vitrages compatibles ABF.</li>
            <li><strong>Escaliers anciens</strong> : limons bois, marches, balustres, rampes en ferronnerie.</li>
            <li><strong>Marquises et auvents</strong> en verre cathédrale et ferronnerie ancienne, finitions cuivre.</li>
            <li><strong>Grilles et garde-corps</strong> en fer forgé et fonte d&apos;art aux motifs historiques.</li>
            <li><strong>Boiseries intérieures</strong> : lambris, soubassements, plinthes, parquets.</li>
          </ul>

          <h2>Pourquoi nous choisir pour une restauration patrimoniale ?</h2>
          <ol>
            <li><strong>60 ans d&apos;expérience sur des immeubles haussmanniens</strong> et bâtiments classés en Île-de-France.</li>
            <li><strong>Dialogue habituel avec les Architectes des Bâtiments de France</strong> : plans d&apos;épure, descriptifs techniques et notes de méthode produits en interne.</li>
            <li><strong>Technique de l&apos;enture de chêne sec</strong> : nous greffons du bois neuf de même essence et même fil sur les zones dégradées, sans remplacer la pièce entière.</li>
          </ol>

          <h2>Pourquoi restaurer plutôt que remplacer</h2>
          <p>
            Une porte cochère parisienne du XIX<sup>e</sup> siècle a été conçue pour traverser le temps. Le chêne sec, débité sur quartier, choisi par un compagnon qui savait lire le bois, vaut mieux que la plupart des bois disponibles aujourd&apos;hui. Les assemblages tenon-mortaise chevillés, les ferrures laiton patinées, les panneaux moulurés à la main : tout cela ne se remplace pas à l&apos;identique sans un coût considérable.
          </p>
          <p>
            Restaurer permet de conserver l&apos;intégrité architecturale d&apos;un immeuble, de respecter les obligations imposées par l&apos;Architecte des Bâtiments de France quand le bâtiment est inscrit ou classé, et — souvent — de réaliser une économie significative sur le coût global, garantie décennale comprise.
          </p>
          <p>
            Nous orientons systématiquement vers la restauration quand l&apos;ouvrage le permet. Nous le disons aussi clairement quand il ne le permet plus.
          </p>

          <h2>Notre méthode de restauration</h2>

          <h3>1. Diagnostic</h3>
          <p>
            Avant tout chantier, un compagnon expérimenté inspecte la pièce sur site : essences présentes, état des assemblages, attaque de l&apos;humidité, jeux de structure, ferrures originelles, peinture ou lasure d&apos;origine. Nous produisons un rapport diagnostique chiffré qui distingue trois scénarios : restauration légère, restauration lourde, ou remplacement à l&apos;identique.
          </p>

          <h3>2. Dépose et transport</h3>
          <p>
            Pour les restaurations lourdes, la porte ou la menuiserie est déposée et transportée à l&apos;atelier de Massy. Le bâtiment reçoit une fermeture provisoire — vantail bois sécurisé, sas temporaire — pendant la durée du chantier.
          </p>

          <h3>3. Travail à l&apos;atelier</h3>
          <p>
            Les pièces dégradées sont reprises par enture de chêne sec — c&apos;est-à-dire en greffant du bois neuf de même essence et même fil sur les zones attaquées, sans remplacer la pièce entière. Les panneaux altérés sont refaits à l&apos;identique. Les ferrures sont décapées, remises en état, repolies ou re-laquées. Le tout est ensuite mis en peinture ou en lasure selon la finition d&apos;origine.
          </p>

          <h3>4. Repose et finitions</h3>
          <p>
            La pièce restaurée est reposée sur site, ajustée si nécessaire, puis livrée au client après un dernier passage de finition. La garantie décennale court à partir de la réception.
          </p>

          <h2>Champs d&apos;intervention</h2>
          <ul>
            <li><strong>Portes cochères</strong> — chêne massif, ferrures laiton, motorisation discrète possible (voir aussi <Link href="/menuiserie" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">menuiserie sur mesure</Link>)</li>
            <li><strong>Portes bâtardes et portes sur rue</strong> — restauration ou refabrication à l&apos;identique, documentées dans notre <Link href="/belles-portes-de-paris" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">petit musée des belles portes de Paris</Link></li>
            <li><strong>Fenêtres anciennes</strong> — petits bois, châssis, dormants, vitrages compatibles ABF</li>
            <li><strong>Escaliers anciens</strong> — limons bois, marches, balustres, rampes en ferronnerie ; voir nos <Link href="/escaliers" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">escaliers sur mesure</Link> pour les ouvrages neufs</li>
            <li><strong>Marquises et auvents</strong> — <Link href="/vitrerie" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">verre cathédrale</Link>, ferronnerie ancienne, finitions cuivre</li>
            <li><strong>Grilles et garde-corps</strong> — fer forgé, fonte d&apos;art, motifs historiques, en lien avec notre <Link href="/serrurerie" className="text-[#C46B2E] hover:text-[#1F3A6B] underline underline-offset-4 decoration-1">département serrurerie-ferronnerie</Link></li>
            <li><strong>Boiseries intérieures</strong> — lambris, soubassements, plinthes, parquets</li>
          </ul>

          <h2>Travail en lien avec les ABF et les architectes du patrimoine</h2>
          <p>
            Pour les immeubles inscrits à l&apos;inventaire supplémentaire ou classés Monuments Historiques, toute intervention doit recevoir l&apos;avis de l&apos;Architecte des Bâtiments de France. Nous sommes habitués à ce dialogue : production des plans d&apos;épure, des descriptifs techniques, des relevés photographiques avant-après, et des notes de méthode qui accompagnent les autorisations de travaux.
          </p>
        </Container>
      </article>

      <section className="py-16 md:py-20 bg-white">
        <Container size="wide">
          <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Chantiers de restauration</p>
          <h2 className="font-serif text-2xl md:text-3xl text-[#15294E] mb-10">
            Portes cochères et bâtiments restaurés
          </h2>
          <PhotoGrid photos={photos} columns={3} />
        </Container>
      </section>

      <FaqSection items={RESTAURATION_FAQ} />

      <RelatedPages
        eyebrow="Pour aller plus loin"
        heading="Patrimoine, menuiserie et belles portes"
        items={[
          {
            title: "Belles portes de Paris",
            href: "/belles-portes-de-paris",
            blurb:
              "Notre petit musée en ligne des portes cochères parisiennes restaurées ou refabriquées depuis 2012 — typologie, archives, adresses.",
          },
          {
            title: "Menuiserie sur mesure",
            href: "/menuiserie",
            blurb:
              "Quand la restauration n'est plus possible, fabrication à l'identique d'une porte d'immeuble en chêne massif assemblée tenon-mortaise.",
          },
          {
            title: "Serrurerie & ferronnerie",
            href: "/serrurerie",
            blurb:
              "Restauration et refabrication des grilles, garde-corps, marquises et ferrures laiton des immeubles patrimoniaux.",
          },
          {
            title: "L'atelier depuis 1964",
            href: "/a-propos",
            blurb:
              "Histoire, équipe et méthode de l'atelier — soixante ans de pratique au service des architectes du patrimoine et des syndics franciliens.",
          },
        ]}
      />

      <CTASection
        eyebrow="Diagnostic patrimonial"
        title="Demander un diagnostic."
        text="Pour une porte cochère, un escalier ancien, une marquise ou tout autre ouvrage patrimonial — un diagnostic sur site permet de déterminer si la restauration est possible et à quel coût. Le diagnostic est facturé symboliquement et déduit du chantier si vous nous confiez les travaux."
        cta={{ label: "Demander un diagnostic", href: "/contact" }}
      />
    </>
  );
}
