import React from "react";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Tag({ children, className, style: extStyle }: TagProps) {
  return (
    <span
      className={className}
      style={{
        ...extStyle,
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-xs)",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--cyan-500)",
      }}
    >
      {children}
    </span>
  );
}
