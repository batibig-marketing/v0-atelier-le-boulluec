import Link from "next/link";
import Container from "./Container";
import SectionTitre from "./SectionTitre";

export type RelatedItem = {
  title: string;
  href: string;
  blurb: string;
};

type RelatedPagesProps = {
  items: RelatedItem[];
  eyebrow?: string;
  heading?: string;
  index?: string;
};

/**
 * Maillage interne — Bible SEO §3.4 : ancres descriptives, pages profondes
 * reliées entre elles, jamais « cliquez ici ».
 */
export default function RelatedPages({
  items,
  eyebrow = "Pages liées",
  heading = "Pour aller plus loin",
  index = "07",
}: RelatedPagesProps) {
  if (!items || items.length === 0) return null;

  return (
    <section
      aria-label="Pages liées"
      className="py-16 md:py-20 bg-[#E7E2D8] border-t border-[#C9C1B2]"
    >
      <Container size="wide">
        <SectionTitre index={index} rubrique={eyebrow} titre={heading} as="h2" />
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 list-none p-0 m-0">
          {items.map((item, i) => (
            <li key={item.href} className="m-0">
              <Link
                href={item.href}
                className="group block h-full border-t-2 border-[#171512] pt-4 hover:border-[#BE5E03] transition-colors"
              >
                <span className="cartouche text-[#8F4703]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg md:text-xl text-[#0A3559] group-hover:text-[#8F4703] transition-colors mt-1.5 mb-2.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#171512]/80 leading-relaxed">{item.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
