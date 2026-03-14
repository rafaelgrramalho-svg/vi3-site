import React from "react";

interface BadgeProps {
  status: "ativo" | "em-producao" | "em-breve";
  children?: React.ReactNode;
}

const config = {
  ativo:       { color: "#22C55E", label: "Ativo" },
  "em-producao": { color: "#F59E0B", label: "Em produção" },
  "em-breve":  { color: "#A855F7", label: "Em breve" },
};

export default function Badge({ status, children }: BadgeProps) {
  const { color, label } = config[status];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        fontFamily: "var(--font-mono)",
        fontSize: "0.65rem",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: color,
          flexShrink: 0,
        }}
      />
      {children ?? label}
    </span>
  );
}
