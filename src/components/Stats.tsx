type Stat = { value: string; label: string; source?: string };

const DEFAULT_STATS: Stat[] = [
  { value: "1964", label: "Fondation de l'atelier", source: "Fontenay-aux-Roses" },
  { value: "60 ans", label: "D'activité continue", source: "Trois adresses successives" },
  { value: "17", label: "Menuisiers à l'atelier", source: "Massy (91300)" },
  { value: "4,2 / 5", label: "Note Google", source: "40 avis" },
];

/**
 * Repères chiffrés, en ligne de registre : valeur, libellé, précision.
 * Chaque chiffre provient de la plaquette et de la fiche d'établissement.
 */
export default function Stats({ items = DEFAULT_STATS }: { items?: Stat[] }) {
  return (
    <section className="bg-[#171512] text-[#E7E2D8] py-14 md:py-16">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <p className="cartouche text-[#E29A43] pb-3 border-b border-[#3A3630]">
          Repères
        </p>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-9 mt-8">
          {items.map((s) => (
            <div key={s.label} className="border-l-2 border-[#BE5E03] pl-4">
              <dt className="font-display text-[2.1rem] md:text-[2.6rem] leading-none text-[#F6F4EF]">
                {s.value}
              </dt>
              <dd className="mt-2 text-sm text-[#E7E2D8]/85 leading-snug">
                {s.label}
                {s.source && (
                  <span className="block cartouche text-[#E7E2D8]/55 mt-1.5">{s.source}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
