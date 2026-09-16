import Link from "next/link";
import { Cliche } from "./Cliche";
import JsonLd from "./JsonLd";
import type { Photo } from "@/lib/photos";
import { NAP } from "@/lib/nap";
import { breadcrumbSchema } from "@/lib/schema";

/**
 * Blocs de mise en page, repris du site frere atelierdemenuiserie et
 * generalises pour les pages de leboulluec.com.
 *
 * LE RYTHME. Le premier jet du site frere empilait un long bloc de prose puis
 * une galerie : la premiere image n arrivait qu apres deux ecrans et demi, et
 * la moitie droite de l ecran restait vide. D ou trois regles tenues ici :
 *   1. une photographie tombe des l ouverture, juste apres le bandeau ;
 *   2. chaque bloc de texte court est adosse a la photo qui le prouve, en
 *      alternance gauche/droite — par l ordre de grille, jamais par l ordre du
 *      balisage : dans la source, le texte precede toujours son image ;
 *   3. un bloc sans photo passe en deux colonnes (titre a gauche, texte a
 *      droite) pour ne jamais laisser plus de la moitie de la largeur vide.
 * Tous les blocs vivent dans `.contenu--large` : un seul bord gauche.
 */

export type Miette = { label: string; href?: string };

/** Fil d’Ariane visible, double du balisage BreadcrumbList. */
export function Fil({ items }: { items: Miette[] }) {
  const schema = breadcrumbSchema([
    { name: "Accueil", url: "/" },
    ...items.map((m) => ({ name: m.label, url: m.href ?? "/" })),
  ]);
  return (
    <nav className="fil" aria-label="Fil d’Ariane">
      <JsonLd data={schema} />
      <div className="contenu contenu--large">
        <ol>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          {items.map((m, i) =>
            i === items.length - 1 ? (
              <li key={m.label} aria-current="page">
                {m.label}
              </li>
            ) : (
              <li key={m.label}>{m.href ? <Link href={m.href}>{m.label}</Link> : m.label}</li>
            )
          )}
        </ol>
      </div>
    </nav>
  );
}

/** Bandeau photographique d’une page intérieure : il porte le H1. */
export function Bandeau({
  surtitre,
  titre,
  chapeau,
  photo,
}: {
  surtitre: string;
  titre: string;
  chapeau?: string;
  photo: Photo;
}) {
  return (
    <section className="bandeau">
      <img
        src={`/photos/${photo.slug}-bandeau.webp`}
        srcSet={`/photos/${photo.slug}-bandeau-900.webp 900w, /photos/${photo.slug}-bandeau.webp 1800w`}
        sizes="100vw"
        width={photo.w}
        height={photo.h}
        alt={photo.alt}
        fetchPriority="high"
      />
      <div className="bandeau__voile" />
      <div className="bandeau__texte">
        <div className="contenu contenu--large">
          <p className="surtitre">{surtitre}</p>
          <h1>{titre}</h1>
          {chapeau ? <p className="hero__chapeau">{chapeau}</p> : null}
        </div>
      </div>
    </section>
  );
}

/**
 * Ouverture de page : le texte à gauche, une photographie pleine à droite.
 * C’est elle qui doit tomber dans le premier écran après le bandeau.
 */
export function Ouverture({ children, photo }: { children: React.ReactNode; photo: Photo }) {
  return (
    <section className="bande bande--serree">
      <div className="contenu contenu--large">
        <div className="duo duo--ouverture">
          <div className="texte">{children}</div>
          <Cliche photo={photo} tailles="(max-width: 900px) 92vw, 42vw" priorite />
        </div>
      </div>
    </section>
  );
}

/** Rangée haute : deux ou trois vues, chargées sans attendre. */
export function Rangee({ photos, pierre = false }: { photos: Photo[]; pierre?: boolean }) {
  const deux = photos.length % 3 !== 0;
  return (
    <section className={`bande bande--serree${pierre ? " bande--pierre" : ""}`} style={pierre ? undefined : { paddingTop: 0 }}>
      <div className="contenu contenu--large">
        <div className={`grille-photos rangee-haute${deux ? " grille-photos--deux" : ""}`}>
          {photos.map((p) => (
            <Cliche
              key={p.slug}
              photo={p}
              tailles={deux ? "(max-width: 560px) 92vw, 46vw" : "(max-width: 560px) 92vw, (max-width: 900px) 46vw, 30vw"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export type Bloc = {
  /** Ancre portée par le titre (identifiants historiques du site). */
  id?: string;
  /** Absent sur un bloc de suite : le texte continue celui du bloc précédent. */
  titre?: string;
  niveau?: 2 | 3;
  surtitre?: string;
  corps: React.ReactNode;
  photo?: Photo;
};

/** Le corps du texte, bloc par bloc, chacun adossé à son image. */
export function Suite({ blocs, depart = 0 }: { blocs: Bloc[]; depart?: number }) {
  return (
    <>
      {blocs.map((b, n) => {
        const i = n + depart;
        const Titre = b.niveau === 2 ? "h2" : "h3";
        const titre = (
          <>
            {b.surtitre ? <p className="surtitre">{b.surtitre}</p> : null}
            {b.titre ? <Titre id={b.id}>{b.titre}</Titre> : null}
          </>
        );
        return (
          <section key={b.id ?? b.titre ?? i} className={`bande bande--serree${i % 2 === 1 ? " bande--pierre" : ""}`}>
            <div className="contenu contenu--large">
              {b.photo ? (
                <div className={`duo duo--bloc${i % 2 === 1 ? " duo--inverse" : ""}`}>
                  <div className="texte">
                    {titre}
                    {b.corps}
                  </div>
                  <Cliche photo={b.photo} tailles="(max-width: 900px) 92vw, 46vw" />
                </div>
              ) : (
                <div className="duo duo--tiers" style={{ alignItems: "start" }}>
                  <div>{titre}</div>
                  <div className="texte">{b.corps}</div>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}

/** Bande générique, titrée, sur papier, pierre ou encre. */
export function Bande({
  id,
  surtitre,
  titre,
  chapeau,
  fond,
  children,
}: {
  id?: string;
  surtitre?: string;
  titre?: string;
  chapeau?: React.ReactNode;
  fond?: "pierre" | "encre";
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className={`bande bande--serree${fond ? ` bande--${fond}` : ""}`}>
      <div className="contenu contenu--large">
        {surtitre ? <p className="surtitre">{surtitre}</p> : null}
        {titre ? <h2 style={{ maxWidth: "26ch" }}>{titre}</h2> : null}
        {chapeau ? <p className="chapeau">{chapeau}</p> : null}
        {children ? <div style={{ marginTop: titre || chapeau ? "2.2rem" : 0 }}>{children}</div> : null}
      </div>
    </section>
  );
}

/** Galerie rendue en HTML, cartels compris. */
export function Galerie({ photos, colonnes = 3 }: { photos: Photo[]; colonnes?: 2 | 3 }) {
  return (
    <div className={`grille-photos${colonnes === 2 ? " grille-photos--deux" : ""}`}>
      {photos.map((p) => (
        <div className="revele" key={p.slug}>
          <Cliche
            photo={p}
            tailles={
              colonnes === 2
                ? "(max-width: 560px) 92vw, 46vw"
                : "(max-width: 560px) 92vw, (max-width: 900px) 46vw, 30vw"
            }
          />
        </div>
      ))}
    </div>
  );
}

export type Question = { q: string; a: string };

/**
 * Questions fréquentes, visibles et jamais repliées. Le FAQPage JSON-LD est
 * injecté par la page, mot pour mot identique à ce qui est affiché ici.
 */
export function Questions({
  items,
  titre = "Ce que l’on nous demande le plus souvent",
  fond,
}: {
  items: Question[];
  titre?: string;
  fond?: "pierre";
}) {
  return (
    <Bande surtitre="Questions posées" titre={titre} fond={fond}>
      <dl className="questions">
        {items.map((it) => (
          <div key={it.q}>
            <dt>{it.q}</dt>
            <dd>{it.a}</dd>
          </div>
        ))}
      </dl>
    </Bande>
  );
}

/** Renvois vers les pages voisines : maillage interne entre métiers. */
export function Voisines({
  titre = "Voir aussi",
  liens,
}: {
  titre?: string;
  liens: { href: string; libelle: string; resume: string }[];
}) {
  return (
    <section className="bande bande--serree bande--pierre">
      <div className="contenu contenu--large">
        <p className="surtitre">{titre}</p>
        <div className={`voisines${liens.length === 4 ? " voisines--quatre" : liens.length % 3 === 2 ? " voisines--deux" : ""}`}>
          {liens.map((l) => (
            <Link className="voisine" href={l.href} key={l.href}>
              <strong>{l.libelle}</strong>
              <span>{l.resume}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Appel de fin de page : formulaire et téléphone, jamais d’adresse courriel. */
export function AppelContact({
  surtitre = "Contact",
  titre,
  texte,
  cta = { label: "Nous écrire", href: "/contact" },
}: {
  surtitre?: string;
  titre: string;
  texte?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="bande bande--encre">
      <div className="contenu contenu--large">
        <div className="duo duo--tiers" style={{ alignItems: "start" }}>
          <div>
            <p className="surtitre">{surtitre}</p>
            <h2>{titre}</h2>
          </div>
          <div>
            {texte ? <p className="chapeau">{texte}</p> : null}
            <div className="boutons">
              <Link className="bouton bouton--clair" href={cta.href}>
                {cta.label}
              </Link>
              <a className="bouton bouton--clair" href={`tel:${NAP.phoneE164}`}>
                {NAP.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
