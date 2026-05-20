# Inventário de Componentes

> Status: ✅ Documentado | 🔶 Parcial | ❌ Ausente

## Componentes Existentes (Confirmados no Site)

| Componente | Status | Página | Variantes |
|-----------|--------|--------|-----------|
| SidebarNav | ✅ | Home/todas | — |
| NavItem | ✅ | Home/todas | active, inactive, hover |
| ThemeToggle | ✅ | Colors, Typography, Favicon, Badges | light, dark |
| Card | ✅ | Home | sm (p-6), lg (p-8) |
| ColorSwatch | ✅ | /colors | — |
| Badge (Small) | ✅ | /badges | red, yellow, blue, green |
| Badge (Large) | ✅ | /badges | red, yellow, blue, green |
| Alert | 🔶 | /alerts | blue, grey, green, red, yellow |
| TypographySpecimen | ✅ | /typography | headline, title, body, label |
| FaviconPreview | ✅ | /favicon | 16, 32, 48, 64px |
| FaviconWithBadge | ✅ | /favicon | count 1–9, +9 |

## Componentes Ausentes (A Criar)

| Componente | Prioridade | Tokens Necessários |
|-----------|-----------|-------------------|
| Button | 🔴 Alta | color-interactive-*, radius-button, transition |
| Input | 🔴 Alta | color-bg-input, border, radius-input |
| Checkbox | 🟡 Média | state-*, border |
| Radio | 🟡 Média | state-*, border |
| Switch | 🟡 Média | color-bg-switch, state-* |
| Select / Dropdown | 🟡 Média | color-bg-card, shadow-dropdown, z-dropdown |
| Modal / Dialog | 🟡 Média | z-modal, shadow-modal, color-bg-card |
| Tooltip | 🟡 Média | color-tooltip-*, z-tooltip, radius-sm |
| Toast / Notification | 🟡 Média | color-alert-*, z-toast |
| Table | 🟡 Média | color-border, color-text-* |
| Tabs | 🟡 Média | color-interactive-*, transition |
| Breadcrumbs | 🟢 Baixa | color-text-link, color-text-secondary |
| Avatar | 🟢 Baixa | radius-pill, color-bg-muted |
| Skeleton / Loading | 🟢 Baixa | color-bg-muted, animation |
| Pagination | 🟢 Baixa | color-interactive-*, radius-button |

---

## Especificações Detalhadas

### NavItem

```
States:
  active:   bg rgb(3,2,19)  | text white   | icon white
  inactive: bg transparent  | text #717182 | icon #717182
  hover:    bg bg-muted      | text #0B0E12 | icon #0B0E12

Dimensions:
  height:  36px
  padding: 8px 12px (v/h)
  radius:  10px
  gap:     12px (icon ↔ label)
  
Font:
  size:   14px
  weight: 400
  
Icon:
  size: 20px (size-5)
```

### Card

```
Variants:
  Small: padding 24px, radius 14px
  Large: padding 32px, radius 14px

Shared:
  bg:     white (light) / oklch(14.5% 0 0) (dark)
  border: 1px solid rgba(0,0,0,0.1)
  
Icon Container (no card small):
  padding: 8px
  bg:      bg-primary/10 (10% opacity)
  radius:  10px
```

### ThemeToggle

```
Container:
  width:   192px
  height:  46px
  padding: 4px
  bg:      #F5F5F5
  border:  1px solid #E9EFF2
  radius:  10px
  gap:     8px

Button Active:
  width:  88px
  height: 36px
  bg:     white
  color:  #4A4A4A
  weight: 500
  radius: 8px

Button Inactive:
  width:  86px
  height: 36px
  bg:     transparent
  color:  #666666
  weight: 500
```

### Badge (Small — Status Dot)

```
Size:    6×6px (w-1.5 h-1.5)
Shape:   circle (rounded-full)
Colors:
  Red:    #E9786B
  Yellow: #E9C16C
  Blue:   #0094EE
  Green:  #4BAF50
```

### Badge (Large — Count)

```
Min size: 16×16px
Max size: 34×34px
Font:     Red Hat Display Bold, 10px
Color:    white text on colored bg
Overflow: 99+ shows "+99"
Shape:    circle / pill (rounded-full)
Colors:   same as Small
```

### Alert

```
Structure:
  [Icon] [Content: Title + Message]
  
Container:
  padding: 16px
  radius:  10px (rounded-lg)
  gap:     12px (icon ↔ content)

Icon:
  size: 20px
  
Title:
  size:   14px
  weight: 600
  
Message:
  size:   14px
  weight: 400

Variants (light mode):
  Blue:   text #304A64  | bg #E6F4FD
  Grey:   text #4A4A4A  | bg #F0F0F0
  Green:  text #2D7A31  | bg #D4EDDA
  Red:    text #C0392B  | bg #F8D7DA
  Yellow: text #856404  | bg #FFF3CD

Variants (dark mode):
  Blue:   text #9DCBFC  | bg #475360
  Grey:   text #FFFFFF  | bg #5B5D61
  Green:  text #9ED49D  | bg #48544D
  Red:    text #FFB4AB  | bg #5B4E50
  Yellow: text #E9C16C  | bg #575144
```

### ColorSwatch

```
Container:
  padding: 8px
  radius:  10px (rounded-lg)
  border:  1px solid rgba(0,0,0,0.1)
  shadow:  shadow-sm

Color Block:
  width:  72px (w-18)
  height: 72px (h-18)
  radius: 8px (rounded-md)

Label (token name):
  size:   12px
  color:  text-muted-foreground
  
Label (hex value):
  size:   14px
  weight: 600
  case:   UPPERCASE
  font:   monospace
  
Label (css var):
  size:  12px
  color: text-muted-foreground
  font:  monospace
```
