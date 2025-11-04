"use client";

import React from "react";
import "./StarBorder.css";

export interface StarBorderProps {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: unknown;
}

/**
 * StarBorder Component
 * 
 * Componente que adiciona um efeito de borda animada tipo "estrela" ao redor do conteúdo.
 * O efeito cria um brilho que se move horizontalmente nas bordas superior e inferior.
 * 
 * @param as - Elemento HTML ou componente React a ser renderizado (padrão: 'button')
 * @param className - Classes CSS adicionais
 * @param color - Cor do efeito de brilho (padrão: 'white')
 * @param speed - Velocidade da animação em segundos (padrão: '6s')
 * @param thickness - Espessura do padding do efeito (padrão: 1)
 * @param children - Conteúdo a ser renderizado dentro do componente
 * @param style - Estilos inline adicionais
 */
export function StarBorder({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  style,
  ...rest
}: StarBorderProps) {
  return (
    <Component
      className={`star-border-container ${Component === "button" ? "cursor-pointer" : ""} ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...style,
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
        aria-hidden="true"
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
        aria-hidden="true"
      />
      <div className="inner-content">{children}</div>
    </Component>
  );
}

