import Image from "next/image";
import { uploadcareThumb } from "@/lib/uploadcare";
import { cartouche, type Ouvrage, type Piece } from "@/data/ouvrages";

/**
 * Une planche d'archive : un ouvrage daté et situé, suivi de ses états
 * successifs — avant, en cours, après, détail. Le cartel (date, adresse,
 * matières, geste) est posé sur le rail de gauche, jamais sur la photographie.
 *
 * L'ARCHIVE DOIT TENIR À TRENTE OUVRAGES COMME À DIX. Deux mesures y pourvoient :
 *
 *  1. la suite d'états défile dans son propre rail horizontal, à format de
 *     planche constant. Un ouvrage de deux vues et un ouvrage de huit vues
 *     occupent exactement la même hauteur ; ajouter un chantier au fonds coûte
 *     une hauteur fixe et connue, jamais une refonte de la grille ;
 *  2. la planche est bornée à une bande — cartel à gauche, rail à droite —
 *     de sorte que la page reste un registre qui défile, pas un empilement de
 *     mosaïques dont chacune réclame un écran.
 *
 * Tout est rendu en clair dès le premier octet : aucune opacité nulle,
 * aucune animation d'entrée.
 */
export default function PlancheOuvrage({
  ouvrage,
  headingLevel = 3,
  priorite = false,
}: {
  ouvrage: Ouvrage;
  /** 2 pour une page dédiée, 3 quand la planche vit sous un H2. */
  headingLevel?: 2 | 3;
  /** true pour la première planche visible d'une page (LCP). */
  priorite?: boolean;
}) {
  const Titre = headingLevel === 2 ? "h2" : "h3";

  return (
    <article
      id={ouvrage.slug}
      className="scroll-mt-24 border-t border-[#B08D57] pt-6 md:pt-8"
    >
      <div className="grid lg:grid-cols-12 gap-7 lg:gap-10">
        {/* Cartel */}
        <div className="lg:col-span-4 xl:col-span-3">
          <p className="cartouche text-[#C9AB78]">{cartouche(ouvrage)}</p>
          <Titre className="font-affiche text-[1.7rem] md:text-[2rem] leading-[1.16] text-[#EDE6DA] mt-2.5">
            {ouvrage.ouvrage}
          </Titre>
          <p className="mt-5 text-[#EDE6DA]/85 leading-[1.75]">{ouvrage.resume}</p>
          <dl className="mt-6 text-sm border-t border-[#3A322C] pt-4">
            <dt className="cartouche text-[#EDE6DA]/78">Matières</dt>
            <dd className="mt-1 mb-4 text-[#EDE6DA]/85">{ouvrage.matieres.join(" · ")}</dd>
            <dt className="cartouche text-[#EDE6DA]/78">Geste</dt>
            <dd className="mt-1 mb-4 text-[#EDE6DA]/85">{ouvrage.geste}</dd>
            <dt className="cartouche text-[#EDE6DA]/78">Planches</dt>
            <dd className="mt-1 text-[#EDE6DA]/85">
              {ouvrage.plaques.length} vues — {ouvrage.plaques.map((p) => p.etat).join(", ")}
            </dd>
          </dl>
        </div>

        {/* Suite des états — rail à format constant */}
        <div className="lg:col-span-8 xl:col-span-9 min-w-0">
          <ol className="rail list-none p-0 m-0">
            {ouvrage.plaques.map((p, i) => (
              <li key={p.uuid} className="m-0">
                <figure className="m-0">
                  <div className="relative aspect-[3/4] bg-[#2A2320] border border-[#3A322C]">
                    <Image
                      src={uploadcareThumb(p.uuid, 700)}
                      alt={`${ouvrage.ouvrage} — ${cartouche(ouvrage)} — ${p.etat.toLowerCase()} : ${p.note}`}
                      fill
                      sizes="(max-width: 768px) 60vw, 17rem"
                      quality={80}
                      priority={priorite && i === 0}
                      loading={priorite && i === 0 ? undefined : "lazy"}
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2.5 pt-2.5 border-t border-[#3A322C]">
                    <span className="cartouche text-[#C9AB78]">
                      {String(i + 1).padStart(2, "0")} · {p.etat}
                    </span>
                    <span className="block mt-1.5 text-sm leading-[1.6] text-[#EDE6DA]/80">
                      {p.note}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}

/** Pièces isolées : un ouvrage, une vue, un cartel. */
export function PlanchePieces({
  pieces,
  colonnes = 3,
}: {
  pieces: Piece[];
  colonnes?: 2 | 3 | 4;
}) {
  const cols =
    colonnes === 2
      ? "sm:grid-cols-2"
      : colonnes === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <ul className={`grid grid-cols-1 ${cols} gap-x-6 gap-y-10 list-none p-0 m-0`}>
      {pieces.map((p) => (
        <li key={p.uuid + p.ouvrage} className="m-0">
          <figure className="m-0">
            <div className="relative aspect-[4/5] bg-[#2A2320] border border-[#3A322C]">
              <Image
                src={uploadcareThumb(p.uuid, 800)}
                alt={`${p.ouvrage}, ${cartouche(p)} — ${p.note}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={78}
                loading="lazy"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 pt-3 border-t border-[#B08D57]">
              <span className="cartouche text-[#C9AB78]">{cartouche(p)}</span>
              <span className="block mt-1.5 font-display text-xl leading-snug text-[#EDE6DA]">
                {p.ouvrage}
              </span>
              <span className="block mt-1.5 text-sm leading-[1.6] text-[#EDE6DA]/80">{p.note}</span>
              <span className="block mt-2.5 cartouche text-[#EDE6DA]/78">
                {p.matieres.join(" · ")}
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
