"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Staggered fade-up on mount
  useEffect(() => {
    const items = heroRef.current?.querySelectorAll<HTMLElement>("[data-animate]");
    items?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });
      });
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-grid"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8rem 2rem 6rem",
        overflow: "hidden",
      }}
    >
      {/* Glow orb */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,159,212,0.12) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 700, textAlign: "center" }}>

        {/* Overline tag */}
        <div
          data-animate
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "rgba(30,159,212,0.06)",
            border: "1px solid rgba(30,159,212,0.25)",
            padding: "0.45rem 1rem",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--cyan)",
              display: "inline-block",
              animation: "pulse-dot 2s infinite",
            }}
          />
          <span className="overline">Instituto VI3 · Inteligência Aplicada</span>
        </div>

        {/* Headline */}
        <h1 data-animate style={{ marginBottom: "0.5rem" }}>
          Rigor. Clareza.
        </h1>
        <h1
          data-animate
          style={{
            fontStyle: "italic",
            color: "var(--cyan-bright)",
            marginBottom: "1.5rem",
          }}
        >
          Impacto.
        </h1>

        {/* SVG underline accent (draws on load) */}
        <div data-animate style={{ marginBottom: "2rem", lineHeight: 0 }}>
          <svg
            width="220"
            height="8"
            viewBox="0 0 220 8"
            fill="none"
            aria-hidden
            style={{ margin: "0 auto", display: "block" }}
          >
            <path
              d="M2 6 C40 2, 80 7, 110 4 C140 1, 180 6, 218 3"
              stroke="var(--cyan)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              className="stroke-draw"
            />
          </svg>
        </div>

        {/* Subtitle */}
        <p
          data-animate
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "1.1rem",
            fontWeight: 300,
            color: "var(--white-dim)",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 2.5rem",
          }}
        >
          Formamos especialistas na interseção entre negócios,
          comportamento humano e inteligência artificial.
        </p>

        {/* CTAs */}
        <div
          data-animate
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#pilares"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "var(--navy)",
              background: "var(--cyan)",
              padding: "0.85rem 2rem",
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "all 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--cyan-bright)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--cyan)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Conheça o Instituto
          </a>
          <a
            href="#missao"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.95rem",
              fontWeight: 400,
              color: "var(--white)",
              background: "transparent",
              border: "1px solid rgba(240,244,255,0.15)",
              padding: "0.85rem 2rem",
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "all 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(240,244,255,0.35)";
              e.currentTarget.style.background = "rgba(240,244,255,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(240,244,255,0.15)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Nossa Missão →
          </a>
        </div>

        {/* Scroll hint */}
        <div
          data-animate
          style={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            className="overline"
            style={{ fontSize: "0.6rem", color: "rgba(30,159,212,0.5)" }}
          >
            scroll
          </span>
          <svg width="1" height="40" viewBox="0 0 1 40" aria-hidden>
            <line
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="40"
              stroke="url(#scroll-grad)"
              strokeWidth="1"
            />
            <defs>
              <linearGradient id="scroll-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="100%" stopColor="#1E9FD4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
