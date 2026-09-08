"use client";

import { useState } from "react";

const PROJECT_TYPES = [
  "Menuiserie",
  "Escaliers",
  "Serrurerie",
  "Vitrerie",
  "Restauration patrimoniale",
  "Autre",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Une erreur est survenue.");
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur inconnue.");
    }
  }

  if (status === "ok") {
    return (
      <div className="bg-[#0D4A7B] text-[#E7E2D8] p-8 md:p-10 border-l-4 border-[#BE5E03]">
        <h3 className="font-display text-2xl mb-3">Message bien reçu</h3>
        <p className="text-[#E7E2D8]/85 leading-relaxed">
          Nous revenons vers vous sous 48 heures ouvrées. Pour les demandes urgentes,
          appelez-nous directement au 01 60 12 06 49.
        </p>
      </div>
    );
  }

  const inputBase = "w-full bg-[#F6F4EF] border border-[#0D4A7B]/20 px-4 py-2.5 text-[#171512] focus:border-[#BE5E03] focus:outline-none transition-colors text-sm";
  const labelBase = "block text-xs font-medium text-[#0A3559] mb-1.5 uppercase tracking-wider";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nom" className={labelBase}>Nom <span className="text-[#8F4703]">*</span></label>
          <input required type="text" id="nom" name="nom" className={inputBase} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="societe" className={labelBase}>Société</label>
          <input type="text" id="societe" name="societe" className={inputBase} autoComplete="organization" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelBase}>Email <span className="text-[#8F4703]">*</span></label>
          <input required type="email" id="email" name="email" className={inputBase} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="telephone" className={labelBase}>Téléphone</label>
          <input type="tel" id="telephone" name="telephone" className={inputBase} autoComplete="tel" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="typeProjet" className={labelBase}>Type de projet</label>
          <select id="typeProjet" name="typeProjet" className={inputBase} defaultValue="">
            <option value="" disabled>Sélectionner…</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="adresseChantier" className={labelBase}>Adresse du chantier</label>
          <input type="text" id="adresseChantier" name="adresseChantier" className={inputBase} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>Description du projet <span className="text-[#8F4703]">*</span></label>
        <textarea required id="message" name="message" rows={6} className={inputBase} />
      </div>

      <div className="flex items-start gap-3">
        <input required type="checkbox" id="rgpd" name="rgpd" className="mt-1 accent-[#BE5E03]" />
        <label htmlFor="rgpd" className="text-xs text-[#171512]/75 leading-relaxed">
          J&apos;accepte que mes données soient traitées pour répondre à ma demande, conformément à la{" "}
          <a href="/politique-confidentialite" className="text-[#8F4703] underline">politique de confidentialité</a>.
        </label>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
          {errorMsg || "Une erreur est survenue. Merci de réessayer ou de nous appeler."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 bg-[#0D4A7B] hover:bg-[#8F4703] disabled:opacity-60 text-[#E7E2D8] px-8 py-3.5 text-sm font-medium transition-colors"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
