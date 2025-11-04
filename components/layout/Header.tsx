"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { StarBorder } from "@/components/effects/StarBorder";
import { NAVIGATION_ITEMS, CTA_BUTTON_TEXT } from "@/constants/navigation";
import { COLORS } from "@/constants/theme";
import { HEADER_ANIMATION, NAV_ITEM_ANIMATION, NAV_ITEM_TRANSITION, HOVER_SCALE } from "@/config/animations";
import type { BaseComponentProps } from "@/types/components";

interface HeaderProps extends BaseComponentProps {}

/**
 * Header Component
 * 
 * Navegação principal do site com:
 * - Logo responsivo
 * - Links de navegação (desktop)
 * - Botão CTA com Star Border effect
 * - Menu mobile hamburger
 * 
 * @param className - Classes CSS adicionais
 */
export function Header({ className }: HeaderProps) {

  return (
    <motion.header
      {...HEADER_ANIMATION}
      className={cn(
        "fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50",
        "w-fit max-w-[calc(100vw-2rem)]",
        "pointer-events-auto overflow-visible",
        className
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between",
          "gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6",
          "px-2 sm:px-3 md:px-4 lg:px-6",
          "py-2.5 sm:py-3 md:py-3.5 lg:py-4",
          "rounded-full",
          "backdrop-blur-2xl bg-black/30 border border-white/10",
          "shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]",
          "relative min-w-0 overflow-visible w-full"
        )}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          {...HOVER_SCALE}
          className="flex items-center group shrink-0"
        >
          <Image
            src="/logo-startup.png"
            alt="Startup Tech"
            width={120}
            height={40}
            className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-10 w-auto object-contain"
            style={{ aspectRatio: "120/40" }}
            priority
          />
        </motion.a>

        {/* Navigation Links - Desktop */}
        <nav
          className="hidden lg:flex items-center gap-0 xl:gap-0.5 flex-1 justify-center min-w-0 max-w-full"
          aria-label="Desktop navigation"
        >
          {NAVIGATION_ITEMS.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              {...NAV_ITEM_ANIMATION}
              transition={{
                delay: NAV_ITEM_TRANSITION.baseDelay + index * NAV_ITEM_TRANSITION.increment,
              }}
              className={cn(
                "relative px-1.5 xl:px-2 py-2 rounded-lg",
                "text-white/80 hover:text-white",
                "text-xs xl:text-sm font-medium",
                "transition-colors duration-200",
                "hover:bg-white/5 whitespace-nowrap shrink-0"
              )}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* CTA Button with Star Border - Visible em mobile e desktop */}
          <StarBorder
            as="button"
            color={COLORS.white}
            speed="5s"
            thickness={1}
            className={cn(
              "flex",
              "transition-all duration-200",
              "hover:scale-105 cursor-pointer shrink-0"
            )}
            style={{
              background: COLORS.gradient.button,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = COLORS.gradient.buttonHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = COLORS.gradient.button;
            }}
          >
            <span className="text-white font-semibold text-xs sm:text-sm whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 block">
              {CTA_BUTTON_TEXT}
            </span>
          </StarBorder>
        </div>
      </nav>

    </motion.header>
  );
}

