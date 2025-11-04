/**
 * Services constants
 * Define os serviços oferecidos pela empresa
 */

import { Brain, BarChart3, Code, Cloud } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const SERVICES: Service[] = [
  {
    title: "Inteligência Artificial",
    description: "Soluções de IA para automação e decisões inteligentes",
    icon: Brain,
  },
  {
    title: "Análise de Dados",
    description: "Transforme dados em insights acionáveis",
    icon: BarChart3,
  },
  {
    title: "Desenvolvimento",
    description: "Aplicações modernas e escaláveis",
    icon: Code,
  },
  {
    title: "Cloud Computing",
    description: "Infraestrutura na nuvem otimizada",
    icon: Cloud,
  },
] as const;

