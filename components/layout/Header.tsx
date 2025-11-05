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
          "px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10",
          "py-2.5 sm:py-3 md:py-3.5 lg:py-4",
          "rounded-full",
          "backdrop-blur-2xl bg-black/40 border border-white/20",
          "shadow-[0_8px_32px_0_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)]",
          "relative min-w-0 overflow-visible w-full"
        )}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector('#home');
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          {...HOVER_SCALE}
          className="flex items-center group shrink-0 cursor-pointer mr-6 sm:mr-8 lg:mr-12 xl:mr-16"
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
          className="hidden lg:flex items-center gap-2 xl:gap-3 flex-1 justify-center min-w-0 max-w-full"
          aria-label="Desktop navigation"
        >
          {NAVIGATION_ITEMS.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(item.href);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              {...NAV_ITEM_ANIMATION}
              transition={{
                delay: NAV_ITEM_TRANSITION.baseDelay + index * NAV_ITEM_TRANSITION.increment,
              }}
              className={cn(
                "px-2 xl:px-3 py-2",
                "text-white/70 hover:text-white",
                "text-sm xl:text-base font-medium",
                "transition-colors duration-200 ease-out",
                "whitespace-nowrap shrink-0",
                "cursor-pointer"
              )}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0 ml-6 sm:ml-8 lg:ml-12 xl:ml-16">
          {/* CTA Button with Star Border - Visible em mobile e desktop */}
          <StarBorder
            as="a"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector('#contact');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            color={COLORS.white}
            speed="5s"
            thickness={1}
            className={cn(
              "flex",
              "transition-all duration-200",
              "hover:scale-105 cursor-pointer shrink-0",
              "no-underline"
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

