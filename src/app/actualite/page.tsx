import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import SectionTitre from "@/components/SectionTitre";
import { PlanchePieces } from "@/components/PlancheOuvrage";
import FaqSection from "@/components/FaqSection";
import RelatedPages from "@/components/RelatedPages";
import CTASection from "@/components/CTASection";
import { OUVRAGES, PIECES, PHOTOS, cartouche } from "@/data/ouvrages";
import { faqPageSchema, SCHEMA_IDS } from "@/lib/schema";
import { uploadcareUrl } from "@/lib/uploadcare";
import { NAP } from "@/lib/nap";

const URL_PAGE = "https://www.leboulluec.com/actualite";

/** Journal des chantiers : toutes les entrées datées, du plus récent au plus ancien. */
type Entree = {
  annee: string;
  ouvrage: string;
  ou: string;
  matieres: string[];
  quoi: string;
  ancre?: string;
};

const JOURNAL: Entree[] = [
  ...OUVRAGES.filter((o) => o.annee).map((o) => ({
    annee: o.annee as string,
    ouvrage: o.ouvrage,
    ou: `${o.adresse}, ${o.lieu}`,
    matieres: o.matieres,
    quoi: `${o.geste}. ${o.resume}`,
    ancre: o.slug,
  })),
  ...PIECES.filter((p) => p.annee).map((p) => ({
    annee: p.annee as string,
    ouvrage: p.ouvrage,
    ou: `${p.adresse}, ${p.lieu}`,
    matieres: p.matieres,
    quoi: p.note,
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

  const pagePlusRecentes = PIECES.filter((p) => p.annee && Number(p.annee) >= 2022);

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
      <Breadcrumb items={[{ label: "Chantiers récents", href: "/actualite" }]} />

      <PageHeader
        photoUuid={PHOTOS.chausseeDantin}
        eyebrow={`Journal · ${premiere} → ${derniere}`}
        title="Les chantiers, dans l'ordre où ils sont sortis."
        subtitle="Un ouvrage, une année, une adresse, une matière. Ce journal ne raconte pas l'entreprise : il liste ce qu'elle a livré."
        imageAlt="Repose au palan d'un vantail de porte cochère monumentale, 68 rue de la Chaussée-d'Antin, par l'Atelier Le Boulluec."
        legende="Repose d'un vantail monumental au palan — 68 rue de la Chaussée-d'Antin, Paris"
      />

      <section className="bg-[#F6F4EF] border-b border-[#C9C1B2]">
        <Container size="default" className="py-10 md:py-12">
          <p className="text-[1.0625rem] md:text-lg leading-relaxed text-[#171512]">
            <strong className="text-[#0A3559]">En bref —</strong> L&apos;Atelier Le Boulluec
            intervient sur des portes cochères, portes bâtardes, grilles de sas, escaliers
            d&apos;immeuble et châssis acier, à Paris et dans l&apos;ouest parisien. Le journal
            ci-dessous recense {JOURNAL.length} ouvrages datés entre {premiere} et {derniere},
            avec pour chacun l&apos;adresse, les matières employées et le geste réalisé. Les
            séquences photographiques complètes se trouvent dans{" "}
            <Link
              href="/photos"
              className="text-[#0D4A7B] underline underline-offset-4 decoration-[#BE5E03]"
            >
              l&apos;archive des ouvrages
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="bg-[#E7E2D8] py-14 md:py-20">
        <Container size="wide">
          <SectionTitre
            index="01"
            rubrique={`Journal · ${JOURNAL.length} entrées`}
            titre="Ce que l'atelier a livré, année par année."
            chapo="Les entrées soulignées ouvrent la planche avant / pendant / après du chantier dans l'archive."
          />

          <div className="table-scroll">
            <table className="w-full border-collapse text-left min-w-[46rem]">
              <caption className="sr-only">
                Journal des ouvrages livrés par l&apos;Atelier Le Boulluec, du plus récent au
                plus ancien
              </caption>
              <thead>
                <tr className="border-b-2 border-[#171512]">
                  <th scope="col" className="cartouche text-[#171512]/60 py-3 pr-4 w-20">
                    Année
                  </th>
                  <th scope="col" className="cartouche text-[#171512]/60 py-3 pr-4 w-56">
                    Ouvrage
                  </th>
                  <th scope="col" className="cartouche text-[#171512]/60 py-3 pr-4 w-64">
                    Adresse
                  </th>
                  <th scope="col" className="cartouche text-[#171512]/60 py-3 pr-4 w-44">
                    Matières
                  </th>
                  <th scope="col" className="cartouche text-[#171512]/60 py-3">
                    Travail réalisé
                  </th>
                </tr>
              </thead>
              <tbody>
                {JOURNAL.map((e, i) => (
                  <tr key={`${e.annee}-${e.ouvrage}-${i}`} className="border-b border-[#C9C1B2] align-top">
                    <td className="py-4 pr-4">
                      <span className="cartouche text-[#8F4703]">{e.annee}</span>
                    </td>
                    <td className="py-4 pr-4">
                      {e.ancre ? (
                        <Link
                          href={`/photos#${e.ancre}`}
                          className="font-display text-lg text-[#0A3559] hover:text-[#8F4703] underline underline-offset-4 decoration-[#BE5E03] transition-colors"
                        >
                          {e.ouvrage}
                        </Link>
                      ) : (
                        <span className="font-display text-lg text-[#0A3559]">{e.ouvrage}</span>
                      )}
                    </td>
                    <td className="py-4 pr-4 text-sm text-[#171512]/85">{e.ou}</td>
                    <td className="py-4 pr-4 cartouche text-[#171512]/60">
                      {e.matieres.join(" · ")}
                    </td>
                    <td className="py-4 text-sm text-[#171512]/80 leading-relaxed">{e.quoi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-[#F6F4EF] py-14 md:py-20 border-t border-[#C9C1B2]">
        <Container size="wide">
          <SectionTitre
            index="02"
            rubrique="Depuis 2022"
            titre="Les pièces les plus récentes."
            chapo="Grilles, châssis et portes livrés au cours des dernières années, photographiés sur place ou à l'atelier de Massy."
          />
          <PlanchePieces pieces={pagePlusRecentes} colonnes={3} />
        </Container>
      </section>

      <section className="bg-[#171512] text-[#E7E2D8] py-14 md:py-18">
        <Container size="wide">
          <SectionTitre
            index="03"
            rubrique="Où l'atelier intervient"
            titre="Paris et l'ouest parisien, principalement."
            chapo="Les adresses relevées dans ce journal se concentrent sur les arrondissements centraux de Paris, avec des chantiers réguliers dans les Hauts-de-Seine, les Yvelines et l'Essonne."
            ton="sombre"
          />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 list-none p-0 m-0 text-sm">
            {[
              "Paris 1er, 3e, 4e, 5e, 6e",
              "Paris 7e, 8e, 9e, 11e, 12e",
              "Paris 14e, 16e, 17e, 18e",
              "Neuilly-sur-Seine, Courbevoie",
              "Versailles, Saint-Cloud",
              "Vincennes, Clichy",
              "Massy, Paray-Vieille-Poste, Saclay",
              "Dannemois, Essonne",
            ].map((z) => (
              <li key={z} className="border-t border-[#3A3630] pt-2.5 text-[#E7E2D8]/85">
                {z}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-[#E7E2D8]/70 border-t border-[#3A3630] pt-5 max-w-3xl">
            L&apos;atelier se trouve à {NAP.city} ({NAP.postalCode}), dans l&apos;Essonne, et
            intervient dans toute l&apos;{NAP.areaServed}. Voir{" "}
            <Link href="/contact" className="text-[#E29A43] underline underline-offset-4">
              les coordonnées et l&apos;itinéraire
            </Link>
            .
          </p>
        </Container>
      </section>

      <FaqSection index="04" items={FAQ} />

      <RelatedPages
        index="05"
        eyebrow="Pages liées"
        heading="Voir le travail en détail"
        items={[
          {
            title: "Archive des ouvrages",
            href: "/photos",
            blurb:
              "Les séquences complètes avant / pendant / après, avec les légendes qui disent ce que montre chaque planche.",
          },
          {
            title: "Belles portes de Paris",
            href: "/belle-portes-rue-sur-paris-et-ailleurs",
            blurb:
              "La galerie des portes d'immeuble parisiennes, et une typologie de la porte cochère, de la bâtarde et de la porte de sas.",
          },
          {
            title: "Restauration patrimoniale",
            href: "/restauration-patrimoniale",
            blurb:
              "La méthode : diagnostic, dépose, enture de chêne sec, repose, et le dialogue avec les Architectes des Bâtiments de France.",
          },
          {
            title: "Avis des clients",
            href: "/page-avis",
            blurb:
              "Ce que disent les copropriétés et les syndics qui nous ont confié un ouvrage, et la note publique de l'atelier.",
          },
        ]}
      />

      <CTASection
        eyebrow="Prochain chantier"
        title="Un ouvrage à reprendre dans votre immeuble ?"
        text="Décrivez-le nous — l'adresse, l'année approximative de la porte, l'état du bas des vantaux. Nous disons en retour si l'ouvrage se restaure, et sous quel délai."
        cta={{ label: "Décrire un ouvrage", href: "/contact" }}
      />
    </>
  );
}
