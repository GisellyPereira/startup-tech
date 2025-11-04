/**
 * Animation configuration constants
 * Centraliza todas as configurações de animações do projeto
 */

export const HEADER_ANIMATION = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
} as const;

export const NAV_ITEM_ANIMATION = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
} as const;

export const NAV_ITEM_TRANSITION = {
  baseDelay: 0.1,
  increment: 0.03,
} as const;

export const MOBILE_MENU_ANIMATION = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
} as const;

export const MOBILE_MENU_ITEM_ANIMATION = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
} as const;

export const MOBILE_MENU_ITEM_TRANSITION = {
  increment: 0.05,
} as const;

export const HERO_TITLE_ANIMATION = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] },
} as const;

export const HERO_SUBTITLE_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.5 },
} as const;

export const HERO_CTA_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.7 },
} as const;

export const HOVER_SCALE = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
} as const;

