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
      <div className="bg-[#171512] text-[#E7E2D8]">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-1">
          <p className="cartouche text-[#E7E2D8]">
            Atelier de menuiserie &amp; ferronnerie · Massy · depuis 1964
          </p>
          <p className="cartouche text-[#E7E2D8]">
            <a href={`tel:${NAP.phoneE164}`} className="hover:text-[#E29A43] transition-colors">
              {NAP.phone}
            </a>
          </p>
        </div>
      </div>

      <div className="bg-[#E7E2D8] border-b border-[#C9C1B2]">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-8 h-[74px] flex items-center justify-between gap-4">
          <Link href="/" aria-label="Atelier Le Boulluec — Accueil" className="shrink-0">
            <Logo className="h-9 md:h-11 w-auto" title="Atelier Le Boulluec — accueil" />
          </Link>

          <nav
            className="hidden xl:flex items-center gap-6 text-[0.8125rem] text-[#0A3559]"
            aria-label="Navigation principale"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-transparent hover:border-[#BE5E03] hover:text-[#8F4703] transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center bg-[#0D4A7B] hover:bg-[#8F4703] text-[#F6F4EF] cartouche px-5 py-2.5 transition-colors"
          >
            Demander un chiffrage
          </Link>

          {/* Menu compact — <details> natif, aucun JS, aucun état masqué au chargement */}
          <details className="xl:hidden relative">
            <summary
              className="list-none cursor-pointer p-2 -mr-2 text-[#0A3559]"
              aria-label="Ouvrir le menu"
            >
              <span className="cartouche">Menu</span>
            </summary>
            <div className="absolute right-0 top-full mt-2 w-[17rem] max-w-[calc(100vw-2.5rem)] bg-[#171512] border border-[#3A3630] py-2">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-5 py-2.5 text-sm text-[#E7E2D8] hover:text-[#E29A43] hover:bg-[#0D4A7B]/40"
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-[#3A3630] my-1" />
              <Link
                href="/contact"
                className="block px-5 py-2.5 text-sm text-[#E29A43] font-medium hover:bg-[#0D4A7B]/40"
              >
                Demander un chiffrage
              </Link>
              <a
                href={`tel:${NAP.phoneE164}`}
                className="block px-5 py-2.5 text-sm text-[#E7E2D8] hover:bg-[#0D4A7B]/40"
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
