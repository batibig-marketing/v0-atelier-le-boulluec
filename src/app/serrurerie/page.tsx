import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import PhotoGrid from "@/components/PhotoGrid";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { photosByCategories } from "@/lib/photos";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Serrurerie professionnelle Paris & Île-de-France",
  description:
    "Pose et remplacement de serrures, blindage, contrôle d'accès, motorisation, ferronnerie sur mesure. Membre du réseau Bricard Serruriers Confiance — Atelier Le Boulluec.",
  alternates: { canonical: "/serrurerie" },
  openGraph: {
    title: "Serrurerie professionnelle — Réseau Bricard Serruriers Confiance",
    description: "Sécurisation des accès d'immeuble, blindage, contrôle d'accès, motorisation, ferronnerie sur mesure.",
    images: ["https://ucarecdn.com/2ea887a0-7113-4e97-973c-7478c48e6ebe/-/format/auto/-/quality/smart/-/resize/1600x/"],
  },
};

export default function SerruleriePage() {
  const photos = photosByCategories(["grille", "porte-sas", "motorisation"], 6);
  return (
    <>
      <JsonLd data={serviceSchema("Serrurerie & ferronnerie", metadata.description as string, "Serrurerie")} />
      <PageHeader
        photoUuid="2ea887a0-7113-4e97-973c-7478c48e6ebe"
        eyebrow="Serrurerie · Ferronnerie"
        title="Serrurerie & ferronnerie — sécurité et ouvrages d'acier."
        subtitle="La serrurerie est entrée à l'atelier dans les années 1980. Aujourd'hui c'est un département à part entière, qui couvre la sécurisation des accès comme la ferronnerie d'art."
      />

      <article className="py-20 md:py-24 bg-[#F5EFE3]">
        <Container size="narrow" className="prose-marine">
          <p className="text-lg leading-relaxed text-[#1A1A1A]/85">
            On ne pose pas une belle porte d&apos;immeuble sans s&apos;assurer que la ferrure et la fermeture tiennent leur rôle. La serrurerie est entrée naturellement dans l&apos;atelier, en complément de la menuiserie.
          </p>

          <h2>Membre du réseau Bricard Serruriers Confiance</h2>
          <p>
            Nous sommes l&apos;un des serruriers d&apos;Île-de-France membres du réseau <strong>Bricard Serruriers Confiance</strong> — un label que le fabricant historique réserve à un cercle restreint d&apos;artisans capables d&apos;installer, d&apos;entretenir et de garantir l&apos;ensemble de sa gamme.
          </p>
          <ul>
            <li>un accès aux serrures de haute sûreté Bricard à clé brevetée non reproductible,</li>
            <li>la maîtrise des cylindres anti-bumping, anti-perçage, anti-cassage,</li>
            <li>la formation continue aux nouvelles générations de produits,</li>
            <li>une intervention sous garantie constructeur sur les serrures Bricard installées par nos soins.</li>
          </ul>
          <p>
            Pour un syndic ou une direction immobilière, le label est une assurance objective : les serrures posées seront entretenues dans la durée par un professionnel reconnu par le fabricant.
          </p>

          <h2>Sécurisation des accès d&apos;immeuble</h2>
          <ul>
            <li><strong>Serrures de porte palière</strong> — remplacement, mise à niveau A2P*, ré-organigramme,</li>
            <li><strong>Porte cochère</strong> — serrure carénée, gâche électrique, ventouse électromagnétique,</li>
            <li><strong>Sas d&apos;entrée et grilles</strong> — pose et entretien des grilles, gâches, ferme-portes,</li>
            <li><strong>Boîtes aux lettres</strong> — pose de batteries normalisées La Poste, ré-affectation, remplacement complet.</li>
          </ul>
          <p>
            Pour les copropriétés en cours de mise en sécurité, nous produisons un audit serrurier préalable — gratuit pour les bâtiments dont le syndic nous consulte pour un premier ouvrage.
          </p>

          <h2>Blindage de portes palières</h2>
          <p>Trois niveaux selon le risque et le budget :</p>
          <ul>
            <li><strong>Blindage léger</strong> — tôle d&apos;acier sur la face intérieure, serrure trois points, cornière anti-pince,</li>
            <li><strong>Blindage renforcé</strong> — porte d&apos;origine doublée d&apos;un caisson acier, serrure cinq points A2P**, cylindre haute sûreté,</li>
            <li><strong>Bloc-porte blindé</strong> — dépose de la porte d&apos;origine, pose d&apos;un bloc-porte certifié A2P BP1, BP2 ou BP3.</li>
          </ul>
          <p>
            Tous nos blindages sont posés par un seul compagnon spécialisé, formé aux produits Picard, Fichet et Bricard.
          </p>

          <h2>Contrôle d&apos;accès et motorisation</h2>
          <p>
            Vidéophonie, contrôle d&apos;accès par badge, motorisation de porte cochère. Nous installons les solutions <strong>Intratone</strong>, <strong>Comelit</strong>, <strong>Geze</strong>, <strong>Faac</strong> et <strong>Came</strong>, et savons les intégrer sur des ouvrages anciens sans dégrader leur cohérence visuelle.
          </p>

          <h2>Ferronnerie sur mesure</h2>
          <p>
            Le département produit également des <strong>grilles de défense de fenêtres, garde-corps, grilles de sas et marquises</strong> — autant d&apos;ouvrages d&apos;acier dessinés, façonnés, soudés et posés à l&apos;atelier.
          </p>
        </Container>
      </article>

      <section className="py-16 md:py-20 bg-white">
        <Container size="wide">
          <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Réalisations</p>
          <h2 className="font-serif text-2xl md:text-3xl text-[#15294E] mb-10">
            Grilles, sas et motorisations
          </h2>
          <PhotoGrid photos={photos} columns={3} />
        </Container>
      </section>

      <CTASection
        eyebrow="Intervention serrurerie"
        title="Audit, blindage, motorisation, ferronnerie."
        text="Un appel ou un courriel suffit pour planifier la visite technique."
        cta={{ label: "Demander un rendez-vous", href: "/contact" }}
      />
    </>
  );
}
