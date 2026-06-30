// A lighter hero variant for service / about pages
import Hero from "./Hero";

type Props = {
  photoUuid: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ photoUuid, eyebrow, title, subtitle }: Props) {
  return <Hero photoUuid={photoUuid} eyebrow={eyebrow} title={title} subtitle={subtitle} variant="patrimonial" />;
}
