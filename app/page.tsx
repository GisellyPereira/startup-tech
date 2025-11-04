"use client";

import dynamic from "next/dynamic";

import { Header } from "@/components/layout";
import { Hero, Features } from "@/components/sections";
import { LiquidEther } from "@/components/effects";
import { LIQUID_ETHER_CONFIG } from "@/config/liquidEther";
import { COLORS } from "@/constants/theme";

// Dynamic import para evitar problemas de SSR com WebGL
const LiquidEtherDynamic = dynamic(() => Promise.resolve(LiquidEther), {
  ssr: false,
});

/**
 * Home Page
 * 
 * Página principal da aplicação com:
 * - Efeito de fundo líquido animado (LiquidEther)
 * - Header com navegação
 * - Hero section com CTAs
 */
export default function Home() {
  return (
    <main className="relative overflow-hidden" style={{ backgroundColor: COLORS.background }}>
      {/* Content Overlay - Permite eventos passarem mas mantém elementos interativos */}
      <div className="relative pointer-events-none" style={{ zIndex: 10 }}>
        <div className="pointer-events-auto">
          <Header />
          
          {/* Hero Section with LiquidEther Background */}
          <div className="relative min-h-screen overflow-hidden">
            <LiquidEtherDynamic {...LIQUID_ETHER_CONFIG} />
            <div className="relative" style={{ zIndex: 10 }}>
              <Hero />
            </div>
          </div>
          
          {/* Features Section - Sem LiquidEther */}
          <Features />
        </div>
      </div>
    </main>
  );
}
