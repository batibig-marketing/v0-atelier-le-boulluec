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
      className="group block border-t border-[#B08D57] pt-4 hover:border-[#B08D57] transition-colors"
    >
      {photoUuid && (
        <div className="relative aspect-[4/3] overflow-hidden bg-[#2A2320]">
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
          {index && <span className="rubrique-num text-[#B08D57]">{index}</span>}
          <h3 className="font-display text-[1.35rem] leading-snug text-[#EDE6DA] group-hover:text-[#C9AB78] transition-colors">
            {title}
          </h3>
        </div>
        {matieres && (
          <p className="cartouche text-[#EDE6DA]/78 mt-2">{matieres}</p>
        )}
        <p className="mt-3 text-sm text-[#EDE6DA]/80 leading-relaxed">{description}</p>
        <span className="mt-4 inline-block cartouche text-[#C9AB78] group-hover:text-[#EDE6DA] transition-colors">
          Ouvrir la page →
        </span>
      </div>
    </Link>
  );
}
