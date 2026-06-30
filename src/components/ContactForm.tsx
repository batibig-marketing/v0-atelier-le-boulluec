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
      <div className="bg-[#1F3A6B] text-[#F5EFE3] p-8 md:p-10 border-l-4 border-[#C46B2E]">
        <h3 className="font-serif text-2xl mb-3">Message bien reçu</h3>
        <p className="text-[#F5EFE3]/85 leading-relaxed">
          Nous revenons vers vous sous 48 heures ouvrées. Pour les demandes urgentes,
          appelez-nous directement au 01 60 12 06 49.
        </p>
      </div>
    );
  }

  const inputBase = "w-full bg-white border border-[#1F3A6B]/20 px-4 py-2.5 text-[#1A1A1A] focus:border-[#C46B2E] focus:outline-none transition-colors text-sm";
  const labelBase = "block text-xs font-medium text-[#15294E] mb-1.5 uppercase tracking-wider";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nom" className={labelBase}>Nom <span className="text-[#C46B2E]">*</span></label>
          <input required type="text" id="nom" name="nom" className={inputBase} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="societe" className={labelBase}>Société</label>
          <input type="text" id="societe" name="societe" className={inputBase} autoComplete="organization" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelBase}>Email <span className="text-[#C46B2E]">*</span></label>
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
        <label htmlFor="message" className={labelBase}>Description du projet <span className="text-[#C46B2E]">*</span></label>
        <textarea required id="message" name="message" rows={6} className={inputBase} />
      </div>

      <div className="flex items-start gap-3">
        <input required type="checkbox" id="rgpd" name="rgpd" className="mt-1 accent-[#C46B2E]" />
        <label htmlFor="rgpd" className="text-xs text-[#1A1A1A]/75 leading-relaxed">
          J&apos;accepte que mes données soient traitées pour répondre à ma demande, conformément à la{" "}
          <a href="/politique-confidentialite" className="text-[#C46B2E] underline">politique de confidentialité</a>.
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
        className="inline-flex items-center gap-2 bg-[#1F3A6B] hover:bg-[#C46B2E] disabled:opacity-60 text-[#F5EFE3] px-8 py-3.5 text-sm font-medium transition-colors"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
