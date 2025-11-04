/**
 * Component type definitions
 * Tipos compartilhados entre componentes
 */

import { ReactNode } from "react";

export interface BaseComponentProps {
  className?: string;
}

export interface AnimatedComponentProps extends BaseComponentProps {
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  transition?: Record<string, unknown>;
}

export interface NavigationItem {
  label: string;
  href: string;
}

