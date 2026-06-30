import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  cta?: { label: string; href: string };
};

export default function CTASection({ eyebrow, title, text, cta = { label: "Nous écrire", href: "/contact" } }: Props) {
  return (
    <section className="py-24 bg-[#F5EFE3] border-t border-[#C46B2E]/30">
      <div className="max-w-[900px] mx-auto px-5 lg:px-8 text-center">
        {eyebrow && (
          <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">{eyebrow}</p>
        )}
        <h2 className="font-serif text-3xl md:text-4xl text-[#15294E] mb-5">{title}</h2>
        {text && <p className="text-[#1A1A1A]/75 text-lg leading-relaxed mb-9 max-w-2xl mx-auto">{text}</p>}
        <Link
          href={cta.href}
          className="inline-flex items-center gap-2 bg-[#1F3A6B] hover:bg-[#C46B2E] text-[#F5EFE3] px-8 py-3.5 text-sm font-medium transition-colors"
        >
          {cta.label}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
