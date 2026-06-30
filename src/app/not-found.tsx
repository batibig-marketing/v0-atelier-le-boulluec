import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-32 bg-[#F5EFE3]">
      <Container size="narrow">
        <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Erreur 404</p>
        <h1 className="font-serif text-4xl md:text-5xl text-[#15294E] mb-5">Cette page n&apos;existe pas.</h1>
        <p className="text-lg text-[#1A1A1A]/75 leading-relaxed mb-10 max-w-xl">
          La page demandée a peut-être été déplacée ou n&apos;a jamais existé. Revenez à l&apos;accueil ou consultez directement nos métiers.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className="bg-[#1F3A6B] hover:bg-[#C46B2E] text-[#F5EFE3] px-7 py-3 text-sm font-medium transition-colors">
            Retour à l&apos;accueil
          </Link>
          <Link href="/contact" className="border border-[#1F3A6B] text-[#1F3A6B] hover:bg-[#1F3A6B] hover:text-[#F5EFE3] px-7 py-3 text-sm font-medium transition-colors">
            Nous contacter
          </Link>
        </div>
      </Container>
    </section>
  );
}
