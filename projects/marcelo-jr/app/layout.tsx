import type { Metadata } from "next";
import { Baloo_2, Caveat } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-body",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Marcelo Jr. — Primeira Volta ao Sol",
  description: "Convite de aniversário — 1 aninho do Marcelo Jr.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${baloo.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
