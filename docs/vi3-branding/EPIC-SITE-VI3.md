# EPIC: Site Institucional Instituto VI3

> **Epic ID:** EPIC-VI3-SITE
> **PRD:** `PRD-SITE-VI3.md`
> **Criado por:** Morgan (@pm) — 2026-03-12
> **Objetivo:** Colocar vi3.com.br no ar como portal institucional premium
> **Prazo:** Onda 1 (Mar-Abr 2026)

---

## Estrutura de Waves (Execução Paralela)

### Wave 0 — Setup (Pré-requisito)

| Story | Título | Agente | Estimativa | Dependência |
|-------|--------|--------|------------|-------------|
| **0.1** | Inicializar repositório vi3-site | @devops | 30min | Nenhuma |

**Scope 0.1:**
- [ ] `git init` + criar repo no GitHub (`synkra/vi3-site` ou org do fundador)
- [ ] Scaffold Next.js 16 + React 19 + TypeScript + Tailwind 4
- [ ] Copiar `tokens.json` + `tokens-tailwind.js` do diretório VI3
- [ ] Configurar `tailwind.config.ts` importando tokens
- [ ] Setup Vercel project + conectar domínio `vi3.com.br`
- [ ] Criar `globals.css` com custom properties do tokens
- [ ] Deploy do skeleton (página em branco) para validar pipeline
- [ ] Configurar ESLint + TypeScript strict

---

### Wave 1 — Estrutura Base (após Wave 0)

| Story | Título | Agente | Estimativa | Dependência |
|-------|--------|--------|------------|-------------|
| **1.1** | Layout global + Nav + Footer | @dev | 2h | 0.1 |
| **1.2** | Componentes atômicos (Button, Tag, Badge, Card) | @dev | 2h | 0.1 |

**Scope 1.1:**
- [ ] Root `layout.tsx` — fontes (DM Serif Display, DM Sans, Space Mono), metadata base
- [ ] Componente `Nav` — glass effect, logo SVG, links, CTA, hamburger mobile
- [ ] Componente `Footer` — logo, links legais, redes sociais, copyright
- [ ] Noise texture overlay global (SVG feTurbulence)
- [ ] `:focus-visible`, `prefers-reduced-motion` no globals.css

**Scope 1.2:**
- [ ] `Button` atom — primary (cyan), ghost (border), sizes
- [ ] `Tag` atom — monospace uppercase label (section tags)
- [ ] `Badge` atom — status badges (Ativo/Em produção/Em breve) com cores
- [ ] `Card` molecule — border, hover translateY, glow effect
- [ ] `ProductCard` molecule — extends Card com badge + CTA + link externo
- [ ] `FounderCard` molecule — foto + nome + role + bio

---

### Wave 2 — Páginas (após Wave 1, executável em paralelo)

| Story | Título | Agente | Estimativa | Dependência |
|-------|--------|--------|------------|-------------|
| **2.1** | Home page (hero estático + seções) | @dev | 3h | 1.1, 1.2 |
| **2.2** | Página Sobre / Manifesto | @dev | 1.5h | 1.1, 1.2 |
| **2.3** | Página Fundadores | @dev | 1.5h | 1.1, 1.2 |
| **2.4** | Página Ecossistema | @dev | 1.5h | 1.1, 1.2 |
| **2.5** | Página Contato | @dev | 1.5h | 1.1, 1.2 |

**Scope 2.1 (Home):**
- [ ] Hero section — headline, subtítulo, 2 CTAs, placeholder para pirâmide
- [ ] Glow orb + grid lines background (do protótipo)
- [ ] Scroll hint animado
- [ ] Sobre resumo — parágrafo + link para /sobre
- [ ] Ecossistema preview — 3 ProductCards + link para /ecossistema
- [ ] CTA final section

**Scope 2.2 (Sobre):**
- [ ] Manifesto completo (usar opção 2: "O futuro exige critério" como default)
- [ ] Grid de 7 valores com numeração (01—07)
- [ ] 3 pilares narrativos (Diagnóstico, Método, Evidência)
- [ ] Diagrama triangular SVG (do protótipo)

**Scope 2.3 (Fundadores):**
- [ ] FounderCard Stephany — fundadora, pilar Psicologia
- [ ] FounderCard Rafael — professor/coordenador, credenciais
- [ ] Seção storytelling (placeholder se não disponível)
- [ ] Layout 2 colunas desktop, stack mobile

**Scope 2.4 (Ecossistema):**
- [ ] Grid de ProductCards ordenados por status
- [ ] Badges por tipo (Curso=cyan, Mentoria=gold, Ferramenta=green, Livro=amber)
- [ ] Cada card com CTA → funil externo (URL do produto)
- [ ] Seção "Em breve" para produtos futuros

**Scope 2.5 (Contato):**
- [ ] Formulário (nome, email, mensagem)
- [ ] API route para envio (MailerLite ou Resend)
- [ ] Botão WhatsApp direto
- [ ] Links redes sociais
- [ ] Texto institucional parcerias

---

### Wave 3 — Pirâmide 3D (após Wave 2.1)

| Story | Título | Agente | Estimativa | Dependência |
|-------|--------|--------|------------|-------------|
| **3.1** | Pirâmide 3D holográfica (R3F) | @dev | 4h | 2.1 |

**Scope 3.1:**
- [ ] Instalar `@react-three/fiber` + `@react-three/drei`
- [ ] Componente `PyramidScene` — pirâmide wireframe com 3 vértices + núcleo
- [ ] Rotação contínua e suave (eixo central)
- [ ] Pulsos de luz sequenciais nas arestas
- [ ] Aparecimento progressivo on load (hologramas → linhas → núcleo)
- [ ] Hover: rotação acelera, labels brilham
- [ ] Lazy load com `next/dynamic` + `{ ssr: false }`
- [ ] Fallback: imagem estática ou CSS 3D para dispositivos sem WebGL
- [ ] `prefers-reduced-motion`: desliga animação, mostra fallback
- [ ] Performance: `frameloop="demand"` fora da viewport
- [ ] Mobile: versão simplificada (menos partículas)

---

### Wave 4 — Polish (após Wave 2 + 3)

| Story | Título | Agente | Estimativa | Dependência |
|-------|--------|--------|------------|-------------|
| **4.1** | Animações scroll-reveal + transitions | @dev | 2h | 2.x |
| **4.2** | SEO + metadata + OG tags + sitemap | @dev | 1h | 2.x |
| **4.3** | QA Gate — performance + a11y + review | @qa | 2h | 4.1, 4.2 |

**Scope 4.1:**
- [ ] Framer Motion scroll-reveal (fade-up staggered, 100ms delay)
- [ ] Page transitions suaves
- [ ] Hover effects refinados (translateY -1px, glow sutil — padrão Linear)
- [ ] Easing cubic-bezier(0.16, 1, 0.3, 1) conforme SCAN-LINEAR

**Scope 4.2:**
- [ ] Metadata por página (title, description, OG image)
- [ ] `robots.txt` + `sitemap.xml`
- [ ] Favicon
- [ ] OG image genérica do Instituto

**Scope 4.3:**
- [ ] Lighthouse Performance > 95
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 95
- [ ] WCAG AA compliance check
- [ ] Mobile testing (320px, 375px, 768px, 1024px, 1440px)
- [ ] Cross-browser (Chrome, Safari, Firefox)
- [ ] Testar fallback da pirâmide 3D
- [ ] Revisar copy e links de funnels

---

### Wave 5 — Deploy (após Wave 4.3 PASS)

| Story | Título | Agente | Estimativa | Dependência |
|-------|--------|--------|------------|-------------|
| **5.1** | Deploy produção vi3.com.br | @devops | 1h | 4.3 PASS |

**Scope 5.1:**
- [ ] Vercel production deployment
- [ ] DNS final `vi3.com.br` apontando para Vercel
- [ ] SSL certificate validado
- [ ] Analytics configurado (Vercel Analytics ou Plausible)
- [ ] Smoke test em produção
- [ ] Remover página "Em construção" atual

---

## Resumo de Estimativas

| Wave | Stories | Estimativa Total | Paralelismo |
|------|---------|-----------------|-------------|
| 0 — Setup | 1 | 30min | Sequencial |
| 1 — Base | 2 | 4h | Paralelo entre si |
| 2 — Páginas | 5 | 9h | Paralelo entre si |
| 3 — Pirâmide | 1 | 4h | Paralelo com Wave 2.2-2.5 |
| 4 — Polish | 3 | 5h | Sequencial (4.1→4.2→4.3) |
| 5 — Deploy | 1 | 1h | Sequencial |

**Total estimado: ~23.5h de trabalho**
**Com paralelismo: ~2-3 dias de desenvolvimento**

---

## Fluxo de Agentes

```
@devops (0.1: setup repo)
    ↓
@dev (1.1 + 1.2: base — paralelo)
    ↓
@dev (2.1-2.5 + 3.1: páginas + pirâmide — paralelo)
    ↓
@dev (4.1 + 4.2: polish)
    ↓
@qa (4.3: QA gate)
    ↓
@devops (5.1: deploy)
```

---

## Critérios de Done (Epic)

- [ ] 5 páginas funcionais em vi3.com.br
- [ ] Pirâmide 3D rodando no hero com fallback
- [ ] Todos os links de produtos apontando para funnels corretos
- [ ] Lighthouse Performance > 95, Accessibility > 90
- [ ] WCAG AA compliance
- [ ] Mobile responsivo (320px-1440px)
- [ ] Analytics ativo
- [ ] Fundadores representados corretamente (Stephany = fundadora)

---

*EPIC-VI3-SITE v1.0 — Site Institucional Instituto VI3*
*Produzido por Morgan (@pm) — Synkra AIOX | 2026-03-12*
