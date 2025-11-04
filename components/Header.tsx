"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X
} from "lucide-react";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Serviços", href: "#services" },
    { label: "Sobre", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50",
        "w-fit max-w-[90vw]",
        "pointer-events-auto",
        className
      )}
    >
      <nav className={cn(
        "flex items-center justify-between gap-6",
        "px-4 sm:px-6 py-3 sm:py-3.5",
        "rounded-full",
        "backdrop-blur-2xl bg-black/30 border border-white/10",
        "shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]",
        "relative"
      )}>
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-white font-bold text-base sm:text-lg tracking-tight">
            Startup Tech
          </span>
        </motion.a>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-4 py-2 rounded-lg",
                "text-white/80 hover:text-white",
                "text-sm font-medium",
                "transition-colors duration-200",
                "hover:bg-white/5"
              )}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.03 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Button e Menu Mobile */}
        <div className="flex items-center gap-3">
          {/* CTA Button com roxo eletrizante */}
          <Button
            size="default"
            className={cn(
              "hidden sm:flex rounded-full px-5 py-2",
              "bg-[#7C00FF] hover:bg-[#6A00DD]",
              "text-white font-semibold text-sm",
              "border-0",
              "transition-all duration-200",
              "hover:scale-105"
            )}
          >
            Fale Conosco
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "lg:hidden w-9 h-9 rounded-lg",
              "flex items-center justify-center",
              "bg-white/10 hover:bg-white/20",
              "text-white transition-colors",
              "border border-white/20"
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={cn(
            "lg:hidden mt-4 rounded-2xl",
            "backdrop-blur-2xl bg-black/30 border border-white/10",
            "shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]",
            "p-4 space-y-1"
          )}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-lg",
                "text-white/80 hover:text-white",
                "bg-white/5 hover:bg-white/10",
                "transition-all duration-200",
                "text-sm font-medium"
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {item.label}
            </motion.a>
          ))}
          <Button
            className={cn(
              "w-full mt-4 rounded-lg",
              "bg-[#7C00FF] hover:bg-[#6A00DD]",
              "text-white font-semibold",
              "border-0"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Fale Conosco
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}
