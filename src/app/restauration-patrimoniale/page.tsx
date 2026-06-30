import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import PhotoGrid from "@/components/PhotoGrid";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { photosByCategories } from "@/lib/photos";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restauration patrimoniale — portes cochères & menuiseries d'époque",
  description:
    "Restauration de portes cochères, fenêtres et menuiseries d'immeubles classés ou haussmanniens. Bois, fer forgé, ferrures laiton. Atelier Le Boulluec, Île-de-France.",
  alternates: { canonical: "/restauration-patrimoniale" },
  openGraph: {
    title: "Restauration patrimoniale — Atelier Le Boulluec",
    description: "Portes cochères, ferronneries, menuiseries d'époque restaurées dans le respect des techniques d'origine.",
    images: ["https://ucarecdn.com/26525e22-2374-4191-b30c-b805af59fc7e/-/format/auto/-/quality/smart/-/resize/1600x/"],
  },
};

export default function RestaurationPage() {
  const photos = photosByCategories(["porte-cochere", "batiment-patrimoine"], 6);
  return (
    <>
      <JsonLd data={serviceSchema("Restauration patrimoniale", metadata.description as string, "Restauration patrimoniale")} />
      <PageHeader
        photoUuid="26525e22-2374-4191-b30c-b805af59fc7e"
        eyebrow="Patrimoine"
        title="Restauration patrimoniale — portes cochères, ferronneries, menuiseries d'époque."
        subtitle="Restaurer un ouvrage existant plutôt que le remplacer demande davantage de métier que façonner du neuf. Il faut lire la pièce, reconnaître les essences, distinguer ce qui doit être conservé."
      />

      <article className="py-20 md:py-24 bg-[#F5EFE3]">
        <Container size="narrow" className="prose-marine">
          <p className="text-lg leading-relaxed text-[#1A1A1A]/85">
            Cette discipline — la restauration — est devenue au fil des années l&apos;une de nos spécialités les plus identifiées.
          </p>

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
            <li><strong>Portes cochères</strong> — chêne massif, ferrures laiton, motorisation discrète possible</li>
            <li><strong>Portes bâtardes et portes sur rue</strong> — restauration ou refabrication à l&apos;identique</li>
            <li><strong>Fenêtres anciennes</strong> — petits bois, châssis, dormants, vitrages compatibles ABF</li>
            <li><strong>Escaliers anciens</strong> — limons bois, marches, balustres, rampes en ferronnerie</li>
            <li><strong>Marquises et auvents</strong> — verre cathédrale, ferronnerie ancienne, finitions cuivre</li>
            <li><strong>Grilles et garde-corps</strong> — fer forgé, fonte d&apos;art, motifs historiques</li>
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

      <CTASection
        eyebrow="Diagnostic patrimonial"
        title="Demander un diagnostic."
        text="Pour une porte cochère, un escalier ancien, une marquise ou tout autre ouvrage patrimonial — un diagnostic sur site permet de déterminer si la restauration est possible et à quel coût. Le diagnostic est facturé symboliquement et déduit du chantier si vous nous confiez les travaux."
        cta={{ label: "Demander un diagnostic", href: "/contact" }}
      />
    </>
  );
}
