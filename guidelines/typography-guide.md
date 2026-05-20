# Typography Guidelines

## Fonte Principal: Red Hat Display

**Importar via Google Fonts:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;600;700&display=swap');
```

---

## Escala Tipográfica

### Headline — Red Hat Display
*Para títulos principais, seções de destaque, hero sections*

```
Headline Large   32px / 40px / Regular (400) / tracking: 0
Headline Medium  28px / 36px / Regular (400) / tracking: 0
Headline Small   24px / 32px / Regular (400) / tracking: 0
```

### Title — Red Hat Display
*Para títulos de seções, cards, subseções*

```
Title Large   22px / 28px / Medium (500)   / tracking: 0
Title Medium  20px / 30px / Medium (500)   / tracking: 0
Title Small   18px / 27px / SemiBold (600) / tracking: 0
```

### Body — System Sans-Serif
*Para texto corrido, descrições, parágrafos*

```
Body Large   18px / 27px / Regular (400)
Body Medium  16px / 24px / Regular (400)  ← padrão
Body Small   14px / 20px / Regular (400)
```

### Label / Caption — System Sans-Serif
*Para elementos UI, metadados, footnotes*

```
Label    12px / 16px / Regular (400)
Caption  11px / 16px / Regular (400)
```

---

## Regras de Uso

### Quando usar Red Hat Display
- H1, H2, H3 (headline, title)
- Hero sections
- Elementos de destaque visual

### Quando usar System Sans
- Textos de interface (botões, labels, nav)
- Corpo de texto (parágrafos, descrições)
- Metadados

### Quando usar Monospace
- Nomes de tokens CSS (`--blue-800`)
- Valores hex (`#13283C`)
- Classes de código (`text-[32px]`)
- Code snippets

---

## Pesos e Hierarquia

```
700 Bold     → Não usar em texto corrido. Apenas badges, ênfase máxima
600 SemiBold → H3, título de card, destaque em texto
500 Medium   → H2, botões, labels interativos, nav active
400 Regular  → H1 (headlines), body, caption, tudo mais
```

### Regra de Contraste

- Texto sobre fundo claro: mínimo `#9E9E9E` para legibilidade aceitável
- Texto primário `#4A4A4A` sobre branco: ratio 9.7:1 (AAA)
- Texto muted `#666666` sobre branco: ratio 5.9:1 (AA)
- Texto disabled `#9E9E9E` sobre branco: ratio 2.8:1 (falha AA ⚠️)

---

## Classes Tailwind Mapeadas

```html
<!-- Headline Large -->
<h1 class="font-['Red_Hat_Display'] text-[32px] leading-[40px] font-normal">

<!-- Headline Medium -->
<h2 class="font-['Red_Hat_Display'] text-[28px] leading-[36px] font-normal">

<!-- Headline Small -->
<h3 class="font-['Red_Hat_Display'] text-[24px] leading-[32px] font-normal">

<!-- Title Large -->
<h2 class="font-['Red_Hat_Display'] text-[22px] leading-7 font-medium">

<!-- Title Medium -->
<h2 class="text-xl leading-[30px] font-medium">

<!-- Title Small -->
<h3 class="text-lg leading-[27px] font-semibold">

<!-- Body Medium (padrão) -->
<p class="text-base leading-6">

<!-- Body Small -->
<p class="text-sm leading-5">

<!-- Label -->
<span class="text-xs leading-4">

<!-- Caption -->
<span class="text-[11px] leading-4">

<!-- Code/Mono -->
<code class="font-mono text-xs px-2 py-1 bg-muted rounded">
```
