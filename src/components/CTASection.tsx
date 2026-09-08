import Link from "next/link";
import { NAP } from "@/lib/nap";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  cta?: { label: string; href: string };
};

/**
 * Appel en pied de page — aligné à gauche, sur fond d'encre, avec le
 * téléphone et l'adresse en clair : rien de centré, rien de flottant.
 */
export default function CTASection({
  eyebrow,
  title,
  text,
  cta = { label: "Nous écrire", href: "/contact" },
}: Props) {
  return (
    <section className="bg-[#2E4250] text-[#EDE6DA]">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 py-16 md:py-20 grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-7">
          {eyebrow && (
            <p className="cartouche text-[#B9C9D6] pb-3 border-b border-[#EDE6DA]/55 mb-5">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-[1.75rem] md:text-[2.25rem] leading-tight">
            {title}
          </h2>
          {text && (
            <p className="mt-5 text-[#EDE6DA]/90 leading-relaxed max-w-2xl">{text}</p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={cta.href}
              className="inline-flex items-center bg-[#7E96A8] hover:bg-[#EDE6DA] hover:text-[#161210] text-[#161210] px-6 py-3 cartouche transition-colors"
            >
              {cta.label}
            </Link>
            <a
              href={`tel:${NAP.phoneE164}`}
              className="inline-flex items-center border border-[#EDE6DA]/55 hover:border-[#EDE6DA] px-6 py-3 cartouche transition-colors"
            >
              {NAP.phone}
            </a>
          </div>
        </div>

        <address className="lg:col-span-5 not-italic border-t lg:border-t-0 lg:border-l border-[#EDE6DA]/55 pt-6 lg:pt-0 lg:pl-10">
          <p className="cartouche text-[#B9C9D6]">L&apos;atelier</p>
          <p className="mt-3 text-[#EDE6DA]/90 leading-relaxed">
            {NAP.street}
            <br />
            {NAP.postalCode} {NAP.city}
          </p>
          <p className="mt-4 cartouche text-[#EDE6DA]/75">{NAP.hoursReadable}</p>
          <p className="mt-4 text-sm text-[#EDE6DA]/80">
            Visite d&apos;atelier sur rendez-vous. Intervention à Paris et en {NAP.areaServed}.
          </p>
        </address>
      </div>
    </section>
  );
}
