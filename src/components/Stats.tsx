type Stat = { value: string; label: string };
const DEFAULT_STATS: Stat[] = [
  { value: "1964", label: "Année de création" },
  { value: "+ 60 ans", label: "Trois générations d'atelier" },
  { value: "17", label: "Menuisiers à Massy" },
  { value: "4,2 / 5", label: "Note Google (40 avis)" },
];

export default function Stats({ items = DEFAULT_STATS }: { items?: Stat[] }) {
  return (
    <section className="bg-[#1F3A6B] text-[#F5EFE3] py-16">
      <div className="max-w-[1080px] mx-auto px-5 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        {items.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="font-serif text-4xl md:text-5xl text-[#C46B2E] leading-none">{s.value}</div>
            <div className="mt-2 text-xs md:text-sm text-[#F5EFE3]/80 leading-tight">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
