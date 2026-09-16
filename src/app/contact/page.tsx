import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { Bandeau, Fil, Ouverture } from "@/components/Blocs";
import { contactPageSchema } from "@/lib/schema";
import { photo } from "@/lib/photos";
import { NAP } from "@/lib/nap";

export const metadata: Metadata = {
  title: "Contact — Massy, Île-de-France",
  description:
    "Atelier de menuiserie et serrurerie à Massy. 01 60 12 06 49. Visite d'atelier sur rendez-vous, devis sur étude.",
  alternates: { canonical: "https://www.leboulluec.com/contact" },
  openGraph: {
    title: "Contact — Atelier Le Boulluec, Massy",
    description: "01 60 12 06 49. Visite d'atelier sur rendez-vous.",
    url: "https://www.leboulluec.com/contact",
  },
};

/**
 * Contact. Aucune adresse électronique n’est affichée : les demandes passent
 * par le formulaire ou le téléphone (règle commune au parc BATIBIG).
 */
export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${NAP.street}, ${NAP.postalCode} ${NAP.city}`)}`;

  return (
    <>
      <JsonLd data={contactPageSchema()} />

      <Bandeau
        photo={photo("verriere")}
        surtitre="Nous écrire"
        titre="Nous contacter."
        chapeau="Atelier ouvert du lundi au vendredi, 8h–12h · 13h30–17h30. Visite d'atelier sur rendez-vous."
      />
      <Fil items={[{ label: "Contact", href: "/contact" }]} />

      <Ouverture photo={photo("las-cases")}>
        <p className="surtitre">Atelier &amp; siège</p>
        <h2>Atelier Le Boulluec</h2>
        <address style={{ fontStyle: "normal" }}>
          {NAP.street}
          <br />
          {NAP.postalCode} {NAP.city}
          <br />
          <br />
          <strong>Téléphone</strong>{" "}: <a href={`tel:${NAP.phoneE164}`}>{NAP.phone}</a>
        </address>
        <p style={{ marginTop: "0.6rem", color: "var(--gris)" }}>{NAP.hoursReadable}</p>

        <h3 style={{ marginTop: "2rem" }}>Visite d&apos;atelier</h3>
        <p>
          Les syndics, architectes et directions immobilières qui nous découvrent passent presque tous par notre atelier de Massy avant un premier ouvrage. La visite dure une vingtaine de minutes et se prend par téléphone ou via le formulaire ci-dessous.
        </p>

        <h3 style={{ marginTop: "2rem" }}>Itinéraire</h3>
        <p>
          Proximité immédiate de la gare RER B et C de Massy-Palaiseau, à dix minutes de l&apos;A10. Parking devant l&apos;atelier.{" "}
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
            Ouvrir dans Google Maps
          </a>
        </p>
      </Ouverture>

      <section className="bande bande--serree bande--pierre" id="formulaire">
        <div className="contenu contenu--large">
          <div className="duo duo--tiers" style={{ alignItems: "start" }}>
            <div>
              <p className="surtitre">Demander un chiffrage</p>
              <h2>Formulaire de contact</h2>
              <p className="chapeau">
                Décrivez votre projet en quelques lignes — nous reviendrons vers vous sous 48 heures ouvrées.
              </p>
              <dl className="planche" style={{ display: "block", padding: 0, border: 0 }}>
                <dt>Raison sociale</dt>
                <dd>{NAP.legalName}</dd>
                <dt>Forme juridique</dt>
                <dd>
                  {NAP.legalForm} au capital de {NAP.capital}
                </dd>
                <dt>SIRET</dt>
                <dd>{NAP.siret}</dd>
                <dt>RCS</dt>
                <dd>{NAP.rcs}</dd>
                <dt>TVA</dt>
                <dd>{NAP.tva}</dd>
                <dt>Groupe</dt>
                <dd>Membre du {NAP.group}</dd>
              </dl>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Carte OpenStreetMap, en niveaux de gris : aucune couleur hors photographie. */}
      <iframe
        className="carte"
        title="Plan de l'atelier — 6 Rue de l'Aulnaye Dracourt, 91300 Massy"
        src="https://www.openstreetmap.org/export/embed.html?bbox=2.2724%2C48.7203%2C2.2904%2C48.7303&amp;layer=mapnik&amp;marker=48.7253%2C2.2814"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
}
