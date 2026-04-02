interface LogoProps {
  className?: string;
  variant?: "white" | "green";
}

export default function Logo({ className = "", variant = "white" }: LogoProps) {
  const src = variant === "green" ? "/images/logo-green.svg" : "/images/logo-white.svg";
  return (
    <img
      src={src}
      alt="Nayá"
      className={className}
    />
  );
}
