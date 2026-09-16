import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { AppelContact, Bandeau, Bande, Fil, Ouverture, Questions, Voisines } from "@/components/Blocs";
import { Pieces, Planche } from "@/components/Archive";
import { OUVRAGES, PIECES, PHOTOS, cartouche } from "@/data/ouvrages";
import { faqPageSchema, SCHEMA_IDS } from "@/lib/schema";
import { uploadcareUrl } from "@/lib/uploadcare";
import { photo } from "@/lib/photos";
import { NAP } from "@/lib/nap";

import { CARTE_PARTAGE } from "@/lib/partage";
const URL_PAGE = "https://www.leboulluec.com/photos";

/**
 * Le fonds photographique s'agrandit chantier après chantier. Aucun compte
 * n'est écrit en dur dans la page : les libellés se recalculent, de sorte que
 * l'archive reste juste à dix ouvrages comme à trente.
 */
const NOMBRES = [
  "zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit",
  "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize",
];

function enLettres(n: number): string {
  return NOMBRES[n] ?? String(n);
}

function capitale(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const FAQ = [
  {
    q: "Que montre l'archive des ouvrages de l'Atelier Le Boulluec ?",
    a: "Elle montre des chantiers réels, datés et situés, photographiés avant, pendant et après les travaux : portes cochères, portes bâtardes, grilles de sas, escaliers et façades acier restaurés ou façonnés par l'atelier à Paris et en Île-de-France entre 2012 et 2025.",
  },
  {
    q: "Pourquoi publier les photographies « avant » d'une porte ?",
    a: "Parce que l'état trouvé est la moitié du travail. Une traverse basse pourrie, un panneau ouvert, une ferrure descellée : ce sont ces désordres qui déterminent la méthode, le délai et le prix. Montrer l'avant, c'est montrer sur quoi porte réellement la restauration.",
  },
  {
    q: "Restaurer une porte cochère ancienne ou la remplacer ?",
    a: "Tant que le bâti et les montants sont sains, la restauration est presque toujours préférable : elle conserve le dessin d'origine, satisfait l'Architecte des Bâtiments de France et coûte moins cher sur vingt ans. Le remplacement s'impose quand la structure a cédé — c'est le cas du 3 rue de la Perle, façonné à neuf au dessin relevé sur l'ancien.",
  },
  {
    q: "Combien de temps dure la restauration d'une porte cochère ?",
    a: "Comptez huit à douze semaines entre le relevé et la repose pour une porte cochère en chêne. Une greffe de traverse basse réalisée sur place, comme au 16 rue de Condé, se traite en quelques jours sans dépose du vantail.",
  },
  {
    q: "Peut-on visiter l'atelier où sont façonnées ces pièces ?",
    a: `Oui, sur rendez-vous, au ${NAP.street}, ${NAP.postalCode} ${NAP.city}. Les syndics et architectes qui nous confient un premier ouvrage passent presque tous par l'atelier au préalable.`,
  },
];

const VOCABULAIRE: [string, string][] = [
  ["Porte cochère", "Porte à deux vantaux ouvrant sur le porche d'un immeuble, dimensionnée à l'origine pour le passage d'une voiture attelée."],
  ["Porte bâtarde", "Porte d'immeuble intermédiaire entre la porte piétonne et la porte cochère : deux vantaux, mais pas de passage véhicule."],
  ["Traverse basse", "Pièce horizontale en pied de vantail. C'est elle qui prend l'eau de ruissellement, et c'est presque toujours par elle que la porte meurt."],
  ["Greffe (ou enture)", "Découpe de la partie morte d'une pièce de bois et rapport d'une pièce neuve ajustée au même profil, plutôt que le remplacement du vantail entier."],
  ["Penture", "Ferrure allongée fixée sur le vantail et articulée au gond. Sur les portes anciennes, elle est forgée et souvent découpée en fleuron."],
  ["Fer de lance", "Barreau terminé en pointe lancéolée, motif courant des grilles de défense et des grilles de sas parisiennes."],
  ["Grille de sas", "Grille intérieure fermant le porche entre la rue et la cour, généralement doublée d'un contrôle d'accès."],
  ["Seuil", "Pièce basse de la baie, souvent doublée d'une plinthe de laiton qui protège le bois du ruissellement et du frottement."],
  ["Imposte", "Partie vitrée ou ajourée située au-dessus de la porte, dans le même dormant. Elle éclaire le porche."],
  ["Tierçage", "Division d'une porte en trois panneaux ou vantaux inégaux, plutôt qu'en deux parties symétriques."],
  ["Débillardé", "Se dit d'un limon d'escalier ou d'une main-courante dont la pièce est taillée en double courbure pour suivre le tournant."],
  ["Tôle laquée époxy", "Tôle d'acier revêtue d'une peinture poudre cuite au four, employée pour les capotages techniques exposés à la rue."],
];

export const metadata: Metadata = {
  title: "Archive des ouvrages — avant, pendant, après",
  description:
    "Portes cochères, grilles et escaliers restaurés à Paris : chaque ouvrage daté, situé et photographié avant, pendant et après travaux par l'Atelier Le Boulluec.",
  alternates: { canonical: URL_PAGE },
  openGraph: {
    images: CARTE_PARTAGE,
    type: "article",
    locale: "fr_FR",
    siteName: NAP.brand,
    title: "Archive des ouvrages — Atelier Le Boulluec",
    description:
      "Portes cochères, grilles et escaliers restaurés à Paris, datés et situés, photographiés avant / pendant / après.",
    url: URL_PAGE,
  },
};

export default function PhotosPage() {
  const totalVues = OUVRAGES.reduce((n, o) => n + o.plaques.length, 0) + PIECES.length;
  // Le registre et les planches suivent la chronologie de l'atelier : c'est le
  // seul classement qui reste lisible quand le fonds passe de sept à trente
  // chantiers. Les ouvrages sans année ferment la marche.
  const ouvragesDates = [...OUVRAGES].sort((a, b) =>
    (a.annee ?? "9999").localeCompare(b.annee ?? "9999")
  );
  const annees = OUVRAGES.map((o) => o.annee)
    .concat(PIECES.map((p) => p.annee))
    .filter((a): a is string => Boolean(a))
    .sort();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${URL_PAGE}#webpage`,
    url: URL_PAGE,
    name: "Archive des ouvrages — Atelier Le Boulluec",
    description:
      "Portes cochères, portes bâtardes, grilles de sas, escaliers et façades acier restaurés ou façonnés par l'Atelier Le Boulluec, datés et situés, photographiés avant, pendant et après travaux.",
    inLanguage: "fr-FR",
    isPartOf: { "@id": SCHEMA_IDS.WEBSITE_ID },
    about: { "@id": SCHEMA_IDS.BUSINESS_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: uploadcareUrl(PHOTOS.cardinalMercierApres, 1600),
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Ouvrages restaurés et façonnés",
      numberOfItems: OUVRAGES.length + PIECES.length,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: [
        ...OUVRAGES.map((o, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${URL_PAGE}#${o.slug}`,
          item: {
            "@type": "CreativeWork",
            name: `${o.ouvrage} — ${cartouche(o)}`,
            description: o.resume,
            dateCreated: o.annee ?? undefined,
            material: o.matieres,
            locationCreated: { "@type": "Place", name: `${o.adresse}, ${o.lieu}` },
            creator: { "@id": SCHEMA_IDS.ORGANIZATION_ID },
            image: o.plaques.map((p) => uploadcareUrl(p.uuid, 1600)),
          },
        })),
        ...PIECES.map((p, i) => ({
          "@type": "ListItem",
          position: OUVRAGES.length + i + 1,
          item: {
            "@type": "CreativeWork",
            name: `${p.ouvrage} — ${cartouche(p)}`,
            description: p.note,
            dateCreated: p.annee ?? undefined,
            material: p.matieres,
            locationCreated: { "@type": "Place", name: `${p.adresse}, ${p.lieu}` },
            creator: { "@id": SCHEMA_IDS.ORGANIZATION_ID },
            image: uploadcareUrl(p.uuid, 1600),
          },
        })),
      ],
    },
  };

  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd data={faqPageSchema(FAQ)} />

      <Bandeau
        photo={photo("mercier-apres")}
        surtitre="Archive · 2012 → 2025 · Paris & ouest parisien"
        titre="Ce que l'atelier a réparé, refait, reposé."
        chapeau="Chaque ouvrage porte sa date et son adresse. Quand nous avons les images, nous montrons l'état trouvé, le travail en cours et la pièce reposée — dans cet ordre. C'est la seule preuve de savoir-faire qui vaille."
      />
      <Fil items={[{ label: "Archive des ouvrages", href: "/photos" }]} />

      {/* Réponse directe — bloc citable (Bible SEO §13.2 / §15.5). */}
      <Ouverture photo={photo("arcade")}>
        <p className="en-bref">
          <strong>En bref —</strong>{" "}Cette page réunit les ouvrages de menuiserie et de ferronnerie
          exécutés par l&apos;Atelier Le Boulluec entre {annees[0]} et {annees[annees.length - 1]},
          principalement des portes cochères et des portes d&apos;immeuble parisiennes. Chaque entrée
          indique l&apos;année, l&apos;adresse, les matières employées — chêne, acier, laiton, fer
          forgé — et le geste réalisé : décapage, greffe de traverse basse, façonnage au dessin
          relevé, remise en teinte.
        </p>
        <dl className="chiffres">
          <div>
            <dt>Période couverte</dt>
            <dd>
              {annees[0]} — {annees[annees.length - 1]}
            </dd>
          </div>
          <div>
            <dt>Séquences complètes</dt>
            <dd>{OUVRAGES.length}</dd>
          </div>
          <div>
            <dt>Planches publiées</dt>
            <dd>{totalVues}</dd>
          </div>
        </dl>
      </Ouverture>

      {/* Le registre : une ligne par ouvrage, qui mène à sa planche. */}
      <Bande
        surtitre="Registre"
        titre="Les ouvrages suivis de bout en bout."
        chapeau={`${capitale(enLettres(OUVRAGES.length))} chantiers dont nous possédons la suite complète des états. Chaque ligne mène à sa planche.`}
      >
        <ol className="registre-ouvrages">
          {ouvragesDates.map((o) => (
            <li key={o.slug}>
              <a href={`#${o.slug}`}>
                <span className="annee">{o.annee ?? "—"}</span>
                <span className="nom">
                  {o.ouvrage}
                  <small>
                    {o.adresse}, {o.lieu} · {o.matieres.join(" · ")}
                  </small>
                </span>
                <span className="vues">{o.plaques.length} vues</span>
              </a>
            </li>
          ))}
        </ol>
      </Bande>

      <Bande
        fond="pierre"
        surtitre="Avant · en cours · après"
        titre={`${capitale(enLettres(OUVRAGES.length))} ouvrages, dans l'ordre où ils ont été faits.`}
        chapeau="L'état trouvé, le chantier ouvert, la pièce reposée. Les légendes disent ce que montre chaque planche, sans commentaire commercial."
      >
        {ouvragesDates.map((o) => (
          <Planche key={o.slug} ouvrage={o} />
        ))}
      </Bande>

      <Bande
        surtitre="Pièces"
        titre="Ouvrages dont nous n'avons gardé qu'une vue."
        chapeau="Grilles de défense, seuils de laiton, fers de lance, châssis acier : les pièces sont datées et situées comme les séquences, mais photographiées une seule fois."
      >
        <Pieces pieces={PIECES} />
      </Bande>

      {/* Le vocabulaire du métier — GEO : entités nommées. */}
      <Bande
        fond="encre"
        surtitre="Vocabulaire"
        titre="Les mots qui reviennent dans les légendes."
        chapeau="Le lexique du métier n'est pas un ornement : il désigne des pièces précises, et c'est lui qui permet de décrire un désordre au téléphone."
      >
        <dl className="definitions">
          {VOCABULAIRE.map(([terme, def]) => (
            <div key={terme}>
              <dt>{terme}</dt>
              <dd>{def}</dd>
            </div>
          ))}
        </dl>
        <p className="texte" style={{ marginTop: "2rem", color: "var(--gris-clair)" }}>
          Les ouvrages présentés ici relèvent pour l&apos;essentiel de la{" "}
          <Link href="/restauration-patrimoniale">restauration patrimoniale</Link>{" "}et de la{" "}
          <Link href="/menuiserie">menuiserie sur mesure</Link>. Les grilles, fers de lance et
          châssis acier sont façonnés par notre{" "}
          <Link href="/serrurerie">département serrurerie et ferronnerie</Link>, les escaliers par
          l&apos;<Link href="/escaliers">atelier escaliers</Link>.
        </p>
      </Bande>

      <Questions items={FAQ} />

      <Voisines
        titre="Poursuivre la visite"
        liens={[
          {
            libelle: "Belles portes de Paris",
            href: "/belle-portes-rue-sur-paris-et-ailleurs",
            resume:
              "La galerie des portes d'immeuble parisiennes passées entre nos mains, rue par rue, arrondissement par arrondissement.",
          },
          {
            libelle: "Restauration patrimoniale",
            href: "/restauration-patrimoniale",
            resume:
              "Méthode, dialogue avec les Architectes des Bâtiments de France, et ce que recouvre exactement une restauration de porte cochère.",
          },
          {
            libelle: "Chantiers récents",
            href: "/actualite",
            resume:
              "Les derniers ouvrages livrés par l'atelier, classés par date, du plus récent au plus ancien.",
          },
          {
            libelle: "L'atelier depuis 1964",
            href: "/a-propos",
            resume:
              "Trois adresses, soixante ans, dix-sept menuisiers : l'histoire de la maison et la façon dont elle travaille aujourd'hui.",
          },
        ]}
      />

      <AppelContact
        surtitre="Un ouvrage à examiner"
        titre="Envoyez-nous une photographie de votre porte."
        texte="Une vue d'ensemble et deux détails du bas des vantaux suffisent à dire si l'ouvrage se restaure ou se remplace. Nous répondons sous 48 heures ouvrées, avant même la visite sur site."
        cta={{ label: "Décrire un ouvrage", href: "/contact" }}
      />
    </>
  );
}
