"use client";

import { useEffect } from "react";

/**
 * Apparition des blocs au defilement (repris du site frere).
 *
 * La classe `js` n est posee sur <html> qu ici : sans JavaScript, ou si le
 * script echoue, la page reste entierement visible. Le mouvement est bref et
 * ne joue qu une fois ; les visiteurs qui demandent moins d animation ne
 * voient rien bouger (regle traitee dans la feuille de style).
 */
export function Reveler() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const cibles = document.querySelectorAll<HTMLElement>(".revele");
    if (!("IntersectionObserver" in window)) {
      cibles.forEach((c) => c.classList.add("vu"));
      return;
    }
    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const e of entrees) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).classList.add("vu");
          observateur.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    cibles.forEach((c) => observateur.observe(c));
    return () => observateur.disconnect();
  }, []);

  return null;
}
