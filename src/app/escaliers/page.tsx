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

import { CARTE_PARTAGE } from "@/lib/partage";
const ESCALIERS_FAQ = [
  {
    q: "Quel est le délai pour un escalier sur mesure ?",
    a: "Un escalier sur mesure demande 3 à 4 mois entre le premier rendez-vous et la livraison : relevé sur site, dessin, étude de structure, façonnage à l'atelier de Massy et pose. Les escaliers suspendus, qui nécessitent une étude structurelle plus poussée, peuvent demander 4 à 5 mois.",
  },
  {
    q: "Quels types d'escaliers fabriquez-vous ?",
    a: "Quatre familles : escaliers à limon acier (droits, courbés, débillardés), escaliers suspendus (fixation murale ou câble inox), escaliers en colimaçon (hélicoïdaux pour combles et mezzanines) et escaliers autoportants (sans appui mural intermédiaire). Tous fabriqués à l'atelier de Massy.",
  },
  {
    q: "Vos escaliers sont-ils conformes à la norme NF P01-012 ?",
    a: "Oui. Tous nos escaliers et garde-corps respectent la norme NF P01-012 (hauteur de marche, garde-corps, échappée). Nous prenons en charge la vérification réglementaire dès la phase d'étude de structure, avant fabrication.",
  },
  {
    q: "Travaillez-vous avec des architectes et des bureaux d'études ?",
    a: "Oui. Nous travaillons régulièrement à partir de plans d'architecte et nous nous insérons dans des équipes de maîtrise d'œuvre. Notre bureau d'études interne peut produire les plans d'exécution à partir d'une intention esquissée, ou exécuter au trait juste un plan déjà figé.",
  },
  {
    q: "Quels matériaux utilisez-vous pour les marches et les garde-corps ?",
    a: "Marches : bois massif (chêne huilé, hêtre, frêne), pierre reconstituée, métal laqué ou brut verni. Garde-corps : acier forgé, acier serrurier, câble inox tendu, verre feuilleté trempé, ou bois — selon le dessin choisi et la compatibilité visuelle avec l'escalier qui l'accompagne.",
  },
];

export const metadata: Metadata = {
  title: "Escaliers sur mesure bois & acier",
  description:
    "Escaliers suspendus, en colimaçon, autoportants ou à limon acier. Conception, fabrication atelier et pose. Atelier Le Boulluec — Massy, Île-de-France.",
  alternates: { canonical: "https://www.leboulluec.com/escaliers" },
  openGraph: {
    images: CARTE_PARTAGE,
    title: "Escaliers sur mesure bois & acier — Atelier Le Boulluec",
    description: "Escaliers suspendus, colimaçon, autoportants ou à limon acier — fabrication atelier.",
    url: "https://www.leboulluec.com/escaliers",
  },
};

/**
 * Photographies : les escaliers réellement posés par l’atelier (Paray-Vieille-
 * Poste, Saclay, Palaiseau, rue de Vaucouleurs) passent devant. Les familles
 * dont le fonds ne contient aucun chantier photographié (suspendus, colimaçon)
 * sont illustrées par des modèles du groupement Treppenmeister, légendés
 * comme tels — jamais présentés comme des ouvrages de l’atelier.
 */
export default function EscaliersPage() {
  return (
    <>
      <JsonLd data={serviceSchema("Escaliers sur mesure", metadata.description as string, "Escaliers")} />
      <JsonLd data={faqPageSchema(ESCALIERS_FAQ)} />

      <Bandeau
        photo={photo("vaucouleurs-apres")}
        surtitre="Escaliers"
        titre="Escaliers sur mesure — bois, acier, mixtes."
        chapeau="L'escalier est l'un des rares ouvrages où la justesse millimétrique se voit immédiatement. C'est pourquoi nous le traitons comme un objet à part entière."
      />
      <Fil items={[{ label: "Escaliers", href: "/escaliers" }]} />

      <Ouverture photo={photo("paray-apres")}>
        <p className="en-bref">
          <strong>En bref —</strong>{" "}
          <strong>
            Un escalier sur mesure est un ouvrage conçu, dessiné, façonné et posé spécifiquement pour
            un site donné, par opposition à un escalier de série livré en kit.
          </strong>{" "}
          L&apos;Atelier Le Boulluec fabrique des escaliers sur mesure depuis 1964, dans son atelier de
          Massy : escaliers à limon acier, suspendus, en colimaçon ou autoportants, en bois, acier ou
          mixtes. Délai standard : 3 à 4 mois entre le premier rendez-vous et la pose.
        </p>
        {/* Sommaire — les quatre rubriques du menu « Escaliers » du site
            historique, adressées par ancre dans cette même page. */}
        <nav aria-label="Les familles d'escaliers">
          <ul className="sommaire">
            <li><a href="#Escalierssuspendus">Escaliers suspendus</a></li>
            <li><a href="#Escaliersencolimacon">Escaliers en colimaçon</a></li>
            <li><a href="#Escaliersautoporteurs">Escaliers autoporteurs</a></li>
            <li><a href="#Escaliersenlimonacier">Escaliers à limon acier</a></li>
          </ul>
        </nav>
      </Ouverture>

      <Rangee photos={galerie("escaliers-rangee")} />

      <Suite
        blocs={[
          {
            titre: "Quels sont nos escaliers sur mesure phares ?",
            niveau: 2,
            photo: photo("palaiseau-pose"),
            corps: (
              <ul>
                <li><strong>Escaliers à limon acier</strong>{" "}: limon central ou latéraux, marches bois massif ou métal, signature des lofts contemporains.</li>
                <li><strong>Escaliers suspendus</strong>{" "}: marches retenues par fixation murale dissimulée ou câble inox tendu.</li>
                <li><strong>Escaliers en colimaçon</strong>{" "}: solution hélicoïdale pour combles, mezzanines et duplex à surface réduite.</li>
                <li><strong>Escaliers autoportants</strong>{" "}: sans appui mural intermédiaire, pour espaces ouverts contemporains.</li>
                <li><strong>Garde-corps acier, verre, bois ou câble inox</strong>{" "}conformes à la norme NF P01-012.</li>
              </ul>
            ),
          },
          {
            titre: "Pourquoi nous choisir pour votre escalier sur mesure ?",
            niveau: 2,
            photo: photo("paray-pendant"),
            corps: (
              <ol>
                <li><strong>Atelier intégré bois + acier + verre</strong>{" "}: pas de coordination entre sous-traitants, l&apos;escalier sort juste.</li>
                <li><strong>Bureau d&apos;études interne</strong>{" "}capable de produire les plans d&apos;exécution ou d&apos;exécuter un plan d&apos;architecte au trait juste.</li>
                <li><strong>Étude de structure systématique</strong>{" "}en lien avec un bureau partenaire pour les escaliers suspendus et autoportants.</li>
              </ol>
            ),
          },
          {
            titre: "Quatre familles d'escaliers",
            niveau: 2,
            photo: photo("tm-limon-2"),
            corps: (
              <>
                <p>
                  L&apos;Atelier Le Boulluec façonne dans ses ateliers des escaliers suspendus, des escaliers en colimaçon, des escaliers autoporteurs et des escaliers à limon acier, droits ou hélicoïdaux. Ces escaliers, conçus avec le groupement de créateurs d&apos;escaliers <strong>Treppenmeister</strong>{" "}et fabriqués dans nos ateliers, vous permettent de créer l&apos;escalier à votre image tout en respectant un cahier des charges précis en matière de sécurité, de qualité et de respect des normes en vigueur.
                </p>
                <p>
                  Treppenmeister est le plus grand groupement de fabricants d&apos;escaliers d&apos;Europe. Inventeur de l&apos;escalier suspendu en bois, il est leader sur ce marché et dispose depuis 2005 d&apos;un agrément technique européen pour ses escaliers suspendus. Notre entreprise fait partie de ce réseau, qui compte plus de cinquante entreprises françaises réparties sur tout le territoire. Notre gamme d&apos;escaliers contemporains et design, adaptée à tous les budgets, est réalisée à partir de matériaux nobles.
                </p>
              </>
            ),
          },
          {
            id: "Escalierssuspendus",
            titre: "Escaliers suspendus",
            photo: photo("tm-suspendu-1"),
            corps: (
              <>
                <p>
                  Les marches semblent flotter, retenues par une fixation murale dissimulée ou par un câble inox tendu. L&apos;effet visuel est saisissant, mais la mise en œuvre exige une étude structurelle préalable que nous menons systématiquement avec un bureau d&apos;études partenaire.
                </p>
                <p>
                  C&apos;est la famille sur laquelle le groupement Treppenmeister, inventeur de l&apos;escalier suspendu en bois, dispose d&apos;un agrément technique européen : le limon disparaît, chaque marche est ancrée individuellement, et le calcul d&apos;ancrage dans le mur porteur devient l&apos;essentiel du travail d&apos;étude. Nous vérifions la nature du support avant tout engagement — béton, pierre de taille, pan de bois ou refend brique n&apos;offrent pas la même reprise d&apos;effort.
                </p>
              </>
            ),
          },
          {
            id: "Escaliersencolimacon",
            titre: "Escaliers en colimaçon",
            photo: photo("tm-colimacon-1"),
            corps: (
              <>
                <p>
                  Pour les contraintes de surface réduite — accès à des combles, à une mezzanine, à un duplex — l&apos;escalier hélicoïdal demeure la solution la plus efficiente. Nous en façonnons en acier laqué, en acier brut verni, ou en mixte acier-bois.
                </p>
                <p>
                  Le dessin se joue sur trois cotes : le diamètre de la trémie, le pas d&apos;hélice et l&apos;échappée sous plafond. Nous relevons les trois sur site avant de dessiner, parce qu&apos;un colimaçon qui tient sur le papier peut cogner la panne d&apos;un comble à la sixième marche. Marches bois massif ou tôle pliée, fût central tourné ou noyau ouvert, garde-corps à barreaudage ou à câbles : le dessin suit l&apos;usage de la pièce desservie.
                </p>
              </>
            ),
          },
          {
            id: "Escaliersautoporteurs",
            titre: "Escaliers autoporteurs",
            photo: photo("saclay"),
            corps: (
              <>
                <p>
                  Sans appui mural intermédiaire, l&apos;escalier autoportant repose uniquement sur ses départs et ses arrivées. Solution élégante pour des espaces ouverts, mais exigeante en calcul de section et en fixation.
                </p>
                <p>
                  L&apos;autoporteur est l&apos;escalier des volumes qu&apos;on ne veut pas cloisonner : rien ne le relie aux murs, il traverse la pièce comme un meuble. Cette liberté se paie en épaisseur de limon et en qualité de scellement aux deux extrémités. Nous en avons remplacé plusieurs en Essonne — à Saclay, à Paray-Vieille-Poste — dans des maisons où l&apos;escalier de série d&apos;origine avait pris du jeu.
                </p>
              </>
            ),
          },
          {
            id: "Escaliersenlimonacier",
            titre: "Escaliers à limon acier",
            photo: photo("palaiseau"),
            corps: (
              <>
                <p>
                  Un limon central ou deux limons latéraux en acier — droit, courbé, débillardé — reçoivent des marches en bois massif, en pierre reconstituée ou en métal. C&apos;est l&apos;une de nos signatures : la pureté du dessin métallique mariée à la chaleur d&apos;une marche en chêne huilé. Les pièces acier sont dessinées et soudées par notre <Link href="/serrurerie">département serrurerie-ferronnerie</Link>. Adapté aux lofts, aux duplex contemporains et aux réhabilitations industrielles.
                </p>
                <p>
                  Le limon acier est aussi la solution la plus tolérante quand la trémie existante est irrégulière : la tôle se découpe au trait juste, là où un limon bois imposerait de reprendre la maçonnerie. Nous les livrons en acier laqué au four, en acier brut verni ou en acier thermolaqué, selon l&apos;ambiance recherchée et l&apos;exposition de l&apos;ouvrage.
                </p>
              </>
            ),
          },
          {
            titre: "La méthode atelier",
            niveau: 2,
            photo: photo("vaucouleurs-cours"),
            corps: (
              <ol>
                <li><strong>Relevé sur site</strong>{" "}— mesures laser, prise des cotes structurelles, repérage des contraintes (poutres, gaines, fenêtres).</li>
                <li><strong>Épure et dessin</strong>{" "}— plan d&apos;exécution à l&apos;échelle 1, validation avec le client et l&apos;architecte si présent.</li>
                <li><strong>Étude de structure</strong>{" "}— calcul de section, vérification réglementaire (hauteur de marche, garde-corps, échappée).</li>
                <li><strong>Façonnage à l&apos;atelier de Massy</strong>{" "}— débit, assemblage, soudure pour les pièces acier, vernissage ou laquage en cabine.</li>
                <li><strong>Pose</strong>{" "}— dépose de l&apos;ancien escalier le cas échéant, repose protégée, ajustements finaux, réception avec le client.</li>
              </ol>
            ),
          },
          {
            titre: "Garde-corps et rampes",
            niveau: 2,
            photo: photo("tm-garde-corps"),
            corps: (
              <p>
                Tout escalier vient avec son garde-corps, qui doit conjuguer sécurité (norme NF P01-012), esthétique et compatibilité visuelle avec l&apos;escalier qu&apos;il accompagne. Acier forgé, acier serrurier, câble inox tendu, <Link href="/vitrerie">verre feuilleté trempé</Link>, ou bois — selon le dessin choisi. Pour les escaliers anciens d&apos;immeubles patrimoniaux (limons bois, balustres, rampes en ferronnerie), voir notre activité de <Link href="/restauration-patrimoniale">restauration patrimoniale</Link>.
              </p>
            ),
          },
          {
            titre: "Pour les architectes et maîtres d'œuvre",
            niveau: 2,
            corps: (
              <p>
                Nous travaillons régulièrement à partir de plans d&apos;architecte et savons nous insérer dans une équipe de maîtrise d&apos;œuvre. Notre bureau d&apos;études peut produire les plans d&apos;exécution à partir d&apos;une intention esquissée, ou exécuter au trait juste un plan déjà figé.
              </p>
            ),
          },
        ]}
      />

      <Bande
        fond="pierre"
        surtitre="Modèles du groupement"
        titre="Quelques modèles Treppenmeister"
        chapeau={
          <>
            Des visuels de catalogue du groupement auquel appartient l’atelier, pour situer les
            familles d’escaliers. Les ouvrages réellement posés sont dans{" "}
            <Link href="/photos">l’archive des ouvrages</Link>.
          </>
        }
      >
        <Galerie photos={galerie("escaliers-fin")} />
      </Bande>

      <Questions items={ESCALIERS_FAQ} />

      <Voisines
        titre="L'atelier intégré"
        liens={[
          {
            libelle: "Serrurerie & ferronnerie",
            href: "/serrurerie",
            resume:
              "Limons acier, garde-corps en fer forgé ou acier serrurier, soudures et finitions exécutés au même atelier que la partie bois.",
          },
          {
            libelle: "Menuiserie sur mesure",
            href: "/menuiserie",
            resume:
              "Marches bois massif (chêne, hêtre, frêne), main-courantes et habillages bois façonnés en parallèle de l'ossature acier.",
          },
          {
            libelle: "Vitrerie sur mesure",
            href: "/vitrerie",
            resume:
              "Garde-corps en verre feuilleté trempé et marches en verre — fournis et posés par notre département vitrerie.",
          },
          {
            libelle: "Restauration patrimoniale",
            href: "/restauration-patrimoniale",
            resume:
              "Restauration des escaliers anciens : limons bois, marches, balustres, rampes en ferronnerie d'époque.",
          },
        ]}
      />

      <AppelContact
        surtitre="Projet d'escalier"
        titre="Un escalier sur mesure demande trois à quatre mois."
        texte="Entre le premier rendez-vous et la livraison. Les meilleurs projets commencent par une visite d'atelier où l'on peut toucher les bois, voir les soudures, sentir les finitions."
        cta={{ label: "Prendre rendez-vous", href: "/contact" }}
      />
    </>
  );
}
