"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { ElectricBorder } from "@/components/effects";
import { COLORS } from "@/constants/theme";
import type { Service } from "@/constants/features";

interface ServiceCardProps {
  service: Service;
  index: number;
  className?: string;
}

/**
 * ServiceCard Component
 * 
 * Card individual de serviço com ElectricBorder animado
 * Garante altura uniforme entre todos os cards
 */
export function ServiceCard({ service, index, className }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
      className={cn("h-full", className)}
    >
      <ElectricBorder
        color="#7C00FF"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16 }}
        className="h-full"
      >
        <Card className="group bg-black/40 backdrop-blur-sm hover:bg-black/50 transition-all duration-300 cursor-pointer h-full border-0 flex flex-col min-h-[140px]">
          <CardContent className="p-4 flex-1 flex flex-col">
            <div className="flex items-start gap-3">
              <div
                className="shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.secondary}20)`,
                }}
              >
                <div style={{ color: COLORS.primary }}>
                  <Icon className="size-5" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </ElectricBorder>
    </motion.div>
  );
}

