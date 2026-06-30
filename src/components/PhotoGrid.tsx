import Image from "next/image";
import { uploadcareThumb } from "@/lib/uploadcare";
import type { PhotoEntry } from "@/lib/photos";

type Props = {
  photos: PhotoEntry[];
  columns?: 2 | 3 | 4;
  /** Optional trade context appended to alt — e.g. "Menuiserie sur mesure" */
  altContext?: string;
};

function humanize(filename: string) {
  return filename
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .replace(/^\d{4}-\d{2}-/, "")
    .replace(/-/g, " ")
    .trim();
}

function buildAlt(filename: string, altContext?: string) {
  const base = humanize(filename);
  const subject = base.length > 0 ? base : "Ouvrage de l'Atelier Le Boulluec";
  const ctx = altContext ? `${altContext} — ` : "";
  // Add brand + lieu suffix for image SEO (Google Images)
  return `${ctx}${subject} — Atelier Le Boulluec, Massy (Île-de-France)`;
}

export default function PhotoGrid({ photos, columns = 3, altContext }: Props) {
  const colClass =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
        ? "md:grid-cols-2 lg:grid-cols-4"
        : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 ${colClass} gap-4 md:gap-5`}>
      {photos.map((p) => (
        <figure
          key={p.uploadcare_uuid}
          className="relative aspect-[4/3] overflow-hidden bg-[#1F3A6B]/5"
        >
          <Image
            src={uploadcareThumb(p.uploadcare_uuid, 800)}
            alt={buildAlt(p.local_filename, altContext)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
            quality={78}
          />
        </figure>
      ))}
    </div>
  );
}
