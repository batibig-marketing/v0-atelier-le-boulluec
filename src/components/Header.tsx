import Link from "next/link";
import Logo from "./Logo";

const NAV = [
  { href: "/menuiserie", label: "Menuiserie" },
  { href: "/escaliers", label: "Escaliers" },
  { href: "/serrurerie", label: "Serrurerie" },
  { href: "/vitrerie", label: "Vitrerie" },
  { href: "/restauration-patrimoniale", label: "Restauration" },
  { href: "/a-propos", label: "L'atelier" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#F5EFE3]/95 backdrop-blur-sm border-b border-[#C46B2E]/30">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 h-20 flex items-center justify-between gap-4">
        <Link href="/" aria-label="Atelier Le Boulluec — Accueil" className="shrink-0">
          <Logo className="h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#15294E]" aria-label="Navigation principale">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[#C46B2E] transition-colors py-2"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/belles-portes-de-paris"
            className="italic text-xs text-[#15294E]/70 hover:text-[#C46B2E] transition-colors"
          >
            Belles portes
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-1.5 bg-[#C46B2E] hover:bg-[#1F3A6B] text-[#F5EFE3] text-sm font-medium px-5 py-2.5 transition-colors"
        >
          Contact
          <span aria-hidden="true">→</span>
        </Link>

        {/* Mobile burger */}
        <details className="lg:hidden relative">
          <summary className="list-none cursor-pointer p-2 -mr-2" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="3" y1="7" x2="21" y2="7" stroke="#15294E" strokeWidth="2" />
              <line x1="3" y1="12" x2="21" y2="12" stroke="#15294E" strokeWidth="2" />
              <line x1="3" y1="17" x2="21" y2="17" stroke="#15294E" strokeWidth="2" />
            </svg>
          </summary>
          <div className="absolute right-0 top-full mt-2 w-64 bg-[#F5EFE3] border border-[#C46B2E]/40 shadow-xl py-2">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="block px-5 py-2.5 text-sm text-[#15294E] hover:bg-[#1F3A6B]/5">
                {item.label}
              </Link>
            ))}
            <Link href="/belles-portes-de-paris" className="block px-5 py-2.5 text-sm text-[#15294E]/70 italic hover:bg-[#1F3A6B]/5">
              Belles portes de Paris
            </Link>
            <div className="border-t border-[#C46B2E]/30 my-1" />
            <Link href="/contact" className="block px-5 py-2.5 text-sm text-[#C46B2E] font-semibold hover:bg-[#1F3A6B]/5">
              Contact →
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
