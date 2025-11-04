"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Importar LiquidEther dinamicamente para evitar problemas de SSR
const LiquidEther = dynamic(() => import("@/components/LiquidEther"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Background LiquidEther - container fixo que recebe eventos */}
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />

      {/* Overlay de conteúdo - permite eventos passarem mas mantém elementos interativos */}
      <div 
        className="relative pointer-events-none"
        style={{ 
          minHeight: "100vh", 
          position: "relative",
          zIndex: 10
        }}
      >
        <div className="pointer-events-auto">
          <Header />
          <Hero />
        </div>
      </div>
    </main>
  );
}
