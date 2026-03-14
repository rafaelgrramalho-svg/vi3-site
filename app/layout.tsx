import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Instituto VI3 — Inteligência Aplicada",
  description: "Rigor. Clareza. Impacto. Formamos especialistas na interseção entre negócios, comportamento e inteligência artificial.",
  metadataBase: new URL("https://vi3.com.br"),
  openGraph: {
    title: "Instituto VI3",
    description: "Rigor. Clareza. Impacto.",
    siteName: "Instituto VI3",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSerif.variable} ${dmSans.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
