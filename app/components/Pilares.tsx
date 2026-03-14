"use client";
import { useEffect, useRef } from "react";

const pilares = [
  {
    label: "NEGÓCIOS",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="20" width="6" height="12" stroke="#1E9FD4" strokeWidth="1.5" />
        <rect x="15" y="12" width="6" height="20" stroke="#1E9FD4" strokeWidth="1.5" />
        <rect x="26" y="4" width="6" height="28" stroke="#1E9FD4" strokeWidth="1.5" />
        <polyline points="7,20 18,12 29,4" stroke="#2EC4F0" strokeWidth="1" strokeDasharray="3 2" />
      </svg>
    ),
    headline: "Método, Critério, Resultado",
    body: "Precificação com evidência, posicionamento estratégico e frameworks replicáveis para profissionais que querem cobrar o que valem.",
  },
  {
    label: "PSICOLOGIA",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="12" stroke="#1E9FD4" strokeWidth="1.5" />
        <path d="M12 22 Q18 10 24 22" stroke="#2EC4F0" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="18" cy="14" r="2" fill="#1E9FD4" opacity="0.6" />
      </svg>
    ),
    headline: "Comportamento e Equilíbrio",
    body: "Inteligência emocional, gestão do ambiente familiar e desenvolvimento humano integrado ao desempenho profissional.",
  },
  {
    label: "IA APLICADA",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="6" width="24" height="24" rx="0" stroke="#1E9FD4" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" fill="#1E9FD4" />
        <circle cx="24" cy="12" r="2" fill="#1E9FD4" />
        <circle cx="12" cy="24" r="2" fill="#1E9FD4" />
        <circle cx="24" cy="24" r="2" fill="#1E9FD4" />
        <circle cx="18" cy="18" r="3" fill="#2EC4F0" opacity="0.8" />
        <line x1="12" y1="12" x2="18" y2="18" stroke="#1E9FD4" strokeWidth="0.8" opacity="0.5" />
        <line x1="24" y1="12" x2="18" y2="18" stroke="#1E9FD4" strokeWidth="0.8" opacity="0.5" />
        <line x1="12" y1="24" x2="18" y2="18" stroke="#1E9FD4" strokeWidth="0.8" opacity="0.5" />
        <line x1="24" y1="24" x2="18" y2="18" stroke="#1E9FD4" strokeWidth="0.8" opacity="0.5" />
      </svg>
    ),
    headline: "Amplificação Inteligente",
    body: "Agentes de IA personalizados, automação estratégica e uso responsável da inteligência artificial no negócio real.",
  },
];

export default function Pilares() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>("[data-card]");
    const header = sectionRef.current?.querySelectorAll<HTMLElement>("[data-header]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseFloat(el.dataset.delay || "0");
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, delay * 1000);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    const allEls = [...(header || []), ...(cards || [])];
    allEls.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition = "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pilares"
      ref={sectionRef}
      style={{
        padding: "7rem 2rem",
        background: "var(--navy-mid, #0D1F3C)",
        position: "relative",
      }}
    >
      {/* Subtle top border */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "var(--line)",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Section header */}
        <div
          data-header
          data-delay="0"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="overline" style={{ marginBottom: "1rem" }}>O que fazemos</p>
          <h2 id="missao">
            Três inteligências.{" "}
            <em style={{ fontStyle: "italic", color: "var(--cyan-bright)" }}>
              Um propósito.
            </em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "1rem",
              color: "var(--white-dim)",
              maxWidth: 520,
              margin: "1.5rem auto 0",
              lineHeight: 1.7,
            }}
          >
            Conhecimento que orienta decisões e gera aplicação real — na
            interseção de método, comportamento e tecnologia.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--line)",
          }}
        >
          {pilares.map((p, i) => (
            <div
              key={p.label}
              data-card
              data-delay={0.1 + i * 0.15}
              className="card-gb"
              style={{ padding: "2.5rem 2rem" }}
            >
              {/* Icon */}
              <div style={{ marginBottom: "1.5rem" }}>{p.icon}</div>

              {/* Label */}
              <p className="overline" style={{ marginBottom: "0.75rem" }}>
                {p.label}
              </p>

              {/* Headline */}
              <h3 style={{ marginBottom: "1rem", letterSpacing: "-0.01em" }}>
                {p.headline}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.9rem",
                  color: "var(--white-dim)",
                  lineHeight: 1.7,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
