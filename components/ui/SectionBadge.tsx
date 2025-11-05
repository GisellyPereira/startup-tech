"use client";

import React from "react";

export interface SectionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

/**
 * SectionBadge
 * Selo reutilizável para identificar seções (ex.: "Nossos Serviços", "Depoimentos").
 */
export function SectionBadge({ label, className = "", ...rest }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 w-fit ${className}`}
      {...rest}
    >
      <span className="text-xs text-white/70 font-medium">{label}</span>
    </div>
  );
}


