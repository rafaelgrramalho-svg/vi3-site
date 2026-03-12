# PRD — Site Institucional Instituto VI3

> **Versão:** 1.0
> **Data:** 2026-03-12
> **Autor:** Morgan (@pm) — Synkra AIOX
> **Status:** Draft — pronto para validação
> **Fontes:** Branding Book v1.0, Scans Linear/Reforge, Análise @architect, Questionário preenchido

---

## 1. VISAO GERAL

### 1.1 Problema

O Instituto VI3 possui produtos prontos (MAR, AIOX) e em produção (CobroCerto) mas **nenhuma presença institucional online**. O domínio `vi3.com.br` exibe apenas "Em construção". Isso impede:
- Validação de credibilidade perante potenciais alunos
- Centralização do ecossistema de produtos num único ponto
- Construção de autoridade da marca guarda-chuva

### 1.2 Solução

Site institucional estático que funciona como **portal premium**: cria impacto visual, transmite seriedade, e direciona visitantes para os funnels de cada produto.

### 1.3 Objetivo Principal

> **Criar impacto visual e trazer seriedade para os produtos do Instituto VI3.**

O site NÃO vende diretamente. É uma vitrine que valida a marca e direciona tráfego.

### 1.4 KPIs de Sucesso (Ano 1)

| KPI | Meta | Como Medir |
|-----|------|-----------|
| Autoridade percebida | Qualitativo — visitante confia na marca | Bounce rate < 40%, tempo na página > 2min |
| CTR portal → funil | > 15% dos visitantes clicam num produto | Vercel Analytics / Plausible |
| Performance | LCP < 1s, CLS < 0.1 | Lighthouse, Core Web Vitals |
| Acessibilidade | WCAG AA | Lighthouse Accessibility > 90 |

---

## 2. PUBLICO-ALVO

| Segmento | Perfil | Jornada no Site |
|----------|--------|-----------------|
| Freelancers especialistas | Competentes mas invisíveis no mercado | Home → Ecossistema → MAR funnel |
| Pequenos empresários | Querem escalar com método | Home → Sobre → Ecossistema → AIOX/MAR |
| Curiosos de IA (YouTube) | Vieram do canal, querem saber mais | Home → Ecossistema → AIOX funnel |
| Potenciais parceiros | Querem entender o Instituto | Home → Fundadores → Contato |

---

## 3. REQUISITOS FUNCIONAIS

### 3.1 Páginas MVP (5 rotas)

| Rota | Tipo | Conteúdo Principal |
|------|------|--------------------|
| `/` | SSG | Hero com pirâmide 3D + headline transformacional + CTAs |
| `/sobre` | SSG | Manifesto + valores (7) + pilares narrativos (3) |
| `/fundadores` | SSG | Stephany Pontes (fundadora) + Rafael Rocha (professor/coordenador) |
| `/ecossistema` | SSG | Cards de produtos com badges de tipo + links para funnels |
| `/contato` | SSG + API | Formulário + WhatsApp direto + links sociais |

### 3.2 Componentes Globais

| Componente | Especificação |
|------------|---------------|
| **Nav** | Glass effect (backdrop-filter blur), logo SVG, links para seções, CTA, hamburger mobile |
| **Footer** | Logo, links (Termos, Privacidade), redes sociais (YouTube, IG, TikTok), copyright |
| **Pirâmide 3D** | Holográfica rotativa, 3 vértices (inteligências) + centro (valor), hover interativo |

### 3.3 Detalhamento por Página

#### Home (`/`)
- **Hero:** Pirâmide 3D à direita + headline à esquerda + 2 CTAs (Ecossistema + Sobre)
- **Sobre resumo:** Parágrafo + link para `/sobre`
- **Ecossistema preview:** 3-4 cards de produto + link para `/ecossistema`
- **CTA final:** Contato ou newsletter signup

#### Sobre (`/sobre`)
- Manifesto completo (escolhido entre 3 opções)
- Grid de 7 valores com ícones
- 3 pilares narrativos (Diagnóstico, Método, Evidência)
- Diagrama triangular SVG

#### Fundadores (`/fundadores`)
- **Stephany Pontes** — Fundadora, pilar Psicologia, gestão familiar
- **Rafael Rocha** — Professor/Coordenador, Direito + Contabilidade, 15 anos, criador MAR
- Cards lado a lado com foto, bio, credenciais
- Storytelling de origem (quando disponível)

#### Ecossistema (`/ecossistema`)
- Cards por tipo de produto (badge colorido):
  - Curso = cyan
  - Mentoria = gold
  - Ferramenta/SaaS = green
  - Livro/Info-produto = amber
- Cada card: nome, pilar, descrição curta, status, CTA → funil externo
- Organizado por disponibilidade (Ativo → Em produção → Em breve)

#### Contato (`/contato`)
- Formulário simples (nome, email, mensagem) → MailerLite ou email
- Botão WhatsApp direto (diferencial BR)
- Links para redes sociais
- Texto institucional de parceria

---

## 4. REQUISITOS NAO-FUNCIONAIS

| Categoria | Requisito | Meta |
|-----------|-----------|------|
| **Performance** | LCP (Largest Contentful Paint) | < 1.0s |
| **Performance** | CLS (Cumulative Layout Shift) | < 0.1 |
| **Performance** | Bundle size (sem 3D) | < 100KB gzipped |
| **Acessibilidade** | WCAG | AA mínimo |
| **Acessibilidade** | Focus visible, aria-labels, reduced-motion | Obrigatório |
| **SEO** | Metadata, OG tags, sitemap, robots.txt | Completo |
| **Responsividade** | Mobile-first | Breakpoint 768px + 900px |
| **3D Fallback** | Dispositivos sem WebGL | CSS 3D ou imagem estática |
| **Idioma** | PT-BR | Único |

---

## 5. STACK TECNICA

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Framework | Next.js (App Router) | 16.x |
| UI | React | 19.x |
| Styling | Tailwind CSS | 4.x |
| Linguagem | TypeScript | 5.x |
| 3D Engine | React Three Fiber + @react-three/drei | Latest |
| Animações | Framer Motion | Latest |
| Deploy | Vercel | — |
| Analytics | Vercel Analytics ou Plausible | — |
| Formulário | MailerLite API ou Resend | — |
| Tokens | DTCG (`tokens.json`) → Tailwind (`tokens-tailwind.js`) | — |

---

## 6. DESIGN SYSTEM

### 6.1 Identidade Visual

| Elemento | Especificação |
|----------|---------------|
| Paleta primária | Navy (#0A1628) + Cyan (#1E9FD4) |
| Paleta produto MAR | Navy + Gold (diferenciação) |
| Tipografia títulos | DM Serif Display |
| Tipografia corpo | DM Sans |
| Tipografia labels | Space Mono |
| Dark mode | Padrão (único modo no MVP) |
| Border radius | Zero (cantos retos — estética institucional/tech) |

### 6.2 Princípios de Design (extraídos dos scans)

| Princípio | Origem | Aplicação |
|-----------|--------|-----------|
| Color restraint | Linear | Cyan em max 5% da superfície |
| Glass navigation | Linear | backdrop-filter blur + saturação |
| Surface layering | Linear | 4 camadas de opacity (0%, 3%, 5%, 8%) |
| Monochrome-first | Linear | 95% grayscale, 5% accent |
| Hub-and-spoke | Reforge | Portal central → funnels externos |
| Cards autônomos | Reforge | Info suficiente para decisão no card |
| Whitespace generoso | Reforge | Premium feel, respiro visual |
| CTA consistente | Reforge | Mesmo botão, mesma cor, repetido |

### 6.3 Artefatos de Design Existentes

| Arquivo | Descrição |
|---------|-----------|
| `tokens.json` | 100+ tokens DTCG (cores, tipografia, spacing, motion, borders) |
| `tokens-tailwind.js` | Mapeamento Tailwind v4 pronto |
| `instituto-vi3.html` | Protótipo HTML corrigido (referência visual) |
| `BRANDING-BOOK-VI3.md` | Diretrizes completas de marca |
| `SCAN-LINEAR.md` | Padrões visuais de referência |
| `SCAN-REFORGE.md` | Padrões de estrutura de conteúdo |

---

## 7. ARQUITETURA

### 7.1 Modelo

**Repo separado** (`vi3-site`), deploy independente no Vercel. Tokens portáveis via arquivos JSON/JS.

### 7.2 Estrutura

```
vi3-site/
├── src/
│   ├── app/              # 5 rotas SSG
│   ├── components/
│   │   ├── atoms/        # Button, Tag, Badge, Icon
│   │   ├── molecules/    # Card, NavLink
│   │   ├── organisms/    # Nav, Hero, Footer, PyramidScene
│   │   └── sections/     # AboutSection, FoundersSection, etc.
│   ├── lib/              # constants, metadata
│   └── styles/           # globals.css (Tailwind + custom props)
├── public/               # images, favicon
├── tokens.json           # DTCG source of truth
├── tokens-tailwind.js    # Tailwind theme extension
└── package.json
```

### 7.3 Pirâmide 3D

| Aspecto | Decisão |
|---------|---------|
| Lib | React Three Fiber + drei |
| Loading | `next/dynamic` + Suspense (lazy) |
| Performance | `frameloop="demand"`, canvas limitado |
| Mobile | Versão simplificada (< 768px) |
| Fallback | CSS 3D ou imagem estática |
| Acessibilidade | `prefers-reduced-motion` → imagem estática |

---

## 8. DECISOES PENDENTES

| Item | Responsável | Impacto | Bloqueante? |
|------|-------------|---------|-------------|
| Tagline definitiva | Fundador (teste A/B) | Copy do hero | Não — usar placeholder |
| Manifesto final | Fundador (escolha 1 de 3) | Página /sobre | Não — usar manifesto 2 como default |
| Storytelling de origem | Fundador | Página /fundadores | Não — seção pode ficar sem |
| Fotos profissionais Stephany | Fundador | Cards fundadores | Não — usar placeholder |
| Pesquisa de concorrentes | @analyst | Posicionamento | Não — fase 2 |

**Nenhuma pendência é bloqueante para iniciar o desenvolvimento.**

---

## 9. RISCOS

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Three.js pesado (~150KB) | Alta | LCP degradado | Lazy load + code split + preload |
| Pirâmide não roda em mobile antigo | Média | UX quebrada | Fallback CSS 3D / imagem |
| Tokens drift VI3 vs MAR | Baixa | Inconsistência | tokens.json como source of truth |
| Conteúdo incompleto (storytelling, fotos) | Alta | Seções vazias | Placeholders elegantes, iterar depois |

---

## 10. FORA DO ESCOPO (MVP)

- Blog / sistema de conteúdo
- Área do aluno (login)
- Cases / resultados / depoimentos
- Imprensa / mídia
- Modo claro
- i18n (outros idiomas)
- E-commerce / checkout no site
- SEO avançado (schema markup, FAQ structured data)

---

*PRD v1.0 — Site Institucional Instituto VI3*
*Produzido por Morgan (@pm) — Synkra AIOX | 2026-03-12*
