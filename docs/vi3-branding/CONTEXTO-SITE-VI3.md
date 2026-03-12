# Contexto — Site Institucional + Design System Instituto VI3
> Última atualização: 2026-03-10 | Sessão: @analyst + @ux-design-expert
> Retomar com: `@ux-design-expert` ou `@analyst`

---

## 1. O QUE É ESSE PROJETO

O **Instituto VI3** é uma marca guarda-chuva que agrupa múltiplos produtos (cursos, apps, mentorias, comunidades). O **Método M.A.R.** é o primeiro produto — mas o Instituto abrangerá outros produtos nos 3 pilares:

| Pilar | Responsável | Status |
|-------|-------------|--------|
| Business | Rafael Rocha | ✅ Ativo (M.A.R.) |
| Psicologia | Esposa (psicóloga) | 🔜 Futuro |
| IA | A definir | 🔜 Futuro |

**Site atual:** `www.vi3.com.br` — página "Em construção" com logo fundo escuro.

---

## 2. O QUE FOI DECIDIDO NESSA SESSÃO

### Escopo confirmado
- Criar **site institucional do Instituto VI3** (separado do funil M.A.R.)
- Criar **Branding Book** do site
- Os dois documentos serão produzidos **em paralelo** (branding alimenta o site)

### Distinção importante
| | Método M.A.R. | Instituto VI3 |
|--|---------------|---------------|
| Tipo | Produto (funil de vendas) | Marca guarda-chuva |
| URL | `/MAR` | `vi3.com.br` |
| Paleta | Navy + Gold | Navy + Cyan |
| Status | ✅ Pronto | ❌ A construir |

---

## 3. DIAGNÓSTICO DA IDENTIDADE VISUAL ATUAL

**Score: 43/100 — Funcional, mas Informal**

| Dimensão | Score | Detalhe |
|---|---|---|
| Visual Style | 🟡 80% | Dark theme, cores e tipografia definidos. Sem modo claro. |
| Mood / Brand Voice | 🟡 70% | Implícito. Não documentado como guia. |
| UI Patterns | 🟠 45% | Buttons/cards/tags OK. Forms, modais, estados — ausentes. |
| Motion | 🟠 30% | 3 keyframes existem. Sem spec formal. |
| Accessibility | 🔴 20% | Contraste OK. ARIA, focus, teclado — zero. |
| Design System | 🟡 40% | HTML guide informal. Sem Storybook/Figma lib. |
| Baked Accessibility | 🔴 15% | Não existe como prática sistemática. |
| Tokenização DTCG | 🔴 0% | CSS vars existem, sem export JSON/DTCG. |

### O que existe hoje
- ✅ Dois sistemas de cor: **Navy+Cyan** (VI3) e **Navy+Gold** (M.A.R.)
- ✅ Tipografia: DM Serif Display + DM Sans + Space Mono
- ✅ 3 variantes de botão, 6 estilos de card, sistema de tags
- ✅ Grid, hero, topbar, sidebar documentados em HTML (`vi3-tokens-components.html`)
- ✅ Tailwind configurado no funil M.A.R.
- ✅ Logo em 2 variantes (fundo claro e escuro)

### O que falta (priorizado)
**🔴 Crítico:**
- Tokens DTCG (JSON/YAML exportável e multiplataforma)
- Acessibilidade baked-in: ARIA por componente, `:focus-visible`, `prefers-reduced-motion`
- Estados completos: error, success, loading, empty, disabled

**🟠 Importante:**
- Motion spec: matrix duração × easing × intenção
- Form patterns completos (input, select, checkbox, radio, validation)
- Modais, tooltips, toasts, accordions
- Modo claro documentado

**🟡 Para escalar:**
- Storybook ou Zeroheight como plataforma viva
- Figma component library sincronizada com código
- Governance: versionamento, deprecação, contribuição

---

## 4. PRÓXIMA DECISÃO PENDENTE (BLOQUEANTE)

### ⚡ Escolher um site de referência para clonar/inspirar

Isso acelera **toda** a fase de design system:

| Com referência resolve | Ainda precisa fazer |
|---|---|
| Visual style e mood | Cores adaptadas para VI3 |
| UI patterns mapeados | Identidade verbal |
| Motion extraído | Acessibilidade auditada |
| Tokens extraídos do DevTools | Copy e conteúdo |
| Spacing/grid definido | Lógica de negócio |

**Categorias sugeridas para buscar:**
1. Instituto / Escola — ex: IDEO, Hyper Island, Reforge, On Deck
2. SaaS premium dark mode — ex: Linear, Vercel, Resend, Raycast
3. Consultoria / Thought Leadership — ex: McKinsey, IDEO.org
4. Creator / Educador — ex: Buildspace, Every.to, Lenny's Newsletter

**Ação:** Escolher URL → passar para `@ux-design-expert` → `*scan {url}`

---

## 5. FLUXO DE TRABALHO PLANEJADO

```
[AGORA — PENDENTE]
1. Preencher QUESTIONARIO-BRANDING-SITE.md (arquivo em VI3/)
2. Escolher site de referência (URL)

[PRÓXIMA SESSÃO]
3. @analyst → processar respostas do questionário
4. @ux-design-expert → *scan {url de referência}
5. @ux-design-expert → *tokenize (extrair tokens DTCG)
6. @ux-design-expert → *audit (inventário de padrões)

[SESSÃO SEGUINTE]
7. @analyst → produzir Branding Book completo
8. @ux-design-expert → *build (componentes faltantes)
9. @ux-design-expert → *a11y-check (WCAG 2.1 AA)

[ENTREGA FINAL]
10. @dev → implementar site institucional (Next.js, vi3.com.br)
11. @devops → deploy
```

---

## 6. DECISÕES DA SESSÃO 2026-03-12

| Decisão | Detalhe |
|---------|---------|
| Stats band | **REMOVIDA** — dados não comprováveis, contradiz "evidência antes de opinião" |
| Stephany Pontes | **FUNDADORA** do Instituto. Rafael = professor e coordenador pedagógico |
| Tagline | 3 finalistas para teste A/B: "Rigor. Clareza. Impacto." / "Critério para o futuro." / "Inteligência aplicada, impacto duradouro." |
| Referências visuais | Linear.app (estética) + Reforge.com (estrutura) — aspiração Awwwards |
| Pirâmide 3D | Elemento visual icônico: pirâmide holográfica rotativa, 3 vértices (inteligências) + centro (valor). Three.js/WebGL |
| Site = portal | Links para funnels externos, não vende diretamente |
| Seções MVP | Home, Sobre/Manifesto, Fundadores, Ecossistema, Contato |

---

## 7. ARQUIVOS-CHAVE DESSE PROJETO

| Arquivo | Descrição | Status |
|---------|-----------|--------|
| `VI3/QUESTIONARIO-BRANDING-SITE.md` | 42 perguntas para branding + site | ✅ Preenchido |
| `VI3/BRANDING-BOOK-VI3.md` | Branding book formal v1.0 | ✅ Criado |
| `VI3/CONTEXTO-SITE-VI3.md` | Este arquivo | ✅ Atualizado |
| `VI3/vi3-tokens-components.html` | HTML guide atual da identidade | ✅ Existe |
| `VI3/instituto-vi3.html` | Protótipo HTML do site | ✅ Existe (precisa correções) |
| `VI3/logo fundo escuro.png` | Logo variante dark | ✅ Existe |
| `VI3/logo fundo claro.png` | Logo variante light | ✅ Existe |
| `VI3/animacao piramide site.txt` | Briefing da pirâmide 3D | ✅ Existe |
| `VI3/BRIEF-SITE-VI3.md` | Brief do site institucional | ❌ A criar |
| `docs/design/tokens.json` | Tokens DTCG | ❌ A criar |
| `docs/design/DESIGN-SYSTEM.md` | Design system formal | ❌ A criar |

---

## 7. CONTEXTO TÉCNICO

- **Stack atual do funil:** Next.js 16.1.6 + React 19 + Tailwind CSS 4 + TypeScript
- **Deploy:** Vercel
- **URL institucional:** `vi3.com.br`
- **Recomendação:** manter Next.js para o site institucional (consistência técnica)
- **Node local:** v24.13.0 (engines `>=18` nos projetos)

---

## 8. AGENTES ENVOLVIDOS

| Agente | Papel nesse projeto |
|--------|---------------------|
| `@analyst` (Atlas) | Branding book, brief, questionário, posicionamento |
| `@ux-design-expert` (Uma) | Design system, tokens, componentes, acessibilidade |
| `@dev` (Dex) | Implementação do site (Next.js) |
| `@architect` (Aria) | Arquitetura do site, decisões técnicas |
| `@devops` (Gage) | Deploy, CI/CD, domínio |

---

*Gerado por Uma (@ux-design-expert) + Atlas (@analyst) — Synkra AIOS*
*Projeto: Instituto VI3 — Site Institucional*
