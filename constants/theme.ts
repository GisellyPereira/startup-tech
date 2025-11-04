/**
 * Theme configuration constants
 * Centraliza todas as cores e valores de tema do projeto
 */

// Cores base
export const COLORS = {
  // Background
  background: "#060010",
  
  // Primárias - Baseadas no gradiente de botões
  primary: "#7C3AED", // rgb(124, 58, 237)
  primaryDark: "#6B2AD5",
  primaryLight: "#8D4EF5",
  
  // Secundárias - Baseadas no gradiente de botões
  secondary: "#4B3AFF", // rgb(75, 58, 255)
  secondaryDark: "#3A2AD5",
  secondaryLight: "#5C4AFF",
  
  // Accent
  accent: "#B19EEF",
  accentDark: "#9A85E5",
  accentLight: "#C8B7F5",
  
  // Neutras
  white: "#FFFFFF",
  black: "#000000",
  
  // Gradientes
  gradient: {
    button: "linear-gradient(-135deg, rgb(124, 58, 237), rgba(75, 58, 255, 0.6))",
    buttonHover: "linear-gradient(-135deg, rgb(139, 78, 247), rgba(91, 74, 255, 0.7))",
  },
} as const;

// Cores para LiquidEther
export const LIQUID_ETHER_COLORS = [
  COLORS.primary,
  COLORS.secondary,
  COLORS.accent,
] as string[];

// Cor do Star Border
export const STAR_BORDER_COLOR = COLORS.white;

