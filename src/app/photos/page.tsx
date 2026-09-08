import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import SectionTitre from "@/components/SectionTitre";
import PlancheOuvrage, { PlanchePieces } from "@/components/PlancheOuvrage";
import FaqSection from "@/components/FaqSection";
import RelatedPages from "@/components/RelatedPages";
import CTASection from "@/components/CTASection";
import { OUVRAGES, PIECES, PHOTOS, cartouche } from "@/data/ouvrages";
import { faqPageSchema, SCHEMA_IDS } from "@/lib/schema";
import { uploadcareUrl } from "@/lib/uploadcare";
import { NAP } from "@/lib/nap";

const URL_PAGE = "https://www.leboulluec.com/photos";

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

export const metadata: Metadata = {
  title: "Archive des ouvrages — avant, pendant, après",
  description:
    "Portes cochères, grilles et escaliers restaurés à Paris : chaque ouvrage daté, situé et photographié avant, pendant et après travaux par l'Atelier Le Boulluec.",
  alternates: { canonical: URL_PAGE },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    siteName: NAP.brand,
    title: "Archive des ouvrages — Atelier Le Boulluec",
    description:
      "Portes cochères, grilles et escaliers restaurés à Paris, datés et situés, photographiés avant / pendant / après.",
    url: URL_PAGE,
    images: [uploadcareUrl(PHOTOS.cardinalMercierApres, 1200)],
  },
};

export default function PhotosPage() {
  const totalVues =
    OUVRAGES.reduce((n, o) => n + o.plaques.length, 0) + PIECES.length;
  const annees = OUVRAGES.concat()
    .map((o) => o.annee)
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
      <Breadcrumb items={[{ label: "Archive des ouvrages", href: "/photos" }]} />

      <Hero
        photoUuid={PHOTOS.cardinalMercierApres}
        eyebrow="Archive · 2012 → 2025 · Paris & ouest parisien"
        title="Ce que l'atelier a réparé, refait, reposé."
        subtitle="Chaque ouvrage porte sa date et son adresse. Quand nous avons les images, nous montrons l'état trouvé, le travail en cours et la pièce reposée — dans cet ordre. C'est la seule preuve de savoir-faire qui vaille."
        imageAlt="Porte cochère du 12 rue du Cardinal-Mercier, Paris 9e, reposée après restauration par l'Atelier Le Boulluec."
        legende={`${OUVRAGES.length} séquences avant / pendant / après · ${PIECES.length} pièces isolées · ${totalVues} planches`}
      />

      {/* Réponse directe — bloc citable (Bible SEO §13.2 / §15.5) */}
      <section className="bg-[#F6F4EF] border-b border-[#C9C1B2]">
        <Container size="default" className="py-10 md:py-12">
          <p className="text-[1.0625rem] md:text-lg leading-relaxed text-[#171512]">
            <strong className="text-[#0A3559]">En bref —</strong> Cette page réunit les
            ouvrages de menuiserie et de ferronnerie exécutés par l&apos;Atelier Le Boulluec
            entre {annees[0]} et {annees[annees.length - 1]}, principalement des portes
            cochères et des portes d&apos;immeuble parisiennes. Chaque entrée indique
            l&apos;année, l&apos;adresse, les matières employées — chêne, acier, laiton, fer
            forgé — et le geste réalisé : décapage, greffe de traverse basse, façonnage au
            dessin relevé, remise en teinte.
          </p>
          <dl className="mt-8 grid sm:grid-cols-3 gap-x-8 gap-y-5 border-t border-[#C9C1B2] pt-6">
            <div>
              <dt className="cartouche text-[#171512]/55">Période couverte</dt>
              <dd className="font-display text-2xl text-[#0A3559] mt-1">
                {annees[0]} — {annees[annees.length - 1]}
              </dd>
            </div>
            <div>
              <dt className="cartouche text-[#171512]/55">Séquences complètes</dt>
              <dd className="font-display text-2xl text-[#0A3559] mt-1">{OUVRAGES.length}</dd>
            </div>
            <div>
              <dt className="cartouche text-[#171512]/55">Planches publiées</dt>
              <dd className="font-display text-2xl text-[#0A3559] mt-1">{totalVues}</dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Sommaire de l'archive — maillage interne et repérage */}
      <section className="bg-[#E7E2D8] py-12 md:py-14">
        <Container size="wide">
          <SectionTitre
            index="01"
            rubrique="Sommaire"
            titre="Les ouvrages suivis de bout en bout."
            chapo="Sept chantiers dont nous possédons la suite complète des états. Chaque ligne mène à sa planche."
          />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 list-none p-0 m-0">
            {OUVRAGES.map((o, i) => (
              <li key={o.slug} className="m-0 border-t border-[#C9C1B2] pt-3">
                <a
                  href={`#${o.slug}`}
                  className="group flex items-baseline gap-3 hover:text-[#8F4703] transition-colors"
                >
                  <span className="cartouche text-[#8F4703]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-lg text-[#0A3559] group-hover:text-[#8F4703] transition-colors leading-snug">
                      {o.ouvrage}
                    </span>
                    <span className="block cartouche text-[#171512]/60 mt-1">
                      {cartouche(o)}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Les planches */}
      <section className="bg-[#F6F4EF] py-14 md:py-20">
        <Container size="wide">
          <SectionTitre
            index="02"
            rubrique="Avant · en cours · après"
            titre="Sept ouvrages, dans l'ordre où ils ont été faits."
            chapo="L'état trouvé, le chantier ouvert, la pièce reposée. Les légendes disent ce que montre chaque planche, sans commentaire commercial."
          />
          <div className="space-y-16 md:space-y-24">
            {OUVRAGES.map((o, i) => (
              <PlancheOuvrage key={o.slug} ouvrage={o} priorite={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      {/* Pièces isolées */}
      <section className="bg-[#E7E2D8] py-14 md:py-20 border-t border-[#C9C1B2]">
        <Container size="wide">
          <SectionTitre
            index="03"
            rubrique="Pièces"
            titre="Ouvrages dont nous n'avons gardé qu'une vue."
            chapo="Grilles de défense, seuils de laiton, fers de lance, châssis acier : les pièces sont datées et situées comme les séquences, mais photographiées une seule fois."
          />
          <PlanchePieces pieces={PIECES} colonnes={3} />
        </Container>
      </section>

      {/* Le vocabulaire du métier — GEO : entités nommées */}
      <section className="bg-[#171512] text-[#E7E2D8] py-14 md:py-20">
        <Container size="wide">
          <SectionTitre
            index="04"
            rubrique="Vocabulaire"
            titre="Les mots qui reviennent dans les légendes."
            chapo="Le lexique du métier n'est pas un ornement : il désigne des pièces précises, et c'est lui qui permet de décrire un désordre au téléphone."
            ton="sombre"
          />
          <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7">
            {[
              [
                "Porte cochère",
                "Porte à deux vantaux ouvrant sur le porche d'un immeuble, dimensionnée à l'origine pour le passage d'une voiture attelée.",
              ],
              [
                "Porte bâtarde",
                "Porte d'immeuble intermédiaire entre la porte piétonne et la porte cochère : deux vantaux, mais pas de passage véhicule.",
              ],
              [
                "Traverse basse",
                "Pièce horizontale en pied de vantail. C'est elle qui prend l'eau de ruissellement, et c'est presque toujours par elle que la porte meurt.",
              ],
              [
                "Greffe (ou enture)",
                "Découpe de la partie morte d'une pièce de bois et rapport d'une pièce neuve ajustée au même profil, plutôt que le remplacement du vantail entier.",
              ],
              [
                "Penture",
                "Ferrure allongée fixée sur le vantail et articulée au gond. Sur les portes anciennes, elle est forgée et souvent découpée en fleuron.",
              ],
              [
                "Fer de lance",
                "Barreau terminé en pointe lancéolée, motif courant des grilles de défense et des grilles de sas parisiennes.",
              ],
              [
                "Grille de sas",
                "Grille intérieure fermant le porche entre la rue et la cour, généralement doublée d'un contrôle d'accès.",
              ],
              [
                "Seuil",
                "Pièce basse de la baie, souvent doublée d'une plinthe de laiton qui protège le bois du ruissellement et du frottement.",
              ],
              [
                "Imposte",
                "Partie vitrée ou ajourée située au-dessus de la porte, dans le même dormant. Elle éclaire le porche.",
              ],
              [
                "Tierçage",
                "Division d'une porte en trois panneaux ou vantaux inégaux, plutôt qu'en deux parties symétriques.",
              ],
              [
                "Débillardé",
                "Se dit d'un limon d'escalier ou d'une main-courante dont la pièce est taillée en double courbure pour suivre le tournant.",
              ],
              [
                "Tôle laquée époxy",
                "Tôle d'acier revêtue d'une peinture poudre cuite au four, employée pour les capotages techniques exposés à la rue.",
              ],
            ].map(([terme, def]) => (
              <div key={terme} className="border-t border-[#3A3630] pt-3">
                <dt className="font-display text-lg text-[#F6F4EF]">{terme}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-[#E7E2D8]/80">{def}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-sm text-[#E7E2D8]/75 border-t border-[#3A3630] pt-5 max-w-3xl">
            Les ouvrages présentés ici relèvent pour l&apos;essentiel de la{" "}
            <Link
              href="/restauration-patrimoniale"
              className="text-[#E29A43] underline underline-offset-4"
            >
              restauration patrimoniale
            </Link>{" "}
            et de la{" "}
            <Link href="/menuiserie" className="text-[#E29A43] underline underline-offset-4">
              menuiserie sur mesure
            </Link>
            . Les grilles, fers de lance et châssis acier sont façonnés par notre{" "}
            <Link href="/serrurerie" className="text-[#E29A43] underline underline-offset-4">
              département serrurerie et ferronnerie
            </Link>
            , les escaliers par l&apos;
            <Link href="/escaliers" className="text-[#E29A43] underline underline-offset-4">
              atelier escaliers
            </Link>
            .
          </p>
        </Container>
      </section>

      <FaqSection index="05" items={FAQ} />

      <RelatedPages
        index="06"
        eyebrow="Pages liées"
        heading="Poursuivre la visite"
        items={[
          {
            title: "Belles portes de Paris",
            href: "/belle-portes-rue-sur-paris-et-ailleurs",
            blurb:
              "La galerie des portes d'immeuble parisiennes passées entre nos mains, rue par rue, arrondissement par arrondissement.",
          },
          {
            title: "Restauration patrimoniale",
            href: "/restauration-patrimoniale",
            blurb:
              "Méthode, dialogue avec les Architectes des Bâtiments de France, et ce que recouvre exactement une restauration de porte cochère.",
          },
          {
            title: "Chantiers récents",
            href: "/actualite",
            blurb:
              "Les derniers ouvrages livrés par l'atelier, classés par date, du plus récent au plus ancien.",
          },
          {
            title: "L'atelier depuis 1964",
            href: "/a-propos",
            blurb:
              "Trois adresses, soixante ans, dix-sept menuisiers : l'histoire de la maison et la façon dont elle travaille aujourd'hui.",
          },
        ]}
      />

      <CTASection
        eyebrow="Un ouvrage à examiner"
        title="Envoyez-nous une photographie de votre porte."
        text="Une vue d'ensemble et deux détails du bas des vantaux suffisent à dire si l'ouvrage se restaure ou se remplace. Nous répondons sous 48 heures ouvrées, avant même la visite sur site."
        cta={{ label: "Décrire un ouvrage", href: "/contact" }}
      />
    </>
  );
}
