import Link from "next/link";
import { NAP } from "@/lib/nap";
import { MENUISERIE_SOUS, ESCALIERS_SOUS } from "@/lib/navigation";
import Logo from "./Logo";

/**
 * Le pied de page reprend l'arborescence complete du site historique, ancres
 * de sous-rubriques comprises : c'est le plan du site que les moteurs lisent
 * sur chaque page.
 */
const METIERS: { href: string; label: string; sous?: { href: string; label: string }[] }[] = [
  {
    href: "/menuiserie",
    label: "Menuiserie",
    sous: MENUISERIE_SOUS,
  },
  {
    href: "/escaliers",
    label: "Escaliers sur mesure",
    sous: ESCALIERS_SOUS,
  },
  { href: "/serrurerie", label: "Serrurerie & ferronnerie" },
  { href: "/vitrerie", label: "Vitrerie" },
  { href: "/restauration-patrimoniale", label: "Restauration patrimoniale" },
];

const ARCHIVE = [
  { href: "/photos", label: "L'archive des ouvrages" },
  { href: "/belle-portes-rue-sur-paris-et-ailleurs", label: "Belles portes de Paris" },
  { href: "/actualite", label: "Chantiers récents" },
  { href: "/page-avis", label: "Avis des clients" },
  { href: "/a-propos", label: "L'atelier depuis 1964" },
  { href: "/contact", label: "Contact & chiffrage" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#15100E] bois text-[#EDE6DA]">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* NAP */}
          <div className="lg:col-span-4">
            <Logo variant="clair" tagline className="h-16 w-auto mb-6" title="Atelier Le Boulluec" />
            <address className="not-italic text-sm leading-relaxed text-[#EDE6DA]/85">
              <span className="block">{NAP.street}</span>
              <span className="block">
                {NAP.postalCode} {NAP.city}
              </span>
              <a
                href={`tel:${NAP.phoneE164}`}
                className="mt-3 inline-block text-[#C9AB78] hover:text-[#EDE6DA] transition-colors"
              >
                {NAP.phone}
              </a>
              <span className="block mt-3 cartouche text-[#EDE6DA]/78">
                {NAP.hoursReadable}
              </span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${NAP.street}, ${NAP.postalCode} ${NAP.city}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block cartouche text-[#EDE6DA]/78 hover:text-[#C9AB78] transition-colors"
              >
                Itinéraire →
              </a>
            </address>
          </div>

          {/* Métiers */}
          <nav className="lg:col-span-3" aria-label="Nos métiers">
            <h2 className="cartouche text-[#EDE6DA]/78 pb-2 border-b border-[#3A322C]">
              Les cinq métiers
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-[#EDE6DA]/85">
              {METIERS.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="hover:text-[#C9AB78] transition-colors">
                    {m.label}
                  </Link>
                  {m.sous && (
                    <ul className="mt-1.5 mb-2 ml-3 pl-3 border-l border-[#3A322C] space-y-1 text-[0.8125rem] text-[#EDE6DA]/78">
                      {m.sous.map((s) => (
                        <li key={s.href}>
                          <Link href={s.href} className="hover:text-[#C9AB78] transition-colors">
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Archive */}
          <nav className="lg:col-span-3" aria-label="L'atelier">
            <h2 className="cartouche text-[#EDE6DA]/78 pb-2 border-b border-[#3A322C]">
              L&apos;atelier
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-[#EDE6DA]/85">
              {ARCHIVE.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="hover:text-[#C9AB78] transition-colors">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mentions */}
          <div className="lg:col-span-2">
            <h2 className="cartouche text-[#EDE6DA]/78 pb-2 border-b border-[#3A322C]">
              Mentions
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-[#EDE6DA]/85">
              <li>
                <Link href="/mentions-legales" className="hover:text-[#C9AB78] transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="hover:text-[#C9AB78] transition-colors"
                >
                  Confidentialité
                </Link>
              </li>
            </ul>
            <p className="mt-6 cartouche text-[#EDE6DA]/78 border-t border-[#3A322C] pt-3">
              Réseau Bricard
              <br />
              Serruriers Confiance
            </p>
            <p className="mt-3 cartouche text-[#EDE6DA]/78">
              Membre du
              <br />
              {NAP.group}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-5 border-t border-[#3A322C] cartouche text-[#EDE6DA]/78 flex flex-col md:flex-row gap-2 md:gap-6 justify-between">
          <span>
            © {year} {NAP.legalName} — {NAP.legalForm} au capital de {NAP.capital}
          </span>
          <span>
            SIRET {NAP.siret} · RCS {NAP.rcs} · TVA {NAP.tva}
          </span>
        </div>
      </div>
    </footer>
  );
}
