# Layout System Guidelines

## App Shell Pattern

O sistema usa um shell de aplicação com sidebar fixa + área de conteúdo scrollável.

```
┌─────────────────────────────────────────────────────────────┐
│  h-screen w-screen overflow-hidden                           │
│                                                              │
│  ┌────────────────┬────────────────────────────────────┐    │
│  │    SIDEBAR     │         MAIN CONTENT               │    │
│  │    w-64        │         flex-1                     │    │
│  │    256px       │         overflow-y-auto            │    │
│  │    border-r    │                                    │    │
│  │                │  ┌─────────────────────────────┐   │    │
│  │  [Logo/Brand]  │  │  p-[68px]                   │   │    │
│  │                │  │  ┌───────────────────────┐  │   │    │
│  │  [Nav Links]   │  │  │  container            │  │   │    │
│  │                │  │  │  max-w-6xl mx-auto     │  │   │    │
│  │  [Footer]      │  │  │                       │  │   │    │
│  │                │  │  │  [Page Content]       │  │   │    │
│  │                │  │  └───────────────────────┘  │   │    │
│  │                │  └─────────────────────────────┘   │    │
│  └────────────────┴────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## Medidas Fixas

| Elemento | Valor |
|---------|-------|
| Sidebar width | 256px (`w-64`) |
| Content padding | 68px (`p-[68px]`) |
| Container max-width | 1152px (`max-w-6xl`) |
| Nav item height | 36px |

---

## Grid System

Usa CSS Grid via Tailwind. Padrão responsivo de 1 → 5 colunas.

### Grid de Cards (Home)
```html
<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  <!-- Cards -->
</div>
```

### Grid de Swatches (Colors)
```html
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
  <!-- Swatches -->
</div>
```

### Grid de Badges (Count Variations)
```html
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  <!-- Count badges -->
</div>
```

---

## Breakpoints (Tailwind Defaults)

| Prefixo | Min-width | Layout |
|---------|-----------|--------|
| *(mobile)* | 0 | 1 coluna, sidebar oculta ⚠️ |
| `sm:` | 640px | 2 colunas |
| `md:` | 768px | 2–3 colunas, sidebar visível |
| `lg:` | 1024px | 3–4 colunas |
| `xl:` | 1280px | 4–5 colunas |
| `2xl:` | 1536px | igual xl |

> ⚠️ **Atenção:** Mobile não tem implementação de sidebar. Precisa de drawer.

---

## Sidebar — Estrutura Interna

```html
<aside class="w-64 border-r bg-background flex flex-col">
  <!-- Header: logo + brand name -->
  <div class="p-6 border-b flex items-center gap-2">
    <PaletteIcon class="size-6 text-primary" />
    <span class="font-semibold text-primary">Design System</span>
  </div>

  <!-- Nav: scrollável -->
  <nav class="flex-1 overflow-y-auto p-4 space-y-1">
    <!-- Nav items -->
  </nav>

  <!-- Footer: versão -->
  <div class="border-t p-4">
    <p class="text-xs text-muted-foreground">v1.0.0 - Design System</p>
  </div>
</aside>
```

---

## Página Interna — Estrutura

```html
<main class="flex-1 overflow-y-auto">
  <div class="p-[68px]">
    <div class="container max-w-6xl mx-auto">
      
      <!-- Page Header -->
      <div class="flex items-start justify-between mb-8">
        <div>
          <h1 class="text-2xl font-semibold mb-2">Título da Página</h1>
          <p class="text-muted-foreground">Descrição breve.</p>
        </div>
        <ThemeToggle />
      </div>

      <!-- Page Sections -->
      <div class="space-y-12">
        <section>
          <h2 class="text-xl font-medium mb-2">Seção</h2>
          <p class="text-sm text-muted-foreground mb-6">Descrição</p>
          <!-- Conteúdo da seção -->
        </section>
      </div>

    </div>
  </div>
</main>
```

---

## Espaçamento Interno de Seções

```
Título de página    → mb-8  (32px)
Título de seção     → mb-2  (8px)
Desc. de seção      → mb-6  (24px) após desc.
Entre seções        → space-y-12 (48px)
```

---

## Responsividade — Implementação Sugerida

### Mobile (< 768px)
```html
<!-- Hamburger trigger no header mobile -->
<header class="md:hidden flex items-center p-4 border-b">
  <button onclick="toggleSidebar()">☰</button>
  <span class="ml-3 font-semibold">Design System</span>
</header>

<!-- Sidebar como overlay no mobile -->
<aside class="
  fixed inset-y-0 left-0 z-[var(--z-sidebar)]
  w-64 -translate-x-full md:translate-x-0
  transition-transform duration-300
  ...
" id="sidebar">
```

### Tablet (768px–1024px)
Sidebar permanece visível mas pode colapsar para ícones:
```html
<aside class="w-16 lg:w-64">
  <!-- Mostrar só ícones quando collapsed -->
</aside>
```
