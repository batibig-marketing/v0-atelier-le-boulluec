import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import PhotoGrid from "@/components/PhotoGrid";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { photosByCategories } from "@/lib/photos";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vitrerie sur mesure Paris & Île-de-France",
  description:
    "Vitrages isolants, verre feuilleté et trempé, vitrage de protection, miroirs sur mesure et dépannage. Atelier de vitrerie à Massy, intervention en Île-de-France.",
  alternates: { canonical: "/vitrerie" },
  openGraph: {
    title: "Vitrerie sur mesure — double vitrage, verres techniques, miroirs",
    description: "Vitrages isolants, verre feuilleté & trempé, miroirs sur mesure, dépannage 24-48h.",
    images: ["https://ucarecdn.com/f428b023-f076-4e97-8df8-9a56954eb8af/-/format/auto/-/quality/smart/-/resize/1600x/"],
  },
};

export default function VitreriePage() {
  const photos = photosByCategories(["vitrerie", "verriere"], 6);
  return (
    <>
      <JsonLd data={serviceSchema("Vitrerie sur mesure", metadata.description as string, "Vitrerie")} />
      <PageHeader
        photoUuid="f428b023-f076-4e97-8df8-9a56954eb8af"
        eyebrow="Vitrerie"
        title="Vitrerie sur mesure — double vitrage, verres techniques, miroirs."
        subtitle="Tous les ouvrages que nous façonnons reçoivent leur vitrage à l'atelier, posé par les mêmes compagnons qui ont assemblé le châssis."
      />

      <article className="py-20 md:py-24 bg-[#F5EFE3]">
        <Container size="narrow" className="prose-marine">
          <p className="text-lg leading-relaxed text-[#1A1A1A]/85">
            Cette intégration limite les interfaces et garantit l&apos;ajustement parfait entre le bois, l&apos;acier et le verre.
          </p>

          <h2>Vitrages isolants et acoustiques</h2>
          <p>
            Pour les fenêtres, portes d&apos;entrée et vitrines, nous fournissons et posons des vitrages isolants thermiques (4/16/4, 4/20/4, triple vitrage) et acoustiques (verre feuilleté asymétrique type 44.2 silence ou Stadip Silence). Le choix du vitrage dépend du Ug visé, de l&apos;orientation du bâtiment et de l&apos;environnement sonore.
          </p>

          <h2>Verre feuilleté et trempé</h2>
          <p>
            Pour les garde-corps, cloisons, marches d&apos;escalier et vitrines de prestige, nous travaillons les verres feuilletés (assemblage de plusieurs plaques séparées par un film PVB) et trempés (traitement thermique qui multiplie par cinq la résistance mécanique). Le verre feuilleté trempé constitue le standard des garde-corps en immeuble collectif.
          </p>

          <h2>Vitrage de protection</h2>
          <p>
            Pour les commerces, vitrines et rez-de-chaussée d&apos;immeuble, nous posons des vitrages de protection adaptés au risque : verre retardateur d&apos;effraction P5A à P6B, vitrage anti-vandalisme, films de sécurité collés sur vitrage existant. Pour les enseignes haut de gamme — bijouteries, horlogeries, galeries — nous proposons des vitrages SP10 et au-delà, sous certification A2P.
          </p>

          <h2>Miroirs sur mesure</h2>
          <p>
            Miroirs muraux toute hauteur, miroirs de salle de bain biseautés, miroirs intégrés à un agencement bois : nous façonnons les miroirs sur mesure dans toutes les épaisseurs courantes (4, 5, 6 mm), avec biseautage, perçage et pose.
          </p>

          <h2>Vitrages décoratifs et anciens</h2>
          <p>
            Pour les bâtiments patrimoniaux, nous savons restituer les vitrages d&apos;époque — verres biseautés, vitraux, verres soufflés Saint-Just — en faisant appel à nos partenaires verriers traditionnels.
          </p>

          <h2>Dépannage vitrerie</h2>
          <p>
            Pour les bris urgents — vitrine commerce, fenêtre d&apos;immeuble, vitrage de sas — nous intervenons sous 24 à 48 heures avec un vitrage provisoire, puis fournissons et posons le vitrage définitif dans les jours qui suivent. Les copropriétés sous contrat d&apos;entretien bénéficient d&apos;un délai d&apos;intervention contractuel.
          </p>
        </Container>
      </article>

      <section className="py-16 md:py-20 bg-white">
        <Container size="wide">
          <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Réalisations</p>
          <h2 className="font-serif text-2xl md:text-3xl text-[#15294E] mb-10">
            Vitrages et verrières
          </h2>
          <PhotoGrid photos={photos} columns={3} />
        </Container>
      </section>

      <CTASection
        eyebrow="Chiffrage vitrerie"
        title="Décrivez-nous votre besoin."
        text="Vitrages d'immeuble, miroirs sur mesure, vitrines commerce, garde-corps verre — nous reviendrons vers vous avec une proposition chiffrée après visite technique."
      />
    </>
  );
}
