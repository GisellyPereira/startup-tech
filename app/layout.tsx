import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Startup Tech - Inovando o presente. Criando o futuro.",
  description: "Transformamos ideias em realidade através de tecnologia de ponta e inovação constante.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root Layout
 * 
 * Layout raiz da aplicação Next.js
 * Define fontes, metadados e estrutura HTML base
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
