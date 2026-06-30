import Link from "next/link";
import Image from "next/image";
import { uploadcareThumb } from "@/lib/uploadcare";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  photoUuid?: string;
  /** Optional descriptive alt; fallback uses the title (image is decorative for keyboard users since the card is fully linked). */
  imageAlt?: string;
};

export default function ServiceCard({ title, description, href, photoUuid, imageAlt }: ServiceCardProps) {
  // The card is a single linked block, so its accessible name comes from the H3 + description.
  // The image's alt is empty by default to avoid duplicate announcements, but we still provide
  // a descriptive value via `imageAlt` when the card is used outside a link context.
  return (
    <Link
      href={href}
      className="group block bg-white border border-[#1F3A6B]/10 hover:border-[#C46B2E] transition-colors overflow-hidden"
    >
      {photoUuid && (
        <div className="relative aspect-[4/3] overflow-hidden bg-[#1F3A6B]/5">
          <Image
            src={uploadcareThumb(photoUuid, 800)}
            alt={imageAlt ?? ""}
            role={imageAlt ? undefined : "presentation"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            loading="lazy"
            quality={78}
          />
        </div>
      )}
      <div className="p-6 lg:p-7">
        <h3 className="font-serif text-xl text-[#15294E] mb-2.5 group-hover:text-[#C46B2E] transition-colors">{title}</h3>
        <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">{description}</p>
        <div className="mt-5 text-sm text-[#C46B2E] font-medium inline-flex items-center gap-1.5">
          Découvrir
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
        </div>
      </div>
    </Link>
  );
}
