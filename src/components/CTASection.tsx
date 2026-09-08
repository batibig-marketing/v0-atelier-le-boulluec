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
    <section className="bg-[#0D4A7B] text-[#F6F4EF]">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 py-16 md:py-20 grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-7">
          {eyebrow && (
            <p className="cartouche text-[#F1C08A] pb-3 border-b border-[#F6F4EF]/25 mb-5">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-[1.75rem] md:text-[2.25rem] leading-tight">
            {title}
          </h2>
          {text && (
            <p className="mt-5 text-[#F6F4EF]/90 leading-relaxed max-w-2xl">{text}</p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={cta.href}
              className="inline-flex items-center bg-[#8F4703] hover:bg-[#F6F4EF] hover:text-[#0D4A7B] text-[#F6F4EF] px-6 py-3 cartouche transition-colors"
            >
              {cta.label}
            </Link>
            <a
              href={`tel:${NAP.phoneE164}`}
              className="inline-flex items-center border border-[#F6F4EF]/40 hover:border-[#F6F4EF] px-6 py-3 cartouche transition-colors"
            >
              {NAP.phone}
            </a>
          </div>
        </div>

        <address className="lg:col-span-5 not-italic border-t lg:border-t-0 lg:border-l border-[#F6F4EF]/25 pt-6 lg:pt-0 lg:pl-10">
          <p className="cartouche text-[#F1C08A]">L&apos;atelier</p>
          <p className="mt-3 text-[#F6F4EF]/90 leading-relaxed">
            {NAP.street}
            <br />
            {NAP.postalCode} {NAP.city}
          </p>
          <p className="mt-4 cartouche text-[#F6F4EF]/75">{NAP.hoursReadable}</p>
          <p className="mt-4 text-sm text-[#F6F4EF]/80">
            Visite d&apos;atelier sur rendez-vous. Intervention à Paris et en {NAP.areaServed}.
          </p>
        </address>
      </div>
    </section>
  );
}
