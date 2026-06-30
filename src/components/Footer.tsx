import Link from "next/link";
import { NAP } from "@/lib/nap";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1F3A6B] text-[#F5EFE3] mt-24">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {/* Col 1 — Atelier NAP */}
          <div>
            <Logo variant="light" className="h-12 w-auto mb-5" />
            <address className="not-italic text-sm leading-relaxed text-[#F5EFE3]/85 space-y-1">
              <div>{NAP.street}</div>
              <div>{NAP.postalCode} {NAP.city}</div>
              <div className="pt-3">
                <a href={`tel:${NAP.phoneE164}`} className="hover:text-[#C46B2E] transition-colors">
                  {NAP.phone}
                </a>
              </div>
              <div>
                <a href={`mailto:${NAP.email}`} className="hover:text-[#C46B2E] transition-colors">
                  {NAP.email}
                </a>
              </div>
              <div className="pt-3 text-xs text-[#F5EFE3]/70">{NAP.hoursReadable}</div>
              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${NAP.street}, ${NAP.postalCode} ${NAP.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#C46B2E] hover:underline"
                >
                  Itinéraire Google Maps →
                </a>
              </div>
            </address>
          </div>

          {/* Col 2 — Métiers */}
          <div>
            <h2 className="font-serif text-base mb-4 text-[#F5EFE3]">Nos métiers</h2>
            <ul className="space-y-2 text-sm text-[#F5EFE3]/85">
              <li><Link href="/menuiserie" className="hover:text-[#C46B2E] transition-colors">Menuiserie</Link></li>
              <li><Link href="/escaliers" className="hover:text-[#C46B2E] transition-colors">Escaliers</Link></li>
              <li><Link href="/serrurerie" className="hover:text-[#C46B2E] transition-colors">Serrurerie</Link></li>
              <li><Link href="/vitrerie" className="hover:text-[#C46B2E] transition-colors">Vitrerie</Link></li>
              <li><Link href="/restauration-patrimoniale" className="hover:text-[#C46B2E] transition-colors">Restauration patrimoniale</Link></li>
            </ul>
          </div>

          {/* Col 3 — Atelier */}
          <div>
            <h2 className="font-serif text-base mb-4 text-[#F5EFE3]">Atelier</h2>
            <ul className="space-y-2 text-sm text-[#F5EFE3]/85">
              <li><Link href="/a-propos" className="hover:text-[#C46B2E] transition-colors">L&apos;atelier</Link></li>
              <li><Link href="/belles-portes-de-paris" className="hover:text-[#C46B2E] transition-colors">Belles portes de Paris</Link></li>
              <li><Link href="/contact" className="hover:text-[#C46B2E] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 4 — Mentions */}
          <div>
            <h2 className="font-serif text-base mb-4 text-[#F5EFE3]">Mentions</h2>
            <ul className="space-y-2 text-sm text-[#F5EFE3]/85">
              <li><Link href="/mentions-legales" className="hover:text-[#C46B2E] transition-colors">Mentions légales</Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-[#C46B2E] transition-colors">Politique de confidentialité</Link></li>
            </ul>
            <div className="mt-6 space-y-3 text-xs text-[#F5EFE3]/70">
              <div className="border border-[#F5EFE3]/20 px-3 py-2">
                Membre du <strong className="text-[#F5EFE3]">{NAP.group}</strong>
              </div>
              <div className="border border-[#F5EFE3]/20 px-3 py-2">
                Réseau <strong className="text-[#F5EFE3]">Bricard Serruriers Confiance</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#F5EFE3]/15 text-xs text-[#F5EFE3]/60 flex flex-col md:flex-row gap-3 justify-between">
          <div>
            © {year} {NAP.legalName} — {NAP.legalForm} au capital de {NAP.capital}
          </div>
          <div>
            SIRET {NAP.siret} · RCS {NAP.rcs} · TVA {NAP.tva}
          </div>
        </div>
      </div>
    </footer>
  );
}
