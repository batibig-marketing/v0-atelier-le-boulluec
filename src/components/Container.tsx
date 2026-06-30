type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

export default function Container({ children, className = "", size = "default" }: ContainerProps) {
  const sizes = {
    narrow: "max-w-[760px]",
    default: "max-w-[1080px]",
    wide: "max-w-[1280px]",
  } as const;
  return (
    <div className={`${sizes[size]} mx-auto px-5 lg:px-8 ${className}`}>{children}</div>
  );
}
