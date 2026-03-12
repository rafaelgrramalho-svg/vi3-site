# SCAN: Linear.app — Design Reference Analysis for Instituto VI3

> Agent: @ux-design-expert (Uma)
> Data: 2026-03-12
> Objetivo: Extrair padroes de design do linear.app como referencia para o site institucional VI3

---

## 1. Color System

### Brand Palette

| Token | Hex | Uso |
|-------|-----|-----|
| Magic Blue (brand primary) | `#5E6AD2` | Logo, accents, links, CTAs seletivos |
| Indigo Light | `#8A91E5` | Hover states, gradientes |
| Woodsmoke (dark bg) | `#0F0F10` | Background principal (dark mode) |
| Woodsmoke elevated | `#151516` | Cards, panels, elevated surfaces |
| Oslo Gray | `#8A8F98` | Texto secundario, metadata |
| Black Haze | `#F7F8F8` | Background claro, light mode |
| White | `#FFFFFF` | Texto principal em dark, headings |
| Near-white | `#EEEFF1` | Texto em dark mode, body copy |

### Color Philosophy

Linear usa uma abordagem **monochrome-first** com cor de marca usada de forma extremamente contida. Na versao 2024-2025 do site, cortaram drasticamente o uso de cor — saindo de um blue monocromatico para preto/branco com pouquissimos acentos coloridos.

**3-Variable Theme System:** O sistema de temas e gerado a partir de apenas 3 variaveis:
- **Base color** (background)
- **Accent color** (brand/interactive)
- **Contrast** (text intensity)

Essas 3 variaveis geram automaticamente bordas, surfaces elevadas e estados intermediarios usando o color space **LCH** (nao HSL).

### Dark Mode Specifics

```css
/* Aproximacao do sistema Linear */
--bg-primary: #0F0F10;        /* Woodsmoke — quase preto, nao preto puro */
--bg-elevated: #151516;        /* Sutil lift para cards/panels */
--bg-overlay: rgba(15,15,16,0.8); /* Overlays com transparencia */
--text-primary: #EEEFF1;      /* Quase branco, nao branco puro */
--text-secondary: #8A8F98;    /* Oslo Gray — metadata, labels */
--accent: #5E6AD2;             /* Magic Blue — sparingly */
--border: rgba(255,255,255,0.08); /* Bordas sutilissimas */
```

**Ponto-chave:** Linear evita `#000000` puro e `#FFFFFF` puro. Usa off-black e off-white para reduzir fadiga visual.

---

## 2. Typography

### Font Stack

| Nivel | Font | Peso | Uso |
|-------|------|------|-----|
| Headings (display) | **Inter Display** | 700-800 | Titulos hero, h1-h2 |
| Body | **Inter** | 400-500 | Paragrafos, labels, UI |
| Monospace (code) | **JetBrains Mono** / system mono | 400 | Code blocks, dados tecnicos |
| Fallback | SF Pro Display, system-ui, sans-serif | — | Stack de fallback |

### Type Scale (website, nao app)

```css
/* Hero heading */
.hero-title {
  font-family: 'Inter Display', sans-serif;
  font-size: 62px;       /* ~3.875rem */
  font-weight: 800;
  line-height: 72px;     /* 1.16 ratio */
  letter-spacing: -0.02em;
}

/* Section heading */
.section-title {
  font-family: 'Inter Display', sans-serif;
  font-size: 40px;       /* ~2.5rem */
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.015em;
}

/* Subheading / overline */
.overline {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.08em; /* Tracking largo para labels */
  text-transform: uppercase;
}

/* Body */
.body-text {
  font-family: 'Inter', sans-serif;
  font-size: 20px;       /* Generoso para landing pages */
  font-weight: 400;
  line-height: 31px;     /* 1.55 ratio */
}

/* Small / metadata */
.small-text {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
```

### Hierarchy Pattern

Linear cria hierarquia visual via **peso + tamanho + cor**, nao via multiplas fontes. O uso de Inter Display vs Inter regular e sutil — ambas da mesma familia, diferindo em optical sizing para tamanhos grandes.

**Negative letter-spacing** em headings (-0.02em) cria a sensacao de "tight, premium" que e marca registrada do estilo Linear.

---

## 3. Layout Patterns

### Spacing System

Linear usa uma escala baseada em **8px**:

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-1` | `4px` | Micro gaps (icon-to-text) |
| `--space-2` | `8px` | Inline spacing, padding interno |
| `--space-3` | `16px` | Gap entre elementos relacionados |
| `--space-4` | `24px` | Card padding, group spacing |
| `--space-5` | `32px` | Section internal spacing |
| `--space-6` | `48px` | Section gaps |
| `--space-7` | `64px` | Major section dividers |
| `--space-8` | `96px` | Hero padding, top/bottom sections |
| `--space-9` | `128px` | Page-level vertical rhythm |

### Grid

- **Max-width:** ~1200px (container centrado)
- **Columns:** Nao usa grid rigido tradicional. Usa modular layout — cada secao define sua propria estrutura
- **Pattern dominante:** Seção fullwidth com conteudo em container centrado
- **Feature sections:** Frequentemente 2 colunas (texto + visual), alternando lados

### Section Structure (Homepage Pattern)

```
1. [Nav] — Sticky, transparent → glass on scroll
2. [Hero] — Full viewport, headline + subtext + CTA + product visual
3. [Logos] — Client logo bar (grayscale, low opacity)
4. [Features Grid] — 2-3 colunas, cards com icones
5. [Feature Deep Dive] — Alternating text+visual, fullwidth
6. [Integrations] — Logo grid ou interactive showcase
7. [Social Proof] — Quotes, testimonials
8. [CTA Final] — Headline + button, gradient bg
9. [Footer] — Multi-column links, minimal
```

---

## 4. Motion / Animation

### Animation Principles

Linear segue uma filosofia de **micro-motion**: animacoes que sao sentidas mas nao percebidas conscientemente.

### Techniques

| Tipo | Propriedade | Valores Tipicos |
|------|------------|-----------------|
| Hover (buttons/links) | `transition` | `all 150ms ease` |
| Element enter | `opacity + transform` | `0→1`, `translateY(20px)→0`, duration 400-600ms |
| Scroll reveal | `IntersectionObserver` + CSS | Fade-up com stagger 100ms entre itens |
| Hero animation | Framer Motion / GSAP | Gradient mesh animado, particulas |
| Page transition | `opacity` | 200-300ms fade |
| Hover glow | `box-shadow` | Radial glow sutil no hover |

### Easing

```css
/* Linear usa easings customizados, nao linear nem ease padrao */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### Scroll-Driven Patterns

- Elementos entram com **fade-up** conforme scroll (translateY + opacity)
- **Stagger** entre itens de grid: 100-150ms delay incremental
- Hero product image tem **parallax** sutil (velocidade diferente do scroll)
- Background gradients fazem **shift** com scroll position

### Hover States

```css
/* Button hover — sutil elevation */
.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(94, 106, 210, 0.3);
  transition: all 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* Card hover — border glow */
.card:hover {
  border-color: rgba(94, 106, 210, 0.4);
  box-shadow: 0 0 20px rgba(94, 106, 210, 0.1);
}
```

---

## 5. Components

### Navigation

```css
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(15, 15, 16, 0.7);    /* Semi-transparent */
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  height: 56px;
  padding: 0 24px;
}
```

**Characteristics:**
- Sticky com glass effect (backdrop-filter blur)
- Borda inferior quase invisivel (6% opacidade)
- Logo a esquerda, links centrados ou a direita
- CTA button no canto direito
- Saturate boost (180%) no backdrop para manter vibrance

### Buttons

| Variante | Background | Border | Text | Uso |
|----------|-----------|--------|------|-----|
| Primary (solid) | `#5E6AD2` | none | `#FFFFFF` | CTA principal |
| Secondary (ghost) | `transparent` | `1px solid rgba(255,255,255,0.12)` | `#EEEFF1` | Acoes secundarias |
| Tertiary (text) | `transparent` | none | `#8A8F98` → `#EEEFF1` on hover | Links, nav |

```css
.btn-primary {
  background: #5E6AD2;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 150ms ease;
}

.btn-primary:hover {
  background: #6B76DB;
  box-shadow: 0 0 20px rgba(94, 106, 210, 0.4);
}

.btn-ghost {
  background: transparent;
  color: #EEEFF1;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  transition: all 150ms ease;
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.2);
}
```

### Hero Section

Linear's hero e composto por:
1. **Overline** — Label pequeno, uppercase, tracking largo (ex: "Issue Tracking")
2. **Headline** — 62px, weight 800, negative tracking, ate 2 linhas
3. **Subtext** — 20px, weight 400, cor secondary (#8A8F98), max 60ch
4. **CTA Group** — Primary + Ghost button lado a lado
5. **Product Visual** — Screenshot/mockup com sombra profunda e gradient overlay

```css
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 128px 24px 96px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  /* Gradient glow orb atras do conteudo */
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(94,106,210,0.15) 0%, transparent 70%);
  filter: blur(80px);
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
}
```

### Cards

```css
.feature-card {
  background: rgba(255, 255, 255, 0.03);   /* Quase invisivel */
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 32px;
  transition: all 200ms ease;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}
```

**Card anatomy:**
- Icon (24px, cor accent ou branco)
- Title (18px, weight 600)
- Description (14-16px, color secondary)
- Sem sombras pesadas — tudo via borda e background opacity

### Footer

- Background igual ao body (sem corte visual)
- Grid de links 4-5 colunas
- Labels de coluna em overline style (12px, uppercase, tracking)
- Links em texto secondary, hover → primary
- Logo + copyright no bottom

---

## 6. Dark Mode Techniques

### Gradient Mesh / Orbs

Linear usa glows radiais suaves como elemento decorativo:

```css
/* Glow orb — posicionado absolutamente */
.glow-orb {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(94, 106, 210, 0.15) 0%,
    rgba(94, 106, 210, 0.05) 40%,
    transparent 70%
  );
  filter: blur(60px);
  pointer-events: none;
}
```

### Noise Texture

Linear aplica uma textura de noise sutil sobre backgrounds para quebrar banding de gradientes:

```css
/* Noise overlay via SVG filter inline */
.noise-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.03;
  mix-blend-mode: overlay;
  pointer-events: none;
}
```

### Glass / Frosted Effects

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
}
```

### Gradient Borders

```css
/* Gradient border via background-clip trick */
.gradient-border {
  position: relative;
  background: #0F0F10;
  border-radius: 12px;
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.1) 0%,
    rgba(255,255,255,0.02) 50%,
    rgba(255,255,255,0.05) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
```

### Layering Strategy

A profundidade visual em dark mode e criada por camadas:

```
Layer 0: #0F0F10 (background base)
Layer 1: rgba(255,255,255,0.03) (cards, panels)
Layer 2: rgba(255,255,255,0.05) (hover states, dropdowns)
Layer 3: rgba(255,255,255,0.08) (active states, selections)
Layer 4: rgba(255,255,255,0.12) (borders, dividers)
```

Cada camada e um incremento de ~2-3% de white overlay, criando hierarquia sem usar cores novas.

---

## 7. What Sets Linear Apart

### Design DNA Summary

1. **Restraint over expressiveness** — Cor usada como bisturi, nao como balde
2. **Depth via subtlety** — Layers de 2-3% opacity, nao sombras pesadas
3. **Motion as polish** — Animacoes sao sentidas, nao vistas
4. **Typography carries weight** — Hierarquia via tipo, nao via decoracao
5. **Engineering aesthetic** — Dark mode nativo, monospace hints, density alta
6. **Monochrome first, accent second** — 95% grayscale, 5% cor

---

## 8. Recommendations for VI3

### O que VI3 ja tem alinhado com Linear

| Aspecto | VI3 Atual | Linear | Alinhamento |
|---------|-----------|--------|-------------|
| Dark background | Navy (#0A1628-ish) | Near-black (#0F0F10) | Proximo |
| Accent color | Cyan (#00D4FF) | Indigo (#5E6AD2) | Diferente cor, mesmo principio |
| Typography duo | DM Serif + DM Sans | Inter Display + Inter | Mesmo padrao (display + body) |
| Monospace | Space Mono | JetBrains Mono | Mesmo conceito |
| Glow orbs | Sim (existente) | Sim | Alinhado |
| Grid lines | Sim (existente) | Nao usa | Unico do VI3 |

### O que VI3 DEVE adotar do Linear

#### A. Contenção de cor (CRITICO)
- **Regra dos 5%:** Usar cyan accent em no maximo 5% da superficie total
- Texto principal em off-white (`#E8ECF4`), nao branco puro
- Texto secundario em gray desaturado (`#6B7B8D`), nao cyan
- Remover qualquer uso de cyan em texto corrido — usar APENAS para CTAs, links interativos e acentos seletivos

#### B. Border system (IMPORTANTE)
- Adotar bordas com `rgba(255,255,255,0.06-0.12)` em vez de bordas solidas
- Implementar gradient borders com a tecnica mask-composite para cards destaque
- A borda da nav deve ser quase invisivel — 6% max

#### C. Glass navigation (IMPORTANTE)
```css
/* Recomendacao para nav VI3 */
.vi3-nav {
  background: rgba(10, 22, 40, 0.75);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(0, 212, 255, 0.08);
}
```

#### D. Layering system (IMPORTANTE)
Implementar um sistema de profundidade via opacity layers:
```css
:root {
  --vi3-surface-0: #0A1628;                    /* Base */
  --vi3-surface-1: rgba(255,255,255,0.03);     /* Cards */
  --vi3-surface-2: rgba(255,255,255,0.05);     /* Hover */
  --vi3-surface-3: rgba(255,255,255,0.08);     /* Active */
  --vi3-border-subtle: rgba(255,255,255,0.06); /* Bordas */
  --vi3-border-default: rgba(255,255,255,0.10);
}
```

#### E. Typography tightening (RECOMENDADO)
- Adicionar `letter-spacing: -0.02em` em headings DM Serif Display
- Body text a 20px para landing pages (mais generoso que o atual)
- Adotar overline style para labels de secao: 12px, uppercase, tracking 0.08em, weight 600

#### F. Motion spec (RECOMENDADO)
```css
:root {
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 150ms;    /* Hovers */
  --duration-normal: 300ms;  /* Transitions */
  --duration-slow: 600ms;    /* Enter animations */
}
```
- Scroll reveal: fade-up (20px translate) + opacity, stagger 100ms
- Hover: translateY(-1px) + glow sutil
- No parallax pesado — apenas sutil em hero

#### G. Noise texture (RECOMENDADO)
Adicionar noise overlay ao background do site inteiro:
```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* SVG feTurbulence */
  opacity: 0.025;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 9999;
}
```
Isso remove banding dos gradientes e adiciona "textura real" ao dark mode.

### O que VI3 deve MANTER diferente (identidade propria)

| Aspecto | Linear | VI3 Deve Manter | Razao |
|---------|--------|-----------------|-------|
| Cor accent | Indigo (#5E6AD2) | Cyan (#00D4FF) | Identidade VI3, mais tech/futurista |
| Background | Near-black | Navy | Mais quente, mais acolhedor |
| Heading font | Inter Display | DM Serif Display | Contraste serif = sofisticacao, diferenciacao |
| Grid lines | Nao tem | Manter | Assinatura visual unica |
| Logo | Gradient sphere | Logo VI3 proprio | Identidade |

### O que VI3 NAO deve copiar

1. **Excesso de austeridade** — Linear e para engineers; VI3 fala com empreendedores. Manter mais calor visual
2. **Monocromatismo total** — VI3 pode usar cyan mais liberalmente que Linear usa indigo (empreendedores precisam de mais "energia" visual)
3. **Zero ilustracao** — Linear nao usa ilustracoes; VI3 pode usar icones/graficos para explicar pilares (Business, Psicologia, IA)

---

## 9. Priority Action Items

| # | Acao | Impacto | Esforco |
|---|------|---------|---------|
| 1 | Implementar glass nav com backdrop-filter | Alto | Baixo |
| 2 | Criar layering system (surface-0 a surface-3) | Alto | Baixo |
| 3 | Adicionar noise texture overlay | Medio | Baixo |
| 4 | Refinar bordas para rgba opacity system | Alto | Medio |
| 5 | Ajustar typography (letter-spacing, overlines) | Medio | Baixo |
| 6 | Implementar scroll-reveal fade-up animations | Alto | Medio |
| 7 | Criar gradient-border component para cards | Medio | Medio |
| 8 | Definir motion spec (easings, durations) | Medio | Baixo |

---

## Sources

- [Linear Brand Guidelines](https://linear.app/brand)
- [How we redesigned the Linear UI (part II)](https://linear.app/now/how-we-redesigned-the-linear-ui)
- [Linear Brand Color Palette — Mobbin](https://mobbin.com/colors/brand/linear)
- [Linear design: The SaaS design trend — LogRocket](https://blog.logrocket.com/ux-design/linear-design/)
- [The rise of Linear style design — Medium/Bootcamp](https://medium.com/design-bootcamp/the-rise-of-linear-style-design-origins-trends-and-techniques-4fd96aab7646)
- [The Linear Look — Frontend Horse](https://frontend.horse/articles/the-linear-look/)
- [The Linear Effect — Rectangle](https://rectangle.substack.com/p/the-linear-effect)
- [Linear Design System — Figma Community](https://www.figma.com/community/file/1222872653732371433/linear-design-system)
- [Rebuilding linear.app — GitHub](https://github.com/frontendfyi/rebuilding-linear.app)
- [Inter Typography on linear.app — Typ.io](https://typ.io/s/2jmp)
- [Linear UI Libraries — LogRocket](https://blog.logrocket.com/ux-design/linear-design-ui-libraries-design-kits-layout-grid/)
- [Welcome to the new Linear — Changelog](https://linear.app/changelog/2024-03-20-new-linear-ui)
- [Karri Saarinen on Linear design process — X](https://x.com/karrisaarinen/status/1715085201653805116)
