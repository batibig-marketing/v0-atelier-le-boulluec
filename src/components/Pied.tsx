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

export function Pied() {
  const carte = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${NAP.street}, ${NAP.postalCode} ${NAP.city}`
  )}`;
  return (
    <footer className="pied">
      <div className="contenu contenu--large">
        <div className="pied__grille">
          <div>
            <p className="pied__marque">Atelier Le Boulluec</p>
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
