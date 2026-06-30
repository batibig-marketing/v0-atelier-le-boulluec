const PRESTIGE = [
  "Cartier",
  "Van Cleef & Arpels",
  "Dassault",
  "Yves Rocher",
  "Schlumberger",
  "Les Bateaux Parisiens",
];

const SYNDICS = ["Cogesco", "Lamennais", "Gallard", "CIME", "Immo de France", "GTF"];

export default function References() {
  return (
    <section className="py-20 bg-[#F5EFE3]">
      <div className="max-w-[1080px] mx-auto px-5 lg:px-8">
        <p className="text-[#C46B2E] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
          Confiance
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#15294E] mb-12 max-w-2xl">
          Ils nous ont confié leurs ouvrages
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm text-[#1A1A1A]/60 uppercase tracking-wider mb-5">Grands comptes & maisons</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[#15294E]">
              {PRESTIGE.map((name) => (
                <li key={name} className="font-serif text-lg md:text-xl border-b border-[#C46B2E]/40 pb-1">
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm text-[#1A1A1A]/60 uppercase tracking-wider mb-5">Syndics d&apos;Île-de-France</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[#15294E]">
              {SYNDICS.map((name) => (
                <li key={name} className="font-serif text-lg md:text-xl border-b border-[#C46B2E]/40 pb-1">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
