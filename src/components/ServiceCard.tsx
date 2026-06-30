import Link from "next/link";
import Image from "next/image";
import { uploadcareUrl } from "@/lib/uploadcare";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  photoUuid?: string;
};

export default function ServiceCard({ title, description, href, photoUuid }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-[#1F3A6B]/10 hover:border-[#C46B2E] transition-colors overflow-hidden"
    >
      {photoUuid && (
        <div className="relative aspect-[4/3] overflow-hidden bg-[#1F3A6B]/5">
          <Image
            src={uploadcareUrl(photoUuid, 800)}
            alt=""
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            unoptimized
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
