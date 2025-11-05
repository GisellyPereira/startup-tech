"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { COLORS } from "@/constants/theme";
import { SectionBadge } from "@/components/ui";
import type { BaseComponentProps } from "@/types/components";

/**
 * About Section Component
 * 
 * Seção sobre a empresa com:
 * - Imagem de robô à esquerda
 * - Conteúdo textual à direita
 * - Animações suaves
 * 
 * @param className - Classes CSS adicionais
 */
export function About({ className }: BaseComponentProps) {
  return (
    <section
      id="about"
      className={cn(
        "relative min-h-screen flex items-center justify-center",
        "px-4 sm:px-6 lg:px-8",
        "pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20",
        "pointer-events-auto",
        className
      )}
    >
      {/* Gradientes esfumados no topo e bottom */}
      <div 
        className="absolute top-0 left-0 right-0 h-20 sm:h-24 lg:h-28 pointer-events-none z-5"
        style={{ 
          background: `linear-gradient(to bottom, #060010 0%, #060010 20%, rgba(6, 0, 16, 0.98) 35%, rgba(6, 0, 16, 0.9) 50%, rgba(6, 0, 16, 0.7) 65%, rgba(6, 0, 16, 0.4) 80%, rgba(6, 0, 16, 0.15) 92%, transparent 100%)`
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 lg:h-28 pointer-events-none z-5"
        style={{ 
          background: `linear-gradient(to top, #060010 0%, #060010 20%, rgba(6, 0, 16, 0.98) 35%, rgba(6, 0, 16, 0.9) 50%, rgba(6, 0, 16, 0.7) 65%, rgba(6, 0, 16, 0.4) 80%, rgba(6, 0, 16, 0.15) 92%, transparent 100%)`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center justify-center h-full order-2 lg:order-1"
          >
            <div className="relative w-full h-full max-h-[500px] lg:max-h-[600px]">
              <Image
                src="/brain-robo.png"
                alt="Robô com Inteligência Artificial"
                width={600}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col justify-center space-y-6 lg:space-y-8 order-1 lg:order-2"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionBadge label="Sobre Nós" />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-white">Inovação com</span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Inteligência Artificial
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed"
            >
              Somos uma empresa de tecnologia especializada em soluções de IA e análise de dados. 
              Transformamos ideias em realidade através de inovação constante e tecnologia de ponta.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-4 pt-4"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    Tecnologia de Ponta
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Utilizamos as mais recentes tecnologias em IA e machine learning para entregar resultados excepcionais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    Equipe Especializada
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Nossa equipe é composta por especialistas em tecnologia, design e inovação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    Resultados Comprovados
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Mais de 500 projetos entregues com sucesso e clientes satisfeitos em todo o mundo.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

