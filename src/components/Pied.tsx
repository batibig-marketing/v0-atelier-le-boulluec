import Image from "next/image";
import Link from "next/link";
import { NAP } from "@/lib/nap";
import { MENUISERIE_SOUS, ESCALIERS_SOUS } from "@/lib/navigation";

/**
 * Pied de page, dans la grammaire du site frere. Il reprend l arborescence
 * complete du site historique, ancres de sous-rubriques comprises : c est le
 * plan du site que les moteurs lisent sur chaque page.
 *
 * Aucune adresse electronique n y figure : les demandes passent par le
 * formulaire, regle commune a tout le parc BATIBIG. Le courriel n est donne
 * que dans les mentions legales.
 */
const METIERS = [
  { href: "/menuiserie", label: "Menuiserie", sous: MENUISERIE_SOUS },
  { href: "/escaliers", label: "Escaliers sur mesure", sous: ESCALIERS_SOUS },
  { href: "/serrurerie", label: "Serrurerie & ferronnerie" },
  { href: "/vitrerie", label: "Vitrerie" },
  { href: "/restauration-patrimoniale", label: "Restauration patrimoniale" },
];

const ARCHIVE = [
  { href: "/photos", label: "L’archive des ouvrages" },
  { href: "/belle-portes-rue-sur-paris-et-ailleurs", label: "Belles portes de Paris" },
  { href: "/actualite", label: "Chantiers récents" },
  { href: "/page-avis", label: "Avis et garanties" },
  { href: "/a-propos", label: "L’atelier depuis 1964" },
  { href: "/contact", label: "Contact et chiffrage" },
];

/* Réseaux sociaux : la feuille du site ne connaît aucune couleur d accent —
   tout est en encre et en papier. Les pastilles reprennent donc la grammaire
   du bouton clair : un filet, puis inversion encre/papier au survol. */
const styleReseaux = `
.pied__reseaux { display: flex; flex-wrap: wrap; gap: 12px; margin: 0; padding: 0; list-style: none; }
.pied__reseaux a {
  width: 44px; height: 44px; display: inline-flex; align-items: center; justify-content: center;
  border: 1px solid var(--filet-inverse-fort); color: var(--gris-clair);
  transition: background-color 0.3s var(--glisse), color 0.3s var(--glisse), border-color 0.3s var(--glisse);
}
.pied__reseaux a:hover { background: var(--papier); color: var(--encre); border-color: var(--papier); }
.pied__reseaux svg { width: 20px; height: 20px; display: block; }
`;

export function Pied() {
  const carte = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${NAP.street}, ${NAP.postalCode} ${NAP.city}`
  )}`;
  return (
    <footer className="pied">
      <style dangerouslySetInnerHTML={{ __html: styleReseaux }} />
      <div className="contenu contenu--large">
        <div className="pied__grille">
          <div>
            <p className="pied__marque">
              <Image
                src="/logo-atelier-le-boulluec-blanc.svg"
                alt="Atelier Le Boulluec, artisan menuisier serrurier"
                width={519}
                height={221}
              />
            </p>
            <p>
              Menuiserie, serrurerie, vitrerie et escaliers sur mesure depuis 1964. L’atelier est à
              Massy ; les chantiers, à Paris et en Île-de-France.
            </p>
            <p style={{ marginTop: "1.1rem" }}>
              {NAP.street}
              <br />
              {NAP.postalCode} {NAP.city}
              <br />
              <a href={`tel:${NAP.phoneE164}`}>{NAP.phone}</a>
              <br />
              {NAP.hoursReadable}
              <br />
              <a href={carte} target="_blank" rel="noopener noreferrer">
                Itinéraire
              </a>
            </p>

            {/* Réseaux sociaux */}
            <div style={{ marginTop: "1.6rem" }}>
              <h3>Suivez-nous</h3>
              <ul className="pied__reseaux">
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
            </div>
          </div>

          <nav aria-label="Les métiers">
            <h3>Les cinq métiers</h3>
            <ul>
              {METIERS.map((m) => (
                <li key={m.href}>
                  <Link href={m.href}>{m.label}</Link>
                  {m.sous ? (
                    <ul>
                      {m.sous.map((s) => (
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

          <nav aria-label="L’atelier">
            <h3>L’atelier</h3>
            <ul>
              {ARCHIVE.map((m) => (
                <li key={m.href}>
                  <Link href={m.href}>{m.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3>Mentions</h3>
            <ul>
              <li>
                <Link href="/mentions-legales">Mentions légales</Link>
              </li>
              <li>
                <Link href="/politique-confidentialite">Confidentialité</Link>
              </li>
            </ul>
            <p style={{ marginTop: "1.4rem" }}>
              Réseau Bricard Serruriers Confiance
              <br />
              Membre du {NAP.group}
            </p>
          </div>
        </div>

        <div className="pied__bas">
          <span>
            © {new Date().getFullYear()} {NAP.legalName} · {NAP.legalForm} au capital de{" "}
            {NAP.capital}
          </span>
          <span>
            SIRET {NAP.siret} · RCS {NAP.rcs} · TVA {NAP.tva}
          </span>
        </div>
      </div>
    </footer>
  );
}
