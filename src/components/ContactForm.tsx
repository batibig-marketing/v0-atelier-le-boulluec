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
      <div className="bg-[#2B2219] text-[#EDE6DA] p-8 md:p-10 border-l-4 border-[#B08D57]">
        <h3 className="font-display text-2xl mb-3">Message bien reçu</h3>
        <p className="text-[#EDE6DA]/85 leading-relaxed">
          Nous revenons vers vous sous 48 heures ouvrées. Pour les demandes urgentes,
          appelez-nous directement au 01 60 12 06 49.
        </p>
      </div>
    );
  }

  const inputBase = "w-full bg-[#241E1A] bois border border-[#B08D57]/70 px-4 py-2.5 text-[#EDE6DA] focus:border-[#C9AB78] focus:outline-none transition-colors text-sm";
  const labelBase = "block text-xs font-medium text-[#EDE6DA] mb-1.5 uppercase tracking-wider";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nom" className={labelBase}>Nom <span className="text-[#B08D57]">*</span></label>
          <input required type="text" id="nom" name="nom" className={inputBase} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="societe" className={labelBase}>Société</label>
          <input type="text" id="societe" name="societe" className={inputBase} autoComplete="organization" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelBase}>Email <span className="text-[#B08D57]">*</span></label>
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
        <label htmlFor="message" className={labelBase}>Description du projet <span className="text-[#B08D57]">*</span></label>
        <textarea required id="message" name="message" rows={6} className={inputBase} />
      </div>

      <div className="flex items-start gap-3">
        <input required type="checkbox" id="rgpd" name="rgpd" className="mt-1 accent-[#B08D57]" />
        <label htmlFor="rgpd" className="text-xs text-[#EDE6DA]/75 leading-relaxed">
          J&apos;accepte que mes données soient traitées pour répondre à ma demande, conformément à la{" "}
          <a href="/politique-confidentialite" className="text-[#B08D57] underline">politique de confidentialité</a>.
        </label>
      </div>

      {status === "error" && (
        <p className="text-sm text-[#EDE6DA] bg-[#2E2620] bois border-l-4 border-[#C9AB78] px-4 py-3">
          {errorMsg || "Une erreur est survenue. Merci de réessayer ou de nous appeler."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 bg-[#B08D57] hover:bg-[#C9AB78] disabled:opacity-60 text-[#161210] px-8 py-3.5 text-sm font-medium transition-colors"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
