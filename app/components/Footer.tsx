"use client";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      style={{
        borderTop: "1px solid var(--line)",
        padding: "3rem 2rem",
        background: "var(--navy)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {/* Logo + tagline */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--white)",
              marginBottom: "0.25rem",
            }}
          >
            Instituto VI3
          </p>
          <p
            className="overline"
            style={{ color: "rgba(30,159,212,0.5)", fontSize: "0.6rem" }}
          >
            Inteligência Aplicada
          </p>
        </div>

        {/* Social links */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {[
            { label: "YouTube", href: "https://www.youtube.com/@rafaelrochavi3" },
            { label: "Instagram", href: "https://instagram.com/institutovi3" },
            { label: "vi3.com.br", href: "https://vi3.com.br" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.82rem",
                color: "var(--white-dim)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--white-dim)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.72rem",
            color: "rgba(240,244,255,0.3)",
          }}
        >
          © {year} Instituto VI3
        </p>
      </div>
    </footer>
  );
}
