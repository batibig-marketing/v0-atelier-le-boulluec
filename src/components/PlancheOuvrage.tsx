import Image from "next/image";
import { uploadcareThumb } from "@/lib/uploadcare";
import { cartouche, type Ouvrage, type Piece } from "@/data/ouvrages";

const ETAT_COULEUR: Record<string, string> = {
  Avant: "text-[#8A6236]",
  "En cours": "text-[#8F4703]",
  Après: "text-[#0D4A7B]",
  Détail: "text-[#0A3559]",
};

/**
 * Une planche d'archive : un ouvrage daté et situé, suivi de ses états
 * successifs — avant, en cours, après, détail. Le cartouche (date, adresse,
 * matières, geste) est posé sur le rail de gauche, jamais sur la photographie.
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
      className="scroll-mt-24 border-t-2 border-[#171512] pt-6 md:pt-8"
    >
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
        {/* Rail de métadonnées */}
        <div className="lg:col-span-4 xl:col-span-3">
          <p className="cartouche text-[#8F4703]">{cartouche(ouvrage)}</p>
          <Titre className="font-display text-[1.6rem] md:text-[1.9rem] leading-tight text-[#0A3559] mt-2">
            {ouvrage.ouvrage}
          </Titre>
          <dl className="mt-5 text-sm">
            <dt className="cartouche text-[#171512]/55">Matières</dt>
            <dd className="mt-1 mb-4 text-[#171512]/85">{ouvrage.matieres.join(" · ")}</dd>
            <dt className="cartouche text-[#171512]/55">Geste</dt>
            <dd className="mt-1 mb-4 text-[#171512]/85">{ouvrage.geste}</dd>
            <dt className="cartouche text-[#171512]/55">Planches</dt>
            <dd className="mt-1 text-[#171512]/85">
              {ouvrage.plaques.length} vues — {ouvrage.plaques.map((p) => p.etat).join(", ")}
            </dd>
          </dl>
          <p className="mt-5 text-[#171512]/80 leading-relaxed border-l-2 border-[#BE5E03] pl-4">
            {ouvrage.resume}
          </p>
        </div>

        {/* Suite des états */}
        <div className="lg:col-span-8 xl:col-span-9">
          <ol className="grid sm:grid-cols-2 gap-x-5 gap-y-8 list-none p-0 m-0">
            {ouvrage.plaques.map((p, i) => (
              <li key={p.uuid} className="m-0">
                <figure className="m-0">
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] bg-[#0A3559]/10 border border-[#C9C1B2]">
                    <Image
                      src={uploadcareThumb(p.uuid, 900)}
                      alt={`${ouvrage.ouvrage} — ${cartouche(ouvrage)} — ${p.etat.toLowerCase()} : ${p.note}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={80}
                      priority={priorite && i === 0}
                      loading={priorite && i === 0 ? undefined : "lazy"}
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 pt-2 border-t border-[#C9C1B2]">
                    <span
                      className={`cartouche ${ETAT_COULEUR[p.etat] ?? "text-[#171512]"}`}
                    >
                      {String(i + 1).padStart(2, "0")} · {p.etat}
                    </span>
                    <span className="block mt-1 text-sm leading-snug text-[#171512]/75">
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

/** Pièces isolées : un ouvrage, une vue, un cartouche. */
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
    <ul className={`grid grid-cols-1 ${cols} gap-x-5 gap-y-9 list-none p-0 m-0`}>
      {pieces.map((p) => (
        <li key={p.uuid + p.ouvrage} className="m-0">
          <figure className="m-0">
            <div className="relative aspect-[4/5] bg-[#0A3559]/10 border border-[#C9C1B2]">
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
            <figcaption className="mt-2 pt-2 border-t border-[#C9C1B2]">
              <span className="cartouche text-[#8F4703]">{cartouche(p)}</span>
              <span className="block mt-1 font-display text-lg leading-snug text-[#0A3559]">
                {p.ouvrage}
              </span>
              <span className="block mt-1 text-sm leading-snug text-[#171512]/75">{p.note}</span>
              <span className="block mt-2 cartouche text-[#171512]/55">
                {p.matieres.join(" · ")}
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
