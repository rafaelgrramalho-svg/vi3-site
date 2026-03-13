import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, Space_Mono } from "next/font/google";
import Nav from "@/components/organisms/Nav";
import Footer from "@/components/organisms/Footer";
import NoiseOverlay from "@/components/atoms/NoiseOverlay";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Instituto VI3 — Valor + Inteligência³",
  description:
    "Instituto de formação que integra Negócios, Psicologia e Inteligência Artificial para criar impacto duradouro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body>
        <NoiseOverlay />
        <Nav />
        <main className="pt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
