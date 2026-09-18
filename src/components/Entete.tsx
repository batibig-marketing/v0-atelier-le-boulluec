"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAP } from "@/lib/nap";
import { NAV } from "@/lib/navigation";

/**
 * Pages qui s ouvrent sur une photographie pleine largeur : l en-tete s y pose
 * en transparence, puis devient opaque des que la page defile. Ailleurs
 * (mentions, confidentialite, page introuvable) il reste opaque d emblee.
 */
const PAGES_SUR_PHOTO = new Set([
  "/",
  "/menuiserie",
  "/escaliers",
  "/serrurerie",
  "/vitrerie",
  "/restauration-patrimoniale",
  "/photos",
  "/belle-portes-rue-sur-paris-et-ailleurs",
  "/actualite",
  "/a-propos",
  "/page-avis",
  "/contact",
]);

/* Reseaux sociaux en tete, format compact, juste avant le telephone.
   La feuille du site ne connait aucune couleur d accent : les pastilles
   heritent donc de la couleur courante de l en-tete — encre sur fond clair,
   papier quand l en-tete se pose en transparence sur une photographie — et
   passent simplement de discretes a pleines au survol. Elles se replient avec
   le menu et le telephone des 1399 px. */
const styleReseaux = `
.entete__reseaux { display: flex; align-items: center; gap: 6px; flex-shrink: 0; margin: 0; padding: 0; list-style: none; }
.entete__reseaux a {
  width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center;
  color: inherit; opacity: 0.55; transition: opacity 0.25s var(--glisse);
}
.entete__reseaux a:hover { opacity: 1; }
.entete__reseaux svg { width: 14px; height: 14px; display: block; }
@media (max-width: 1399px) { .entete__reseaux { display: none; } }
`;

/**
 * En-tete fixe, repris du site frere et adapte a l arborescence historique de
 * leboulluec.com (entrees a sous-menus d ancres).
 *
 * Le volet mobile est un fond plein, jamais un fond translucide avec filtre :
 * sur plusieurs navigateurs ce filtre piege les enfants en position fixe et le
 * menu devient inutilisable (piege deja rencontre sur le parc).
 */
export function Entete() {
  const chemin = (usePathname() || "/").replace(/\/$/, "") || "/";
  const surPhoto = PAGES_SUR_PHOTO.has(chemin);
  const [defile, setDefile] = useState(false);
  const [ouvert, setOuvert] = useState(false);

  useEffect(() => {
    const surDefilement = () => setDefile(window.scrollY > 40);
    surDefilement();
    window.addEventListener("scroll", surDefilement, { passive: true });
    return () => window.removeEventListener("scroll", surDefilement);
  }, []);

  // Le defilement de la page est bloque tant que le volet est ouvert.
  useEffect(() => {
    document.body.style.overflow = ouvert ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ouvert]);

  const transparent = surPhoto && !defile && !ouvert;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styleReseaux }} />
      <header className={`entete${transparent ? " entete--transparent" : ""}`}>
        <div className="entete__interieur">
          {/* Logo officiel de l entreprise : version couleur sur fond clair,
              version blanche (derivee du SVG officiel) sur la photo du hero. */}
          <Link href="/" className="marque">
            <Image
              className="marque__logo marque__logo--couleur"
              src="/logo-atelier-le-boulluec.svg"
              alt="Atelier Le Boulluec, artisan menuisier serrurier"
              width={519}
              height={221}
              preload
            />
            <Image
              className="marque__logo marque__logo--blanc"
              src="/logo-atelier-le-boulluec-blanc.svg"
              alt=""
              aria-hidden="true"
              width={519}
              height={221}
              preload
            />
          </Link>

          <nav aria-label="Navigation principale">
            <ul className="menu">
              {NAV.map((e) => (
                <li key={e.href}>
                  <Link href={e.href}>{e.label}</Link>
                  {e.sous ? (
                    <ul>
                      {e.sous.map((s) => (
                        <li key={s.href}>
                          <Link href={s.href}>{s.label}</Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          {/* Réseaux sociaux — format compact, avant le téléphone */}
          <ul className="entete__reseaux">
            <li>
              <a
                href="https://www.linkedin.com/company/atelierleboulluec/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn ATELIER LE BOULLUEC"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </li>
          </ul>

          <a className="entete__tel" href={`tel:${NAP.phoneE164}`}>
            {NAP.phone}
          </a>

          <button
            type="button"
            className="bascule"
            aria-expanded={ouvert}
            aria-controls="volet"
            aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOuvert((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      {ouvert ? (
        <div className="volet" id="volet" onClick={() => setOuvert(false)}>
          <ul>
            {NAV.map((e) => (
              <li key={e.href}>
                <Link href={e.href}>{e.label}</Link>
                {e.sous ? (
                  <ul>
                    {e.sous.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href}>{s.label}</Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li>
              <a href={`tel:${NAP.phoneE164}`}>{NAP.phone}</a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
