import React from "react";
import Card from "./Card";
import Badge from "../atoms/Badge";
import Tag from "../atoms/Tag";
import Button from "../atoms/Button";

interface ProductCardProps {
  name: string;
  pilar: string;
  description: string;
  status: "ativo" | "em-producao" | "em-breve";
  type: "curso" | "mentoria" | "ferramenta" | "livro";
  ctaText: string;
  ctaHref: string;
}

const typeConfig: Record<ProductCardProps["type"], { label: string; color: string }> = {
  curso:      { label: "Curso",       color: "#1E9FD4" },
  mentoria:   { label: "Mentoria",    color: "#F59E0B" },
  ferramenta: { label: "Ferramenta",  color: "#22C55E" },
  livro:      { label: "Livro",       color: "#D97706" },
};

export default function ProductCard({
  name,
  pilar,
  description,
  status,
  type,
  ctaText,
  ctaHref,
}: ProductCardProps) {
  const tc = typeConfig[type];

  return (
    <Card>
      {/* Type + Status badges */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: tc.color,
            border: `1px solid ${tc.color}`,
            padding: "0.15rem 0.5rem",
          }}
        >
          {tc.label}
        </span>
        <Badge status={status} />
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--text-h3)",
          color: "var(--white)",
          margin: "0 0 0.35rem",
          lineHeight: "var(--lh-compact)",
        }}
      >
        {name}
      </h3>

      {/* Pilar */}
      <Tag style={{ display: "block", marginBottom: "0.75rem" }}>{pilar}</Tag>

      {/* Description */}
      <p
        style={{
          fontSize: "var(--text-sm)",
          color: "var(--white-dim)",
          lineHeight: "var(--lh-base)",
          margin: "0 0 1.25rem",
        }}
      >
        {description}
      </p>

      {/* CTA */}
      <Button
        variant="ghost"
        size="sm"
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        {ctaText}
      </Button>
    </Card>
  );
}
