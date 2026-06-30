import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { contactPageSchema } from "@/lib/schema";
import { NAP } from "@/lib/nap";

export const metadata: Metadata = {
  title: "Contact — Massy, Île-de-France",
  description:
    "Atelier de menuiserie et serrurerie à Massy. 01 60 12 06 49 — contact@leboulluec.fr. Visite d'atelier sur rendez-vous, devis sur étude.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Atelier Le Boulluec, Massy",
    description: "01 60 12 06 49 — contact@leboulluec.fr. Visite d'atelier sur rendez-vous.",
    images: ["https://ucarecdn.com/869f3df8-834f-4132-a008-c3e2c7ca8a37/-/format/auto/-/quality/smart/-/resize/1600x/"],
  },
};

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${NAP.street}, ${NAP.postalCode} ${NAP.city}`)}`;

  return (
    <>
      <JsonLd data={contactPageSchema()} />
      <PageHeader
        photoUuid="869f3df8-834f-4132-a008-c3e2c7ca8a37"
        eyebrow="Nous écrire"
        title="Nous contacter."
        subtitle="Atelier ouvert du lundi au vendredi, 8h–12h · 13h30–17h30. Visite d'atelier sur rendez-vous."
      />

      <section className="py-20 md:py-24 bg-[#F5EFE3]">
        <Container size="wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: details */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Atelier &amp; siège</p>
                <h2 className="font-serif text-2xl text-[#15294E] mb-4">Atelier Le Boulluec</h2>
                <address className="not-italic text-[#1A1A1A]/85 leading-relaxed">
                  {NAP.street}<br />
                  {NAP.postalCode} {NAP.city}<br />
                  <br />
                  <strong className="text-[#15294E]">Téléphone</strong> :{" "}
                  <a href={`tel:${NAP.phoneE164}`} className="text-[#C46B2E] hover:underline">{NAP.phone}</a><br />
                  <strong className="text-[#15294E]">Courriel</strong> :{" "}
                  <a href={`mailto:${NAP.email}`} className="text-[#C46B2E] hover:underline">{NAP.email}</a>
                </address>
                <p className="mt-5 text-sm text-[#1A1A1A]/70">{NAP.hoursReadable}</p>
              </div>

              <div>
                <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Visite d&apos;atelier</p>
                <p className="text-[#1A1A1A]/85 leading-relaxed">
                  Les syndics, architectes et directions immobilières qui nous découvrent passent presque tous par notre atelier de Massy avant un premier ouvrage. La visite dure une vingtaine de minutes et se prend par téléphone ou par courriel.
                </p>
              </div>

              <div>
                <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Itinéraire</p>
                <p className="text-[#1A1A1A]/85 leading-relaxed mb-3">
                  Proximité immédiate de la gare RER B et C de Massy-Palaiseau, à dix minutes de l&apos;A10. Parking devant l&apos;atelier.
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#C46B2E] hover:underline font-medium"
                >
                  Ouvrir dans Google Maps →
                </a>
              </div>

              <div className="pt-6 border-t border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/60 space-y-1">
                <p><strong className="text-[#15294E]">Raison sociale</strong> : {NAP.legalName}</p>
                <p><strong className="text-[#15294E]">Forme juridique</strong> : {NAP.legalForm} au capital de {NAP.capital}</p>
                <p><strong className="text-[#15294E]">SIRET</strong> : {NAP.siret}</p>
                <p><strong className="text-[#15294E]">RCS</strong> : {NAP.rcs}</p>
                <p><strong className="text-[#15294E]">TVA</strong> : {NAP.tva}</p>
                <p>Membre du <strong className="text-[#15294E]">{NAP.group}</strong></p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="bg-white border-l-4 border-[#C46B2E] p-7 md:p-10 shadow-sm">
                <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Demander un chiffrage</p>
                <h2 className="font-serif text-2xl text-[#15294E] mb-2">Formulaire de contact</h2>
                <p className="text-sm text-[#1A1A1A]/70 mb-8">
                  Décrivez votre projet en quelques lignes — nous reviendrons vers vous sous 48 heures ouvrées.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* OpenStreetMap embed */}
      <section className="bg-[#1F3A6B] py-1">
        <div className="aspect-[16/6] w-full bg-[#15294E] relative overflow-hidden">
          <iframe
            title="Plan de l'atelier — 6 Rue de l'Aulnaye Dracourt, 91300 Massy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=2.2724%2C48.7203%2C2.2904%2C48.7303&amp;layer=mapnik&amp;marker=48.7253%2C2.2814"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
