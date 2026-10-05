import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], display: "swap" });
const hanken = Hanken_Grotesk({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const jetbrains = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "NexiumLab — Agencia de Marketing Digital y Desarrollo Web",
  description: "Transformamos tu presencia digital. Estrategias de marketing, diseño UX/UI y desarrollo a la medida para potenciar tu negocio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${hanken.variable} ${jetbrains.variable}`}>
      <body suppressHydrationWarning className="antialiased mesh-bg">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
