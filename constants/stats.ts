/**
 * Statistics constants
 * Define as estatísticas e números da empresa
 */

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const STATS: Stat[] = [
  {
    value: "500+",
    label: "Projetos Entregues",
  },
  {
    value: "98%",
    label: "Satisfação dos Clientes",
  },
  {
    value: "50+",
    label: "Empresas Atendidas",
  },
  {
    value: "24/7",
    label: "Suporte Disponível",
  },
  {
    value: "4.9/5",
    label: "Avaliação Média",
  },
  {
    value: "30+",
    label: "Países Atendidos",
  },
] as const;

