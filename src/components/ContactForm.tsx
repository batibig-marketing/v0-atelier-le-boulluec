"use client";

import { useState } from "react";
import { NAP } from "@/lib/nap";

const PROJECT_TYPES = [
  "Menuiserie",
  "Escaliers",
  "Serrurerie",
  "Vitrerie",
  "Restauration patrimoniale",
  "Autre",
];

/**
 * Formulaire de demande, dans la grammaire du site : des filets d’un pixel,
 * aucun arrondi, aucune couleur d’accent. Le comportement (envoi vers
 * /api/contact) est inchangé.
 */
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
      <div className="formulaire__message" role="status">
        <h3>Message bien reçu</h3>
        <p>
          Nous revenons vers vous sous 48 heures ouvrées. Pour les demandes urgentes, appelez-nous
          directement au {NAP.phone}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="formulaire">
      <div className="formulaire__ligne">
        <div>
          <label htmlFor="nom">Nom *</label>
          <input required type="text" id="nom" name="nom" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="societe">Société</label>
          <input type="text" id="societe" name="societe" autoComplete="organization" />
        </div>
      </div>

      <div className="formulaire__ligne">
        <div>
          <label htmlFor="email">Courriel *</label>
          <input required type="email" id="email" name="email" autoComplete="email" />
        </div>
        <div>
          <label htmlFor="telephone">Téléphone</label>
          <input type="tel" id="telephone" name="telephone" autoComplete="tel" />
        </div>
      </div>

      <div className="formulaire__ligne">
        <div>
          <label htmlFor="typeProjet">Type de projet</label>
          <select id="typeProjet" name="typeProjet" defaultValue="">
            <option value="" disabled>
              Sélectionner…
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="adresseChantier">Adresse du chantier</label>
          <input type="text" id="adresseChantier" name="adresseChantier" />
        </div>
      </div>

      <div>
        <label htmlFor="message">Description du projet *</label>
        <textarea required id="message" name="message" rows={6} />
      </div>

      <div className="formulaire__accord">
        <input required type="checkbox" id="rgpd" name="rgpd" />
        <label htmlFor="rgpd">
          J&apos;accepte que mes données soient traitées pour répondre à ma demande, conformément à
          la <a href="/politique-confidentialite">politique de confidentialité</a>.
        </label>
      </div>

      {status === "error" && (
        <p className="formulaire__message" role="alert">
          {errorMsg || "Une erreur est survenue. Merci de réessayer ou de nous appeler."}
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className="bouton bouton--plein">
        {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
