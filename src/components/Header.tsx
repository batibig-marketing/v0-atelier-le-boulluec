import Link from "next/link";
import Logo from "./Logo";
import { NAP } from "@/lib/nap";

const NAV = [
  { href: "/photos", label: "L'archive" },
  { href: "/menuiserie", label: "Menuiserie" },
  { href: "/serrurerie", label: "Serrurerie & ferronnerie" },
  { href: "/escaliers", label: "Escaliers" },
  { href: "/vitrerie", label: "Vitrerie" },
  { href: "/restauration-patrimoniale", label: "Restauration" },
  { href: "/a-propos", label: "L'atelier" },
];

export default function Header() {
  return (
    <header className="relative z-50">
      {/* Bandeau de repère — mono, comme l'en-tête d'une feuille de relevé */}
      <div className="bg-[#15100E] bois text-[#EDE6DA]">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-1">
          <p className="cartouche text-[#EDE6DA]">
            Atelier de menuiserie &amp; ferronnerie · Massy · depuis 1964
          </p>
          <p className="cartouche text-[#EDE6DA]">
            <a href={`tel:${NAP.phoneE164}`} className="hover:text-[#9DB2C2] transition-colors">
              {NAP.phone}
            </a>
          </p>
        </div>
      </div>

      <div className="bg-[#1C1714] border-b border-[#3A322C]">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-8 h-[74px] flex items-center justify-between gap-4">
          <Link href="/" aria-label="Atelier Le Boulluec — Accueil" className="shrink-0">
            <Logo variant="clair" className="h-9 md:h-11 w-auto" title="Atelier Le Boulluec — accueil" />
          </Link>

          <nav
            className="hidden xl:flex items-center gap-6 text-[0.8125rem] text-[#EDE6DA]"
            aria-label="Navigation principale"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-transparent hover:border-[#7E96A8] hover:text-[#EDE6DA] transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center bg-[#7E96A8] hover:bg-[#9DB2C2] text-[#161210] cartouche px-5 py-2.5 transition-colors"
          >
            Demander un chiffrage
          </Link>

          {/* Menu compact — <details> natif, aucun JS, aucun état masqué au chargement */}
          <details className="xl:hidden relative">
            <summary
              className="list-none cursor-pointer p-2 -mr-2 text-[#EDE6DA]"
              aria-label="Ouvrir le menu"
            >
              <span className="cartouche">Menu</span>
            </summary>
            <div className="absolute right-0 top-full mt-2 w-[17rem] max-w-[calc(100vw-2.5rem)] bg-[#15100E] bois border border-[#3A322C] py-2">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-5 py-2.5 text-sm text-[#EDE6DA] hover:text-[#9DB2C2] hover:bg-[#2E4250]/40"
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-[#3A322C] my-1" />
              <Link
                href="/contact"
                className="block px-5 py-2.5 text-sm text-[#9DB2C2] font-medium hover:bg-[#2E4250]/40"
              >
                Demander un chiffrage
              </Link>
              <a
                href={`tel:${NAP.phoneE164}`}
                className="block px-5 py-2.5 text-sm text-[#EDE6DA] hover:bg-[#2E4250]/40"
              >
                {NAP.phone}
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
