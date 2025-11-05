"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { COLORS } from "@/constants/theme";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import type { BaseComponentProps } from "@/types/components";
import "./Footer.css";

/**
 * Footer Component
 * 
 * Footer futurista e elaborado com:
 * - Design moderno com glassmorphism
 * - Animações suaves
 * - Links organizados
 * - Redes sociais
 * - Efeitos visuais avançados
 * 
 * @param className - Classes CSS adicionais
 */
export function Footer({ className }: BaseComponentProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "Sobre Nós", href: "#about" },
      { label: "Serviços", href: "#services" },
      { label: "Portfólio", href: "#portfolio" },
      { label: "Carreiras", href: "#careers" },
    ],
    resources: [
      { label: "Blog", href: "#blog" },
      { label: "Documentação", href: "#docs" },
      { label: "FAQ", href: "#faq" },
      { label: "Suporte", href: "#support" },
    ],
    legal: [
      { label: "Privacidade", href: "#privacy" },
      { label: "Termos", href: "#terms" },
      { label: "Cookies", href: "#cookies" },
      { label: "LGPD", href: "#lgpd" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const contactInfo = [
    { icon: Mail, text: "contato@startuptech.com", href: "mailto:contato@startuptech.com" },
    { icon: Phone, text: "+55 (11) 98765-4321", href: "tel:+5511987654321" },
    { icon: MapPin, text: "São Paulo, SP - Brasil", href: "#" },
  ];

  return (
    <footer
      className={cn(
        "relative footer-section",
        "px-4 sm:px-6 lg:px-8",
        "pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12",
        "pointer-events-auto overflow-hidden",
        className
      )}
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Background Effects */}
      <div className="footer-background" />
      
      {/* Gradiente superior */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 sm:h-40 lg:h-48 pointer-events-none z-5"
        style={{ 
          background: `linear-gradient(to bottom, #060010 0%, #060010 15%, rgba(6, 0, 16, 0.98) 30%, rgba(6, 0, 16, 0.9) 45%, rgba(6, 0, 16, 0.7) 60%, rgba(6, 0, 16, 0.4) 75%, rgba(6, 0, 16, 0.15) 90%, transparent 100%)`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Left Column - Brand */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="footer-brand-header">
              <Image
                src="/logo-startup.png"
                alt="StartupTech Logo"
                width={120}
                height={40}
                className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto object-contain"
                priority
              />
            </div>
            <p className="footer-brand-description">
              Transformando ideias em realidade através de tecnologia de ponta e inovação constante.
            </p>
            
            {/* Contact Info */}
            <div className="footer-contact-info">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="footer-contact-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Icon className="footer-contact-icon" />
                    <span>{item.text}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            className="footer-links-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h4 className="footer-links-title">Empresa</h4>
            <ul className="footer-links-list">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        const target = document.querySelector(link.href);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }
                    }}
                    className="footer-link"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="footer-link-icon" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            className="footer-links-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 className="footer-links-title">Recursos</h4>
            <ul className="footer-links-list">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        const target = document.querySelector(link.href);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }
                    }}
                    className="footer-link"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="footer-link-icon" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            className="footer-links-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h4 className="footer-links-title">Legal</h4>
            <ul className="footer-links-list">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        const target = document.querySelector(link.href);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }
                    }}
                    className="footer-link"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="footer-link-icon" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Newsletter */}
          <motion.div
            className="footer-newsletter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h4 className="footer-newsletter-title">Newsletter</h4>
            <p className="footer-newsletter-description">
              Receba as últimas novidades e atualizações diretamente no seu email.
            </p>
            <form className="footer-newsletter-form">
              <div className="footer-newsletter-input-wrapper">
                <Mail className="footer-newsletter-input-icon" />
                <input
                  type="email"
                  placeholder="Seu email"
                  className="footer-newsletter-input"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="footer-newsletter-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="size-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          <motion.p
            className="footer-copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            © {currentYear} StartupTech. Todos os direitos reservados.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="footer-social-icon" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

