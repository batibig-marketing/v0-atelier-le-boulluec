import type { ReactNode } from "react";

/**
 * Titre de section : un numéro de rubrique en mono, un filet, un titre.
 * Remplace l'ancien « eyebrow » en majuscules espacées répété partout.
 */
export default function SectionTitre({
  index,
  rubrique,
  titre,
  as: As = "h2",
  chapo,
  action,
  ton = "clair",
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
  const sombre = ton === "sombre";
  return (
    <div className="mb-10 md:mb-12">
      <div
        className={`flex items-baseline gap-4 pb-3 border-b ${
          sombre ? "border-[#3A3630]" : "border-[#C9C1B2]"
        }`}
      >
        {index && (
          <span className={`cartouche ${sombre ? "text-[#E29A43]" : "text-[#8F4703]"}`}>
            {index}
          </span>
        )}
        <span
          className={`cartouche ${sombre ? "text-[#E7E2D8]/70" : "text-[#171512]/60"}`}
        >
          {rubrique}
        </span>
        {action && <span className="ml-auto">{action}</span>}
      </div>
      <div className="mt-5 md:flex md:items-end md:gap-10">
        <As
          className={`font-display text-[1.75rem] md:text-[2.25rem] leading-tight max-w-2xl ${
            sombre ? "text-[#F6F4EF]" : "text-[#0A3559]"
          }`}
        >
          {titre}
        </As>
        {chapo && (
          <p
            className={`mt-4 md:mt-0 md:max-w-md text-[0.98rem] leading-relaxed ${
              sombre ? "text-[#E7E2D8]/80" : "text-[#171512]/75"
            }`}
          >
            {chapo}
          </p>
        )}
      </div>
    </div>
  );
}
