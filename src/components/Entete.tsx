"use client";

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
      <header className={`entete${transparent ? " entete--transparent" : ""}`}>
        <div className="entete__interieur">
          <Link href="/" className="marque" aria-label="Atelier Le Boulluec, accueil">
            <span className="marque__nom">Atelier Le Boulluec</span>
            <span className="marque__mention">Bois et acier depuis 1964</span>
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
