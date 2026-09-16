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
  title: "Restauration de portes cochères & menuiseries d'époque",
  description:
    "Restauration de portes cochères, fenêtres et menuiseries d'immeubles classés ou haussmanniens. Bois, fer forgé, ferrures laiton. Atelier Le Boulluec, Île-de-France.",
  alternates: { canonical: "https://www.leboulluec.com/restauration-patrimoniale" },
  openGraph: {
    images: CARTE_PARTAGE,
    title: "Restauration patrimoniale — Atelier Le Boulluec",
    description: "Portes cochères, ferronneries, menuiseries d'époque restaurées dans le respect des techniques d'origine.",
    url: "https://www.leboulluec.com/restauration-patrimoniale",
  },
};

export default function RestaurationPage() {
  return (
    <>
      <JsonLd data={serviceSchema("Restauration patrimoniale", metadata.description as string, "Restauration patrimoniale")} />
      <JsonLd data={faqPageSchema(RESTAURATION_FAQ)} />

      <Bandeau
        photo={photo("mercier-apres")}
        surtitre="Patrimoine"
        titre="Restauration patrimoniale — portes cochères, ferronneries, menuiseries d'époque."
        chapeau="Restaurer un ouvrage existant plutôt que le remplacer demande davantage de métier que façonner du neuf. Il faut lire la pièce, reconnaître les essences, distinguer ce qui doit être conservé."
      />
      <Fil items={[{ label: "Restauration patrimoniale", href: "/restauration-patrimoniale" }]} />

      <Ouverture photo={photo("mercier-avant")}>
        <p className="en-bref">
          <strong>En bref —</strong>{" "}
          <strong>
            La restauration patrimoniale désigne la remise en état d&apos;un ouvrage ancien (porte,
            fenêtre, escalier, ferronnerie) par conservation du bois et des ferrures d&apos;origine, en
            respectant les techniques et matériaux d&apos;époque.
          </strong>{" "}
          L&apos;Atelier Le Boulluec pratique la restauration patrimoniale depuis 1964 sur des
          immeubles haussmanniens, classés Monuments Historiques ou inscrits, en lien direct avec les
          Architectes des Bâtiments de France d&apos;Île-de-France.
        </p>
      </Ouverture>

      <Rangee photos={galerie("restauration-rangee")} />

      <Suite
        blocs={[
          {
            titre: "Quels ouvrages patrimoniaux restaurons-nous ?",
            niveau: 2,
            photo: photo("conde-avant"),
            corps: (
              <ul>
                <li><strong>Portes cochères en chêne massif</strong>{" "}avec ferrures laiton patinées et motorisation discrète possible.</li>
                <li><strong>Portes bâtardes et portes sur rue à grille</strong>, restaurées ou refabriquées à l&apos;identique.</li>
                <li><strong>Fenêtres anciennes</strong>{" "}: petits bois rapportés, dormants fins, vitrages compatibles ABF.</li>
                <li><strong>Escaliers anciens</strong>{" "}: limons bois, marches, balustres, rampes en ferronnerie.</li>
                <li><strong>Marquises et auvents</strong>{" "}en verre cathédrale et ferronnerie ancienne, finitions cuivre.</li>
                <li><strong>Grilles et garde-corps</strong>{" "}en fer forgé et fonte d&apos;art aux motifs historiques.</li>
                <li><strong>Boiseries intérieures</strong>{" "}: lambris, soubassements, plinthes, parquets.</li>
              </ul>
            ),
          },
          {
            titre: "Pourquoi nous choisir pour une restauration patrimoniale ?",
            niveau: 2,
            photo: photo("conde-apres"),
            corps: (
              <ol>
                <li><strong>60 ans d&apos;expérience sur des immeubles haussmanniens</strong>{" "}et bâtiments classés en Île-de-France.</li>
                <li><strong>Dialogue habituel avec les Architectes des Bâtiments de France</strong>{" "}: plans d&apos;épure, descriptifs techniques et notes de méthode produits en interne.</li>
                <li><strong>Technique de l&apos;enture de chêne sec</strong>{" "}: nous greffons du bois neuf de même essence et même fil sur les zones dégradées, sans remplacer la pièce entière.</li>
              </ol>
            ),
          },
          {
            titre: "Pourquoi restaurer plutôt que remplacer",
            niveau: 2,
            photo: photo("ija-avant"),
            corps: (
              <>
                <p>
                  Une porte cochère parisienne du XIX<sup>e</sup>{" "}siècle a été conçue pour traverser le temps. Le chêne sec, débité sur quartier, choisi par un compagnon qui savait lire le bois, vaut mieux que la plupart des bois disponibles aujourd&apos;hui. Les assemblages tenon-mortaise chevillés, les ferrures laiton patinées, les panneaux moulurés à la main : tout cela ne se remplace pas à l&apos;identique sans un coût considérable.
                </p>
                <p>
                  Restaurer permet de conserver l&apos;intégrité architecturale d&apos;un immeuble, de respecter les obligations imposées par l&apos;Architecte des Bâtiments de France quand le bâtiment est inscrit ou classé, et — souvent — de réaliser une économie significative sur le coût global, garantie décennale comprise.
                </p>
                <p>
                  Nous orientons systématiquement vers la restauration quand l&apos;ouvrage le permet. Nous le disons aussi clairement quand il ne le permet plus.
                </p>
              </>
            ),
          },
          {
            surtitre: "Notre méthode de restauration",
            titre: "1. Diagnostic",
            photo: photo("perle-avant"),
            corps: (
              <p>
                Avant tout chantier, un compagnon expérimenté inspecte la pièce sur site : essences présentes, état des assemblages, attaque de l&apos;humidité, jeux de structure, ferrures originelles, peinture ou lasure d&apos;origine. Nous produisons un rapport diagnostique chiffré qui distingue trois scénarios : restauration légère, restauration lourde, ou remplacement à l&apos;identique.
              </p>
            ),
          },
          {
            titre: "2. Dépose et transport",
            corps: (
              <p>
                Pour les restaurations lourdes, la porte ou la menuiserie est déposée et transportée à l&apos;atelier de Massy. Le bâtiment reçoit une fermeture provisoire — vantail bois sécurisé, sas temporaire — pendant la durée du chantier.
              </p>
            ),
          },
          {
            titre: "3. Travail à l'atelier",
            photo: photo("lappe-atelier"),
            corps: (
              <p>
                Les pièces dégradées sont reprises par enture de chêne sec — c&apos;est-à-dire en greffant du bois neuf de même essence et même fil sur les zones attaquées, sans remplacer la pièce entière. Les panneaux altérés sont refaits à l&apos;identique. Les ferrures sont décapées, remises en état, repolies ou re-laquées. Le tout est ensuite mis en peinture ou en lasure selon la finition d&apos;origine.
              </p>
            ),
          },
          {
            titre: "4. Repose et finitions",
            photo: photo("chaussee-dantin"),
            corps: (
              <p>
                La pièce restaurée est reposée sur site, ajustée si nécessaire, puis livrée au client après un dernier passage de finition. La garantie décennale court à partir de la réception.
              </p>
            ),
          },
          {
            titre: "Champs d'intervention",
            niveau: 2,
            photo: photo("vieille-du-temple"),
            corps: (
              <ul>
                <li><strong>Portes cochères</strong>{" "}— chêne massif, ferrures laiton, motorisation discrète possible (voir aussi <Link href="/menuiserie">menuiserie sur mesure</Link>)</li>
                <li><strong>Portes bâtardes et portes sur rue</strong>{" "}— restauration ou refabrication à l&apos;identique, documentées dans notre <Link href="/belle-portes-rue-sur-paris-et-ailleurs">petit musée des belles portes de Paris</Link></li>
                <li><strong>Fenêtres anciennes</strong>{" "}— petits bois, châssis, dormants, vitrages compatibles ABF</li>
                <li><strong>Escaliers anciens</strong>{" "}— limons bois, marches, balustres, rampes en ferronnerie ; voir nos <Link href="/escaliers">escaliers sur mesure</Link>{" "}pour les ouvrages neufs</li>
                <li><strong>Marquises et auvents</strong>{" "}— <Link href="/vitrerie">verre cathédrale</Link>, ferronnerie ancienne, finitions cuivre</li>
                <li><strong>Grilles et garde-corps</strong>{" "}— fer forgé, fonte d&apos;art, motifs historiques, en lien avec notre <Link href="/serrurerie">département serrurerie-ferronnerie</Link></li>
                <li><strong>Boiseries intérieures</strong>{" "}— lambris, soubassements, plinthes, parquets</li>
              </ul>
            ),
          },
          {
            titre: "Travail en lien avec les ABF et les architectes du patrimoine",
            niveau: 2,
            photo: photo("ija-apres"),
            corps: (
              <p>
                Pour les immeubles inscrits à l&apos;inventaire supplémentaire ou classés Monuments Historiques, toute intervention doit recevoir l&apos;avis de l&apos;Architecte des Bâtiments de France. Nous sommes habitués à ce dialogue : production des plans d&apos;épure, des descriptifs techniques, des relevés photographiques avant-après, et des notes de méthode qui accompagnent les autorisations de travaux.
              </p>
            ),
          },
        ]}
      />

      <Bande
        surtitre="Chantiers de restauration"
        titre="Portes cochères et bâtiments restaurés"
        chapeau={
          <>
            Avant et après, adresse par adresse. La suite est dans{" "}
            <Link href="/photos">l’archive des ouvrages</Link>.
          </>
        }
      >
        <Galerie photos={galerie("restauration-fin")} />
      </Bande>

      <Questions items={RESTAURATION_FAQ} fond="pierre" />

      <Voisines
        titre="Pour aller plus loin"
        liens={[
          {
            libelle: "Belles portes de Paris",
            href: "/belle-portes-rue-sur-paris-et-ailleurs",
            resume:
              "Notre petit musée en ligne des portes cochères parisiennes restaurées ou refabriquées depuis 2012 — typologie, archives, adresses.",
          },
          {
            libelle: "Menuiserie sur mesure",
            href: "/menuiserie",
            resume:
              "Quand la restauration n'est plus possible, fabrication à l'identique d'une porte d'immeuble en chêne massif assemblée tenon-mortaise.",
          },
          {
            libelle: "Serrurerie & ferronnerie",
            href: "/serrurerie",
            resume:
              "Restauration et refabrication des grilles, garde-corps, marquises et ferrures laiton des immeubles patrimoniaux.",
          },
          {
            libelle: "L'atelier depuis 1964",
            href: "/a-propos",
            resume:
              "Histoire, équipe et méthode de l'atelier — soixante ans de pratique au service des architectes du patrimoine et des syndics franciliens.",
          },
        ]}
      />

      <AppelContact
        surtitre="Diagnostic patrimonial"
        titre="Demander un diagnostic."
        texte="Pour une porte cochère, un escalier ancien, une marquise ou tout autre ouvrage patrimonial — un diagnostic sur site permet de déterminer si la restauration est possible et à quel coût. Le diagnostic est facturé symboliquement et déduit du chantier si vous nous confiez les travaux."
        cta={{ label: "Demander un diagnostic", href: "/contact" }}
      />
    </>
  );
}
