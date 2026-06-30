import type { Metadata } from "next";
import Container from "@/components/Container";
import { NAP } from "@/lib/nap";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site leboulluec.com — éditeur, hébergeur, propriété intellectuelle et coordonnées.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <article className="py-16 md:py-24 bg-[#F5EFE3]">
      <Container size="narrow" className="prose-marine">
        <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Informations légales</p>
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          <strong>Raison sociale</strong> : {NAP.legalName}<br />
          <strong>Forme juridique</strong> : Société par Actions Simplifiée (SAS)<br />
          <strong>Capital social</strong> : {NAP.capital}<br />
          <strong>Siège social</strong> : {NAP.street}, {NAP.postalCode} {NAP.city}<br />
          <strong>SIREN</strong> : {NAP.siren}<br />
          <strong>SIRET (siège)</strong> : {NAP.siret}<br />
          <strong>RCS</strong> : {NAP.rcs}<br />
          <strong>N° TVA intracommunautaire</strong> : {NAP.tva}<br />
          <strong>Date d&apos;inscription au RCS</strong> : 26 août 2011
        </p>
        <p>
          <strong>Téléphone</strong> : <a href={`tel:${NAP.phoneE164}`}>{NAP.phone}</a><br />
          <strong>Courriel</strong> : <a href={`mailto:${NAP.email}`}>{NAP.email}</a>
        </p>
        <p>
          <strong>Directeur de la publication</strong> : à fournir par la direction.
        </p>

        <h2>Hébergeur</h2>
        <p>
          <strong>Vercel Inc.</strong><br />
          440 N Barranca Avenue #4133<br />
          Covina, CA 91723 — États-Unis<br />
          Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu du site leboulluec.com — textes, photographies, illustrations, vidéos, logos, marques, graphismes, codes sources — est la propriété exclusive de la société {NAP.legalName} ou de ses ayants droit. Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, par quelque procédé que ce soit, est interdite sans autorisation écrite préalable.
        </p>
        <p>
          Les photographies des ouvrages restaurés ou refabriqués par l&apos;atelier peuvent être reproduites à des fins éditoriales non commerciales sous réserve de mention de la source («&nbsp;© Atelier Le Boulluec&nbsp;»).
        </p>

        <h2>Marques</h2>
        <p>
          Les marques «&nbsp;Atelier Le Boulluec&nbsp;», ainsi que le logo associé, sont la propriété de la société {NAP.legalName}. Les marques tierces mentionnées sur ce site — notamment Bricard, Fichet, Picard, Geze, Intratone, Comelit, Faac, Came — restent la propriété de leurs détenteurs respectifs.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Le traitement des données personnelles collectées via ce site est décrit dans notre <a href="/politique-confidentialite">politique de confidentialité</a>.
        </p>

        <h2>Liens externes</h2>
        <p>
          Le site leboulluec.com peut contenir des liens vers des sites tiers. L&apos;Atelier Le Boulluec ne saurait être tenu responsable du contenu de ces sites externes.
        </p>

        <h2>Loi applicable</h2>
        <p>
          Le présent site est soumis au droit français. Tout litige relatif à son utilisation relève de la compétence exclusive des tribunaux français.
        </p>

        <h2>Crédits</h2>
        <p>Site conçu et développé par les équipes du {NAP.group}.</p>
      </Container>
    </article>
  );
}
