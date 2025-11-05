"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { COLORS } from "@/constants/theme";
import { SectionBadge } from "@/components/ui";
import { Card, CardContent } from "@/components/ui/card";
import type { BaseComponentProps } from "@/types/components";
import { StarBorder } from "@/components/effects";
import "./Contact.css";

/**
 * Contact Section Component
 * 
 * Seção de contato com design sofisticado e moderno
 * 
 * @param className - Classes CSS adicionais
 */
export function Contact({ className }: BaseComponentProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@startuptech.com",
      description: "Envie-nos um email a qualquer momento",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 98765-4321",
      description: "Ligue para nós em horário comercial",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua da Inovação, 123",
      description: "São Paulo, SP - Brasil",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta",
      description: "9h às 18h (GMT-3)",
    },
  ];

  return (
    <section
      id="contact"
      className={cn(
        "relative min-h-screen flex items-center justify-center",
        "px-4 sm:px-6 lg:px-8",
        "pt-16 sm:pt-30 lg:pt-44 pb-18 sm:pb-40 lg:pb-44",
        "pointer-events-auto overflow-hidden",
        className
      )}
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Background com pontos de luz roxos esfumados */}
      <div className="contact-background" />
      
      {/* Gradientes esfumados no topo e bottom */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 sm:h-40 lg:h-48 pointer-events-none z-5"
        style={{ 
          background: `linear-gradient(to bottom, #060010 0%, #060010 15%, rgba(6, 0, 16, 0.98) 30%, rgba(6, 0, 16, 0.9) 45%, rgba(6, 0, 16, 0.7) 60%, rgba(6, 0, 16, 0.4) 75%, rgba(6, 0, 16, 0.15) 90%, transparent 100%)`
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 pointer-events-none z-5"
        style={{ 
          background: `linear-gradient(to top, #060010 0%, #060010 15%, rgba(6, 0, 16, 0.98) 30%, rgba(6, 0, 16, 0.9) 45%, rgba(6, 0, 16, 0.7) 60%, rgba(6, 0, 16, 0.4) 75%, rgba(6, 0, 16, 0.15) 90%, transparent 100%)`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Badge */}
          <div className="mb-5 flex justify-center">
            <SectionBadge label="Entre em Contato" />
          </div>
          
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
            <span className="text-white">Vamos conversar sobre</span>
            <br />
            <span
              className="bg-clip-text text-transparent block mt-1"
              style={{
                backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              seu projeto
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Estamos prontos para transformar suas ideias em realidade
          </p>
        </motion.div>

        {/* Main Content - Grid de duas colunas */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Side - Contact Information Cards */}
          <motion.div
            className="flex flex-col h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="contact-info-grid h-full">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="contact-info-card">
                      <CardContent className="contact-info-card-content">
                        <div className="contact-info-icon-wrapper">
                          <Icon className="contact-info-icon" />
                        </div>
                        <div className="contact-info-text">
                          <h3 className="contact-info-title">{info.title}</h3>
                          <p className="contact-info-content">{info.content}</p>
                          <p className="contact-info-description">{info.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <Card className="contact-form-card">
              <CardContent className="contact-form-card-content">
                <div className="contact-form-header">
                  <div className="contact-form-header-icon">
                    <MessageSquare className="size-6" style={{ color: COLORS.primary }} />
                  </div>
                  <h3 className="contact-form-title">Envie sua mensagem</h3>
                  <p className="contact-form-subtitle">
                    Preencha o formulário abaixo e entraremos em contato em breve
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-grid">
                    <div className="contact-form-group">
                      <label htmlFor="name" className="contact-form-label">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="contact-form-input"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="email" className="contact-form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="contact-form-input"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div className="contact-form-group contact-form-group-full">
                      <label htmlFor="subject" className="contact-form-label">
                        Assunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="contact-form-input"
                        placeholder="Sobre o que você gostaria de falar?"
                      />
                    </div>

                    <div className="contact-form-group contact-form-group-full">
                      <label htmlFor="message" className="contact-form-label">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="contact-form-input contact-form-textarea"
                        placeholder="Conte-nos mais sobre seu projeto..."
                      />
                    </div>
                  </div>

                  <div className="contact-form-footer">
                    <StarBorder
                      as="button"
                      type="submit"
                      className="contact-form-submit"
                      disabled={isSubmitting}
                      color={COLORS.white}
                      speed="5s"
                      thickness={1}
                    >
                      <span className="text-white font-semibold text-xs sm:text-sm whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <span className="contact-form-loader" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="size-4" />
                            Enviar Mensagem
                          </>
                        )}
                      </span>
                    </StarBorder>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
