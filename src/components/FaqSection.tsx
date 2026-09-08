import Container from "@/components/Container";

export type FaqItem = { q: string; a: string };

type Props = {
  eyebrow?: string;
  title?: string;
  index?: string;
  items: FaqItem[];
};

/**
 * FAQ visible en bas de page — volet AEO de la Bible SEO :
 * questions telles qu'elles sont posées, réponse directe et factuelle
 * en 30 à 80 mots. Le FAQPage JSON-LD est injecté par la page, mot pour
 * mot identique à ce qui est affiché ici.
 *
 * Rendu en <dl> visible : aucun accordéon replié, aucun contenu masqué.
 */
export default function FaqSection({
  eyebrow = "Questions posées",
  title = "Ce que l'on nous demande le plus souvent",
  index = "06",
  items,
}: Props) {
  return (
    <section className="py-16 md:py-20 bg-[#F6F4EF] border-t border-[#C9C1B2]">
      <Container size="default">
        <div className="flex items-baseline gap-4 pb-3 border-b border-[#C9C1B2]">
          <span className="cartouche text-[#8F4703]">{index}</span>
          <span className="cartouche text-[#171512]/60">{eyebrow}</span>
        </div>
        <h2 className="font-display text-[1.75rem] md:text-[2.25rem] leading-tight text-[#0A3559] mt-5 mb-10 max-w-2xl">
          {title}
        </h2>
        <dl className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {items.map((item) => (
            <div key={item.q} className="border-t border-[#C9C1B2] pt-4">
              <dt className="font-display text-lg md:text-xl text-[#0A3559] leading-snug">
                {item.q}
              </dt>
              <dd className="mt-2.5 text-[#171512]/85 leading-relaxed text-[0.98rem]">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
