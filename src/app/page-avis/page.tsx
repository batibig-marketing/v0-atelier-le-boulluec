import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import SectionTitre from "@/components/SectionTitre";
import FaqSection from "@/components/FaqSection";
import RelatedPages from "@/components/RelatedPages";
import CTASection from "@/components/CTASection";
import References from "@/components/References";
import { PHOTOS } from "@/data/ouvrages";
import { faqPageSchema, SCHEMA_IDS } from "@/lib/schema";
import { uploadcareUrl } from "@/lib/uploadcare";
import { NAP } from "@/lib/nap";

const URL_PAGE = "https://www.leboulluec.com/page-avis";

/* Note publique de l'établissement — source : fiche Google Business Profile.
   Elle est affichée ici en clair pour rester strictement identique à la valeur
   déclarée dans le JSON-LD LocalBusiness (Bible SEO §2.1 et §3.5). */
const NOTE = { valeur: "4,2", sur: "5", avis: 40 };

const FAQ = [
  {
    q: "Quelle est la note de l'Atelier Le Boulluec ?",
    a: `L'atelier est noté ${NOTE.valeur} sur ${NOTE.sur} sur sa fiche d'établissement Google, sur la base de ${NOTE.avis} avis publics. Cette note est la seule que nous affichons : nous ne publions pas de témoignages rédigés par nos soins.`,
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
  description: `Note publique ${NOTE.valeur}/${NOTE.sur} sur ${NOTE.avis} avis, garantie décennale, réseau Bricard Serruriers Confiance : ce sur quoi s'engage l'Atelier Le Boulluec.`,
  alternates: { canonical: URL_PAGE },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    siteName: NAP.brand,
    title: "Avis, garanties et références — Atelier Le Boulluec",
    description: `Note publique ${NOTE.valeur}/${NOTE.sur} sur ${NOTE.avis} avis, garantie décennale, réseau Bricard Serruriers Confiance.`,
    url: URL_PAGE,
    images: [uploadcareUrl(PHOTOS.desDames, 1200)],
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
      "Note publique de l'établissement, garantie décennale, réseau Bricard Serruriers Confiance et donneurs d'ordre de l'Atelier Le Boulluec.",
    inLanguage: "fr-FR",
    isPartOf: { "@id": SCHEMA_IDS.WEBSITE_ID },
    about: { "@id": SCHEMA_IDS.BUSINESS_ID },
    mainEntity: { "@id": SCHEMA_IDS.BUSINESS_ID },
  };

  return (
    <>
      <JsonLd data={webPage} />
      <JsonLd data={faqPageSchema(FAQ)} />
      <Breadcrumb items={[{ label: "Avis & garanties", href: "/page-avis" }]} />

      <PageHeader
        photoUuid={PHOTOS.desDames}
        eyebrow={`Note publique · ${NOTE.valeur} / ${NOTE.sur} · ${NOTE.avis} avis`}
        title="Ce sur quoi l'atelier s'engage."
        subtitle="Nous ne publions pas de témoignages rédigés par nos soins. Voici la note publique de l'établissement, les garanties qui couvrent nos ouvrages, et la liste de ceux qui nous ont confié un chantier."
        imageAlt="Porte bâtarde restaurée par l'Atelier Le Boulluec, 24 rue des Dames, Paris 17e."
        legende="Porte bâtarde restaurée — 24 rue des Dames, Paris 17e, 2017"
      />

      <section className="bg-[#241E1A] bois border-b border-[#3A322C]">
        <Container size="default" className="py-10 md:py-12">
          <p className="text-[1.0625rem] md:text-lg leading-relaxed text-[#EDE6DA]">
            <strong className="text-[#EDE6DA]">En bref —</strong> L&apos;Atelier Le Boulluec est
            noté <strong>{NOTE.valeur} sur {NOTE.sur}</strong> sur sa fiche d&apos;établissement
            Google, sur la base de <strong>{NOTE.avis} avis publics</strong>. Tous les ouvrages,
            neufs comme restaurés, sont couverts par la <strong>garantie décennale</strong>.
            L&apos;atelier est membre du réseau <strong>Bricard « Serruriers Confiance »</strong>{" "}
            et appartient au {NAP.group}.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-x-8 gap-y-6 border-t border-[#3A322C] pt-6">
            <div className="border-l-2 border-[#7E96A8] pl-4">
              <p className="cartouche text-[#EDE6DA]/78">Note d&apos;établissement</p>
              <p className="font-display text-[2.4rem] leading-none text-[#EDE6DA] mt-1.5">
                {NOTE.valeur}
                <span className="text-[1.2rem] text-[#EDE6DA]/78"> / {NOTE.sur}</span>
              </p>
              <p className="cartouche text-[#EDE6DA]/78 mt-2">Sur {NOTE.avis} avis publics</p>
            </div>
            <div className="border-l-2 border-[#7E96A8] pl-4">
              <p className="cartouche text-[#EDE6DA]/78">Garantie</p>
              <p className="font-display text-[2.4rem] leading-none text-[#EDE6DA] mt-1.5">10 ans</p>
              <p className="cartouche text-[#EDE6DA]/78 mt-2">Décennale, neuf et restauré</p>
            </div>
            <div className="border-l-2 border-[#7E96A8] pl-4">
              <p className="cartouche text-[#EDE6DA]/78">Label</p>
              <p className="font-display text-[1.6rem] leading-tight text-[#EDE6DA] mt-2">
                Bricard
                <br />
                Serruriers Confiance
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#1C1714] py-14 md:py-20">
        <Container size="wide">
          <SectionTitre
            index="01"
            rubrique="Engagements"
            titre="Six règles de maison, tenues depuis 1964."
            chapo="Elles ne sont pas décoratives : chacune a un coût, et c'est ce coût qui fait la différence entre un ouvrage repris et un ouvrage remplacé à la va-vite."
          />
          <dl className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {ENGAGEMENTS.map(([titre, texte], i) => (
              <div key={titre} className="border-t-2 border-[#574B41] pt-4">
                <dt>
                  <span className="cartouche text-[#7E96A8]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block font-display text-xl text-[#EDE6DA] mt-1.5 leading-snug">
                    {titre}
                  </span>
                </dt>
                <dd className="mt-2.5 text-sm leading-relaxed text-[#EDE6DA]/80">{texte}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <References />

      <section className="bg-[#15100E] bois text-[#EDE6DA] py-14 md:py-18">
        <Container size="default">
          <SectionTitre
            index="06"
            rubrique="Vérifier par vous-même"
            titre="Ce qui vaut mieux qu'un témoignage."
            ton="sombre"
          />
          <ul className="space-y-4 list-none p-0 m-0 text-[#EDE6DA]/85 leading-relaxed">
            <li className="border-t border-[#3A322C] pt-4">
              <strong className="text-[#EDE6DA]">Les chantiers eux-mêmes.</strong>{" "}
              <Link href="/photos" className="text-[#9DB2C2] underline underline-offset-4">
                L&apos;archive des ouvrages
              </Link>{" "}
              donne l&apos;adresse, l&apos;année et l&apos;état trouvé de chaque pièce reprise.
              Les photographies « avant » y sont publiées au même titre que les « après ».
            </li>
            <li className="border-t border-[#3A322C] pt-4">
              <strong className="text-[#EDE6DA]">Le journal daté.</strong>{" "}
              <Link href="/actualite" className="text-[#9DB2C2] underline underline-offset-4">
                Les chantiers récents
              </Link>{" "}
              listent ce qui est sorti de l&apos;atelier, année par année, avec le geste réalisé.
            </li>
            <li className="border-t border-[#3A322C] pt-4">
              <strong className="text-[#EDE6DA]">La visite d&apos;atelier.</strong> Sur rendez-vous
              au {NAP.street}, {NAP.postalCode} {NAP.city}. C&apos;est la vérification la plus
              directe : on voit les bois, les assemblages et les compagnons au travail.
            </li>
            <li className="border-t border-[#3A322C] pt-4">
              <strong className="text-[#EDE6DA]">Les avis publics.</strong> La fiche
              d&apos;établissement de l&apos;atelier porte {NOTE.avis} avis, note moyenne{" "}
              {NOTE.valeur} sur {NOTE.sur}. Nous ne la retouchons pas et n&apos;en sélectionnons
              aucun extrait.
            </li>
          </ul>
        </Container>
      </section>

      <FaqSection index="07" items={FAQ} />

      <RelatedPages
        index="08"
        eyebrow="Pages liées"
        heading="Regarder le travail"
        items={[
          {
            title: "Archive des ouvrages",
            href: "/photos",
            blurb:
              "Sept chantiers suivis avant, pendant et après, avec l'adresse, l'année, les matières et le geste réalisé.",
          },
          {
            title: "L'atelier depuis 1964",
            href: "/a-propos",
            blurb:
              "Trois adresses, soixante ans, dix-sept menuisiers : l'histoire de la maison et sa méthode de travail.",
          },
          {
            title: "Serrurerie & ferronnerie",
            href: "/serrurerie",
            blurb:
              "Le département qui porte le label Bricard Serruriers Confiance : serrures de haute sûreté, blindage, contrôle d'accès.",
          },
          {
            title: "Contact & chiffrage",
            href: "/contact",
            blurb:
              "Coordonnées, horaires, itinéraire vers l'atelier de Massy et formulaire de demande de chiffrage.",
          },
        ]}
      />

      <CTASection
        eyebrow="Vérification"
        title="Venez voir l'atelier avant de nous confier un ouvrage."
        text="C'est ce que font la plupart des syndics et des architectes qui travaillent avec nous. Vingt minutes sur place valent tous les arguments écrits."
        cta={{ label: "Prendre rendez-vous", href: "/contact" }}
      />
    </>
  );
}
