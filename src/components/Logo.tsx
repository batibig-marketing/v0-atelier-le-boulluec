type LogoProps = {
  variant?: "default" | "light";
  className?: string;
};

export default function Logo({ variant = "default", className = "" }: LogoProps) {
  const marine = variant === "light" ? "#F5EFE3" : "#1F3A6B";
  const orange = "#C46B2E";
  const text = variant === "light" ? "#F5EFE3" : "#15294E";

  return (
    <svg
      viewBox="0 0 220 56"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Atelier Le Boulluec"
    >
      {/* Two marine squares (mark) */}
      <rect x="2" y="8" width="18" height="18" fill={marine} />
      <rect x="22" y="28" width="18" height="18" fill={marine} />
      {/* Stencil-style text */}
      <text
        x="48"
        y="24"
        fontFamily="'Inter', 'Helvetica Neue', sans-serif"
        fontSize="11"
        fontWeight="800"
        letterSpacing="2.2"
        fill={text}
      >
        ATELIER
      </text>
      <text
        x="48"
        y="40"
        fontFamily="'Inter', 'Helvetica Neue', sans-serif"
        fontSize="11"
        fontWeight="800"
        letterSpacing="2.2"
        fill={text}
      >
        LE BOULLUEC
      </text>
      {/* Orange thread underline */}
      <line x1="48" y1="48" x2="200" y2="48" stroke={orange} strokeWidth="1.5" />
    </svg>
  );
}
