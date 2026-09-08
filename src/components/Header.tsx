"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { NAP } from "@/lib/nap";
import { NAV, type Entree } from "@/lib/navigation";

/** Filet ouvrant : un simple chevron tracé au trait, sans arrondi ni ombre. */
function Chevron({ ouvert }: { ouvert: boolean }) {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 transition-transform duration-150 ${ouvert ? "rotate-180" : ""}`}
    >
      <path
        d="M1 1.25 4.5 4.75 8 1.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

/**
 * Rubrique à sous-menu, version large.
 *
 * Le libellé reste un lien vers la page parente (elle existe et doit rester
 * atteignable). Le chevron, lui, est un bouton de bascule distinct : c'est lui
 * qui porte aria-expanded / aria-controls. Ainsi la rubrique s'ouvre
 *   - à la souris (survol du groupe) ;
 *   - au doigt (appui sur le chevron — un menu qui n'ouvre qu'au survol est
 *     inutilisable sur téléphone) ;
 *   - au clavier (Entrée ou Espace sur le chevron, Échap pour refermer,
 *     fermeture automatique quand le focus quitte le groupe).
 *
 * Le panneau est monté/démonté : rien n'est jamais rendu à opacity 0.
 */
function RubriqueDeroulante({ entree }: { entree: Entree }) {
  const [ouvert, setOuvert] = useState(false);
  const groupeRef = useRef<HTMLLIElement>(null);
  const boutonRef = useRef<HTMLButtonElement>(null);
  const id = `sous-menu-${entree.href.replace(/\W+/g, "")}`;

  // Échap referme et rend le focus au bouton.
  useEffect(() => {
    if (!ouvert) return;
    function surTouche(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOuvert(false);
        boutonRef.current?.focus();
      }
    }
    function surClicExterieur(e: MouseEvent) {
      if (!groupeRef.current?.contains(e.target as Node)) setOuvert(false);
    }
    document.addEventListener("keydown", surTouche);
    document.addEventListener("mousedown", surClicExterieur);
    return () => {
      document.removeEventListener("keydown", surTouche);
      document.removeEventListener("mousedown", surClicExterieur);
    };
  }, [ouvert]);

  return (
    <li
      ref={groupeRef}
      className="relative"
      onMouseEnter={() => setOuvert(true)}
      onMouseLeave={() => setOuvert(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOuvert(false);
      }}
    >
      <span className="flex items-center gap-1.5">
        <Link
          href={entree.href}
          className="whitespace-nowrap border-b border-transparent hover:border-[#B08D57] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#C9AB78] transition-colors py-1"
        >
          {entree.label}
        </Link>
        <button
          ref={boutonRef}
          type="button"
          aria-expanded={ouvert}
          aria-controls={id}
          aria-label={`${ouvert ? "Masquer" : "Afficher"} le sous-menu ${entree.label}`}
          onClick={() => setOuvert((v) => !v)}
          className="p-1 -m-1 text-[#C9AB78] hover:text-[#EDE6DA] focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#C9AB78] transition-colors"
        >
          <Chevron ouvert={ouvert} />
        </button>
      </span>

      {ouvert && (
        <ul
          id={id}
          className="absolute left-0 top-full pt-2 w-[15.5rem] max-w-[calc(100vw-2.5rem)] list-none m-0 p-0"
        >
          <li className="bg-[#15100E] bois border border-[#3A322C] py-2">
            <ul className="list-none m-0 p-0">
              {entree.sous!.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    onClick={() => setOuvert(false)}
                    className="block px-4 py-2 text-[0.8125rem] leading-snug text-[#EDE6DA] hover:text-[#C9AB78] hover:bg-[#2B2219]/40 focus-visible:outline-1 focus-visible:outline-offset-[-2px] focus-visible:outline-[#C9AB78] transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      )}
    </li>
  );
}

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
            <a href={`tel:${NAP.phoneE164}`} className="hover:text-[#C9AB78] transition-colors">
              {NAP.phone}
            </a>
          </p>
        </div>
      </div>

      <div className="bg-[#1C1714] border-b border-[#3A322C]">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-8 min-h-[74px] flex items-center justify-between gap-4">
          <Link href="/" aria-label="Atelier Le Boulluec — Accueil" className="shrink-0">
            <Logo variant="clair" className="h-9 md:h-11 w-auto" title="Atelier Le Boulluec — accueil" />
          </Link>

          <nav
            className="hidden xl:block text-[0.8125rem] text-[#EDE6DA]"
            aria-label="Navigation principale"
          >
            <ul className="flex items-center gap-x-5 list-none m-0 p-0">
              {NAV.map((item) =>
                item.sous ? (
                  <RubriqueDeroulante key={item.href} entree={item} />
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="whitespace-nowrap border-b border-transparent hover:border-[#B08D57] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#C9AB78] transition-colors py-1"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Le bouton d'action cède la place à la barre complète entre 1280 et
              1536 px : la navigation historique compte neuf rubriques, et rien
              ne doit déborder. En dessous de 1280 px la barre est repliée dans
              le menu compact, le bouton reprend donc sa place. */}
          <Link
            href="/contact"
            className="hidden md:inline-flex xl:hidden 2xl:inline-flex items-center bg-[#B08D57] hover:bg-[#C9AB78] text-[#161210] cartouche px-5 py-2.5 transition-colors"
          >
            Demander un chiffrage
          </Link>

          {/* Menu compact — <details> natif, aucun JS, aucun état masqué au
              chargement. Les sous-rubriques y sont dépliées d'emblée et
              indentées : au doigt, un second niveau à replier est un piège. */}
          <details className="xl:hidden relative">
            <summary
              className="list-none cursor-pointer p-2 -mr-2 text-[#EDE6DA]"
              aria-label="Ouvrir le menu"
            >
              <span className="cartouche">Menu</span>
            </summary>
            <div className="absolute right-0 top-full mt-2 w-[19rem] max-w-[calc(100vw-2.5rem)] max-h-[75vh] overflow-y-auto bg-[#15100E] bois border border-[#3A322C] py-2">
              <ul className="list-none m-0 p-0">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-5 py-2.5 text-sm text-[#EDE6DA] hover:text-[#C9AB78] hover:bg-[#2B2219]/40"
                    >
                      {item.label}
                    </Link>
                    {item.sous && (
                      <ul className="list-none m-0 p-0 ml-5 border-l border-[#3A322C]">
                        {item.sous.map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              className="block pl-4 pr-5 py-2 text-[0.8125rem] text-[#EDE6DA]/85 hover:text-[#C9AB78] hover:bg-[#2B2219]/40"
                            >
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#3A322C] my-1" />
              <Link
                href="/contact"
                className="block px-5 py-2.5 text-sm text-[#C9AB78] font-medium hover:bg-[#2B2219]/40"
              >
                Demander un chiffrage
              </Link>
              <a
                href={`tel:${NAP.phoneE164}`}
                className="block px-5 py-2.5 text-sm text-[#EDE6DA] hover:bg-[#2B2219]/40"
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
