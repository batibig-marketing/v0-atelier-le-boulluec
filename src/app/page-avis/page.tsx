import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { AppelContact, Bandeau, Bande, Fil, Ouverture, Questions, Rangee, Suite, Voisines } from "@/components/Blocs";
import { References } from "@/components/Maison";
import { PHOTOS } from "@/data/ouvrages";
import { faqPageSchema, SCHEMA_IDS } from "@/lib/schema";
import { uploadcareUrl } from "@/lib/uploadcare";
import { galerie, photo } from "@/lib/photos";
import { NAP } from "@/lib/nap";

const URL_PAGE = "https://www.leboulluec.com/page-avis";

/*
 * La note « 4,2 / 5 sur 40 avis » affichée jusqu’ici a été retirée de la page
 * comme des données structurées : personne n’a pu en retrouver la source, et
 * le site historique n’affiche qu’un widget Pages Jaunes sans note. Une note
 * non vérifiable expose le site à une action manuelle de Google. La page garde
 * ce qui se vérifie : garanties, label, donneurs d’ordre, chantiers publiés.
 */

const FAQ = [
  {
    q: "Où lire les avis sur l'Atelier Le Boulluec ?",
    a: "Sur la fiche d'établissement Google de l'atelier, que nous ne retouchons pas. Nous ne publions pas de témoignages rédigés par nos soins.",
  },
  {
    q: "Pourquoi ne publiez-vous pas de témoignages clients sur le site ?",
    a: "Parce qu'un témoignage retapé par l'entreprise ne prouve rien. Nous préférons renvoyer vers les avis publics, vérifiables, et montrer les chantiers eux-mêmes — datés, situés, photographiés avant et après travaux.",
  },
  {
    q: "Vos ouvrages sont-ils garantis ?",
    a: "Oui. Tous nos ouvrages neufs et restaurés sont couverts par la garantie décennale à compter de la réception. Nous conservons l'historique de chaque chantier et intervenons sous garantie sur les pièces que nous avons posées.",
  },
  {
    q: "L'atelier est-il labellisé ?",
    a: "L'Atelier Le Boulluec est membre du réseau Bricard « Serruriers Confiance », que le fabricant réserve à un cercle restreint d'artisans formés sur l'ensemble de sa gamme de haute sûreté. L'atelier appartient par ailleurs au Groupe BATIBIG.",
  },
  {
    q: "Comment laisser un avis après un chantier ?",
    a: `Par la fiche d'établissement Google de l'atelier, à l'adresse ${NAP.street}, ${NAP.postalCode} ${NAP.city}. Les remarques adressées directement à l'atelier, par téléphone au ${NAP.phone} ou par le formulaire de contact, sont traitées de la même façon : elles remontent au compagnon qui a exécuté l'ouvrage.`,
  },
];

export const metadata: Metadata = {
  title: "Avis, garanties et références",
  description:
    "Garantie décennale, réseau Bricard Serruriers Confiance, donneurs d'ordre et chantiers publiés : ce sur quoi s'engage l'Atelier Le Boulluec.",
  alternates: { canonical: URL_PAGE },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    siteName: NAP.brand,
    title: "Avis, garanties et références — Atelier Le Boulluec",
    description: "Garantie décennale, réseau Bricard Serruriers Confiance, donneurs d'ordre et chantiers publiés.",
    url: URL_PAGE,
  },
};

const ENGAGEMENTS: [string, string][] = [
  [
    "Un relevé avant toute proposition",
    "Aucun chiffrage sérieux ne se fait sur photographie seule. Nous venons prendre les cotes, ouvrir un panneau, sonder une traverse basse. Le devis suit la visite.",
  ],
  [
    "La même main façonne et pose",
    "Le compagnon qui a assemblé la pièce à l'atelier est celui qui la pose sur site. C'est la seule façon d'éviter la rupture entre fabrication et mise en œuvre.",
  ],
  [
    "Restaurer d'abord, remplacer ensuite",
    "Tant que le bâti est sain, nous proposons la reprise plutôt que le remplacement. C'est plus juste pour le bâtiment, moins coûteux sur vingt ans, et cela satisfait les services patrimoniaux.",
  ],
  [
    "Une garantie décennale sur tout",
    "Ouvrages neufs comme restaurés. Nous conservons l'historique des chantiers et revenons sur les pièces que nous avons posées.",
  ],
  [
    "Aucune sous-traitance des cinq métiers",
    "Menuiserie, serrurerie, ferronnerie, vitrerie et escaliers sont exécutés dans le même atelier de Massy. Il n'y a personne à qui renvoyer la responsabilité.",
  ],
  [
    "Un atelier qui se visite",
    "Sur rendez-vous, vingt minutes suffisent. On y voit les bois, les soudures, les finitions, et presque toujours une porte cochère démontée en cours de reprise.",
  ],
];

export default function PageAvis() {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL_PAGE}#webpage`,
    url: URL_PAGE,
    name: "Avis, garanties et références — Atelier Le Boulluec",
    description:
      "Garantie décennale, réseau Bricard Serruriers Confiance et donneurs d'ordre de l'Atelier Le Boulluec.",
    inLanguage: "fr-FR",
    isPartOf: { "@id": SCHEMA_IDS.WEBSITE_ID },
    about: { "@id": SCHEMA_IDS.BUSINESS_ID },
    mainEntity: { "@id": SCHEMA_IDS.BUSINESS_ID },
  };

  return (
    <>
      <JsonLd data={webPage} />
      <JsonLd data={faqPageSchema(FAQ)} />

      <Bandeau
        photo={photo("des-dames")}
        surtitre="Avis · garanties · références"
        titre="Ce sur quoi l'atelier s'engage."
        chapeau="Nous ne publions pas de témoignages rédigés par nos soins. Voici les garanties qui couvrent nos ouvrages, nos règles de maison et la liste de ceux qui nous ont confié un chantier."
      />
      <Fil items={[{ label: "Avis & garanties", href: "/page-avis" }]} />

      <Ouverture photo={photo("montparnasse")}>
        <p className="en-bref">
          <strong>En bref —</strong>{" "}Tous les ouvrages de l&apos;Atelier Le Boulluec, neufs comme
          restaurés, sont couverts par la <strong>garantie décennale</strong>. L&apos;atelier est
          membre du réseau <strong>Bricard « Serruriers Confiance »</strong>{" "}et appartient au{" "}
          {NAP.group}.
        </p>
        <dl className="chiffres" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <div>
            <dt>Garantie</dt>
            <dd>10 ans</dd>
            <dd style={{ fontFamily: "inherit", fontSize: "0.8rem", color: "var(--gris)" }}>
              Décennale, neuf et restauré
            </dd>
          </div>
          <div>
            <dt>Label</dt>
            <dd>Bricard Serruriers Confiance</dd>
          </div>
        </dl>
      </Ouverture>

      <Rangee photos={galerie("avis-rangee")} />

      <Bande
        fond="pierre"
        surtitre="Engagements"
        titre="Six règles de maison, tenues depuis 1964."
        chapeau="Elles ne sont pas décoratives : chacune a un coût, et c'est ce coût qui fait la différence entre un ouvrage repris et un ouvrage remplacé à la va-vite."
      >
        <dl className="definitions">
          {ENGAGEMENTS.map(([titre, texte], i) => (
            <div key={titre}>
              <dt>
                <small>{String(i + 1).padStart(2, "0")}</small>
                {titre}
              </dt>
              <dd>{texte}</dd>
            </div>
          ))}
        </dl>
      </Bande>

      <References />

      <Suite
        depart={1}
        blocs={[
          {
            surtitre: "Vérifier par vous-même",
            titre: "Ce qui vaut mieux qu'un témoignage.",
            niveau: 2,
            photo: photo("richer"),
            corps: (
              <ul>
                <li>
                  <strong>Les chantiers eux-mêmes.</strong>{" "}
                  <Link href="/photos">L&apos;archive des ouvrages</Link>{" "}donne l&apos;adresse,
                  l&apos;année et l&apos;état trouvé de chaque pièce reprise. Les photographies
                  « avant » y sont publiées au même titre que les « après ».
                </li>
                <li>
                  <strong>Le journal daté.</strong>{" "}
                  <Link href="/actualite">Les chantiers récents</Link>{" "}listent ce qui est sorti de
                  l&apos;atelier, année par année, avec le geste réalisé.
                </li>
                <li>
                  <strong>La visite d&apos;atelier.</strong>{" "}Sur rendez-vous au {NAP.street},{" "}
                  {NAP.postalCode} {NAP.city}. C&apos;est la vérification la plus directe : on voit
                  les bois, les assemblages et les compagnons au travail.
                </li>
                <li>
                  <strong>Les avis publics.</strong>{" "}Ils se lisent sur la fiche d&apos;établissement
                  Google de l&apos;atelier. Nous ne la retouchons pas et n&apos;en sélectionnons
                  aucun extrait.
                </li>
              </ul>
            ),
          },
        ]}
      />

      <Questions items={FAQ} />

      <Voisines
        titre="Regarder le travail"
        liens={[
          {
            libelle: "Archive des ouvrages",
            href: "/photos",
            resume:
              "Sept chantiers suivis avant, pendant et après, avec l'adresse, l'année, les matières et le geste réalisé.",
          },
          {
            libelle: "L'atelier depuis 1964",
            href: "/a-propos",
            resume:
              "Trois adresses, soixante ans, dix-sept menuisiers : l'histoire de la maison et sa méthode de travail.",
          },
          {
            libelle: "Serrurerie & ferronnerie",
            href: "/serrurerie",
            resume:
              "Le département qui porte le label Bricard Serruriers Confiance : serrures de haute sûreté, blindage, contrôle d'accès.",
          },
          {
            libelle: "Contact & chiffrage",
            href: "/contact",
            resume:
              "Coordonnées, horaires, itinéraire vers l'atelier de Massy et formulaire de demande de chiffrage.",
          },
        ]}
      />

      <AppelContact
        surtitre="Vérification"
        titre="Venez voir l'atelier avant de nous confier un ouvrage."
        texte="C'est ce que font la plupart des syndics et des architectes qui travaillent avec nous. Vingt minutes sur place valent tous les arguments écrits."
        cta={{ label: "Prendre rendez-vous", href: "/contact" }}
      />
    </>
  );
}
