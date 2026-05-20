# Design System — Documentação Completa

> **Fonte:** https://twist-close-27620285.figma.site/  
> **Analisado em:** 2026-05-20  
> **Versão:** v1.0.0  
> **Stack:** React + Tailwind CSS + Lucide Icons + CSS Custom Properties  

---

## Índice

1. [Foundations](#1-foundations)
2. [Design Tokens](#2-design-tokens)
3. [Tipografia](#3-tipografia)
4. [Paleta de Cores](#4-paleta-de-cores)
5. [Espaçamento](#5-espaçamento)
6. [Layout System](#6-layout-system)
7. [Border Radius](#7-border-radius)
8. [Sombras](#8-sombras)
9. [Iconografia](#9-iconografia)
10. [Motion](#10-motion)
11. [Componentes](#11-componentes)
12. [Hierarquia Visual](#12-hierarquia-visual)
13. [Padrões de Navegação](#13-padrões-de-navegação)
14. [Estados Visuais](#14-estados-visuais)
15. [Responsividade](#15-responsividade)
16. [Inconsistências Detectadas](#16-inconsistências-detectadas)
17. [Sugestões UX/UI](#17-sugestões-uxui)

---

## 1. Foundations

### Princípios do Sistema

| Princípio | Descrição |
|-----------|-----------|
| **Dual Theme** | Light e Dark mode com variáveis CSS separadas |
| **Token-driven** | Todos os valores via CSS Custom Properties |
| **Utility-first** | Tailwind CSS como base de estilo |
| **Semantic naming** | Tokens nomeados por função, não por valor |

### Tecnologias

- **CSS Framework:** Tailwind CSS (classes utilitárias)
- **Icon Library:** Lucide Icons
- **Font:** Red Hat Display (Google Fonts)
- **Color Space:** oklch + hex
- **Approach:** CSS Custom Properties + Tailwind config

---

## 2. Design Tokens

### Arquivo de Tokens (CSS)

```css
:root {
  /* ─── BASE RADIUS ─── */
  --radius: 0.625rem; /* 10px */

  /* ─── FONT ─── */
  --font-size: 16px;
  --font-weight-normal: 400;
  --font-weight-medium: 500;

  /* ─── BLUE SCALE ─── */
  --blue-800: #13283C;   /* Dark Navy         */
  --blue-600: #304A64;   /* Medium Navy       */
  --blue-400: #BFD8F3;   /* Light Blue        */
  --blue-200: #9CB1C8;   /* Gray Blue         */

  /* ─── SEMANTIC — TEXT ─── */
  --text-primary:   #4A4A4A;
  --text-secondary: #666666;
  --text-disabled:  #9E9E9E;
  --text-inverse:   #FFFFFF;
  --text-link:      #304A64; /* blue-600 */

  /* ─── SEMANTIC — SURFACE ─── */
  --surface-1: #32353A;
  --surface-2: #1D2024;
  --surface-3: #0B0E12;
  --surface-4: #2A2D31;
  --surface-5: #323438;

  /* ─── SEMANTIC — SYSTEM ─── */
  --error:     #E9786B;
  --error-bg:  #FEF5F4;
  --divider:   #E9EFF2;
  --tooltip:   #2D3135;
  --bg-btn-disabled: rgba(215, 215, 215, 0.49);
  --input-background: #F3F3F5;
  --switch-background: #CBCED4;

  /* ─── STATE COLORS ─── */
  --state-primary:  #304A64;
  --state-inverse:  #D5E4F6;
  --state-blue:     #0094EE;
  --state-blue-bg:  #E6F4FD;
  --state-green:    #4BAF50;
  --state-green-2:  #67D18A;
  --state-yellow:   #E9C16C;
  --state-orange:   #FF9E5F;
  --state-red:      #E9786B;
  --state-purple:   #8080EC;
  --state-staging:  #F6BD67;

  /* ─── ALERT PAIRS (text / background) ─── */
  --alert-blue:       #9DCBFC;  --alert-blue-bg:   #E6F4FD;
  --alert-grey:       #4A4A4A;  --alert-grey-bg:   #F0F0F0;
  --alert-green:      #2D7A31;  --alert-green-bg:  #D4EDDA;
  --alert-red:        #C0392B;  --alert-red-bg:    #F8D7DA;
  --alert-yellow:     #856404;  --alert-yellow-bg: #FFF3CD;

  /* ─── SHADCN/UI SEMANTIC (Light) ─── */
  --background:         oklch(98.5% 0 0);
  --foreground:         oklch(14.5% 0 0);
  --card:               oklch(100% 0 0);
  --card-foreground:    oklch(14.5% 0 0);
  --primary:            oklch(14.5% 0 0);
  --primary-foreground: oklch(98.5% 0 0);
  --secondary:          oklch(96.1% 0 0);
  --secondary-foreground: oklch(20.5% 0 0);
  --muted:              oklch(96.1% 0 0);
  --muted-foreground:   oklch(55.6% 0 0);
  --border:             oklch(92.2% 0 0);
  --input:              oklch(92.2% 0 0);
  --ring:               oklch(70.8% 0 0);
  --destructive:        oklch(57.7% .237 25.331);
  --destructive-foreground: oklch(98.5% 0 0);
}

.dark {
  --background:         oklch(14.5% 0 0);
  --foreground:         oklch(98.5% 0 0);
  --card:               oklch(14.5% 0 0);
  --card-foreground:    oklch(98.5% 0 0);
  --primary:            oklch(98.5% 0 0);
  --primary-foreground: oklch(20.5% 0 0);
  --secondary:          oklch(26.9% 0 0);
  --secondary-foreground: oklch(98.5% 0 0);
  --muted:              oklch(26.9% 0 0);
  --muted-foreground:   oklch(70.8% 0 0);
  --border:             oklch(26.9% 0 0);
  --input:              oklch(26.9% 0 0);
  --ring:               oklch(43.9% 0 0);
  --destructive:        oklch(39.6% .141 25.723);
  --destructive-foreground: oklch(63.7% .237 25.331);

  /* Dark mode overrides */
  --text-primary:   #FFFFFF;
  --text-secondary: #C1C2C4;
  --text-disabled:  #808285;
  --text-inverse:   #4A4A4A;
  --text-link:      #B2C5FF;

  --alert-blue:       #9DCBFC;  --alert-blue-bg:   #475360;
  --alert-grey:       #FFFFFF;  --alert-grey-bg:   #5B5D61;
  --alert-green:      #9ED49D;  --alert-green-bg:  #48544D;
  --alert-red:        #FFB4AB;  --alert-red-bg:    #5B4E50;
  --alert-yellow:     #E9C16C;  --alert-yellow-bg: #575144;

  --state-blue-bg:  #475360;
}
```

---

## 3. Tipografia

### Família Tipográfica

| Role | Família | Uso |
|------|---------|-----|
| **Display / Headings** | `"Red Hat Display", sans-serif` | Headlines, títulos |
| **Interface / UI** | `ui-sans-serif, system-ui, sans-serif` | Labels, botões, nav |
| **Code / Mono** | `ui-monospace, SFMono-Regular, Consolas` | Código, tokens, classes |

---

### Escala Tipográfica Completa

#### Headline — Títulos principais e seções de destaque

| Nome | Size | Line Height | Weight | Letter Spacing | Classe Tailwind |
|------|------|-------------|--------|----------------|-----------------|
| Headline Large  | 32px | 40px | 400 (Regular) | 0 | `text-[32px] leading-[40px] font-normal` |
| Headline Medium | 28px | 36px | 400 (Regular) | 0 | `text-[28px] leading-[36px] font-normal` |
| Headline Small  | 24px | 32px | 400 (Regular) | 0 | `text-[24px] leading-[32px] font-normal` |

#### Title — Títulos de seções e cards

| Nome | Size | Line Height | Weight | Classe Tailwind |
|------|------|-------------|--------|-----------------|
| Title Large  | 22px | 28px | 500 (Medium) | `text-[22px] leading-[28px] font-medium` |
| Title Medium | 20px | 30px | 500 (Medium) | `text-[20px] leading-[30px] font-medium` |
| Title Small  | 18px | 27px | 600 (SemiBold) | `text-[18px] leading-[27px] font-semibold` |

#### Body — Texto corrido

| Nome | Size | Line Height | Weight | Classe Tailwind |
|------|------|-------------|--------|-----------------|
| Body Large  | 18px | 27px | 400 | `text-[18px] leading-[27px]` |
| Body Medium | 16px | 24px | 400 | `text-base leading-6` |
| Body Small  | 14px | 20px | 400 | `text-sm leading-5` |

#### Label / Caption — UI pequenos

| Nome | Size | Line Height | Weight | Classe Tailwind |
|------|------|-------------|--------|-----------------|
| Label  | 12px | 16px | 400 | `text-xs leading-4` |
| Caption | 11px | 16px | 400 | `text-[11px] leading-4` |

---

### Hierarquia de Pesos

| Token | Valor | Uso |
|-------|-------|-----|
| `font-normal`   | 400 | Corpo de texto, headlines |
| `font-medium`   | 500 | Títulos, labels, botões |
| `font-semibold` | 600 | Ênfase, cards, h3 |
| `font-bold`     | 700 | Destaque máximo, badges |

---

## 4. Paleta de Cores

### 4.1 Blue Scale (Brand)

| Token | Light Value | Dark Value | Uso |
|-------|-------------|------------|-----|
| `--blue-800` | `#13283C` | `#D0E4FF` | Fundo principal, favicon |
| `--blue-600` | `#304A64` | `#9DCBFC` | Links, state-primary |
| `--blue-400` | `#BFD8F3` | `#3A4857` | Hover, surfaces claros |
| `--blue-200` | `#9CB1C8` | `#CED8E4` | Borda, elementos sutis |

### 4.2 Text Colors

| Token | Light | Dark | Uso |
|-------|-------|------|-----|
| `--text-primary`   | `#4A4A4A` | `#FFFFFF` | Texto principal |
| `--text-secondary` | `#666666` | `#C1C2C4` | Texto de suporte |
| `--text-disabled`  | `#9E9E9E` | `#808285` | Desabilitado |
| `--text-inverse`   | `#FFFFFF` | `#4A4A4A` | Sobre fundos escuros |
| `--text-link`      | `#304A64` | `#B2C5FF` | Links |

### 4.3 System / Utility

| Token | Value | Uso |
|-------|-------|-----|
| `--error`     | `#E9786B` | Estados de erro, badges de notificação |
| `--error-bg`  | `#FEF5F4` (L) / `#4B4548` (D) | Background de erro |
| `--divider`   | `#E9EFF2` (L) / `#4B4E52` (D) | Divisores, bordas |
| `--tooltip`   | `#2D3135` (L) / `#E0E2E8` (D) | Background de tooltips |

### 4.4 State / Semantic Colors

| Token | Value | Uso |
|-------|-------|-----|
| `--state-blue`    | `#0094EE` | Info, active, links |
| `--state-green`   | `#4BAF50` | Sucesso primário |
| `--state-green-2` | `#67D18A` | Sucesso secundário |
| `--state-yellow`  | `#E9C16C` | Aviso |
| `--state-orange`  | `#FF9E5F` | Alerta moderado |
| `--state-red`     | `#E9786B` | Erro, perigo |
| `--state-purple`  | `#8080EC` | Informação especial |
| `--state-staging` | `#F6BD67` | Ambiente de staging |

### 4.5 Alert Color Pairs

Cada alert tem uma cor de texto e uma cor de background.

| Tipo | Texto (Light) | Bg (Light) | Texto (Dark) | Bg (Dark) |
|------|---------------|------------|--------------|-----------|
| Blue   | `#304A64` | `#E6F4FD` | `#9DCBFC` | `#475360` |
| Grey   | `#4A4A4A` | `#F0F0F0` | `#FFFFFF`  | `#5B5D61` |
| Green  | `#2D7A31` | `#D4EDDA` | `#9ED49D`  | `#48544D` |
| Red    | `#C0392B` | `#F8D7DA` | `#FFB4AB`  | `#5B4E50` |
| Yellow | `#856404` | `#FFF3CD` | `#E9C16C`  | `#575144` |

### 4.6 Surface Scale (Dark Mode)

| Token | Value | Z-Order |
|-------|-------|---------|
| `--surface-3` | `#0B0E12` | Base / fundo mais escuro |
| `--surface-2` | `#1D2024` | Fundo secundário |
| `--surface-4` | `#2A2D31` | Cards secundários |
| `--surface-1` | `#32353A` | Cards primários |
| `--surface-5` | `#323438` | Elementos sobrepostos |

### 4.7 Chart Colors (Data Visualization)

| Token | Value | Cor |
|-------|-------|-----|
| `--chart-1` | `oklch(48.8% .243 264.376)` | Azul |
| `--chart-2` | `oklch(69.6% .17 162.48)` | Verde |
| `--chart-3` | `oklch(76.9% .188 70.08)` | Amarelo |
| `--chart-4` | `oklch(62.7% .265 303.9)` | Roxo |
| `--chart-5` | `oklch(64.5% .246 16.439)` | Vermelho |

---

## 5. Espaçamento

### Escala Base (múltiplos de 4px)

| Token | Valor | Tailwind | Uso |
|-------|-------|---------|-----|
| `space-1` | 4px  | `p-1`, `m-1`, `gap-1` | Interno mínimo |
| `space-2` | 8px  | `p-2`, `m-2`, `gap-2` | Espaço apertado |
| `space-3` | 12px | `p-3`, `m-3`, `gap-3` | Nav items, espaço padrão |
| `space-4` | 16px | `p-4`, `m-4`, `gap-4` | Grid gap padrão |
| `space-6` | 24px | `p-6`, `m-6`, `gap-6` | Padding de cards, sidebar |
| `space-8` | 32px | `p-8`, `m-8` | Cards grandes, seções |
| `space-12` | 48px | `p-12` | Seções maiores |
| `space-17` | 68px | `p-[68px]` | Padding de conteúdo principal |

### Padrões de Uso

```
Sidebar padding:     p-6    (24px)
Card padding small:  p-6    (24px)
Card padding large:  p-8    (32px)
Nav item padding:    px-3 py-2 (12px 8px)
Content padding:     p-[68px] (68px)
Grid gap default:    gap-4  (16px)
Grid gap cards:      gap-6  (24px)
```

---

## 6. Layout System

### App Shell

```
┌─────────────────────────────────────────────────────┐
│                   h-screen w-screen overflow-hidden   │
│  ┌──────────────┬────────────────────────────────┐   │
│  │   Sidebar    │        Main Content            │   │
│  │   w-64       │        flex-1                  │   │
│  │   (256px)    │        overflow-y-auto         │   │
│  │   fixed      │        p-[68px]                │   │
│  │              │   ┌────────────────────────┐   │   │
│  │  [Header]    │   │  container max-w-6xl   │   │   │
│  │  [Nav]       │   │  mx-auto               │   │   │
│  │  [Footer]    │   │  [Page Content]        │   │   │
│  │              │   └────────────────────────┘   │   │
│  └──────────────┴────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

### Grid System

| Breakpoint | Prefixo | Min-Width | Colunas |
|------------|---------|-----------|---------|
| Default    | —       | 0         | 1 col   |
| SM         | `sm:`   | 640px     | 2 cols  |
| MD         | `md:`   | 768px     | 2–3 cols |
| LG         | `lg:`   | 1024px    | 3–4 cols |
| XL         | `xl:`   | 1280px    | 4–5 cols |

### Grid Responsivo — Colors Page

```css
grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4
```

### Grid Responsivo — Cards Page

```css
grid gap-6 md:grid-cols-2 lg:grid-cols-3
```

### Container

```css
container max-w-6xl mx-auto /* max-width: 1152px, centrado */
```

---

## 7. Border Radius

| Token | Valor | Tailwind | Uso |
|-------|-------|---------|-----|
| `radius-sm`  | 4px  | `rounded`    | Tags, badges pequenos |
| `radius-md`  | 8px  | `rounded-md` | Botões, inputs, toggles |
| `radius-lg`  | 10px | `rounded-lg` | Nav items, container base |
| `radius-xl`  | 14px | `rounded-xl` | Cards |
| `radius-full`| 9999px | `rounded-full` | Badges circulares |

> **Token base:** `--radius: 0.625rem` (10px)

---

## 8. Sombras

| Nome | Valor CSS | Tailwind | Uso |
|------|-----------|---------|-----|
| `shadow-sm` | `rgba(0,0,0,0.05) 0px 1px 2px 0px` | `shadow-sm` | Swatches, color cards |
| `shadow-md` | `rgba(0,0,0,0.1) 0px 1px 3px, rgba(0,0,0,0.1) 0px 1px 2px -1px` | `shadow` | Cards, dropdowns |

> O sistema usa sombras sutis. Elevação comunicada principalmente via bordas e superfícies.

---

## 9. Iconografia

### Biblioteca

**Lucide Icons** — https://lucide.dev

### Ícones em Uso

| Ícone | Contexto |
|-------|----------|
| `lucide-palette` | Logo / cabeçalho sidebar |
| `lucide-house` | Nav: Início |
| `lucide-image` | Nav: Logo |
| `lucide-type` | Nav: Typography |
| `lucide-globe` | Nav: Favicon |
| `lucide-circle-alert` | Nav: Alerts |
| `lucide-award` | Nav: Badges |
| `lucide-package` | Cards de componentes |
| `lucide-sun` | Toggle: Light mode |
| `lucide-moon` | Toggle: Dark mode |

### Tamanhos

| Classe | Tamanho | Uso |
|--------|---------|-----|
| `size-4` | 16px | Ícones inline, código |
| `size-5` | 20px | Nav items |
| `size-6` | 24px | Logo / cabeçalho |

---

## 10. Motion

### Transition Padrão

```css
transition-colors: color, background-color, border-color,
                   outline-color, text-decoration-color,
                   fill, stroke, gradient-from/via/to
duration: 0.15s
easing:   cubic-bezier(0.4, 0, 0.2, 1)  /* ease-in-out Material */
```

### Classes Tailwind Usadas

| Classe | Uso |
|--------|-----|
| `transition-colors` | Nav items, links |
| `transition-all` | Botões, toggles |

### Microinterações Identificadas

- **Nav item hover:** `text-muted-foreground → text-foreground` + `bg-transparent → bg-muted`
- **Theme toggle:** Slide visual entre Light/Dark com troca de bg-white
- **Color swatches:** Elevação suave via shadow-sm

---

## 11. Componentes

### 11.1 Sidebar Navigation

**Estrutura:**
```
Sidebar (w-64, border-r, bg-background)
├── Header (p-6, border-b)
│   ├── Icon (lucide-palette, size-6)
│   └── Brand name (font-semibold, text-primary)
├── Nav List (flex-1, overflow-y-auto, p-4, space-y-1)
│   └── Nav Item × n
└── Footer (border-t, p-4)
    └── Version label (text-xs, text-muted-foreground)
```

**Nav Item:**
```html
<!-- Active -->
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm 
          transition-colors bg-primary text-primary-foreground">
  <Icon class="size-5" />
  <span>Label</span>
</a>

<!-- Inactive -->
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm 
          transition-colors text-muted-foreground 
          hover:bg-muted hover:text-foreground">
  <Icon class="size-5" />
  <span>Label</span>
</a>
```

**Especificações:**
- Width: 256px
- Item height: 36px
- Item padding: 8px 12px
- Item radius: 10px
- Icon gap: 12px (gap-3)
- Active bg: rgb(3, 2, 19) ≈ preto
- Active text: branco
- Inactive text: rgb(113, 113, 130)

---

### 11.2 Theme Toggle

**Estrutura:**
```html
<div class="flex items-center gap-2 p-1 rounded-lg border bg-gray-100">
  <button class="flex items-center gap-2 px-4 py-2 rounded-md transition-all 
                 bg-white text-gray-600 font-medium">
    <SunIcon class="size-4" /> Light
  </button>
  <button class="flex items-center gap-2 px-4 py-2 rounded-md transition-all 
                 text-gray-400 font-medium">
    <MoonIcon class="size-4" /> Dark
  </button>
</div>
```

**Especificações:**
- Container: 192×46px, border `1px solid #E9EFF2`, bg `#F5F5F5`, radius 10px, padding 4px
- Button ativo: 88×36px, bg branco, color `#4A4A4A`
- Button inativo: 86×36px, bg transparente, color `#666666`
- Radius botão: 8px
- Padding botão: 8px 16px

---

### 11.3 Cards

**Card Pequeno (Info Card):**
```html
<div class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6">
  <div class="flex items-center gap-3 mb-4">
    <div class="p-2 bg-primary/10 rounded-lg">
      <Icon class="size-5" />
    </div>
    <h3 class="text-lg font-semibold">Título</h3>
  </div>
  <p class="text-sm text-muted-foreground">Descrição</p>
</div>
```

**Card Grande (Feature Card):**
```html
<div class="bg-card text-card-foreground rounded-xl border p-8">
  <h2 class="text-xl font-medium mb-2">Título</h2>
  <p class="text-muted-foreground">...</p>
</div>
```

**Especificações:**
- Background: branco (light) / #0B0E12 (dark)
- Border: `1px solid rgba(0,0,0,0.1)` (light) / `1px solid oklch(26.9% 0 0)` (dark)
- Radius: 14px (rounded-xl)
- Padding small: 24px
- Padding large: 32px
- Icon container: p-2, bg-primary/10, rounded-lg

---

### 11.4 Color Swatch

```html
<div class="p-2 rounded-lg border shadow-sm">
  <div class="w-18 h-18 rounded-md mb-2" style="background: {color}"></div>
  <div class="space-y-0.5">
    <p class="text-xs text-muted-foreground">nome-do-token</p>
    <p class="text-sm font-semibold uppercase font-mono">HEXVALUE</p>
    <p class="text-xs text-muted-foreground font-mono">--css-var</p>
  </div>
</div>
```

**Grid de Swatches:**
```css
grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4
```

---

### 11.5 Alerts

5 variantes, cada uma com ícone contextual:

| Variante | Ícone | Texto | Background |
|----------|-------|-------|------------|
| **Blue**   | InfoIcon   | `--alert-blue`   | `--alert-blue-bg`   |
| **Grey**   | AlertIcon  | `--alert-grey`   | `--alert-grey-bg`   |
| **Green**  | CheckIcon  | `--alert-green`  | `--alert-green-bg`  |
| **Red**    | XIcon      | `--alert-red`    | `--alert-red-bg`    |
| **Yellow** | WarningIcon| `--alert-yellow` | `--alert-yellow-bg` |

**Estrutura HTML:**
```html
<div class="flex items-start gap-3 p-4 rounded-lg" 
     style="background: var(--alert-{type}-bg)">
  <Icon style="color: var(--alert-{type})" />
  <div>
    <p class="font-medium" style="color: var(--alert-{type})">Título</p>
    <p class="text-sm" style="color: var(--alert-{type})">Mensagem</p>
  </div>
</div>
```

---

### 11.6 Badges

**Small Badges (Status Dots)**
- Formato: círculo sólido 6×6px
- Variantes: Red, Yellow, Blue, Green
- Uso: Status, presença, indicadores de ponto

```html
<span class="inline-block w-1.5 h-1.5 rounded-full" 
      style="background: var(--state-red)"></span>
```

**Large Badges (Count Badges)**
- Formato: círculo com número
- Tamanho mínimo: 16px × 16px
- Tamanho máximo: 34px × 34px
- Fonte: Red Hat Display Bold, 6px
- Variantes: Red, Yellow, Blue, Green

```html
<span class="inline-flex items-center justify-center rounded-full 
             min-w-[16px] h-[16px] text-[10px] font-bold text-white px-1"
      style="background: var(--state-red)">
  {count > 99 ? '+99' : count}
</span>
```

**Cores dos Badges:**
| Variante | Color Token | Hex |
|----------|-------------|-----|
| Red    | `--state-red`    | `#E9786B` |
| Yellow | `--state-yellow` | `#E9C16C` |
| Blue   | `--state-blue`   | `#0094EE` |
| Green  | `--state-green`  | `#4BAF50` |

---

### 11.7 Favicon

**Tamanhos recomendados:** 16×16, 32×32, 48×48, 64×64, 128×128, 256×256px

| Variante | Fundo | Símbolo |
|----------|-------|---------|
| Light    | `#13283C` (blue-800) | Branco |
| Dark     | Branco | `#13283C` (blue-800) |

**Badge de Notificação no Favicon:**
- Cor: `#E9786B` (--error)
- Fonte: Red Hat Display Bold, 6px
- Fundo arredondado: 10×10px
- Border radius: 2px (consistência com sistema)

---

### 11.8 Typography Specimen (Componente)

```html
<div class="rounded-lg border bg-card p-6">
  <div class="flex items-center justify-between mb-2">
    <span class="text-sm text-muted-foreground font-medium">Headline Large</span>
    <span class="text-xs text-muted-foreground">32/40 · Regular · 0</span>
  </div>
  <p class="text-[32px] leading-[40px] font-normal" 
     style="font-family: 'Red Hat Display', sans-serif">
    The quick brown fox jumps over the lazy dog
  </p>
  <div class="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
    <span>Font: <strong>Red Hat Display</strong></span>
    <code class="px-2 py-1 bg-muted rounded text-xs">
      text-[32px] leading-[40px] font-normal
    </code>
  </div>
</div>
```

---

## 12. Hierarquia Visual

### Camadas de Elevação

```
Z-Level 0 → Background (surface-3: #0B0E12 / bg-background)
Z-Level 1 → Sidebar, Main (surface-2: #1D2024)
Z-Level 2 → Cards (surface-1: #32353A / bg-card)
Z-Level 3 → Dropdowns, Popovers (surface-4/5)
Z-Level 4 → Modals, Overlays
Z-Level 5 → Tooltips, Toasts
```

### Hierarquia de Contraste de Texto

```
Título da página  → H1 24px/600 oklch(14.5% 0 0)  [High contrast]
Subtítulo         → P  16px/400 muted-foreground    [Medium contrast]
Card title        → H3 18px/600 oklch(14.5% 0 0)  [High contrast]
Card body         → P  14px/400 muted-foreground    [Medium contrast]
Nav item active   → 14px/400 oklch(100%)            [Inverted]
Nav item inactive → 14px/400 rgb(113,113,130)       [Low contrast]
Version label     → 12px/400 muted-foreground       [Lowest contrast]
```

### Pontos Focais por Página

```
Home:        H1 "Bem-vindo" → 3 Feature Cards → How-to Card
Colors:      Toggle Light/Dark → Color grid by category
Typography:  Scale demonstration → Font specimens
Favicon:     Size variants → Badge demo → Specs table
Badges:      Small dots → Large count → Count variations
```

---

## 13. Padrões de Navegação

### Estrutura de Rotas

```
/ (Home)
├── /colors      → Paleta completa com toggle Light/Dark
├── /logos       → Variações de logo
├── /typography  → Escala tipográfica completa
├── /favicon     → Ícones do app em todos os tamanhos
├── /alerts      → 5 variantes de alertas
└── /badges      → Small e Large badges com variações
```

### Estados de Navegação

| Estado | Background | Texto | Ícone |
|--------|-----------|-------|-------|
| **Ativo**    | `rgb(3, 2, 19)` (primary) | branco | `text-primary-foreground` |
| **Inativo**  | `transparent` | `rgb(113,113,130)` (muted) | idem |
| **Hover**    | `bg-muted` | `text-foreground` | idem |
| **Focus**    | — (não definido) | — | — |

### Padrão de Indicação de Contexto

Cada página tem um cabeçalho com:
1. Título da seção (H2 ou H1)
2. Descrição curta (P, muted-foreground)
3. Controle de tema (Light/Dark toggle) — páginas de preview

---

## 14. Estados Visuais

### Estados de Componentes

| Componente | Default | Hover | Active | Disabled | Focus |
|-----------|---------|-------|--------|----------|-------|
| Nav Item  | muted text / transparent bg | bg-muted + foreground | bg-primary + white | — | ❌ não definido |
| Button    | bg-white / muted text | — | — | bg-btn-disabled | ❌ não definido |
| Card      | bg-card + border | — | — | — | — |
| Badge     | color sólido | — | — | — | — |
| Alert     | color pair | — | — | — | — |

### Paleta de Estados Semânticos

| Estado | Cor | Token |
|--------|-----|-------|
| Success | `#4BAF50` | `--state-green` |
| Info    | `#0094EE` | `--state-blue` |
| Warning | `#E9C16C` | `--state-yellow` |
| Error   | `#E9786B` | `--state-red` |
| Disabled | `rgba(215,215,215,0.49)` | `--bg-btn-disabled` |

---

## 15. Responsividade

### Comportamento Atual

| Breakpoint | Sidebar | Content Grid | Padding |
|------------|---------|--------------|---------|
| Mobile (< 768px) | Não tratado ⚠️ | 1 col | 68px (quebra) |
| Tablet (768px+)  | Visível fixo | 2–3 cols | 68px |
| Desktop (1024px+) | Visível fixo | 3–4 cols | 68px |
| Wide (1280px+) | Visível fixo | 4–5 cols | 68px |

### Padrão de Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Presente e configurado ✓ -->
```

---

## 16. Inconsistências Detectadas

### Críticas

| # | Problema | Localização | Impacto |
|---|---------|-------------|---------|
| 1 | Cursor dos botões é `default` em vez de `pointer` | Theme Toggle, Color Swatches | UX — usuário não percebe que é clicável |
| 2 | Sem estados de `focus` / `focus-visible` | Todos os componentes | Acessibilidade — navegação por teclado quebrada |
| 3 | Mobile: sidebar não tem comportamento responsivo | App shell | Usabilidade em telas < 768px |
| 4 | H1 com pesos inconsistentes: 600 (Design System) vs 500 (Bem-vindo) | Home page | Hierarquia visual inconsistente |

### Moderadas

| # | Problema | Localização |
|---|---------|-------------|
| 5 | H3 usa peso 600 na home e 500 na página de cores | Home vs Colors |
| 6 | Gap do header da sidebar é `gap-2` (8px) mas nav items usam `gap-3` (12px) | Sidebar |
| 7 | Dois tokens com mesmo propósito: `--text-primary: #4A4A4A` vs `--foreground` | Tokens |
| 8 | `--state-primary: #3A4857` duplica `--blue-400` na dark | Token overload |
| 9 | Sem tokens para `z-index` definidos | Sistema global |
| 10 | `--radius` = 10px mas cards usam 14px (rounded-xl) — sem token explícito | Border radius |

### Leves

| # | Problema |
|---|---------|
| 11 | Font-family do sistema (`ui-sans-serif`) misturado com `Red Hat Display` sem clara separação de responsabilidade |
| 12 | Color space misto: oklch + hex + rgb — dificulta manutenção |
| 13 | Swatches da página de cores sem hover state ou interatividade |
| 14 | Versão `v1.0.0` hardcoded no footer sem sistema de versionamento |

---

## 17. Sugestões UX/UI

### Alta Prioridade

**1. Sidebar Mobile**
Implementar drawer (off-canvas) para mobile:
```
Desktop: sidebar fixa 256px
Tablet: sidebar collapsível com ícones
Mobile: hamburger menu → overlay drawer
```

**2. Focus States**
Adicionar states de foco para acessibilidade:
```css
:focus-visible {
  outline: 2px solid var(--state-blue);
  outline-offset: 2px;
  border-radius: var(--radius);
}
```

**3. Cursor Pointer em Botões**
```css
button, [role="button"], a { cursor: pointer; }
```

### Média Prioridade

**4. Tokens Faltantes**

Adicionar ao sistema:
```css
/* Z-index scale */
--z-sidebar: 100;
--z-dropdown: 200;
--z-modal: 300;
--z-tooltip: 400;
--z-toast: 500;

/* Transition standard */
--transition-fast: 100ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);

/* Border radius completo */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 10px;  /* = --radius atual */
--radius-xl: 14px;
--radius-full: 9999px;
```

**5. Estado de Loading/Skeleton**
Nenhum estado de loading definido. Sugestão:
```css
--skeleton-base: oklch(92.2% 0 0);
--skeleton-highlight: oklch(96.1% 0 0);
```

**6. Consolidar Naming de Tokens**
Unificar em um único namespace:
```
ANTES:  --text-primary, --foreground, oklch(14.5% 0 0) (3 formas do mesmo)
DEPOIS: --color-text-primary (único token semântico)
```

**7. Adicionar Mais Páginas de Componentes**

Componentes a documentar:
- Forms (Input, Select, Checkbox, Radio, Switch)
- Buttons (Primary, Secondary, Ghost, Destructive)
- Tables
- Modals / Dialogs
- Tabs
- Tooltips
- Toast / Notifications
- Breadcrumbs

### Baixa Prioridade

**8. Melhorar Page Titles**
Todas as páginas têm o mesmo título `"Design System Layout"`.  
Cada rota deveria ter title único: `"Colors — Design System"`, etc.

**9. Search / Filter na Página de Cores**
Com 30+ tokens de cor, um filtro por categoria melhoraria a UX.

**10. Copiar Token com Clique**
Na página de cores, clicar no swatch deveria copiar o hex/token para clipboard.

**11. Dark Mode Persistência**
O toggle Light/Dark parece ser por página, não global. Centralizar em Context/localStorage.

---

## Arquitetura Recomendada de Tokens

```
tokens/
├── primitives/
│   ├── colors.css       → hex/rgb brutos (blue-800: #13283C)
│   ├── typography.css   → font-size, line-height, weight
│   ├── spacing.css      → escala 4px
│   └── radius.css       → escala de radii
├── semantic/
│   ├── colors.css       → text-*, surface-*, state-*, alert-*
│   ├── components.css   → tokens por componente
│   └── themes/
│       ├── light.css    → override para light
│       └── dark.css     → override para dark
└── index.css            → importa tudo
```

---

## Mapeamento de Componentes Reutilizáveis

| Componente | Prioridade | Dependências |
|-----------|-----------|-------------|
| SidebarNav | Core | tokens, icons, router |
| NavItem | Core | tokens |
| ThemeToggle | Core | tokens, context |
| Card | Core | tokens |
| Badge (Small) | High | tokens |
| Badge (Large) | High | tokens |
| Alert | High | tokens, icons |
| ColorSwatch | Medium | tokens |
| TypographySpecimen | Medium | tokens, fonts |
| FaviconPreview | Low | tokens |

---

*Documento gerado por análise automatizada + inspeção visual em 2026-05-20*
