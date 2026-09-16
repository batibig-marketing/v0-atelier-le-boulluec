import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { AppelContact, Bandeau, Bande, Fil, Ouverture, Questions, Suite, Voisines } from "@/components/Blocs";
import { Entree, Pieces, vueOuvrage, vuePiece, type EntreeJournal } from "@/components/Archive";
import { OUVRAGES, PIECES, PHOTOS } from "@/data/ouvrages";
import { faqPageSchema, SCHEMA_IDS } from "@/lib/schema";
import { uploadcareUrl } from "@/lib/uploadcare";
import { photo } from "@/lib/photos";
import { NAP } from "@/lib/nap";

const URL_PAGE = "https://www.leboulluec.com/actualite";

/**
 * Journal des chantiers : toutes les entrées datées, du plus récent au plus
 * ancien. Chaque entrée montre désormais ses propres vues — l’état trouvé et
 * l’état rendu quand la séquence existe — au lieu d’un tableau sans image.
 */
const JOURNAL: EntreeJournal[] = [
  ...OUVRAGES.filter((o) => o.annee).map((o) => {
    const dernier = o.plaques.length - 1;
    const indices = dernier > 0 ? [0, dernier] : [0];
    return {
      annee: o.annee as string,
      ouvrage: o.ouvrage,
      ou: `${o.adresse}, ${o.lieu}`,
      matieres: o.matieres,
      quoi: `${o.geste}. ${o.resume}`,
      ancre: o.slug,
      vues: indices.map((i) => ({ photo: vueOuvrage(o, i), etat: o.plaques[i].etat })),
    };
  }),
  ...PIECES.filter((p) => p.annee).map((p) => ({
    annee: p.annee as string,
    ouvrage: p.ouvrage,
    ou: `${p.adresse}, ${p.lieu}`,
    matieres: p.matieres,
    quoi: p.note,
    vues: [{ photo: vuePiece(p), etat: p.annee as string }],
  })),
].sort((a, b) => b.annee.localeCompare(a.annee));

const FAQ = [
  {
    q: "Sur quels chantiers l'Atelier Le Boulluec intervient-il actuellement ?",
    a: "L'atelier travaille principalement sur des portes cochères et portes d'immeuble parisiennes — restauration sur place ou façonnage à neuf au dessin relevé — ainsi que sur des grilles de sas, des escaliers d'immeuble et des châssis acier, à Paris et dans l'ouest parisien.",
  },
  {
    q: "À quelle fréquence cette page est-elle mise à jour ?",
    a: "Elle reprend les chantiers dont l'atelier a conservé les photographies datées. Le journal remonte à 2012 et le dernier ouvrage publié date de 2025. Chaque entrée renvoie, quand la séquence existe, à la planche avant / pendant / après correspondante.",
  },
  {
    q: "Peut-on voir un chantier en cours ?",
    a: `Les chantiers de rue ne se visitent pas, mais l'atelier, lui, se visite sur rendez-vous au ${NAP.street}, ${NAP.postalCode} ${NAP.city}. On y voit presque toujours une porte cochère démontée en cours de reprise.`,
  },
  {
    q: "Quelle est la zone d'intervention de l'atelier ?",
    a: "Paris intra-muros et l'Île-de-France : Hauts-de-Seine, Yvelines, Essonne, Val-de-Marne, Seine-Saint-Denis, Val-d'Oise et Seine-et-Marne. Les chantiers publiés ici se concentrent dans les arrondissements centraux de Paris et l'ouest parisien.",
  },
];

const ZONES = [
  "Paris 1er, 3e, 4e, 5e, 6e",
  "Paris 7e, 8e, 9e, 11e, 12e",
  "Paris 14e, 16e, 17e, 18e",
  "Neuilly-sur-Seine, Courbevoie",
  "Versailles, Saint-Cloud",
  "Vincennes, Clichy",
  "Massy, Paray-Vieille-Poste, Saclay",
  "Dannemois, Essonne",
];

export const metadata: Metadata = {
  title: "Chantiers récents — journal de l'atelier",
  description:
    "Journal daté des ouvrages livrés par l'Atelier Le Boulluec : portes cochères, grilles, escaliers et châssis acier restaurés à Paris et en Île-de-France depuis 2012.",
  alternates: { canonical: URL_PAGE },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    siteName: NAP.brand,
    title: "Chantiers récents — Atelier Le Boulluec",
    description:
      "Journal daté des ouvrages livrés par l'atelier depuis 2012 : portes cochères, grilles, escaliers.",
    url: URL_PAGE,
    images: [uploadcareUrl(PHOTOS.chausseeDantin, 1200)],
  },
};

export default function ActualitePage() {
  const annees = [...new Set(JOURNAL.map((e) => e.annee))];
  const derniere = annees[0];
  const premiere = annees[annees.length - 1];
  const plusRecentes = PIECES.filter((p) => p.annee && Number(p.annee) >= 2022);

  const webPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${URL_PAGE}#webpage`,
    url: URL_PAGE,
    name: "Chantiers récents — Atelier Le Boulluec",
    description:
      "Journal daté des ouvrages livrés par l'Atelier Le Boulluec à Paris et en Île-de-France.",
    inLanguage: "fr-FR",
    isPartOf: { "@id": SCHEMA_IDS.WEBSITE_ID },
    about: { "@id": SCHEMA_IDS.BUSINESS_ID },
    dateModified: `${derniere}-12-31`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: JOURNAL.length,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: JOURNAL.map((e, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: `${e.ouvrage} — ${e.ou} (${e.annee})`,
          dateCreated: e.annee,
          material: e.matieres,
          locationCreated: { "@type": "Place", name: e.ou },
          creator: { "@id": SCHEMA_IDS.ORGANIZATION_ID },
        },
      })),
    },
  };

  return (
    <>
      <JsonLd data={webPage} />
      <JsonLd data={faqPageSchema(FAQ)} />

      <Bandeau
        photo={photo("chaussee-dantin")}
        surtitre={`Journal · ${premiere} → ${derniere}`}
        titre="Les chantiers, dans l'ordre où ils sont sortis."
        chapeau="Un ouvrage, une année, une adresse, une matière. Ce journal ne raconte pas l'entreprise : il liste ce qu'elle a livré."
      />
      <Fil items={[{ label: "Chantiers récents", href: "/actualite" }]} />

      <Ouverture photo={photo("lappe-apres")}>
        <p className="en-bref">
          <strong>En bref —</strong>{" "}L&apos;Atelier Le Boulluec intervient sur des portes cochères,
          portes bâtardes, grilles de sas, escaliers d&apos;immeuble et châssis acier, à Paris et dans
          l&apos;ouest parisien. Le journal ci-dessous recense {JOURNAL.length} ouvrages datés entre{" "}
          {premiere} et {derniere}, avec pour chacun l&apos;adresse, les matières employées et le
          geste réalisé. Les séquences photographiques complètes se trouvent dans{" "}
          <Link href="/photos">l&apos;archive des ouvrages</Link>.
        </p>
      </Ouverture>

      <Bande
        fond="pierre"
        surtitre={`Journal · ${JOURNAL.length} entrées`}
        titre="Ce que l'atelier a livré, année par année."
        chapeau="Les entrées soulignées ouvrent la planche avant / pendant / après du chantier dans l'archive."
      >
        {JOURNAL.map((e, i) => (
          <Entree key={`${e.annee}-${e.ouvrage}-${i}`} e={e} />
        ))}
      </Bande>

      <Bande
        surtitre="Depuis 2022"
        titre="Les pièces les plus récentes."
        chapeau="Grilles, châssis et portes livrés au cours des dernières années, photographiés sur place ou à l'atelier de Massy."
      >
        <Pieces pieces={plusRecentes} />
      </Bande>

      <Suite
        depart={1}
        blocs={[
          {
            surtitre: "Où l'atelier intervient",
            titre: "Paris et l'ouest parisien, principalement.",
            niveau: 2,
            corps: (
              <>
                <p>
                  Les adresses relevées dans ce journal se concentrent sur les arrondissements
                  centraux de Paris, avec des chantiers réguliers dans les Hauts-de-Seine, les
                  Yvelines et l&apos;Essonne.
                </p>
                <ul className="registre registre--deux">
                  {ZONES.map((z) => (
                    <li key={z}>{z}</li>
                  ))}
                </ul>
                <p style={{ marginTop: "1.4rem" }}>
                  L&apos;atelier se trouve à {NAP.city} ({NAP.postalCode}), dans l&apos;Essonne, et
                  intervient dans toute l&apos;{NAP.areaServed}. Voir{" "}
                  <Link href="/contact">les coordonnées et l&apos;itinéraire</Link>.
                </p>
              </>
            ),
          },
        ]}
      />

      <Questions items={FAQ} />

      <Voisines
        titre="Voir le travail en détail"
        liens={[
          {
            libelle: "Archive des ouvrages",
            href: "/photos",
            resume:
              "Les séquences complètes avant / pendant / après, avec les légendes qui disent ce que montre chaque planche.",
          },
          {
            libelle: "Belles portes de Paris",
            href: "/belle-portes-rue-sur-paris-et-ailleurs",
            resume:
              "La galerie des portes d'immeuble parisiennes, et une typologie de la porte cochère, de la bâtarde et de la porte de sas.",
          },
          {
            libelle: "Restauration patrimoniale",
            href: "/restauration-patrimoniale",
            resume:
              "La méthode : diagnostic, dépose, enture de chêne sec, repose, et le dialogue avec les Architectes des Bâtiments de France.",
          },
          {
            libelle: "Avis et garanties",
            href: "/page-avis",
            resume:
              "Les engagements de l'atelier, la garantie décennale et la liste de ceux qui nous ont confié un ouvrage.",
          },
        ]}
      />

      <AppelContact
        surtitre="Prochain chantier"
        titre="Un ouvrage à reprendre dans votre immeuble ?"
        texte="Décrivez-le nous — l'adresse, l'année approximative de la porte, l'état du bas des vantaux. Nous disons en retour si l'ouvrage se restaure, et sous quel délai."
        cta={{ label: "Décrire un ouvrage", href: "/contact" }}
      />
    </>
  );
}
