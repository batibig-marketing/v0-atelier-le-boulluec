import Image from "next/image";
import Link from "next/link";
import { uploadcareAtelier, uploadcareHero } from "@/lib/uploadcare";

type HeroProps = {
  photoUuid: string;
  /** Ligne de cartouche : date · ouvrage · lieu · matière. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  variant?: "default" | "patrimonial";
  imageAlt?: string;
  /** Légende posée sous la photographie, à la manière d'une planche d'archive. */
  legende?: string;
  /** true pour une photographie d'atelier filigranée : on retire la bande de droite. */
  atelier?: boolean;
  /** Point d'ancrage du recadrage, p. ex. « 50% 72% » pour tenir la main au travail. */
  cadrage?: string;
};

/**
 * En-tête en planche : un panneau d'encre porte le texte, la photographie
 * occupe sa propre moitié. Pas de voile dégradé, pas de texte posé sur l'image.
 * Rien n'est animé : le contenu est visible dès le premier rendu.
 */
export default function Hero({
  photoUuid,
  eyebrow,
  title,
  subtitle,
  cta,
  variant = "default",
  imageAlt,
  legende,
  atelier = false,
  cadrage,
}: HeroProps) {
  const grand = variant === "default";
  const source = atelier ? uploadcareAtelier(photoUuid, 1600) : uploadcareHero(photoUuid, 1600);

  return (
    <section className="bg-[#15100E] bois text-[#EDE6DA]">
      <div className="max-w-[1320px] mx-auto lg:grid lg:grid-cols-12">
        {/* Panneau de texte */}
        <div
          className={`lg:col-span-5 px-5 lg:px-8 ${
            grand ? "py-12 md:py-16 lg:py-20" : "py-10 md:py-14"
          } flex flex-col justify-center order-2 lg:order-1`}
        >
          {eyebrow && (
            <p className="cartouche text-[#9DB2C2] mb-5 pb-3 border-b border-[#3A322C]">
              {eyebrow}
            </p>
          )}
          <h1
            className={`font-display text-[#EDE6DA] leading-[1.06] tracking-tight ${
              grand
                ? "text-[2.1rem] sm:text-[2.6rem] lg:text-[3.1rem]"
                : "text-[1.9rem] sm:text-[2.3rem] lg:text-[2.6rem]"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-[#EDE6DA]/85 text-[1.0625rem] leading-relaxed max-w-prose">
              {subtitle}
            </p>
          )}
          {cta && (
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={cta.href}
                className="inline-flex items-center bg-[#7E96A8] hover:bg-[#EDE6DA] hover:text-[#161210] text-[#161210] px-6 py-3 cartouche transition-colors"
              >
                {cta.label}
              </Link>
              <Link
                href="/photos"
                className="inline-flex items-center border border-[#3A322C] hover:border-[#9DB2C2] hover:text-[#9DB2C2] text-[#EDE6DA] px-6 py-3 cartouche transition-colors"
              >
                Voir l&apos;archive des ouvrages
              </Link>
            </div>
          )}
        </div>

        {/* Planche photographique */}
        <figure className="lg:col-span-7 order-1 lg:order-2 m-0">
          <div
            className={`relative w-full bg-[#241E1A] bois ${
              grand
                ? "aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[30rem]"
                : "aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[22rem]"
            }`}
          >
            <Image
              src={source}
              alt={imageAlt ?? ""}
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 58vw"
              quality={82}
              style={cadrage ? { objectPosition: cadrage } : undefined}
              className="object-cover object-center"
            />
          </div>
          {legende && (
            <figcaption className="cartouche text-[#EDE6DA]/78 px-5 lg:px-8 py-3 border-t border-[#3A322C]">
              {legende}
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  );
}
