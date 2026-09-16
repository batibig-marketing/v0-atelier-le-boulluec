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

const VITRERIE_FAQ = [
  {
    q: "Intervenez-vous en urgence pour un bris de vitrage ?",
    a: "Oui. Nous intervenons sous 24 à 48 heures pour les bris urgents (vitrine commerce, fenêtre d'immeuble, vitrage de sas) avec un vitrage provisoire, puis fournissons et posons le vitrage définitif dans les jours suivants. Les copropriétés sous contrat d'entretien bénéficient d'un délai contractuel.",
  },
  {
    q: "Quels types de vitrages isolants proposez-vous ?",
    a: "Nous fournissons des vitrages isolants thermiques (configurations 4/16/4, 4/20/4, triple vitrage) et acoustiques (verre feuilleté asymétrique type 44.2 silence ou Stadip Silence). Le choix dépend du Ug visé, de l'orientation du bâtiment et de l'environnement sonore.",
  },
  {
    q: "Quelle est la différence entre verre feuilleté et verre trempé ?",
    a: "Le verre feuilleté est un assemblage de plusieurs plaques de verre séparées par un film PVB ; en cas de bris, les morceaux restent collés au film. Le verre trempé subit un traitement thermique qui multiplie par cinq sa résistance mécanique ; en cas de bris, il se fragmente en petits éclats non coupants. Le verre feuilleté trempé combine les deux propriétés et constitue le standard des garde-corps en immeuble collectif.",
  },
  {
    q: "Posez-vous des vitrages anti-effraction pour les commerces ?",
    a: "Oui. Nous posons des vitrages retardateurs d'effraction de classe P5A à P6B, des vitrages anti-vandalisme et des films de sécurité sur vitrage existant. Pour les enseignes haut de gamme (bijouteries, horlogeries, galeries), nous proposons des vitrages SP10 et au-delà, sous certification A2P.",
  },
  {
    q: "Restaurez-vous les vitrages anciens d'immeubles patrimoniaux ?",
    a: "Oui. Pour les bâtiments patrimoniaux et les immeubles sous avis ABF, nous restituons les vitrages d'époque — verres biseautés, vitraux, verres soufflés Saint-Just — en faisant appel à nos partenaires verriers traditionnels.",
  },
];

export const metadata: Metadata = {
  title: "Vitrerie sur mesure Paris & Île-de-France",
  description:
    "Vitrages isolants, verre feuilleté et trempé, vitrage de protection, miroirs sur mesure et dépannage. Atelier de vitrerie à Massy, intervention en Île-de-France.",
  alternates: { canonical: "https://www.leboulluec.com/vitrerie" },
  openGraph: {
    title: "Vitrerie sur mesure — double vitrage, verres techniques, miroirs",
    description: "Vitrages isolants, verre feuilleté & trempé, miroirs sur mesure, dépannage 24-48h.",
    url: "https://www.leboulluec.com/vitrerie",
  },
};

export default function VitreriePage() {
  return (
    <>
      <JsonLd data={serviceSchema("Vitrerie sur mesure", metadata.description as string, "Vitrerie")} />
      <JsonLd data={faqPageSchema(VITRERIE_FAQ)} />

      <Bandeau
        photo={photo("puits-lumiere")}
        surtitre="Vitrerie"
        titre="Vitrerie sur mesure — double vitrage, verres techniques, miroirs."
        chapeau="Tous les ouvrages que nous façonnons reçoivent leur vitrage à l'atelier, posé par les mêmes compagnons qui ont assemblé le châssis."
      />
      <Fil items={[{ label: "Vitrerie", href: "/vitrerie" }]} />

      <Ouverture photo={photo("cloison-acier")}>
        <p className="en-bref">
          <strong>En bref —</strong>{" "}
          <strong>
            La vitrerie désigne la fabrication, la pose et la réparation des ouvrages en verre :
            vitrages isolants, verres feuilletés ou trempés, miroirs, vitrages de protection.
          </strong>{" "}
          L&apos;Atelier Le Boulluec pratique la vitrerie depuis plusieurs décennies en Île-de-France,
          en intégration directe avec ses ateliers menuiserie et serrurerie. Cette intégration limite
          les interfaces et garantit l&apos;ajustement parfait entre le bois, l&apos;acier et le verre.
        </p>
      </Ouverture>

      <Rangee photos={galerie("vitrerie-rangee")} />

      <Suite
        blocs={[
          {
            titre: "Quels sont nos ouvrages de vitrerie phares ?",
            niveau: 2,
            photo: photo("cloison-depolie"),
            corps: (
              <ul>
                <li><strong>Vitrages isolants thermiques</strong>{" "}(4/16/4, 4/20/4, triple vitrage) et acoustiques (44.2 silence, Stadip Silence).</li>
                <li><strong>Verre feuilleté et trempé</strong>{" "}pour garde-corps, cloisons, marches d&apos;escalier, vitrines de prestige.</li>
                <li><strong>Vitrages de protection P5A à P6B et SP10</strong>, certifiés A2P pour bijouteries, horlogeries et galeries.</li>
                <li><strong>Miroirs sur mesure</strong>{" "}4, 5 ou 6 mm avec biseautage, perçage et pose.</li>
                <li><strong>Restitution de vitrages anciens</strong>{" "}: verres biseautés, vitraux, verres soufflés Saint-Just.</li>
                <li><strong>Dépannage vitrerie 24-48h</strong>{" "}pour les bris urgents (vitrine commerce, fenêtre d&apos;immeuble).</li>
              </ul>
            ),
          },
          {
            titre: "Pourquoi nous choisir pour vos vitrages ?",
            niveau: 2,
            photo: photo("chassis-atelier"),
            corps: (
              <ol>
                <li><strong>Intégration totale avec nos ateliers menuiserie et serrurerie</strong>{" "}: un seul interlocuteur pour la pose du châssis et de son vitrage.</li>
                <li><strong>Délai d&apos;intervention 24-48h</strong>{" "}sur les bris urgents pour les copropriétés sous contrat d&apos;entretien.</li>
                <li><strong>Vitrages certifiés A2P</strong>{" "}pour les enseignes haut de gamme et les rez-de-chaussée d&apos;immeuble exposés.</li>
              </ol>
            ),
          },
          {
            titre: "Vitrages isolants et acoustiques",
            niveau: 2,
            photo: photo("porte-pavillon"),
            corps: (
              <p>
                Pour les fenêtres, portes d&apos;entrée et vitrines, nous fournissons et posons des vitrages isolants thermiques (4/16/4, 4/20/4, triple vitrage) et acoustiques (verre feuilleté asymétrique type 44.2 silence ou Stadip Silence). Le choix du vitrage dépend du Ug visé, de l&apos;orientation du bâtiment et de l&apos;environnement sonore.
              </p>
            ),
          },
          {
            titre: "Verre feuilleté et trempé",
            niveau: 2,
            photo: photo("garde-corps-verre"),
            corps: (
              <p>
                Pour les garde-corps, cloisons, marches d&apos;escalier et vitrines de prestige, nous travaillons les verres feuilletés (assemblage de plusieurs plaques séparées par un film PVB) et trempés (traitement thermique qui multiplie par cinq la résistance mécanique). Le verre feuilleté trempé constitue le standard des garde-corps en immeuble collectif — souvent associé à un garde-corps acier dessiné par notre <Link href="/serrurerie">département serrurerie</Link>, ou intégré à un <Link href="/escaliers">escalier sur mesure</Link>.
              </p>
            ),
          },
          {
            titre: "Vitrage de protection",
            niveau: 2,
            photo: photo("vitrage-protection"),
            corps: (
              <p>
                Pour les commerces, vitrines et rez-de-chaussée d&apos;immeuble, nous posons des vitrages de protection adaptés au risque : verre retardateur d&apos;effraction P5A à P6B, vitrage anti-vandalisme, films de sécurité collés sur vitrage existant. Pour les enseignes haut de gamme — bijouteries, horlogeries, galeries — nous proposons des vitrages SP10 et au-delà, sous certification A2P.
              </p>
            ),
          },
          {
            titre: "Miroirs sur mesure",
            niveau: 2,
            photo: photo("facade-miroir"),
            corps: (
              <p>
                Miroirs muraux toute hauteur, miroirs de salle de bain biseautés, miroirs intégrés à un agencement bois : nous façonnons les miroirs sur mesure dans toutes les épaisseurs courantes (4, 5, 6 mm), avec biseautage, perçage et pose.
              </p>
            ),
          },
          {
            titre: "Vitrages décoratifs et anciens",
            niveau: 2,
            photo: photo("verres-biseautes"),
            corps: (
              <p>
                Pour les bâtiments patrimoniaux, nous savons restituer les vitrages d&apos;époque — verres biseautés, vitraux, verres soufflés Saint-Just — en faisant appel à nos partenaires verriers traditionnels. Ces interventions s&apos;inscrivent généralement dans un programme de <Link href="/restauration-patrimoniale">restauration patrimoniale</Link>{" "}coordonné avec les Architectes des Bâtiments de France.
              </p>
            ),
          },
          {
            titre: "Dépannage vitrerie",
            niveau: 2,
            corps: (
              <p>
                Pour les bris urgents — vitrine commerce, fenêtre d&apos;immeuble, vitrage de sas — nous intervenons sous 24 à 48 heures avec un vitrage provisoire, puis fournissons et posons le vitrage définitif dans les jours qui suivent. Les copropriétés sous contrat d&apos;entretien bénéficient d&apos;un délai d&apos;intervention contractuel.
              </p>
            ),
          },
        ]}
      />

      <Bande
        fond="pierre"
        surtitre="Réalisations"
        titre="Vitrages et verrières"
        chapeau={
          <>
            Marquises, garde-corps et verrières posés par l’atelier. La suite est dans{" "}
            <Link href="/photos">l’archive des ouvrages</Link>.
          </>
        }
      >
        <Galerie photos={galerie("vitrerie-fin")} />
      </Bande>

      <Questions items={VITRERIE_FAQ} />

      <Voisines
        titre="L'atelier intégré"
        liens={[
          {
            libelle: "Menuiserie sur mesure",
            href: "/menuiserie",
            resume:
              "Châssis bois et bois-aluminium reçus à l'atelier de Massy avant pose du vitrage isolant ou acoustique correspondant.",
          },
          {
            libelle: "Serrurerie & ferronnerie",
            href: "/serrurerie",
            resume:
              "Garde-corps acier dessinés à l'atelier et recevant un remplissage en verre feuilleté trempé fabriqué par le même département.",
          },
          {
            libelle: "Escaliers sur mesure",
            href: "/escaliers",
            resume:
              "Marches en verre feuilleté trempé et garde-corps verre intégrés directement à la conception de l'escalier.",
          },
        ]}
      />

      <AppelContact
        surtitre="Chiffrage vitrerie"
        titre="Décrivez-nous votre besoin."
        texte="Vitrages d'immeuble, miroirs sur mesure, vitrines commerce, garde-corps verre — nous reviendrons vers vous avec une proposition chiffrée après visite technique."
      />
    </>
  );
}
