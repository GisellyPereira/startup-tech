# Startup Tech

Uma landing page moderna e objetiva para apresentar a **Startup Tech** — clara no propósito, fluida na experiência e enxuta no código.  
Focada em **transmitir valor com simplicidade**, sem distrações e com uma base sólida de performance e design.
## 🔥 Demo

<p>
  <a href="https://statup-tech.netlify.app/" target="_blank" rel="noopener noreferrer"><b>➡️ Ver a página online</b></a>
</p>


## 🧭 **Visão geral**

Esta landing page foi pensada para **explicar o que fazemos em segundos**, **destacar resultados** e **convidar o usuário à ação**, tudo em um fluxo visual contínuo.  

**Principais características:**
- Estrutura direta (Hero, Serviços, Resultados, Depoimentos, Contato)
- Copy otimizada para leitura rápida e CTAs claros
- Efeito 3D fluido no Hero (renderizado apenas no cliente, sem custo de SSR)
- Arquitetura modular e escalável em componentes independentes

---

## ⚙️ **Stack técnica**

- Next.js 16 (App Router), React 19 e TypeScript 5
- Tailwind CSS 4
- Framer Motion (animações)
- Three.js (efeito líquido)
- Radix UI (acessibilidade)

## 🗂️ Estrutura do projeto

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

## 🛠️ Como rodar localmente

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

<div align="center">Feito com 💜!</div>

