import type { Photo } from "@/lib/photos";

/**
 * Une photographie et son cartel (repris du site frere).
 *
 * Tout est rendu en HTML par le serveur : l image, sa largeur, sa hauteur et
 * sa legende sont dans la source, lisibles par les moteurs sans JavaScript.
 *
 * `tailles` decrit la place reellement occupee par l image dans la mise en
 * page, pour que le navigateur choisisse la bonne variante avant de peindre.
 */
export function Cliche({
  photo,
  etat,
  cartel,
  tailles = "(max-width: 560px) 92vw, (max-width: 900px) 46vw, 30vw",
  priorite = false,
}: {
  photo: Photo;
  /** Mention d etat mise en exergue avant la legende (avant, apres…). */
  etat?: string;
  /** Cartel complet, a la place de la legende du manifeste. */
  cartel?: React.ReactNode;
  tailles?: string;
  priorite?: boolean;
}) {
  return (
    <figure className="cliche">
      <img
        src={`/photos/${photo.slug}.webp`}
        srcSet={`/photos/${photo.slug}-520.webp 520w, /photos/${photo.slug}.webp 1100w`}
        sizes={tailles}
        width={photo.w}
        height={photo.h}
        alt={photo.alt}
        loading={priorite ? "eager" : "lazy"}
        decoding={priorite ? "sync" : "async"}
        fetchPriority={priorite ? "high" : undefined}
      />
      {cartel ? (
        <figcaption className="cartel" style={{ flexDirection: "column", gap: 4 }}>
          {cartel}
        </figcaption>
      ) : etat || photo.leg ? (
        <figcaption className="cartel">
          {etat ? <span className="cartel__etat">{etat}</span> : null}
          {photo.leg ? <span>{photo.leg}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
