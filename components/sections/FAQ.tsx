"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { COLORS } from "@/constants/theme";
import { FAQ_ITEMS } from "@/constants/faq";
import { SectionBadge } from "@/components/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { BaseComponentProps } from "@/types/components";
import { HelpCircle } from "lucide-react";
import "./FAQ.css";

/**
 * FAQ Section Component
 * 
 * Seção de perguntas frequentes com:
 * - Design moderno e profissional
 * - Accordion animado com efeitos visuais
 * - Layout responsivo e elegante
 * 
 * @param className - Classes CSS adicionais
 */
export function FAQ({ className }: BaseComponentProps) {
  return (
    <section
      id="faq"
      className={cn(
        "relative min-h-screen flex items-center justify-center",
        "px-4 sm:px-6 lg:px-8",
        "pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20",
        "pointer-events-auto overflow-hidden",
        className
      )}
      style={{ backgroundColor: COLORS.background }}
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
      
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Badge */}
          <div className="mb-5 flex justify-center">
            <SectionBadge label="Perguntas Frequentes" />
          </div>
          
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
            <span className="text-white">Dúvidas</span>
            <br />
            <span
              className="bg-clip-text text-transparent block mt-1"
              style={{
                backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Frequentes
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Encontre respostas para as perguntas mais comuns sobre nossos serviços
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="faq-accordion-wrapper"
        >
          <Accordion
            type="single"
            collapsible
            className="faq-accordion"
          >
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="faq-accordion-item"
                >
                  <AccordionTrigger className="faq-accordion-trigger">
                    <div className="faq-question-wrapper">
                      <div className="faq-icon-wrapper">
                        <HelpCircle className="faq-icon" />
                      </div>
                      <span className="faq-question-text">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="faq-accordion-content">
                    <div className="faq-answer-wrapper">
                      <p className="faq-answer-text">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

