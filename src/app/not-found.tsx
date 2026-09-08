import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-32 bg-[#E7E2D8]">
      <Container size="narrow">
        <p className="cartouche text-[#8F4703] mb-3 pb-2 border-b border-[#C9C1B2]">Erreur 404</p>
        <h1 className="font-display text-4xl md:text-5xl text-[#0A3559] mb-5">Cette page n&apos;existe pas.</h1>
        <p className="text-lg text-[#171512]/75 leading-relaxed mb-10 max-w-xl">
          La page demandée a peut-être été déplacée ou n&apos;a jamais existé. Revenez à l&apos;accueil ou consultez directement nos métiers.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className="bg-[#0D4A7B] hover:bg-[#8F4703] text-[#E7E2D8] px-7 py-3 text-sm font-medium transition-colors">
            Retour à l&apos;accueil
          </Link>
          <Link href="/contact" className="border border-[#0D4A7B] text-[#0D4A7B] hover:bg-[#0D4A7B] hover:text-[#E7E2D8] px-7 py-3 text-sm font-medium transition-colors">
            Nous contacter
          </Link>
        </div>
      </Container>
    </section>
  );
}
