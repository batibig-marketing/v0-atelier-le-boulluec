import Link from "next/link";
import Image from "next/image";
import { uploadcareThumb } from "@/lib/uploadcare";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  photoUuid?: string;
  /** Numéro de rubrique en mono, p. ex. « 01 ». */
  index?: string;
  /** Ligne de matières / gestes, en mono, sous le titre. */
  matieres?: string;
  imageAlt?: string;
};

/**
 * Plaque de métier : photographie, filet, numéro, titre, matières.
 * Ni carte arrondie, ni ombre portée, ni zoom au survol — seule la couleur
 * du filet et du titre bouge.
 */
export default function ServiceCard({
  title,
  description,
  href,
  photoUuid,
  index,
  matieres,
  imageAlt,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block border-t-2 border-[#171512] pt-4 hover:border-[#BE5E03] transition-colors"
    >
      {photoUuid && (
        <div className="relative aspect-[4/3] overflow-hidden bg-[#0A3559]/10">
          <Image
            src={uploadcareThumb(photoUuid, 800)}
            alt={imageAlt ?? ""}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
            quality={78}
          />
        </div>
      )}
      <div className="pt-4">
        <div className="flex items-baseline gap-3">
          {index && <span className="cartouche text-[#8F4703]">{index}</span>}
          <h3 className="font-display text-xl text-[#0A3559] group-hover:text-[#8F4703] transition-colors">
            {title}
          </h3>
        </div>
        {matieres && (
          <p className="cartouche text-[#171512]/55 mt-2">{matieres}</p>
        )}
        <p className="mt-3 text-sm text-[#171512]/80 leading-relaxed">{description}</p>
        <span className="mt-4 inline-block cartouche text-[#0D4A7B] group-hover:text-[#8F4703] transition-colors">
          Ouvrir la page →
        </span>
      </div>
    </Link>
  );
}
