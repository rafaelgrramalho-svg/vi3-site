"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#fundadores", label: "Fundadores" },
  { href: "#ecossistema", label: "Ecossistema" },
  { href: "#contato", label: "Contato" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(() =>
    typeof window !== "undefined" ? window.location.hash : ""
  );
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Track hash changes for aria-current
  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close menu on Escape
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        buttonRef.current?.focus();
      }

      // Focus trap
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>("a, button");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

  // Close menu on click outside
  useEffect(() => {
    if (!menuOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [menuOpen, closeMenu]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <>
      <nav
        aria-label="Navegacao principal"
        className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-16 py-5 bg-navy-backdrop backdrop-blur-[16px] backdrop-saturate-[180%] border-b border-line max-[900px]:px-6 max-[900px]:py-4"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <svg
            className="w-9 h-9"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo Instituto VI3"
          >
            <path
              d="M4 6L18 28L32 6H22L18 14L14 6H4Z"
              fill="white"
              opacity=".9"
            />
            <path d="M20 6H32L26 15L20 6Z" fill="#1E9FD4" />
            <path
              d="M20 6L26 15L23 20L17 8 20 6Z"
              fill="#2EC4F0"
              opacity=".7"
            />
          </svg>
          <span className="font-serif text-[1.2rem] text-white tracking-[0.02em]">
            Instituto <span className="text-cyan">VI3</span>
          </span>
        </a>

        {/* Hamburger - mobile */}
        <button
          ref={buttonRef}
          className="hidden max-[900px]:block bg-transparent border-none cursor-pointer p-2 ml-auto mr-4"
          aria-label={menuOpen ? "Fechar menu de navegacao" : "Abrir menu de navegacao"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-[22px] h-[2px] bg-white my-[5px] transition-transform duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white my-[5px] transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white my-[5px] transition-transform duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* Desktop links */}
        <ul className="flex gap-10 list-none max-[900px]:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={activeHash === link.href ? "page" : undefined}
                className={`no-underline text-body-xs font-normal tracking-[0.04em] uppercase font-mono transition-colors duration-200 ${
                  activeHash === link.href ? "text-cyan-bright" : "text-white-dim hover:text-cyan-bright"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#ecossistema"
          className="bg-transparent border border-cyan text-cyan-bright px-[1.4rem] py-[0.6rem] font-sans text-body-xs font-medium tracking-[0.06em] no-underline cursor-pointer transition-all duration-250 hover:bg-cyan hover:text-navy max-[900px]:hidden"
        >
          ECOSSISTEMA
        </a>
      </nav>

      {/* Mobile menu */}
      <ul
        ref={menuRef}
        id="mobile-menu"
        aria-label="Menu principal mobile"
        className={`fixed top-[60px] left-0 right-0 z-99 bg-[rgba(10,22,40,0.95)] backdrop-blur-[16px] border-b border-line p-6 flex-col gap-4 list-none ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={handleLinkClick}
              aria-current={activeHash === link.href ? "page" : undefined}
              className={`no-underline text-body font-normal py-2 border-b border-white-faint block transition-colors duration-200 ${
                activeHash === link.href ? "text-cyan-bright" : "text-white-dim hover:text-cyan-bright"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#ecossistema"
            onClick={handleLinkClick}
            className="text-cyan-bright no-underline text-body font-medium py-2 block"
          >
            Ecossistema
          </a>
        </li>
      </ul>
    </>
  );
}
