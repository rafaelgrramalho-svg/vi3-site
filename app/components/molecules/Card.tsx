import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  const reducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover) return;
    const el = e.currentTarget;
    if (!reducedMotion()) el.style.transform = "translateY(-2px)";
    el.style.boxShadow = "0 0 20px rgba(30, 159, 212, 0.08)";
    el.style.borderColor = "rgba(30, 159, 212, 0.4)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover) return;
    const el = e.currentTarget;
    el.style.transform = "translateY(0)";
    el.style.boxShadow = "none";
    el.style.borderColor = "rgba(30, 159, 212, 0.2)";
  };

  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "var(--navy-700)",
        border: "1px solid rgba(30, 159, 212, 0.2)",
        borderRadius: 0,
        padding: "1.75rem",
        transition: "all 200ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}
