import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Lightweight server-side validation
    if (!body?.nom || !body?.email || !body?.message) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    // Placeholder: log the payload server-side. In production, wire to Resend/SMTP.
    // eslint-disable-next-line no-console
    console.log("[contact-form] new lead", {
      nom: body.nom,
      email: body.email,
      societe: body.societe,
      telephone: body.telephone,
      typeProjet: body.typeProjet,
      adresseChantier: body.adresseChantier,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[contact-form] error", err);
    return NextResponse.json(
      { error: "Erreur de traitement de la demande." },
      { status: 500 }
    );
  }
}
