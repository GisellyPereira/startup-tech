"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { COLORS } from "@/constants/theme";
import { SERVICES } from "@/constants/features";
import type { BaseComponentProps } from "@/types/components";
import { ServiceCard } from "./ServiceCard";

/**
 * Features/Services Section Component
 * 
 * Seção de serviços da empresa destacando:
 * - Conteúdo textual à esquerda
 * - Imagem de robô à direita
 * - Cards de serviços profissionais com ElectricBorder
 * - Animações suaves
 * 
 * @param className - Classes CSS adicionais
 */
export function Features({ className }: BaseComponentProps) {
  return (
    <section
      id="services"
      className={cn(
        "relative min-h-screen flex items-center justify-center",
        "px-4 sm:px-6 lg:px-8",
        "py-20 sm:py-32",
        "pointer-events-auto",
        className
      )}
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col justify-center space-y-6 lg:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 w-fit"
            >
              <span className="text-xs text-white/70 font-medium">Nossos Serviços</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-white">Tecnologia que</span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                transforma o futuro
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed"
            >
              Utilizamos inteligência artificial e análise de dados avançada para
              criar soluções que impulsionam resultados reais para seu negócio.
            </motion.p>

            {/* Services Cards Grid - Altura uniforme garantida */}
            <div className="grid sm:grid-cols-2 gap-3 lg:gap-4 pt-2 items-stretch">
              {SERVICES.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative lg:order-2 flex items-center justify-center h-full"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full flex items-center justify-center"
            >
              <Image
                src="/robo.png"
                alt="Robô futurista com tecnologia de IA"
                width={800}
                height={800}
                className="w-full h-auto max-h-[600px] lg:max-h-[700px] object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
