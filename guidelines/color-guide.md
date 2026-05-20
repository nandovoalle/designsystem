# Color System Guidelines

## Estrutura do Sistema de Cores

```
Primitives  →  Semantic  →  Component
(hex brutos)   (por função)  (por contexto)
```

---

## Regras de Uso

### 1. Nunca usar primitivos diretamente nos componentes
```css
/* ❌ Errado */
color: #4A4A4A;

/* ✅ Correto */
color: var(--color-text-primary);
```

### 2. Preferir tokens semânticos sobre classes utilitárias de cor
```html
<!-- ❌ Evitar (quebra no dark mode) -->
<p class="text-[#4A4A4A]">

<!-- ✅ Preferir -->
<p class="text-foreground">
<!-- ou -->
<p style="color: var(--color-text-primary)">
```

### 3. Alert colors sempre em pares (text + bg)
```html
<!-- Sempre usar os dois tokens juntos -->
<div style="
  color: var(--color-alert-blue-text);
  background: var(--color-alert-blue-bg);
">
```

---

## Guia por Contexto

### Texto
| Contexto | Token | Light | Dark |
|---------|-------|-------|------|
| Título principal | `--color-text-heading` | `#0B0E12` | `#FFFFFF` |
| Texto corrido | `--color-text-primary` | `#4A4A4A` | `#FFFFFF` |
| Texto de suporte | `--color-text-secondary` | `#666666` | `#C1C2C4` |
| Placeholder, metadado | `--color-text-disabled` | `#9E9E9E` | `#808285` |
| Sobre fundo escuro | `--color-text-inverse` | `#FFFFFF` | `#4A4A4A` |
| Link / ação | `--color-text-link` | `#304A64` | `#B2C5FF` |

### Superfícies
| Contexto | Token |
|---------|-------|
| Fundo da página | `--color-bg-page` |
| Sidebar | `--color-bg-sidebar` |
| Cards | `--color-bg-card` |
| Hover state suave | `--color-bg-muted` |
| Input fields | `--color-bg-input` |

### Bordas
| Contexto | Token |
|---------|-------|
| Borda padrão | `--color-border` |
| Borda de ênfase | `--color-border-strong` |
| Linha divisória | `--color-divider` |

### Semântico / Estado
| Estado | Token | Usar para |
|--------|-------|-----------|
| Sucesso | `--color-success` | Confirmação, OK |
| Info | `--color-info` | Informação, links ativos |
| Aviso | `--color-warning` | Atenção, cuidado |
| Erro | `--color-error` | Falha, destructive action |
| Desabilitado | `--color-bg-btn-disabled` | UI inativa |

---

## Contrastes WCAG (Light Mode)

| Combinação | Ratio | WCAG |
|-----------|-------|------|
| `#4A4A4A` sobre branco | 9.7:1 | ✅ AAA |
| `#666666` sobre branco | 5.9:1 | ✅ AA |
| `#304A64` sobre branco | 8.4:1 | ✅ AAA |
| `#0094EE` sobre branco | 3.1:1 | ⚠️ AA Large only |
| `#9E9E9E` sobre branco | 2.8:1 | ❌ Falha AA |
| `#E9786B` sobre branco | 3.2:1 | ⚠️ AA Large only |
| `#FFFFFF` sobre `#13283C` | 13.4:1 | ✅ AAA |
| `#FFFFFF` sobre `#304A64` | 8.4:1 | ✅ AAA |

> **Nota:** Texto disabled (`--color-text-disabled: #9E9E9E`) não atinge AA.  
> Considerar aumentar para `#767676` ou usar sinais visuais adicionais além da cor.

---

## Theme Toggle — Implementação

```javascript
// Context / localStorage pattern
const [theme, setTheme] = useState(() => 
  localStorage.getItem('ds-theme') || 'light'
);

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('ds-theme', theme);
}, [theme]);
```

```css
/* Aplicar nos tokens */
[data-theme="dark"] { /* dark overrides */ }
[data-theme="light"] { /* light values */ }
```

---

## Cores de Badges — Significado Semântico

| Cor | Token | Uso |
|-----|-------|-----|
| Red | `--color-badge-red` | Urgente, erro, notificação crítica |
| Yellow | `--color-badge-yellow` | Atenção, pendente |
| Blue | `--color-badge-blue` | Informativo, novo |
| Green | `--color-badge-green` | Sucesso, ativo, online |
