import SectionTitre from "./SectionTitre";

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
    <section className="py-16 md:py-20 bg-[#E7E2D8]">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <SectionTitre
          index="05"
          rubrique="Donneurs d'ordre"
          titre="Ils nous ont confié leurs ouvrages."
          chapo="Maisons de prestige, groupes industriels et syndics de copropriété d'Île-de-France : la liste tient lieu de garantie, pas de vitrine."
        />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h3 className="cartouche text-[#171512]/60 pb-2 border-b border-[#C9C1B2]">
              Maisons &amp; grands comptes
            </h3>
            <ul className="mt-5 space-y-2.5">
              {PRESTIGE.map((name) => (
                <li
                  key={name}
                  className="font-display text-lg md:text-xl text-[#0A3559] border-b border-[#C9C1B2] pb-2"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="cartouche text-[#171512]/60 pb-2 border-b border-[#C9C1B2]">
              Syndics d&apos;Île-de-France
            </h3>
            <ul className="mt-5 space-y-2.5">
              {SYNDICS.map((name) => (
                <li
                  key={name}
                  className="font-display text-lg md:text-xl text-[#0A3559] border-b border-[#C9C1B2] pb-2"
                >
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
