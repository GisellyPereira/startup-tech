"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SectionBadge } from "@/components/ui";
import { TESTIMONIALS } from "@/constants/testimonials";
import { COLORS } from "@/constants/theme";
import "./Testimonials.css";

/**
 * Testimonials Component
 * Seção de depoimentos com animação infinita alternada
 */
export function Testimonials({ className = "" }: { className?: string }) {
  // Duplicar testemunhos para criar loop infinito suave
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      className={`testimonials-section pt-8 sm:pt-10 lg:pt-12 pb-0 ${className}`}
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8 lg:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Badge da seção */}
          <div className="mb-5 flex justify-center">
            <SectionBadge label="Depoimentos" />
          </div>
          
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
            <span className="text-white">O que nossos</span>
            <br />
            <span
              className="bg-clip-text text-transparent block mt-1"
              style={{
                backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              clientes dizem
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Veja o que desenvolvedores e empresas estão falando sobre nós
          </p>
        </motion.div>

        {/* Grid de linhas com animação infinita horizontal e gradientes nas bordas */}
        <div className="testimonials-container">
          {/* Gradientes laterais e verticais */}
          <div className="testimonials-fade-left"></div>
          <div className="testimonials-fade-right"></div>
          <div className="testimonials-fade-top"></div>
          <div className="testimonials-fade-bottom"></div>
          
          {/* Grid de linhas horizontais */}
          <div className="testimonials-grid">
            {/* Linha 1 - Move para ESQUERDA */}
            <div className="testimonials-row scroll-left">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`row1-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>

            {/* Linha 2 - Move para DIREITA */}
            <div className="testimonials-row scroll-right">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`row2-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>

            {/* Linha 3 - Move para ESQUERDA */}
            <div className="testimonials-row scroll-left">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`row3-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * TestimonialCard Component
 * Card individual de depoimento usando Shadcn Card
 */
function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[number] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="testimonial-card-wrapper"
    >
      <Card className="testimonial-card">
        <CardContent className="testimonial-card-content">
          <p className="testimonial-text">{testimonial.text}</p>
          <div className="testimonial-author">
            <Image
              src={testimonial.avatar}
              alt={testimonial.author}
              width={32}
              height={32}
              className="testimonial-avatar"
              unoptimized
            />
            <span className="testimonial-username">{testimonial.author}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
