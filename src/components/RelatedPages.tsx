import Link from "next/link";
import Container from "./Container";

export type RelatedItem = {
  title: string;
  href: string;
  blurb: string;
};

type RelatedPagesProps = {
  items: RelatedItem[];
  eyebrow?: string;
  heading?: string;
};

export default function RelatedPages({
  items,
  eyebrow = "Pour aller plus loin",
  heading = "Pages connexes",
}: RelatedPagesProps) {
  if (!items || items.length === 0) return null;

  return (
    <section
      aria-label="Pages connexes"
      className="py-16 md:py-20 bg-[#F5EFE3] border-t border-[#1F3A6B]/10"
    >
      <Container size="wide">
        <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          {eyebrow}
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-[#15294E] mb-10">
          {heading}
        </h2>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group block h-full bg-white border-l-4 border-[#C46B2E] p-6 md:p-7 transition-colors hover:bg-[#1F3A6B] hover:border-[#F5EFE3]"
              >
                <h3 className="font-serif text-lg md:text-xl text-[#15294E] group-hover:text-[#F5EFE3] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/75 group-hover:text-[#F5EFE3]/85 leading-relaxed mb-4">
                  {item.blurb}
                </p>
                <span
                  aria-hidden="true"
                  className="text-xs font-semibold tracking-[0.18em] uppercase text-[#C46B2E] group-hover:text-[#F5EFE3]"
                >
                  Découvrir →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
