import { Bande } from "./Blocs";

/**
 * Repères chiffrés et donneurs d’ordre, partagés par l’accueil, la page de
 * l’atelier et la page des avis.
 *
 * La note « 4,2 / 5 sur 40 avis » qui figurait ici a été retirée : aucune
 * source vérifiable n’a pu en être retrouvée (le site historique n’affiche
 * qu’un widget Pages Jaunes vide). Une note non vérifiable n’a pas sa place
 * dans le registre, pas plus que dans les données structurées.
 */
const REPERES = [
  { valeur: "1964", libelle: "Fondation de l’atelier", precision: "Fontenay-aux-Roses" },
  { valeur: "60 ans", libelle: "D’activité continue", precision: "Trois adresses successives" },
  { valeur: "17", libelle: "Menuisiers à l’atelier", precision: "Massy (91300)" },
];

export function Reperes() {
  return (
    <Bande fond="encre" surtitre="Repères">
      <dl className="reperes">
        {REPERES.map((r) => (
          <div key={r.libelle}>
            <dt>{r.valeur}</dt>
            <dd>
              {r.libelle}
              <span>{r.precision}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Bande>
  );
}

const PRESTIGE = [
  "Cartier",
  "Van Cleef & Arpels",
  "Dassault",
  "Yves Rocher",
  "Schlumberger",
  "Les Bateaux Parisiens",
];

const SYNDICS = ["Cogesco", "Lamennais", "Gallard", "CIME", "Immo de France", "GTF"];

export function References({ fond }: { fond?: "pierre" }) {
  return (
    <Bande
      surtitre="Donneurs d’ordre"
      titre="Ils nous ont confié leurs ouvrages."
      chapeau="Maisons de prestige, groupes industriels et syndics de copropriété d’Île-de-France : la liste tient lieu de garantie, pas de vitrine."
      fond={fond}
    >
      <div className="duo" style={{ alignItems: "start" }}>
        <div>
          <h3 className="surtitre">Maisons et grands comptes</h3>
          <ul className="registre">
            {PRESTIGE.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="surtitre">Syndics d’Île-de-France</h3>
          <ul className="registre">
            {SYNDICS.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </Bande>
  );
}
