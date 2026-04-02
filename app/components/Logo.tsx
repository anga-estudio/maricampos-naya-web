interface LogoProps {
  className?: string;
  color?: string;
}

export default function Logo({ className = "", color = "#1C1A18" }: LogoProps) {
  return (
    <span
      className={`inline-block tracking-[0.18em] font-light ${className}`}
      style={{
        fontFamily: "var(--font-cormorant), Georgia, serif",
        color,
      }}
    >
      Nayá
    </span>
  );
}
