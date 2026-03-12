# SCAN: Reforge.com — Content Structure Analysis for Instituto VI3

> Agente: @ux-design-expert (Uma)
> Data: 2026-03-12
> Objetivo: Analisar reforge.com como referencia de arquitetura de conteudo para o site institucional VI3
> Uso: Input para decisoes de IA e layout do site vi3.com.br

---

## 1. Visao Geral do Reforge

**O que e:** Plataforma de educacao profissional premium focada em Product Management, Growth e IA. Fundada por Brian Balfour (ex-VP Growth, HubSpot). Levantou $81M em funding. Membership anual de $1,995/individuo.

**Por que e relevante para VI3:** Reforge opera como um *instituto educacional com multiplos programas* sob uma marca guarda-chuva — exatamente o modelo portal que VI3 precisa. A diferenca de escala e enorme, mas os patterns de organizacao de conteudo sao diretamente aplicaveis.

**Modelo de negocio:** Membership anual que desbloqueia 40+ cursos on-demand + cursos ao vivo sazonais + ferramentas de IA + comunidade Slack.

---

## 2. Arquitetura de Informacao (Information Architecture)

### 2.1 Estrutura de Navegacao Principal

O menu principal do Reforge organiza o conteudo em categorias funcionais:

| Item Nav | Tipo | Conteudo |
|----------|------|----------|
| **Courses** | Mega-menu/listagem | 40+ cursos organizados por categoria |
| **Learning** | Landing page | Proposta de valor para individuos e times |
| **Teams** | Landing page | Oferta B2B, planos corporativos |
| **AI Solutions** | Landing page | Ferramentas de IA (Research, Insights, Build, Launch) |
| **Blog** | Content hub | Artigos, insights semanais |
| **Pricing** | Pagina unica | Planos Individual, Starter, Scale |
| **Sign In / Join** | CTAs | Autenticacao e conversao |

### 2.2 Hierarquia de Paginas

```
reforge.com (Homepage)
├── /courses                    → Catalogo completo
│   ├── /course-categories/     → Filtros por area
│   │   ├── /growth
│   │   ├── /ai
│   │   ├── /product-management
│   │   └── /user-research
│   └── /courses/{slug}/details → Pagina individual do curso
├── /learning                   → Landing para individuos
├── /learning/teams             → Landing para times/empresas
├── /membership                 → Detalhes da membership
├── /pricing                    → Tabela de precos
├── /blog                       → Content marketing
├── /profiles/{nome}            → Perfis de instrutores/experts
└── /artifacts                  → Templates e exemplos praticos
```

### 2.3 Pattern: Portal com Profundidade

Reforge usa um modelo de **hub-and-spoke**:
- **Hub central** (homepage) apresenta a proposta de valor e direciona
- **Spokes** (paginas de curso, learning, teams) sao landing pages autonomas com CTAs proprios
- Cada curso tem sua propria pagina de detalhe (`/courses/{slug}/details`) com enrollment, modulos, instructor

**Insight para VI3:** O site institucional deve funcionar como hub que linka para paginas de produto individuais — nao tentar colocar tudo numa unica pagina.

---

## 3. Homepage — Estrutura e Patterns

### 3.1 Hero Section

O hero do Reforge segue o pattern de **headline orientada a resultado + social proof imediato**:

| Elemento | Conteudo Tipico |
|----------|----------------|
| **Headline** | Frase curta focada em transformacao profissional (nao em features) |
| **Subheadline** | Detalha o "como" — cursos, IA, experts |
| **CTA primario** | "Join Reforge" ou "Get Started" (contraste forte) |
| **CTA secundario** | "Learn More" ou "See Courses" (ghost button) |
| **Social proof** | Logos de empresas (Google, Meta, Stripe, Shopify, Adobe, etc.) |

### 3.2 Sequencia de Secoes (Homepage Flow)

Baseado em pesquisa e analises de terceiros, a homepage segue esta progressao:

1. **Hero** — Headline + CTA + logos de empresas
2. **Social Proof Bar** — "Members from" + grid de logos corporativos (Google, Meta, Amazon, Shopify, Adobe, Instacart, etc.)
3. **Value Proposition** — O que voce recebe: cursos, comunidade, ferramentas IA
4. **Programs/Courses Showcase** — Cards com cursos em destaque, organizados por categoria
5. **How It Works** — Membership model explicado em 3-4 steps
6. **Instructor/Expert Section** — Fotos + credenciais de instrutores de empresas tier-1
7. **Testimonials** — Quotes de membros com cargo e empresa
8. **AI Tools Section** — Reforge AI, Research, Insights, Build (expansao recente)
9. **Pricing Preview** — Comparativo de planos com CTA
10. **Final CTA** — Reforco do call-to-action principal

### 3.3 Pattern de Persuasao

A sequencia segue a formula classica de landing page premium:

```
PROMESSA (hero) → PROVA (logos/testimonials) → PRODUTO (cursos/features) →
MECANISMO (how it works) → AUTORIDADE (experts) → PRECO → CTA FINAL
```

---

## 4. Apresentacao de Cursos/Programas

### 4.1 Catalogo (`/courses`)

Os cursos sao apresentados em **grid de cards** com filtros por categoria:

**Categorias identificadas:**
- Growth (Growth Engineering, Growth Marketing, Marketplace Growth, Network Effects, Consumer Subscription Growth)
- Product Management (PM Foundations, Mastering PM, Product Delivery, Product Analytics)
- AI (AI Foundations, AI Productivity, AI Growth, AI Strategy, GenAI Product Strategy)
- Marketing (Brand Marketing, Influencer Marketing, Product Marketing)
- Data (Data for Product Managers)
- User Research

### 4.2 Anatomia do Card de Curso

Cada card de curso contem:

| Elemento | Descricao |
|----------|-----------|
| **Titulo** | Nome do curso (ex: "Mastering Product Management") |
| **Tipo/Badge** | On-demand vs. Live (diferenciacao visual) |
| **Descricao curta** | 1-2 linhas sobre o que voce vai aprender |
| **Categoria tag** | Area (Growth, PM, AI, etc.) |
| **CTA** | "View Course" ou "Enroll" |

### 4.3 Pagina de Detalhe do Curso

Estrutura da pagina individual:

1. **Banner/Header** — Titulo do curso + badge de formato
2. **Enrollment Options** — Botao de enrollment no lado direito (sticky)
3. **Overview** — O que voce vai aprender
4. **Modules** — Lista de modulos com descricao de cada
5. **Instructor** — Perfil do instrutor com credenciais
6. **Related Courses** — Sugestoes de proximos cursos

### 4.4 Diferenciacao de Formatos

| Formato | Caracteristica |
|---------|---------------|
| **On-Demand** | Acesso 24/7, self-paced, disponivel com membership |
| **Live Cohort** | Sazonal, instructor-led, vagas limitadas por temporada |

**Insight para VI3:** Diferenciar visualmente cursos/produtos por tipo (curso, mentoria, ferramenta, ebook) usando badges e cores distintas.

---

## 5. Construcao de Credibilidade

### 5.1 Elementos de Social Proof

Reforge emprega multiplas camadas de credibilidade:

| Tipo | Implementacao |
|------|---------------|
| **Logo bar** | Grid de logos de empresas tier-1 (Google, Meta, Amazon, Stripe, Shopify, Adobe, Instacart, Dropbox, Apple, Atlassian, AirBnB, LinkedIn) |
| **Estatisticas** | Numeros de membros ("tens of thousands"), numero de cursos (40+), anos de operacao |
| **Instrutores** | Perfis com nome, foto, cargo, empresa (ex: "ex-VP Growth, HubSpot") |
| **Testimonials** | Quotes de membros com nome completo, cargo e empresa |
| **Memberships corporativas** | Secao de Teams mostrando empresas que compram licencas |
| **Funding/press** | $81M levantados sinaliza seriedade (usado em PR, nao no site) |
| **Content authority** | Blog com 100+ artigos como prova de expertise |

### 5.2 Hierarquia de Credibilidade

```
1. LOGOS (prova visual instantanea — 0.5s de atencao)
2. STATS (numeros concretos — 2s de atencao)
3. EXPERTS (rostos + credenciais — 5s de atencao)
4. TESTIMONIALS (historias de transformacao — 10s+ de atencao)
5. CONTENT (blog/artifacts como prova de profundidade — minutos)
```

**Insight para VI3:** Mesmo sem logos de grandes empresas, a credibilidade pode ser construida com: numero de alunos, resultados concretos, perfil do fundador (YouTube, experiencia), e depoimentos de alunos do curso AIOX.

---

## 6. Modelo Portal (Hub-and-Spoke)

### 6.1 Como Reforge Gerencia Multiplos Produtos

Reforge nao e apenas cursos — oferece um ecossistema:

| Produto | URL Pattern | Relacao com Hub |
|---------|-------------|-----------------|
| Cursos on-demand | `/courses/{slug}` | Linkado do catalogo |
| Cursos live | Via schedule sazonal | Dentro da membership |
| AI Research | Dentro da plataforma | Feature da membership |
| AI Insights | Dentro da plataforma | Feature da membership |
| AI Build | Dentro da plataforma | Feature da membership |
| Artifacts/Templates | `/artifacts` | Conteudo aberto (lead gen) |
| Blog | `/blog` | Conteudo aberto (SEO/authority) |
| Comunidade Slack | Externo (Slack) | Beneficio da membership |

### 6.2 Pattern de Acesso

```
CONTEUDO ABERTO (atrai)          CONTEUDO FECHADO (converte)
─────────────────────────        ─────────────────────────────
Blog posts                       Cursos on-demand (40+)
Artifacts/templates              Cursos live (sazonais)
Homepage/landing pages           AI tools (Research, Build, etc.)
Pricing page                     Comunidade Slack
                    ↓ CTA ↓
              [Join Reforge — $1,995/year]
```

**Insight para VI3:** O site vi3.com.br deve ter conteudo aberto que demonstra autoridade (manifesto, sobre, blog/artigos) e CTAs que direcionam para os produtos pagos (AIOX, MAR, CobroCerto) em seus respectivos dominios/paginas.

---

## 7. Design Visual e Tom

### 7.1 Identidade Visual

| Aspecto | Reforge |
|---------|---------|
| **Tema** | Dark theme predominante (fundo escuro, tipografia clara) |
| **Tipografia** | Sans-serif moderna, clean. Usam Streamline icons |
| **Espacamento** | Generoso uso de whitespace — premium feel |
| **Cores** | Palette escura com acentos vibrantes para CTAs |
| **Iconografia** | Streamline icons (redesign recente) |
| **Tom** | Profissional, autoritativo, sem frivolidade |

### 7.2 Principios de Design Observados

1. **Menos e mais** — Paginas limpas, sem poluicao visual
2. **Hierarquia tipografica forte** — Headlines grandes, body text legivel
3. **Cards como unidade visual** — Cursos, features, testimonials — tudo em cards
4. **CTA consistente** — Mesmo botao, mesma cor, em todas as paginas
5. **Dark = premium** — O tema escuro comunica sofisticacao e seriedade

**Alinhamento com VI3:** O dark theme do Reforge valida a escolha de VI3 (Navy + Cyan). A combinacao de fundo escuro com tipografia serif (DM Serif Display) e sans (DM Sans) que VI3 ja usa segue o mesmo principio de premium + legibilidade.

---

## 8. Pontos Fracos Identificados

Nem tudo no Reforge e perfeito. Problemas identificados em reviews:

| Problema | Detalhe |
|----------|---------|
| **Navegacao confusa** | Diferenca entre "course", "library" e "collections" e cognitivamente dificil |
| **Video tutorial escondido** | Um Loom video ensinando a navegar esta escondido — sinal de UX deficiente |
| **Preco alto sem trial** | $1,995/ano sem free trial — barreira alta para decisao |
| **Excesso de produtos** | AI tools + cursos + blog + artifacts + community — pode confundir |

**Insight para VI3:** Manter a navegacao simples. Com 5 secoes MVP, VI3 tem vantagem de clareza. Nao complicar com taxonomias excessivas.

---

## 9. Recomendacoes para VI3

Mapeamento dos patterns do Reforge para as 5 secoes MVP do site VI3.

### 9.1 HOME (Hero + Primeira Impressao)

**Pattern Reforge aplicavel:** Hero com headline transformacional + social proof imediato

**Recomendacao para VI3:**

```
HERO SECTION
├── Headline: Focada em transformacao, nao em descricao
│   Ex: "Conhecimento que transforma negocios, mentes e tecnologia"
│   (NAO: "Instituto VI3 — cursos e mentorias")
├── Subheadline: Descreve os 3 pilares (Business, Psicologia, IA)
├── CTA Primario: "Conheca o Ecossistema" → ancora para secao Produtos
├── CTA Secundario: "Sobre o Instituto" → ancora para Manifesto
└── Social Proof: Stats (alunos, horas de conteudo, resultados)
    Sem logos corporativos? Use: "XX alunos | XX horas de conteudo | XX paises"
```

**Tom visual:** Dark theme (Navy + Cyan), tipografia grande, whitespace generoso. Impacto visual e seriedade desde o primeiro pixel.

### 9.2 SOBRE / MANIFESTO

**Pattern Reforge aplicavel:** Reforge nao tem um "manifesto" explicito, mas constroi autoridade atraves de content authority e expert profiles. A ausencia de um manifesto e um ponto que VI3 pode explorar como diferencial.

**Recomendacao para VI3:**

```
MANIFESTO SECTION
├── Titulo forte: "Por que existimos"
├── Texto curto (3-5 paragrafos): Visao, missao, valores
│   Estrutura: PROBLEMA → VISAO → COMO RESOLVEMOS
├── Os 3 Pilares (cards visuais):
│   ├── Business (icone + descricao curta)
│   ├── Psicologia (icone + descricao curta)
│   └── IA (icone + descricao curta)
└── Quote do fundador com foto
```

**Diferencial VI3:** Enquanto Reforge e puramente corporativo/tech, VI3 pode humanizar com o manifesto — algo que conecta emocionalmente e justifica a existencia do instituto.

### 9.3 FUNDADORES

**Pattern Reforge aplicavel:** Expert profiles com credenciais verificaveis + conexao com empresas/resultados.

**Recomendacao para VI3:**

```
FUNDADORES SECTION
├── Layout: Cards lado a lado (ou empilhados mobile)
├── Cada card:
│   ├── Foto profissional (alta qualidade, fundo consistente)
│   ├── Nome completo
│   ├── Titulo/papel no instituto
│   ├── Credenciais-chave (2-3 bullet points)
│   │   Ex Rafael: "Especialista em precificacao | YouTuber | Criador do Metodo MAR"
│   ├── Link para redes (YouTube, LinkedIn)
│   └── Frase pessoal (quote curto)
└── NOTA: Nao precisa de bio longa — brevidade = autoridade
```

**Pattern critico do Reforge:** Instrutores sempre aparecem com CARGO + EMPRESA. Para VI3, o equivalente e: ESPECIALIDADE + RESULTADO TANGIVEL.

### 9.4 ECOSSISTEMA DE PRODUTOS

**Pattern Reforge aplicavel:** Grid de cards com categorias + diferenciacao visual por tipo.

**Recomendacao para VI3:**

```
ECOSSISTEMA SECTION
├── Titulo: "Nosso Ecossistema" ou "Produtos e Programas"
├── Subtitulo: Frase sobre a visao integrada dos 3 pilares
├── Grid de Product Cards (2-3 colunas desktop):
│   ├── Curso AIOX
│   │   ├── Badge: "CURSO" (cor: cyan)
│   │   ├── Titulo + descricao 1 linha
│   │   ├── Status: "Turma Aberta" ou "Lista de Espera"
│   │   └── CTA: "Saiba Mais" → link externo ou pagina dedicada
│   ├── Metodo M.A.R.
│   │   ├── Badge: "MENTORIA" (cor: gold)
│   │   ├── ...
│   │   └── CTA → funil MAR
│   ├── CobroCerto
│   │   ├── Badge: "FERRAMENTA" (cor: verde)
│   │   ├── ...
│   │   └── CTA → cobrocerto.com.br
│   ├── Manual de Preco
│   │   ├── Badge: "LIVRO" (cor: laranja)
│   │   └── ...
│   └── [Futuros produtos aparecem aqui]
└── Diferenciacao visual por TIPO (badge colorido) — nao por pilar
```

**Pattern-chave do Reforge:** Cada produto tem card autonomo com informacao suficiente para decisao ("preciso saber mais?" ou "nao e para mim"). O card NAO deve exigir clique para entender o que e.

**Diferenciacao por tipo vs. por pilar:**

| Abordagem | Pro | Contra |
|-----------|-----|--------|
| Por pilar (Business/Psico/IA) | Alinha com marca | Pilar Psico esta vazio, fica desbalanceado |
| Por tipo (Curso/Mentoria/Tool/Livro) | Mais informativo, escala melhor | Menos alinhado com narrativa |

**Recomendacao:** Na fase MVP, organizar por tipo com badges. Adicionar filtro por pilar quando houver 6+ produtos.

### 9.5 CONTATO

**Pattern Reforge aplicavel:** Reforge minimiza contato direto — usa knowledge base, pricing page e CTAs de conversao. Nao ha pagina de "Contato" visivel.

**Recomendacao para VI3:**

```
CONTATO SECTION
├── Titulo: "Fale com a gente" (tom acessivel)
├── Canais:
│   ├── Email (form simples: nome + email + mensagem)
│   ├── WhatsApp (link direto — padrao BR)
│   └── Redes sociais (YouTube, Instagram, TikTok)
├── Opcional: FAQ compacto (3-5 perguntas)
│   ├── "Os cursos tem certificado?"
│   ├── "Como funciona a mentoria?"
│   └── "Posso parcelar?"
└── CTA final: "Acompanhe no YouTube" ou "Entre na lista VIP"
```

**Diferencial VI3:** Contato humano e acessivel e um diferencial frente a plataformas premium como Reforge. WhatsApp direto comunica proximidade — algo que o publico BR valoriza.

---

## 10. Resumo de Patterns Aplicaveis

### Copiar do Reforge

| Pattern | Aplicacao VI3 |
|---------|---------------|
| Dark theme premium | Ja alinhado (Navy + Cyan) |
| Hero com headline transformacional | Substituir descricao por promessa |
| Social proof imediato no hero | Stats de alunos/conteudo/resultados |
| Cards autonomos para produtos | Cada produto com badge + descricao + CTA |
| Expert profiles com credenciais | Fundadores com especialidade + resultado |
| Whitespace generoso | Espacamento premium, nao encher de conteudo |
| CTA consistente | Mesmo botao, mesma cor, em todo o site |
| Hub-and-spoke para multiplos produtos | vi3.com.br como hub, produtos em paginas/dominios proprios |

### NAO Copiar do Reforge

| Anti-Pattern | Por que evitar |
|--------------|----------------|
| Navegacao confusa (course vs library vs collection) | VI3 deve ser cristalino com 5 secoes |
| Ausencia de pagina de contato | Publico BR espera WhatsApp e acessibilidade |
| Preco sem contexto | Sempre mostrar valor antes do preco |
| Excesso de taxonomias | Manter simples ate ter 6+ produtos |
| Tone 100% corporativo | VI3 pode humanizar com manifesto e historia pessoal |

---

## 11. Proximos Passos Sugeridos

1. **Wireframe das 5 secoes** usando os patterns mapeados acima
2. **Definir headline do hero** — sessao de copywriting focada em transformacao
3. **Coletar social proof** — stats reais (alunos YouTube, horas de conteudo AIOX, etc.)
4. **Fotografar fundadores** — fotos profissionais consistentes para a secao Fundadores
5. **Montar cards do ecossistema** — definir badge/cor/descricao/CTA de cada produto

---

> **Fontes da pesquisa:**
> - [Reforge Homepage](https://www.reforge.com/)
> - [Reforge Courses](https://www.reforge.com/courses)
> - [Reforge Membership Details](https://reforge.helpscoutdocs.com/article/60-whats-included-in-the-reforge-membership)
> - [Reforge Pricing](https://www.reforge.com/pricing)
> - [Reforge Learning](https://www.reforge.com/learning)
> - [Reforge Teams](https://www.reforge.com/learning/teams)
> - [$81M Analysis — Command AI](https://www.command.ai/blog/reforge-product-strategy/)
> - [Reforge Review — Toption](https://www.toption.org/post/is-reforge-worth-it-review)
> - [Reforge Review — Uxcel](https://uxcel.com/blog/reforge-product-strategy-course-review)
> - [Reforge Business Model — CanvasBusinessModel](https://canvasbusinessmodel.com/blogs/how-it-works/reforge-how-it-works)
> - [Upskilling with Reforge — Helen H.](https://blog.mindthebeet.com/p/my-experience-of-upskilling-with)
