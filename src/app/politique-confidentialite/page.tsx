import type { Metadata } from "next";
import Container from "@/components/Container";
import { NAP } from "@/lib/nap";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site leboulluec.com — traitement des données personnelles, finalités, durées de conservation, droits RGPD.",
  alternates: { canonical: "https://leboulluec.com/politique-confidentialite" },
  openGraph: {
    url: "https://leboulluec.com/politique-confidentialite",
  },
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <article className="py-16 md:py-24 bg-[#F5EFE3]">
      <Container size="narrow" className="prose-marine">
        <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">RGPD</p>
        <h1>Politique de confidentialité</h1>
        <blockquote>Version en vigueur au 1<sup>er</sup> juillet 2026.</blockquote>

        <p>
          L&apos;Atelier Le Boulluec accorde une attention particulière à la protection des données personnelles de ses interlocuteurs. La présente politique détaille les traitements opérés via le site leboulluec.com et les droits des personnes concernées au titre du Règlement Général sur la Protection des Données (RGPD) et de la loi «&nbsp;Informatique et Libertés&nbsp;» modifiée.
        </p>

        <h2>Responsable du traitement</h2>
        <p>
          <strong>{NAP.legalName}</strong><br />
          {NAP.street}, {NAP.postalCode} {NAP.city}<br />
          <a href={`tel:${NAP.phoneE164}`}>{NAP.phone}</a> — <a href={`mailto:${NAP.email}`}>{NAP.email}</a>
        </p>

        <h2>Données collectées</h2>
        <ul>
          <li><strong>Données de formulaire de contact</strong> : nom, prénom, société, fonction, courriel, téléphone, contenu du message, pièces jointes éventuelles.</li>
          <li><strong>Données de navigation</strong> : adresse IP, type et version de navigateur, pages consultées, durée des sessions, source de trafic — collectées de manière anonymisée à des fins d&apos;analyse statistique.</li>
          <li><strong>Données issues des cookies fonctionnels</strong> : préférences d&apos;affichage, consentement cookies, état de session.</li>
        </ul>

        <h2>Finalités du traitement</h2>
        <ol>
          <li><strong>Réponse aux demandes de devis et de contact</strong> — fondement : exécution de mesures pré-contractuelles à la demande de la personne concernée.</li>
          <li><strong>Suivi commercial des projets</strong> — fondement : intérêt légitime de l&apos;atelier à conduire son activité.</li>
          <li><strong>Mesure d&apos;audience et amélioration du site</strong> — fondement : intérêt légitime, recueil de consentement pour les cookies non strictement nécessaires.</li>
          <li><strong>Respect des obligations légales et comptables</strong> — fondement : obligation légale.</li>
        </ol>
        <p>Aucune donnée n&apos;est utilisée à des fins de prospection commerciale ciblée sans consentement préalable.</p>

        <h2>Destinataires des données</h2>
        <p>
          Les données collectées sont accessibles aux salariés de l&apos;Atelier Le Boulluec habilités au traitement des demandes commerciales et techniques. Elles peuvent être transmises à :
        </p>
        <ul>
          <li>nos partenaires hébergeurs et prestataires techniques (Vercel pour l&apos;hébergement, Uploadcare pour la gestion des médias) — sous engagement contractuel de confidentialité ;</li>
          <li>les autorités administratives et judiciaires lorsque la loi nous y oblige.</li>
        </ul>
        <p>Aucune donnée n&apos;est cédée ni revendue à des tiers commerciaux.</p>

        <h2>Transferts hors Union européenne</h2>
        <p>
          Certains de nos prestataires techniques (notamment Vercel, hébergeur du site) sont situés aux États-Unis. Les transferts éventuels de données sont encadrés par les clauses contractuelles types adoptées par la Commission européenne, garantissant un niveau de protection équivalent.
        </p>

        <h2>Durées de conservation</h2>
        <ul>
          <li><strong>Demandes de contact non suivies de relation contractuelle</strong> : 24 mois à compter du dernier échange.</li>
          <li><strong>Données liées à un dossier client</strong> : durée de la relation contractuelle + 10 ans (durée de la garantie décennale).</li>
          <li><strong>Données comptables</strong> : 10 ans, conformément aux obligations légales.</li>
          <li><strong>Données de mesure d&apos;audience</strong> : 13 mois maximum.</li>
        </ul>

        <h2>Droits des personnes concernées</h2>
        <ul>
          <li>Droit d&apos;accès aux données la concernant,</li>
          <li>Droit de rectification des données inexactes,</li>
          <li>Droit à l&apos;effacement dans les limites prévues par la loi,</li>
          <li>Droit à la limitation du traitement,</li>
          <li>Droit à la portabilité des données,</li>
          <li>Droit d&apos;opposition au traitement pour motif légitime,</li>
          <li>Droit de retirer son consentement à tout moment,</li>
          <li>Droit d&apos;introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).</li>
        </ul>
        <p>
          Ces droits s&apos;exercent par courriel à <a href={`mailto:${NAP.email}`}>{NAP.email}</a> ou par voie postale à l&apos;adresse du siège social. Une réponse est apportée dans un délai d&apos;un mois.
        </p>

        <h2>Cookies</h2>
        <ul>
          <li><strong>Cookies strictement nécessaires</strong> : maintien de session, mémorisation du consentement. Ces cookies ne nécessitent pas de consentement préalable.</li>
          <li><strong>Cookies de mesure d&apos;audience</strong> : si activés, ils sont déposés uniquement après consentement explicite de l&apos;utilisateur via le bandeau de gestion des cookies.</li>
        </ul>
        <p>Aucun cookie publicitaire tiers n&apos;est utilisé.</p>

        <h2>Sécurité</h2>
        <p>
          Les données sont hébergées dans des environnements sécurisés, avec chiffrement TLS pour les échanges et contrôle d&apos;accès restreint pour les bases internes. L&apos;Atelier Le Boulluec met en œuvre des mesures techniques et organisationnelles raisonnables pour protéger les données contre l&apos;accès non autorisé, la perte ou l&apos;altération.
        </p>

        <h2>Modification de la présente politique</h2>
        <p>
          La présente politique peut être modifiée à tout moment pour refléter les évolutions légales ou techniques. La version en vigueur est celle datée en tête de page.
        </p>

        <h2>Contact</h2>
        <p>
          Pour toute question relative au traitement de vos données personnelles, vous pouvez écrire à <a href={`mailto:${NAP.email}`}>{NAP.email}</a> ou par courrier postal à l&apos;adresse du siège social.
        </p>
      </Container>
    </article>
  );
}
