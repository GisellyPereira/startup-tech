# Startup Tech

Landing page moderna e responsiva desenvolvida com Next.js, React e TypeScript.

## 🚀 Tecnologias

- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **Framer Motion** - Animações
- **Three.js** - Efeitos 3D (LiquidEther)
- **Radix UI** - Componentes acessíveis

## 📁 Estrutura do Projeto

```
startup-tech/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── effects/          # Efeitos visuais
│   │   ├── LiquidEther.tsx    # Efeito de fundo líquido
│   │   ├── StarBorder.tsx     # Efeito de borda animada
│   │   └── index.ts
│   ├── layout/           # Componentes de layout
│   │   ├── Header.tsx    # Cabeçalho com navegação
│   │   └── index.ts
│   ├── sections/         # Seções da página
│   │   ├── Hero.tsx      # Hero section
│   │   └── index.ts
│   └── ui/               # Componentes UI base
│       └── button.tsx
├── config/               # Configurações
│   ├── animations.ts     # Configurações de animações
│   ├── liquidEther.ts   # Configurações do LiquidEther
│   └── index.ts
├── constants/            # Constantes
│   ├── navigation.ts     # Itens de navegação
│   ├── theme.ts          # Cores e tema
│   └── index.ts
├── lib/                  # Utilitários
│   └── utils.ts          # Funções auxiliares
└── types/                # Definições de tipos TypeScript
    └── components.ts     # Tipos de componentes
```

## 🎨 Características

- ✨ **Efeito LiquidEther** - Background líquido animado com Three.js
- ⭐ **Star Border** - Efeito de borda animada nos botões
- 🎯 **Totalmente Responsivo** - Adaptável a todos os tamanhos de tela
- ⚡ **Performance Otimizada** - Lazy loading e code splitting
- 🎭 **Animações Suaves** - Transições com Framer Motion
- ♿ **Acessível** - Componentes com ARIA labels

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Lint
npm run lint
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera o build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🎯 Próximos Passos

- [ ] Implementar seções de navegação (Serviços, Sobre, FAQ, Contato)
- [ ] Adicionar formulário de contato
- [ ] Otimizar SEO
- [ ] Adicionar testes
- [ ] Melhorar documentação

## 📄 Licença

Este projeto é privado.
