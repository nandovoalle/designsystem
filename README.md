# Design System v1.0

> Baseado em análise do site: https://twist-close-27620285.figma.site/  
> Stack: React + Tailwind CSS + Lucide Icons + Red Hat Display

---

## Estrutura de Arquivos

```
designsystem_v1/
│
├── README.md                        ← Este arquivo
├── DESIGN-SYSTEM.md                 ← Documentação completa (principal)
│
├── tokens/
│   ├── index.css                    ← Entry point (importar este)
│   ├── primitives.css               ← Valores brutos (hex, px, ms)
│   ├── semantic.css                 ← Tokens por função (light + dark)
│   └── tokens.json                  ← Tokens em formato W3C Design Tokens
│
├── components/
│   └── component-inventory.md      ← Inventário + specs de componentes
│
├── guidelines/
│   ├── typography-guide.md         ← Guia de tipografia
│   ├── color-guide.md              ← Guia de cores + WCAG
│   └── layout-guide.md             ← Grid, breakpoints, app shell
│
└── screenshots/                    ← Screenshots capturados
    ├── desktop-full.png            ← Home — desktop 1440px
    ├── page-colors.png             ← Página /colors
    ├── page-typography.png         ← Página /typography
    ├── page-favicon.png            ← Página /favicon
    └── page-badges.png             ← Página /badges
```

---

## Quick Reference

### Fontes
```
Headline/Title: "Red Hat Display" (400, 500, 600, 700)
Body/UI:        ui-sans-serif (system font)
Code:           ui-monospace (system mono)
```

### Cores Principais
```
Brand Dark:    #13283C   (--color-brand-900)
Brand Mid:     #304A64   (--color-brand-700)
Text Primary:  #4A4A4A   (light) / #FFFFFF   (dark)
Text Muted:    #666666   (light) / #C1C2C4   (dark)
Error/Badge:   #E9786B   (--color-error)
```

### Radii
```
Badge:    4px   Tags, pontos
Button:   8px   Botões, inputs
Nav:      10px  Nav items, toggles
Card:     14px  Cards e containers
```

### Spacing padrão
```
Gap grid:  16px  (gap-4)
Card pad:  24px  (p-6)
Content:   68px  (p-[68px])
```

---

## Como Usar os Tokens

```css
/* No seu CSS */
@import 'tokens/index.css';

.meu-componente {
  color: var(--color-text-primary);
  background: var(--color-bg-card);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  transition: all var(--transition-interactive);
}
```

---

## Páginas do Site Original

| URL | Conteúdo |
|-----|---------|
| `/` | Home — visão geral do DS |
| `/colors` | Paleta completa com toggle light/dark |
| `/logos` | Variações de logo |
| `/typography` | Escala tipográfica Red Hat Display |
| `/favicon` | Ícones em todos os tamanhos |
| `/alerts` | 5 variantes de alertas |
| `/badges` | Small e Large badges |
