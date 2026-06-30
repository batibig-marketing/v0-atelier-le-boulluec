import Image from "next/image";
import { uploadcareUrl } from "@/lib/uploadcare";
import type { PhotoEntry } from "@/lib/photos";

type Props = {
  photos: PhotoEntry[];
  columns?: 2 | 3 | 4;
};

function humanize(filename: string) {
  return filename
    .replace(/\.(jpg|jpeg|png)$/i, "")
    .replace(/^\d{4}-\d{2}-/, "")
    .replace(/-/g, " ");
}

export default function PhotoGrid({ photos, columns = 3 }: Props) {
  const colClass = columns === 2 ? "md:grid-cols-2" : columns === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 ${colClass} gap-4 md:gap-5`}>
      {photos.map((p) => (
        <figure key={p.uploadcare_uuid} className="relative aspect-[4/3] overflow-hidden bg-[#1F3A6B]/5">
          <Image
            src={uploadcareUrl(p.uploadcare_uuid, 1200)}
            alt={humanize(p.local_filename)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover hover:scale-[1.02] transition-transform duration-500"
            unoptimized
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  );
}
