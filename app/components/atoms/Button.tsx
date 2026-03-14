import React from "react";

interface ButtonProps {
  variant: "primary" | "ghost";
  size?: "default" | "sm";
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

const base: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "var(--font-sans)",
  fontWeight: 500,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  borderRadius: 0,
  cursor: "pointer",
  textDecoration: "none",
  border: "none",
  transition: "all 200ms cubic-bezier(0.16, 1, 0.3, 1)",
};

const sizes = {
  default: { padding: "0.75rem 1.75rem", fontSize: "var(--text-sm)" },
  sm: { padding: "0.5rem 1.25rem", fontSize: "var(--text-xs)" },
};

const variants = {
  primary: {
    background: "var(--cyan-500)",
    color: "var(--white)",
  },
  ghost: {
    background: "transparent",
    color: "var(--cyan-500)",
    border: "1px solid rgba(30, 159, 212, 0.3)",
  },
};

export default function Button({
  variant,
  size = "default",
  href,
  children,
  onClick,
  className,
  target,
  rel,
}: ButtonProps) {
  const style: React.CSSProperties = {
    ...base,
    ...sizes[size],
    ...variants[variant],
  };

  const reducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    if (!reducedMotion()) el.style.transform = "translateY(-1px)";
    if (variant === "primary") {
      el.style.filter = "brightness(1.1)";
    } else {
      el.style.background = "rgba(30, 159, 212, 0.08)";
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(0)";
    if (variant === "primary") {
      el.style.filter = "brightness(1)";
    } else {
      el.style.background = "transparent";
    }
  };

  if (href) {
    return (
      <a
        href={href}
        style={style}
        className={className}
        target={target}
        rel={rel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={style}
      className={className}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
