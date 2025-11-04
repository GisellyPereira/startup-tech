# Arquitetura do Projeto

## 📐 Estrutura de Pastas

### `/app`
Diretório principal do Next.js App Router
- `layout.tsx` - Layout raiz com metadados e fontes
- `page.tsx` - Página principal/home
- `globals.css` - Estilos globais e tema

### `/components`
Componentes React organizados por categoria

#### `/components/effects`
Efeitos visuais e animações
- `LiquidEther.tsx` - Simulação de fluido 3D com Three.js
- `StarBorder.tsx` - Efeito de borda animada tipo estrela
- `index.ts` - Barrel export

#### `/components/layout`
Componentes de estrutura e layout
- `Header.tsx` - Cabeçalho com navegação responsiva
- `index.ts` - Barrel export

#### `/components/sections`
Seções da página
- `Hero.tsx` - Hero section principal
- `index.ts` - Barrel export

#### `/components/ui`
Componentes UI base reutilizáveis
- `button.tsx` - Botão com variantes

### `/config`
Configurações centralizadas
- `animations.ts` - Configurações de animações (Framer Motion)
- `liquidEther.ts` - Configurações do efeito LiquidEther
- `index.ts` - Barrel export

### `/constants`
Constantes e valores fixos
- `navigation.ts` - Itens de navegação
- `theme.ts` - Cores e tema
- `index.ts` - Barrel export

### `/types`
Definições de tipos TypeScript
- `components.ts` - Tipos compartilhados de componentes

### `/lib`
Utilitários e helpers
- `utils.ts` - Funções auxiliares (cn, etc)

## 🎯 Princípios de Organização

### 1. **Separação de Responsabilidades**
- Cada componente tem uma responsabilidade única
- Lógica de negócio separada de apresentação
- Configurações centralizadas

### 2. **Barrel Exports**
- Uso de `index.ts` para facilitar imports
- Imports limpos: `import { Header } from "@/components/layout"`

### 3. **TypeScript**
- Interfaces e tipos bem definidos
- Tipagem forte em todos os componentes
- Tipos exportados para reutilização

### 4. **Constantes Centralizadas**
- Cores em `/constants/theme.ts`
- Navegação em `/constants/navigation.ts`
- Configurações em `/config/`

### 5. **Documentação**
- JSDoc em todos os componentes principais
- Comentários explicativos onde necessário
- README e arquitetura documentados

## 🔄 Fluxo de Dados

```
app/page.tsx
  ├── Importa componentes de layout/
  ├── Importa componentes de sections/
  ├── Importa efeitos de effects/
  └── Importa configurações de config/

Componentes
  ├── Importam constantes de constants/
  ├── Importam tipos de types/
  ├── Importam configurações de config/
  └── Importam utilitários de lib/
```

## 📦 Convenções

### Nomenclatura
- Componentes: PascalCase (`Header.tsx`)
- Arquivos de config: camelCase (`animations.ts`)
- Constantes: UPPER_SNAKE_CASE (`NAVIGATION_ITEMS`)
- Tipos: PascalCase (`StarBorderProps`)

### Imports
```typescript
// Ordem: externos → internos
import { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Header } from "@/components/layout";
import { COLORS } from "@/constants/theme";
```

### Componentes
- Sempre com JSDoc
- Props tipadas com interfaces
- Uso de default exports apenas quando necessário
- Named exports preferidos

## 🚀 Melhores Práticas Aplicadas

✅ **TypeScript strict mode**
✅ **Componentes funcionais**
✅ **Hooks customizados quando necessário**
✅ **Separação de concerns**
✅ **Código DRY (Don't Repeat Yourself)**
✅ **Configurações centralizadas**
✅ **Documentação inline**
✅ **Acessibilidade (ARIA)**
✅ **Performance (lazy loading, code splitting)**

