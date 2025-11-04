/**
 * LiquidEther configuration
 * Configurações do efeito de fundo líquido animado
 */

import { LIQUID_ETHER_COLORS } from "@/constants/theme";

export const LIQUID_ETHER_CONFIG = {
  colors: LIQUID_ETHER_COLORS,
  mouseForce: 20,
  cursorSize: 100,
  isViscous: false,
  viscous: 30,
  iterationsViscous: 32,
  iterationsPoisson: 32,
  resolution: 0.5,
  isBounce: false,
  autoDemo: true,
  autoSpeed: 0.5,
  autoIntensity: 2.2,
  takeoverDuration: 0.25,
  autoResumeDelay: 3000,
  autoRampDuration: 0.6,
};

