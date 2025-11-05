/**
 * Testimonials constants
 * Define os depoimentos de clientes
 */

export interface Testimonial {
  text: string;
  author: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "A Startup Tech transformou completamente nossa empresa. As soluções de IA implementadas aumentaram nossa produtividade em 300%.",
    author: "@joaosilva",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=joao",
  },
  {
    text: "Incrível como a análise de dados avançada nos ajudou a tomar decisões mais inteligentes. Recomendo fortemente!",
    author: "@maria_santos",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
  },
  {
    text: "O desenvolvimento foi impecável. Aplicações modernas, escaláveis e com uma experiência de usuário excepcional.",
    author: "@carlos_tech",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos",
  },
  {
    text: "A infraestrutura na nuvem otimizada pela Startup Tech reduziu nossos custos em 40% e melhorou a performance drasticamente.",
    author: "@ana_rodrigues",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ana",
  },
  {
    text: "Tecnologia de ponta e equipe altamente qualificada. Estamos muito satisfeitos com os resultados alcançados.",
    author: "@pedro_innov",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pedro",
  },
  {
    text: "A Startup Tech não é apenas uma empresa de tecnologia, é uma parceira estratégica que entende nosso negócio.",
    author: "@lucia_cloud",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lucia",
  },
  {
    text: "Soluções inovadoras que realmente fazem a diferença. Nossa equipe está mais eficiente e focada no que realmente importa.",
    author: "@rafael_dev",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rafael",
  },
  {
    text: "A experiência foi excepcional desde o início. Profissionais dedicados e tecnologia de última geração.",
    author: "@fernanda_ai",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=fernanda",
  },
  {
    text: "Implementação rápida e eficiente. Em poucos dias já estávamos colhendo os benefícios das soluções implementadas.",
    author: "@gabriel_data",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gabriel",
  },
  {
    text: "A Startup Tech superou todas as nossas expectativas. Sem dúvida, a melhor escolha que fizemos para nossa empresa.",
    author: "@julia_tech",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=julia",
  },
  {
    text: "Inovação constante e suporte excepcional. A Startup Tech é referência em tecnologia e excelência.",
    author: "@thiago_cloud",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=thiago",
  },
  {
    text: "Resultados impressionantes em pouco tempo. A equipe da Startup Tech entende perfeitamente as necessidades do mercado.",
    author: "@beatriz_innov",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=beatriz",
  },
] as const;

