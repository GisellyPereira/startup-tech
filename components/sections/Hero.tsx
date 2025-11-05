"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HERO_TITLE_ANIMATION, HERO_SUBTITLE_ANIMATION, HERO_CTA_ANIMATION } from "@/config/animations";
import { COLORS } from "@/constants/theme";
import type { BaseComponentProps } from "@/types/components";

interface HeroProps extends BaseComponentProps {}

/**
 * Hero Section Component
 * 
 * Seção principal da landing page com:
 * - Título animado com gradiente
 * - Subtítulo descritivo
 * - Botões de call-to-action
 * 
 * @param className - Classes CSS adicionais
 */
export function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={cn(
        "relative min-h-screen flex items-center justify-center",
        "px-4 sm:px-6 lg:px-8",
        "pt-20 pb-32",
        "pointer-events-auto",
        className
      )}
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main Title */}
        <motion.h1
          {...HERO_TITLE_ANIMATION}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-white">Inovando o presente.</span>
          <br />
          <span className="bg-linear-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Criando o futuro.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...HERO_SUBTITLE_ANIMATION}
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12"
        >
          Transformamos ideias em realidade através de tecnologia de ponta e
          inovação constante.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...HERO_CTA_ANIMATION}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full! px-8 py-6 text-base font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{
              background: COLORS.gradient.button,
            }}
          >
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#contact');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = COLORS.gradient.buttonHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = COLORS.gradient.button;
              }}
            >
              Começar Agora
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full! px-8 py-6 text-base font-semibold bg-white/10! backdrop-blur-sm border-white/20! text-white hover:bg-white/20! hover:text-white! transition-all duration-200"
          >
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#services');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Saiba Mais
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

