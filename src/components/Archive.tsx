import Link from "next/link";
import { Cliche } from "./Cliche";
import { cartouche, type Ouvrage, type Piece } from "@/data/ouvrages";
import { photoArchive } from "@/lib/photos";

/**
 * Planches d’archive, dans la grammaire du journal de chantiers du site frère :
 * un cartel (lieu, date, matières, geste) sur le rail de gauche, jamais sur la
 * photographie, et les états successifs à droite, inscrits sans recadrage.
 */

export function vueOuvrage(o: Ouvrage, i: number) {
  const p = o.plaques[i];
  return photoArchive(
    p.fichier,
    `${o.ouvrage}, ${cartouche(o)}, ${p.etat.toLowerCase()} : ${p.note}`,
    p.note
  );
}

export function vuePiece(p: Piece) {
  return photoArchive(p.fichier, `${p.ouvrage}, ${cartouche(p)} : ${p.note}`, p.note);
}

export function Planche({ ouvrage, niveau = 3 }: { ouvrage: Ouvrage; niveau?: 2 | 3 }) {
  const Titre = niveau === 2 ? "h2" : "h3";
  return (
    <article id={ouvrage.slug} className="planche">
      <div>
        <p className="planche__lieu">{cartouche(ouvrage)}</p>
        <Titre>{ouvrage.ouvrage}</Titre>
        <p>{ouvrage.resume}</p>
        <dl>
          <dt>Matières</dt>
          <dd>{ouvrage.matieres.join(" · ")}</dd>
          <dt>Geste</dt>
          <dd>{ouvrage.geste}</dd>
          <dt>Planches</dt>
          <dd>
            {ouvrage.plaques.length} vues — {ouvrage.plaques.map((p) => p.etat).join(", ")}
          </dd>
        </dl>
      </div>
      <div className="planche__vues">
        {ouvrage.plaques.map((p, i) => (
          <Cliche
            key={p.uuid}
            photo={vueOuvrage(ouvrage, i)}
            etat={`${String(i + 1).padStart(2, "0")} · ${p.etat}`}
            tailles="(max-width: 960px) 46vw, 20vw"
          />
        ))}
      </div>
    </article>
  );
}

/** Pièces isolées : un ouvrage, une vue, un cartel. */
export function Pieces({ pieces }: { pieces: Piece[] }) {
  return (
    <div className="grille-photos">
      {pieces.map((p) => (
        <div className="revele" key={p.fichier + p.ouvrage}>
          <Cliche
            photo={vuePiece(p)}
            tailles="(max-width: 560px) 92vw, (max-width: 900px) 46vw, 30vw"
            cartel={
              <>
                <span className="cartel__etat">{cartouche(p)}</span>
                <strong style={{ fontWeight: 500, color: "var(--encre)" }}>{p.ouvrage}</strong>
                <span>{p.note}</span>
                <span className="cartel__etat">{p.matieres.join(" · ")}</span>
              </>
            }
          />
        </div>
      ))}
    </div>
  );
}

export type EntreeJournal = {
  annee: string;
  ouvrage: string;
  ou: string;
  matieres: string[];
  quoi: string;
  ancre?: string;
  vues: { photo: ReturnType<typeof photoArchive>; etat: string }[];
};

/** Une entrée du journal : l’année, l’ouvrage, le lieu, le geste, les vues. */
export function Entree({ e }: { e: EntreeJournal }) {
  const n = e.vues.length;
  const classe = n === 1 ? " chantier__vues--une" : n === 2 ? " chantier__vues--deux" : "";
  return (
    <article className="chantier">
      <div className="chantier__entete">
        <p className="chantier__date">{e.annee}</p>
        <h3 className="chantier__ouvrage">
          {e.ancre ? <Link href={`/photos#${e.ancre}`}>{e.ouvrage}</Link> : e.ouvrage}
          <span className="chantier__lieu">{e.ou}</span>
        </h3>
        <p className="chantier__detail">{e.quoi}</p>
        <p className="chantier__matieres">{e.matieres.join(" · ")}</p>
      </div>
      <div className={`chantier__vues${classe}`}>
        {e.vues.map((v) => (
          <Cliche
            key={v.photo.slug}
            photo={{ ...v.photo, leg: "" }}
            etat={v.etat}
            tailles="(max-width: 860px) 46vw, 24vw"
          />
        ))}
      </div>
    </article>
  );
}
