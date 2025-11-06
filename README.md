# Startup Tech

Uma landing page simples e honesta para apresentar a Startup Tech. O objetivo é claro: explicar o que fazemos, mostrar nossos destaques e facilitar o contato — sem enrolação e com uma experiência fluida.

## 🔥 Demo

<p align="center">
  <a href="https://statup-tech.netlify.app/" target="_blank" rel="noopener noreferrer"><b>➡️ Ver a página online</b></a>
  <br />
  <sub>https://statup-tech.netlify.app/</sub>
</p>

## O que você encontra aqui

- Seções diretas (Hero, serviços, resultados, depoimentos, contato) com navegação suave.
- Conteúdo escrito para leitura rápida e CTAs claros.
- Visual com um efeito líquido no fundo do Hero (renderizado só no cliente para não pesar no SSR).

## Como foi feito (versão curta)

- “React bits”: componentes pequenos e reutilizáveis; composição > herança; hooks leves para interações (scroll suave, estados locais). Sem over-engineering.

### Framer Motion, na medida certa

- Microinterações em entradas de seção, header e CTAs.
- Transições sutis para guiar o olhar, sem “atrapalhar” o conteúdo.
- Animações separadas da lógica para manter o código limpo.

## Stack

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

## Como a UI está organizada

- `app/page.tsx` orquestra as seções e carrega o efeito 3D com `dynamic(..., { ssr: false })`.
- `components/sections/*` agrupa as áreas da página.
- `components/ui/*` guarda peças pequenas (botões, etc.).
- `config/*` e `constants/*` deixam números/cores/textos num só lugar.

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

## 📝 Scripts

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera o build de produção
- `npm start` — inicia o servidor de produção
- `npm run lint` — executa o linter

## 📈 O que fazemos para performar

- Import dinâmico do efeito 3D para não impactar SSR.
- Lazy nas partes mais pesadas e código separado por seção.
- Animações pontuais (sem bloquear interação nem layout).

## 🔍 SEO (sugestões)

- Expandir metadados em `app/layout.tsx` (Open Graph, Twitter Cards)
- Adicionar `sitemap.xml` e `robots.txt`
- Títulos/descrições por seção quando houver páginas adicionais

## ✅ Próximos passos

- [ ] Formulário de contato com validação e envio
- [ ] Ajustes finos de SEO (OG/Twitter, sitemap, robots)
- [ ] Testes (unitários/integração)
- [ ] Melhorias de acessibilidade (foco, navegação por teclado)

## 📄 Licença

Projeto privado. Todos os direitos reservados.
