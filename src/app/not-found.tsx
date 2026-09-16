import Link from "next/link";

/** Page introuvable : pas de bandeau photo, l’en-tête reste opaque. */
export default function NotFound() {
  return (
    <section className="page-texte bande">
      <div className="contenu contenu--large">
        <p className="surtitre">Erreur 404</p>
        <h1>Cette page n&apos;existe pas.</h1>
        <p className="chapeau">
          La page demandée a peut-être été déplacée ou n&apos;a jamais existé. Revenez à l&apos;accueil ou consultez directement nos métiers.
        </p>
        <div className="boutons">
          <Link href="/" className="bouton bouton--plein">
            Retour à l&apos;accueil
          </Link>
          <Link href="/contact" className="bouton">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
