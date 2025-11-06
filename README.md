# Startup Tech

Landing page moderna e responsiva que apresenta serviços e resultados da Startup Tech com efeitos visuais avançados e foco em performance, acessibilidade e UX.

## 🔥 Demo (Vídeo de Apresentação)

Assista ao vídeo de apresentação do projeto gravado e incluído no repositório:

<div align="center">
  <video controls width="100%" style="max-width: 920px; border-radius: 12px; outline: none;" poster="public/logo-startup.png">
    <source src="public/video-apresentacao.mp4" type="video/mp4" />
    Seu navegador não suporta vídeo HTML5. Baixe o arquivo em: public/video-apresentacao.mp4
  </video>
</div>

> Dica: ao publicar, o vídeo ficará disponível via `/video-apresentacao.mp4`.

## 🚀 Tecnologias

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4** (com `@tailwindcss/postcss`)
- **Framer Motion** (animações)
- **Three.js** (efeito 3D LiquidEther)
- **Radix UI** (acessibilidade)

## 🎨 Recursos de Destaque

- ✨ Efeito de fundo líquido (LiquidEther) com WebGL, carregado apenas no cliente
- ⭐ StarBorder animado em CTAs
- 🧩 Componentização clara: `layout`, `sections`, `ui`, `effects`
- 📱 Totalmente responsivo e pronto para telas altas/largas
- ⚡ Otimizações: imports dinâmicos, separação de código e lazy
- ♿ Acessibilidade: uso de ARIA e foco em contraste

## 📁 Estrutura do Projeto

```
startup-tech/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout raiz e metadados
│   ├── page.tsx           # Página principal com seções
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── effects/           # Efeitos visuais (LiquidEther, StarBorder, etc.)
│   ├── layout/            # Header e derivados
│   ├── sections/          # Seções (Hero, Features, Stats, About, FAQ, ...)
│   └── ui/                # Componentes base (button, card, accordion)
├── config/                # Configurações (animações, efeitos)
├── constants/             # Conteúdos e temas (navigation, theme, ...)
├── lib/                   # Utilitários (ex.: cn)
├── public/                # Assets públicos (imagens, vídeo)
└── types/                 # Tipos TypeScript
```

## 🧱 Arquitetura de UI (Resumo)

- `app/page.tsx`: organiza as seções e carrega o LiquidEther com `dynamic(..., { ssr: false })` para evitar SSR de WebGL.
- `components/layout/Header.tsx`: navegação com Framer Motion e âncoras suaves.
- `components/sections/*`: seções da landing (Hero, Features, Stats, About, FAQ, Testimonials, Contact, Footer).
- `config/liquidEther.ts`: parâmetros do efeito (cores, força do mouse, resolução, etc.).
- `constants/*`: conteúdo centralizado para navegação, tema, depoimentos, etc.

## 🛠️ Como Rodar Localmente

```bash
# 1) Instale as dependências
npm install

# 2) Inicie o servidor de desenvolvimento
npm run dev

# 3) Build de produção
npm run build

# 4) Start em produção
npm start

# 5) Lint
npm run lint
```

## 📝 Scripts

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera o build de produção
- `npm start` — inicia o servidor de produção
- `npm run lint` — executa o linter

## 📈 Performance e Boas Práticas

- Import dinâmico do efeito 3D para evitar SSR e reduzir TTFB
- Reutilização de constantes e tema para reduzir duplicidade
- Animações otimizadas e controladas via Framer Motion
- Assets em `public/` para servir estático; manter imagens e vídeo otimizados

## 🔍 SEO (Sugestões)

- Expandir metadados em `app/layout.tsx` (Open Graph, Twitter Cards)
- Adicionar `sitemap.xml` e `robots.txt`
- Títulos/descrições por seção quando houver páginas adicionais

## ✅ Roadmap

- [ ] Formulário de contato com validação e envio
- [ ] Ajustes finos de SEO (OG/Twitter, sitemap, robots)
- [ ] Testes (unitários/integração)
- [ ] Melhorias de acessibilidade (foco, navegação por teclado)

## 📄 Licença

Projeto privado. Todos os direitos reservados.
