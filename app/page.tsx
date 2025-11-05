"use client";

import dynamic from "next/dynamic";

import { Header } from "@/components/layout";
import { Hero, Features, Testimonials, Stats, About, FAQ, Contact, Footer } from "@/components/sections";
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
            {/* Gradiente de fade para suavizar transição */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 lg:h-28 pointer-events-none"
              style={{ 
                zIndex: 15,
                background: `linear-gradient(to bottom, transparent 0%, rgba(6, 0, 16, 0.3) 40%, rgba(6, 0, 16, 0.7) 80%, #060010 100%)`
              }}
            />
          </div>
          
          {/* Features Section - Sem LiquidEther */}
          <Features />
          
          {/* Stats Section */}
          <Stats />
          
          {/* About Section */}
          <About />
          
          {/* FAQ Section */}
          <FAQ />
          
          {/* Testimonials Section */}
          <Testimonials />
          
          {/* Contact Section */}
          <Contact />
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
