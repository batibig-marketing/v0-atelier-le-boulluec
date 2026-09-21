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

/* Reseaux sociaux en tete, format compact, juste apres le telephone.
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
.entete__reseaux svg { width: 15px; height: 15px; display: block; }
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

          <a className="entete__tel" href={`tel:${NAP.phoneE164}`}>
            {NAP.phone}
          </a>
          {/* Réseaux sociaux — format compact, après le téléphone */}
          <ul className="entete__reseaux">
            <li>
              <a
                href="https://www.linkedin.com/company/atelierleboulluec/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn ATELIER LE BOULLUEC"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </li>
          </ul>

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
