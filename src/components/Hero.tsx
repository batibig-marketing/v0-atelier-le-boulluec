import Image from "next/image";
import Link from "next/link";
import { uploadcareHero } from "@/lib/uploadcare";

type HeroProps = {
  photoUuid: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  variant?: "default" | "patrimonial";
  /** Descriptive alt for the hero image — important for image SEO and AT users. */
  imageAlt?: string;
};

export default function Hero({
  photoUuid,
  eyebrow,
  title,
  subtitle,
  cta,
  variant = "default",
  imageAlt,
}: HeroProps) {
  const heightClass =
    variant === "patrimonial"
      ? "min-h-[52vh] md:min-h-[58vh]"
      : "min-h-[68vh] md:min-h-[78vh]";

  return (
    <section
      className={`relative ${heightClass} flex items-end overflow-hidden bg-[#15294E]`}
    >
      <Image
        src={uploadcareHero(photoUuid, 1600)}
        alt={imageAlt ?? ""}
        role={imageAlt ? undefined : "presentation"}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={80}
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#15294E]/90 via-[#15294E]/50 to-[#15294E]/15"
        aria-hidden="true"
      />
      <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8 pb-14 md:pb-20 w-full">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-[#C46B2E] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-5">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-[#F5EFE3] text-4xl md:text-6xl leading-[1.05] font-medium tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-[#F5EFE3]/90 text-base md:text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          {cta && (
            <div className="mt-9">
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 bg-[#C46B2E] hover:bg-[#F5EFE3] hover:text-[#1F3A6B] text-[#F5EFE3] px-7 py-3.5 text-sm font-medium transition-colors"
              >
                {cta.label}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* fine orange filet bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-[#C46B2E]"
        aria-hidden="true"
      />
    </section>
  );
}
