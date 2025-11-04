"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center justify-center",
        "px-4 sm:px-6 lg:px-8",
        "pt-20 pb-32",
        "pointer-events-auto",
        className
      )}
    >
      {/* Conteúdo Principal */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
        >
          <span className="text-xs text-white/70">Novo Background</span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-white">Inovando o presente.</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Criando o futuro.
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12"
        >
          Transformamos ideias em realidade através de tecnologia de ponta e
          inovação constante.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="!rounded-full px-8 py-6 text-base font-semibold bg-white text-black hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Começar Agora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="!rounded-full px-8 py-6 text-base font-semibold !bg-white/10 backdrop-blur-sm !border-white/20 text-white hover:!bg-white/20 transition-all duration-200"
          >
            Saiba Mais
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

