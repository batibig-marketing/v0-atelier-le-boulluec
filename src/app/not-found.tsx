import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-32 bg-[#1C1714]">
      <Container size="narrow">
        <p className="cartouche text-[#7E96A8] mb-3 pb-2 border-b border-[#3A322C]">Erreur 404</p>
        <h1 className="font-display text-4xl md:text-5xl text-[#EDE6DA] mb-5">Cette page n&apos;existe pas.</h1>
        <p className="text-lg text-[#EDE6DA]/75 leading-relaxed mb-10 max-w-xl">
          La page demandée a peut-être été déplacée ou n&apos;a jamais existé. Revenez à l&apos;accueil ou consultez directement nos métiers.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className="bg-[#7E96A8] hover:bg-[#9DB2C2] text-[#161210] px-7 py-3 text-sm font-medium transition-colors">
            Retour à l&apos;accueil
          </Link>
          <Link href="/contact" className="border border-[#7E96A8] text-[#9DB2C2] hover:bg-[#7E96A8] hover:text-[#161210] px-7 py-3 text-sm font-medium transition-colors">
            Nous contacter
          </Link>
        </div>
      </Container>
    </section>
  );
}
