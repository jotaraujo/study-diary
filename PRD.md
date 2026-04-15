# 📓 Study Diary — Product Requirements Document (PRD)

## 1. Visão Geral do Produto

**Nome:** Study Diary  
**Tipo:** Aplicação web SPA (Single Page Application)  
**Stack:** React 19 + TailwindCSS v4 + Vite  
**Objetivo:** Um diário de estudos pessoal onde o usuário registra suas sessões de estudo diárias, acompanha seu progresso ao longo da semana e visualiza métricas de evolução por meio de gráficos interativos.

### Decisões de Design Confirmadas

| Decisão | Escolha |
|---|---|
| TailwindCSS | v4 |
| Navegação | Tabs no topo |
| Cor de destaque | Roxo escuro (#6D28D9) |
| Idioma da interface | Português (pt-br) |
| Deploy | Vercel (a configurar) |

### Por que este projeto é bom para portfólio?

| Habilidade demonstrada | O que o recrutador vê |
|---|---|
| React com hooks modernos | Você sabe usar `useState`, `useEffect`, `useContext`, `useReducer` |
| Componentização | Código organizado, reutilizável e com responsabilidade única |
| Gerenciamento de estado | Capacidade de lidar com dados complexos no frontend |
| Persistência local | Sabe trabalhar com `localStorage` e serialização de dados |
| Visualização de dados | Consegue transformar dados em gráficos legíveis |
| UI/UX moderna | Senso estético e preocupação com experiência do usuário |
| Responsividade | A aplicação funciona em mobile e desktop |
| Acessibilidade | Atenção a boas práticas de inclusão |

---

## 2. Público-Alvo

- Estudantes que querem acompanhar sua rotina de estudos
- Autodidatas que aprendem por conta própria (programação, idiomas, concursos)
- Qualquer pessoa que queira manter um registro organizado do que estuda

---

## 3. Funcionalidades

### 3.1 MVP (Mínimo Produto Viável)

#### 📝 F1 — Registro Diário de Estudos
- O usuário pode registrar uma ou mais sessões de estudo por dia
- Cada sessão contém:
  - **Assunto** (texto livre, ex: "React Hooks")
  - **Horas estudadas** (número decimal, ex: 1.5)
  - **Anotações** (textarea com suporte a texto livre)
  - **Data** (preenchida automaticamente com a data atual, editável)
  - **Tag/Categoria** (seleção entre categorias pré-definidas como: Programação, Idiomas, Matemática, Leitura, Outro — ou categoria customizada)
- Validação: assunto e horas são obrigatórios; horas devem ser > 0

#### 📅 F2 — Calendário / Visão Diária
- Exibição de um calendário mensal mostrando:
  - Dias com registros destacados visualmente (indicador de cor/intensidade)
  - Total de horas do dia ao passar o mouse (tooltip)
- Ao clicar em um dia, exibe os registros daquele dia
- Dia atual destacado visualmente

#### 📊 F3 — Gráfico de Evolução Semanal
- Gráfico de barras ou de linha mostrando horas estudadas por dia da semana
- Semana atual exibida por padrão, com navegação para semanas anteriores
- Meta visual (linha tracejada mostrando a meta semanal, se definida)
- Total de horas da semana exibido em destaque

#### 📋 F4 — Resumo Semanal
- Seção dedicada que mostra:
  - Lista de todos os assuntos estudados na semana
  - Total de horas na semana (agrupado por categoria)
  - Anotações compiladas para revisão rápida (tipo um "digest" da semana)
  - Comparação com a semana anterior (ex: "+2h em relação à semana passada")

#### 💾 F5 — Persistência de Dados (localStorage)
- Todos os dados salvos no `localStorage` do navegador
- Dados carregados automaticamente ao abrir a aplicação
- Estrutura de dados organizada e versionada

---

### 3.2 Nice-to-Have (Após o MVP)

- 🎯 Metas de estudo com barra de progresso
- 🌙 Dark Mode / Light Mode com toggle
- 🔍 Busca e filtros de registros
- 📤 Exportar/Importar dados JSON

### 3.3 Futuro

- Autenticação com Firebase/Supabase
- Sincronização na nuvem
- PWA (Progressive Web App) para uso offline
- Streaks (sequência de dias estudados)
- Estatísticas mensais e anuais

---

## 4. Stack Tecnológica

| Tecnologia | Propósito |
|---|---|
| **React 19** | Framework UI |
| **Vite** | Build tool e dev server |
| **TailwindCSS v4** | Estilização utility-first |
| **Recharts** | Gráficos |
| **date-fns** | Manipulação de datas |
| **React Router v7** | Navegação SPA |
| **Lucide React** | Ícones |
| **localStorage** | Persistência |

---

## 5. Estrutura de Pastas

```
study-diary/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/                  # Button, Input, Modal, Card, Badge
│   │   ├── layout/              # Header, Navbar, Layout
│   │   ├── diary/               # EntryForm, EntryCard, EntryList
│   │   ├── calendar/            # Calendar, CalendarDay, DayDetail
│   │   ├── charts/              # WeeklyChart, CategoryBreakdown
│   │   └── summary/             # WeeklySummary, SubjectList, WeekComparison
│   ├── contexts/                # DiaryContext, ThemeContext
│   ├── hooks/                   # useLocalStorage, useDiary, useWeeklyData
│   ├── utils/                   # dateHelpers, statsCalculator, constants
│   ├── pages/                   # DashboardPage, DiaryPage, CalendarPage, SummaryPage
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── PRD.md
├── index.html
├── package.json
└── vite.config.js
```

---

## 6. Modelagem de Dados

### Entry (Registro)

```javascript
{
  id: "uuid-gerado",
  date: "2026-04-14",
  subject: "React Hooks",
  hours: 2.5,
  category: "programming",
  notes: "Aprendi useState...",
  createdAt: "2026-04-14T20:30:00.000Z",
  updatedAt: "2026-04-14T20:30:00.000Z"
}
```

### Settings (Configurações)

```javascript
{
  theme: "dark",
  weeklyGoal: 20,
  categories: [
    { id: "programming", label: "Programação", color: "#7C3AED" },
    { id: "languages", label: "Idiomas", color: "#06B6D4" },
    { id: "math", label: "Matemática", color: "#F59E0B" },
    { id: "reading", label: "Leitura", color: "#10B981" },
    { id: "other", label: "Outro", color: "#6B7280" }
  ],
  version: 1
}
```

---

## 7. Design System

### Paleta de Cores

| Token | Light Mode | Dark Mode | Uso |
|---|---|---|---|
| `--bg-primary` | `#FAFAFA` | `#0F172A` | Fundo principal |
| `--bg-secondary` | `#F1F5F9` | `#1E293B` | Cards e superfícies |
| `--text-primary` | `#0F172A` | `#F8FAFC` | Texto principal |
| `--text-secondary` | `#475569` | `#94A3B8` | Texto secundário |
| `--accent` | `#6D28D9` | `#A78BFA` | Cor de destaque (roxo escuro) |
| `--success` | `#059669` | `#34D399` | Sucesso / metas |
| `--danger` | `#DC2626` | `#F87171` | Erros / exclusão |

### Tipografia
- **Principal:** Inter (Google Fonts)
- **Monospace:** JetBrains Mono (para números/métricas)

### Estilo Visual
- Glassmorphism sutil nos cards
- Bordas arredondadas (`rounded-xl`)
- Micro-animações em hover e transições
- Gradientes sutis no header
- Tabs no topo para navegação

---

## 8. Plano de Implementação (5 Fases)

### Fase 1 — Fundação (Setup + Layout + Tema)
Projeto configurado, navegação funcional, theme toggle.

### Fase 2 — Registro de Estudos (Core Feature)
CRUD completo de registros com persistência.

### Fase 3 — Calendário e Navegação Temporal
Calendário mensal com heat map e detalhes por dia.

### Fase 4 — Gráficos e Resumo Semanal
Gráficos de evolução e digest semanal.

### Fase 5 — Polimento e Deploy
Responsividade, acessibilidade, README e deploy.
