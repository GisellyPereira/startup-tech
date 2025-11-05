/**
 * FAQ constants
 * Define as perguntas frequentes e suas respostas
 */

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer: "Nosso processo é dividido em etapas claras: primeiro, fazemos uma análise detalhada das suas necessidades. Em seguida, criamos um planejamento estratégico personalizado. Depois, desenvolvemos a solução em sprints com entregas regulares para feedback. Por fim, realizamos testes rigorosos e implantação com suporte contínuo.",
    category: "Processo"
  },
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer: "O tempo varia de acordo com a complexidade do projeto. Um projeto simples pode levar de 2 a 4 semanas, enquanto projetos mais complexos podem levar de 2 a 6 meses. Após a análise inicial, fornecemos um cronograma detalhado com marcos e entregas específicas.",
    category: "Tempo"
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer: "Trabalhamos com as tecnologias mais modernas e adequadas para cada projeto: React, Next.js, TypeScript, Node.js, Python, TensorFlow, AWS, Docker, Kubernetes e muito mais. Sempre escolhemos a melhor stack tecnológica para atender às necessidades específicas do seu negócio.",
    category: "Tecnologia"
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim! Oferecemos suporte contínuo e manutenção após a entrega do projeto. Nossos planos de suporte incluem monitoramento 24/7, atualizações de segurança, correções de bugs, melhorias incrementais e consultoria técnica. Estamos sempre disponíveis para garantir que sua solução funcione perfeitamente.",
    category: "Suporte"
  },
  {
    question: "Como funciona o orçamento e pagamento?",
    answer: "Após entender suas necessidades, fornecemos um orçamento detalhado e transparente. O pagamento pode ser feito em parcelas conforme o cronograma do projeto, geralmente dividido em marcos de entrega. Também oferecemos opções de pagamento flexíveis para projetos de longo prazo.",
    category: "Financeiro"
  }
] as const;

