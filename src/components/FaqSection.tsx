import Container from "@/components/Container";

export type FaqItem = { q: string; a: string };

type Props = {
  eyebrow?: string;
  title?: string;
  items: FaqItem[];
};

/**
 * Encadré FAQ discret en bas de page.
 * Rendu visible + ancrage pour l'AEO (réponses factuelles, citables par ChatGPT, Perplexity, Gemini).
 * Le FAQPage JSON-LD est injecté séparément par chaque page via <JsonLd>.
 */
export default function FaqSection({
  eyebrow = "Questions fréquentes",
  title = "Réponses aux questions les plus posées",
  items,
}: Props) {
  return (
    <section className="py-20 md:py-24 bg-[#F5EFE3] border-t border-[#1F3A6B]/10">
      <Container size="narrow">
        <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          {eyebrow}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#15294E] leading-tight mb-10">
          {title}
        </h2>
        <dl className="divide-y divide-[#1F3A6B]/15">
          {items.map((item) => (
            <div key={item.q} className="py-6 first:pt-0 last:pb-0">
              <dt className="font-serif text-xl text-[#15294E] mb-3">
                {item.q}
              </dt>
              <dd className="text-[#1A1A1A]/80 leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
