// A lighter hero variant for service / about pages
import Hero from "./Hero";

type Props = {
  photoUuid: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  imageAlt?: string;
};

export default function PageHeader({ photoUuid, eyebrow, title, subtitle, imageAlt }: Props) {
  return (
    <Hero
      photoUuid={photoUuid}
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      variant="patrimonial"
      imageAlt={imageAlt}
    />
  );
}
