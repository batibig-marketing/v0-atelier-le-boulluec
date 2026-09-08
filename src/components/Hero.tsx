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
 * occupe sa propre moitié — jamais de texte posé sur l'image, donc jamais de
 * voile qui l'éteindrait. La photographie est rendue en pleine valeur.
 *
 * Rien n'est animé : le contenu est visible dès le premier rendu, à opacité 1.
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
            grand ? "py-14 md:py-20 lg:py-24" : "py-11 md:py-16"
          } flex flex-col justify-center order-2 lg:order-1`}
        >
          {eyebrow && (
            <p className="cartouche text-[#C9AB78] mb-6 pt-4 border-t border-[#B08D57]">
              {eyebrow}
            </p>
          )}
          <h1
            className={`text-[#EDE6DA] ${
              grand
                ? "text-[2.35rem] sm:text-[3rem] lg:text-[3.5rem]"
                : "text-[2rem] sm:text-[2.5rem] lg:text-[2.9rem]"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-7 text-[#EDE6DA]/85 text-[1.0625rem] leading-[1.78] max-w-prose">
              {subtitle}
            </p>
          )}
          {cta && (
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={cta.href}
                className="inline-flex items-center bg-[#B08D57] hover:bg-[#EDE6DA] text-[#161210] px-6 py-3 cartouche transition-colors"
              >
                {cta.label}
              </Link>
              <Link
                href="/photos"
                className="inline-flex items-center border border-[#B08D57] hover:border-[#EDE6DA] text-[#EDE6DA] px-6 py-3 cartouche transition-colors"
              >
                Voir l&apos;archive des ouvrages
              </Link>
            </div>
          )}
        </div>

        {/* Planche photographique — pleine valeur, aucun voile posé dessus. */}
        <figure className="lg:col-span-7 order-1 lg:order-2 m-0">
          <div
            className={`relative w-full bg-[#241E1A] bois ${
              grand
                ? "aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[34rem]"
                : "aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[24rem]"
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
            <figcaption className="cartouche text-[#EDE6DA]/78 px-5 lg:px-8 py-3.5 border-t border-[#3A322C]">
              {legende}
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  );
}
