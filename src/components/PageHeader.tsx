import Hero from "./Hero";

type Props = {
  photoUuid: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  imageAlt?: string;
  /** Cartouche posé sous la photographie : ouvrage, adresse, année. */
  legende?: string;
};

/** En-tête de page intérieure — même planche que l'accueil, format réduit. */
export default function PageHeader({
  photoUuid,
  eyebrow,
  title,
  subtitle,
  imageAlt,
  legende,
}: Props) {
  return (
    <Hero
      photoUuid={photoUuid}
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      variant="patrimonial"
      imageAlt={imageAlt}
      legende={legende}
    />
  );
}
