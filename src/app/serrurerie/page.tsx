import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  AppelContact,
  Bandeau,
  Bande,
  Fil,
  Galerie,
  Ouverture,
  Questions,
  Rangee,
  Suite,
  Voisines,
} from "@/components/Blocs";
import { galerie, photo } from "@/lib/photos";
import { serviceSchema, faqPageSchema } from "@/lib/schema";

const SERRURERIE_FAQ = [
  {
    q: "Êtes-vous certifiés Bricard ?",
    a: "Oui. L'Atelier Le Boulluec est membre du réseau Bricard Serruriers Confiance, label que le fabricant historique réserve à un cercle restreint d'artisans formés à toute sa gamme de haute sûreté. Cette certification donne droit à la garantie constructeur sur les serrures Bricard que nous installons.",
  },
  {
    q: "Quel est le délai d'intervention pour un dépannage serrurerie ?",
    a: "Pour les copropriétés et grands comptes sous contrat d'entretien, nous intervenons sous 24 à 48 heures. Pour les chantiers programmés (blindage, motorisation, contrôle d'accès), le délai standard est de 2 à 4 semaines après visite technique.",
  },
  {
    q: "Quels niveaux de blindage de porte palière proposez-vous ?",
    a: "Trois niveaux selon le risque et le budget : blindage léger (tôle d'acier intérieure + serrure 3 points + cornière anti-pince), blindage renforcé (caisson acier + serrure 5 points A2P** + cylindre haute sûreté), et bloc-porte blindé certifié A2P BP1, BP2 ou BP3.",
  },
  {
    q: "Travaillez-vous avec des syndics de copropriété ?",
    a: "Oui. Nous travaillons avec de nombreux syndics d'Île-de-France sur la sécurisation des accès d'immeuble : remplacement de serrures de porte palière, organigrammes, mise à niveau A2P, motorisation de portes cochères, vidéophonie. Audit serrurier offert aux syndics qui nous consultent pour un premier ouvrage.",
  },
  {
    q: "Posez-vous des systèmes de contrôle d'accès et de motorisation ?",
    a: "Oui. Nous installons les solutions Intratone, Comelit, Geze, Faac et Came : vidéophonie, contrôle d'accès par badge, motorisation de porte cochère. Nous savons intégrer ces équipements sur des ouvrages anciens sans dégrader leur cohérence visuelle.",
  },
];

export const metadata: Metadata = {
  title: "Serrurerie professionnelle Paris & Île-de-France",
  description:
    "Pose et remplacement de serrures, blindage, contrôle d'accès, motorisation, ferronnerie sur mesure. Membre du réseau Bricard Serruriers Confiance — Atelier Le Boulluec.",
  alternates: { canonical: "https://www.leboulluec.com/serrurerie" },
  openGraph: {
    title: "Serrurerie professionnelle — Réseau Bricard Serruriers Confiance",
    description: "Sécurisation des accès d'immeuble, blindage, contrôle d'accès, motorisation, ferronnerie sur mesure.",
    url: "https://www.leboulluec.com/serrurerie",
    images: ["https://ucarecdn.com/2ea887a0-7113-4e97-973c-7478c48e6ebe/-/format/auto/-/quality/smart/-/resize/1600x/"],
  },
};

export default function SerrureriePage() {
  return (
    <>
      <JsonLd data={serviceSchema("Serrurerie & ferronnerie", metadata.description as string, "Serrurerie")} />
      <JsonLd data={faqPageSchema(SERRURERIE_FAQ)} />

      <Bandeau
        photo={photo("verneuil")}
        surtitre="Serrurerie · Ferronnerie"
        titre="Serrurerie & ferronnerie — sécurité et ouvrages d'acier."
        chapeau="La serrurerie est entrée à l'atelier dans les années 1980. Aujourd'hui c'est un département à part entière, qui couvre la sécurisation des accès comme la ferronnerie d'art."
      />
      <Fil items={[{ label: "Serrurerie", href: "/serrurerie" }]} />

      <Ouverture photo={photo("washington-ensemble")}>
        <p className="en-bref">
          <strong>En bref —</strong>{" "}
          <strong>
            La serrurerie désigne la pose, la réparation et la fabrication de tout ouvrage métallique
            de fermeture et de sécurisation : serrures, blindages, contrôle d&apos;accès, grilles,
            ferronnerie.
          </strong>{" "}
          L&apos;Atelier Le Boulluec pratique la serrurerie depuis les années 1980 en Île-de-France,
          et est membre du réseau Bricard Serruriers Confiance.
        </p>
      </Ouverture>

      <Rangee photos={galerie("serrurerie-rangee")} />

      <Suite
        blocs={[
          {
            titre: "Quels sont nos ouvrages de serrurerie phares ?",
            niveau: 2,
            photo: photo("pontoise"),
            corps: (
              <ul>
                <li><strong>Serrures de porte palière</strong>{" "}Bricard, Picard, Fichet — remplacement, mise à niveau A2P, organigramme d&apos;immeuble.</li>
                <li><strong>Blindage de portes palières</strong>{" "}aux trois niveaux : léger, renforcé, bloc-porte blindé certifié A2P BP1, BP2, BP3.</li>
                <li><strong>Motorisation de portes cochères</strong>{" "}et systèmes de contrôle d&apos;accès Intratone, Comelit, Geze, Faac, Came.</li>
                <li><strong>Vidéophonie d&apos;immeuble</strong>{" "}et boîtes aux lettres normalisées La Poste.</li>
                <li><strong>Ferronnerie sur mesure</strong>{" "}: grilles de défense, garde-corps, grilles de sas, marquises en acier forgé.</li>
              </ul>
            ),
          },
          {
            titre: "Pourquoi nous choisir pour vos travaux de serrurerie ?",
            niveau: 2,
            photo: photo("garniture-laiton"),
            corps: (
              <ol>
                <li><strong>Label Bricard Serruriers Confiance</strong>{" "}: intervention sous garantie constructeur sur les serrures Bricard installées par nos soins.</li>
                <li><strong>Audit serrurier gratuit pour les copropriétés</strong>{" "}qui nous consultent pour un premier ouvrage.</li>
                <li><strong>Blindage posé par un seul compagnon spécialisé</strong>, formé aux produits Picard, Fichet et Bricard.</li>
              </ol>
            ),
          },
          {
            titre: "Membre du réseau Bricard Serruriers Confiance",
            niveau: 2,
            corps: (
              <>
                <p>
                  Nous sommes l&apos;un des serruriers d&apos;Île-de-France membres du réseau <strong>Bricard Serruriers Confiance</strong>{" "}— un label que le fabricant historique réserve à un cercle restreint d&apos;artisans capables d&apos;installer, d&apos;entretenir et de garantir l&apos;ensemble de sa gamme.
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
              </>
            ),
          },
          {
            titre: "Sécurisation des accès d'immeuble",
            niveau: 2,
            photo: photo("interphone"),
            corps: (
              <>
                <ul>
                  <li><strong>Serrures de porte palière</strong>{" "}— remplacement, mise à niveau A2P*, ré-organigramme,</li>
                  <li><strong>Porte cochère</strong>{" "}— serrure carénée, gâche électrique, ventouse électromagnétique,</li>
                  <li><strong>Sas d&apos;entrée et grilles</strong>{" "}— pose et entretien des grilles, gâches, ferme-portes,</li>
                  <li><strong>Boîtes aux lettres</strong>{" "}— pose de batteries normalisées La Poste, ré-affectation, remplacement complet.</li>
                </ul>
                <p>
                  Pour les copropriétés en cours de mise en sécurité, nous produisons un audit serrurier préalable — gratuit pour les bâtiments dont le syndic nous consulte pour un premier ouvrage.
                </p>
              </>
            ),
          },
          {
            titre: "Blindage de portes palières",
            niveau: 2,
            corps: (
              <>
                <p>Trois niveaux selon le risque et le budget :</p>
                <ul>
                  <li><strong>Blindage léger</strong>{" "}— tôle d&apos;acier sur la face intérieure, serrure trois points, cornière anti-pince,</li>
                  <li><strong>Blindage renforcé</strong>{" "}— porte d&apos;origine doublée d&apos;un caisson acier, serrure cinq points A2P**, cylindre haute sûreté,</li>
                  <li><strong>Bloc-porte blindé</strong>{" "}— dépose de la porte d&apos;origine, pose d&apos;un bloc-porte certifié A2P BP1, BP2 ou BP3.</li>
                </ul>
                <p>
                  Tous nos blindages sont posés par un seul compagnon spécialisé, formé aux produits Picard, Fichet et Bricard.
                </p>
              </>
            ),
          },
          {
            titre: "Contrôle d'accès et motorisation",
            niveau: 2,
            photo: photo("verin"),
            corps: (
              <p>
                Vidéophonie, contrôle d&apos;accès par badge, motorisation de porte cochère. Nous installons les solutions <strong>Intratone</strong>, <strong>Comelit</strong>, <strong>Geze</strong>, <strong>Faac</strong>{" "}et <strong>Came</strong>, et savons les intégrer sur des ouvrages anciens sans dégrader leur cohérence visuelle. Quand la motorisation accompagne une porte cochère neuve ou restaurée, l&apos;ouvrage bois est produit par notre <Link href="/menuiserie">département menuiserie</Link>, dans le même atelier de Massy.
              </p>
            ),
          },
          {
            titre: "Ferronnerie sur mesure",
            niveau: 2,
            photo: photo("saint-paul"),
            corps: (
              <p>
                Le département produit également des <strong>grilles de défense de fenêtres, garde-corps, grilles de sas et marquises</strong>{" "}— autant d&apos;ouvrages d&apos;acier dessinés, façonnés, soudés et posés à l&apos;atelier. Les garde-corps intègrent souvent un remplissage en <Link href="/vitrerie">verre feuilleté trempé</Link>, ou accompagnent un <Link href="/escaliers">escalier sur mesure</Link>{" "}façonné au même atelier.
              </p>
            ),
          },
        ]}
      />

      <Bande
        surtitre="Réalisations"
        titre="Grilles, sas et motorisations"
        chapeau={
          <>
            Ouvrages d’acier façonnés et posés par l’atelier. La suite est dans{" "}
            <Link href="/photos">l’archive des ouvrages</Link>.
          </>
        }
      >
        <Galerie photos={galerie("serrurerie-fin")} />
      </Bande>

      <Questions items={SERRURERIE_FAQ} fond="pierre" />

      <Voisines
        titre="L'atelier intégré"
        liens={[
          {
            libelle: "Menuiserie sur mesure",
            href: "/menuiserie",
            resume:
              "Portes cochères, portes d'immeuble, fenêtres et agencements bois façonnés sous le même toit que la serrurerie qui les équipe.",
          },
          {
            libelle: "Vitrerie sur mesure",
            href: "/vitrerie",
            resume:
              "Vitrages retardateurs d'effraction, garde-corps en verre feuilleté trempé, remplissages de sas — fournis et posés par le même atelier.",
          },
          {
            libelle: "L'atelier — depuis 1964",
            href: "/a-propos",
            resume:
              "Histoire, équipe et méthode de l'atelier — un seul toit pour la menuiserie, la serrurerie et la vitrerie.",
          },
        ]}
      />

      <AppelContact
        surtitre="Intervention serrurerie"
        titre="Audit, blindage, motorisation, ferronnerie."
        texte="Un appel ou un courriel suffit pour planifier la visite technique."
        cta={{ label: "Demander un rendez-vous", href: "/contact" }}
      />
    </>
  );
}
