"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Missão", href: "#missao" },
  { label: "Pilares", href: "#pilares" },
  { label: "Contato", href: "#footer" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <polygon
              points="16,2 30,28 2,28"
              stroke="none"
              fill="url(#logo-grad)"
            />
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1E9FD4" />
                <stop offset="100%" stopColor="#0A1628" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "var(--white)",
              letterSpacing: "0.02em",
            }}
          >
            Instituto VI3
          </span>
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.875rem",
                color: "var(--white-dim)",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--white-dim)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://www.youtube.com/@rafaelrochavi3"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.82rem",
            fontWeight: 500,
            color: "var(--cyan)",
            border: "1px solid var(--cyan-border, rgba(30,159,212,0.3))",
            padding: "0.5rem 1.1rem",
            letterSpacing: "0.06em",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(30,159,212,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          YouTube →
        </a>
      </div>
    </nav>
  );
}
