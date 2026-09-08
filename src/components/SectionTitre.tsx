import type { ReactNode } from "react";

/**
 * Titre de section : un numéro de rubrique, un filet, un titre en serif.
 * Le numéro est composé dans le serif de titre, pas dans une mono technique.
 */
export default function SectionTitre({
  index,
  rubrique,
  titre,
  as: As = "h2",
  chapo,
  action,
}: {
  /** Numéro de rubrique, p. ex. « 02 ». */
  index?: string;
  rubrique: string;
  titre: string;
  as?: "h2" | "h3";
  chapo?: string;
  action?: ReactNode;
  ton?: "clair" | "sombre";
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-baseline gap-4 pb-3 border-b border-[#3A322C]">
        {index && <span className="rubrique-num text-[#B08D57]">{index}</span>}
        <span className="cartouche text-[#EDE6DA]/78">{rubrique}</span>
        {action && <span className="ml-auto">{action}</span>}
      </div>
      <div className="mt-6 md:flex md:items-end md:gap-12">
        <As className="font-affiche text-[#EDE6DA] text-[1.85rem] md:text-[2.5rem] leading-[1.14] max-w-2xl">
          {titre}
        </As>
        {chapo && (
          <p className="mt-4 md:mt-0 md:max-w-md text-[0.98rem] leading-[1.72] text-[#EDE6DA]/80">
            {chapo}
          </p>
        )}
      </div>
    </div>
  );
}
