# Lo-fi — SubTax

## Screens

### Login (`/login`)
- Email and password fields pre-filled with Ana's mock credentials
- "Entrar" button → Configuração inicial

### Configuração inicial (`/configuracao-inicial`)
- Hub page with 5 linked cards, each leading to a sub-page
- "Concluir configuração" button → Dashboard
- Sub-pages: Despesas por categoria, Bens patrimoniais, Dados pessoais, Página financeira individual, Recibos de vencimento

### Despesas por categoria (`/despesas-por-categoria`)
- Editable fields for 5 categories: Saúde (€480), Educação (€320), Habitação (€440), Transportes (€150), Outros (€85)
- Back/Save → Configuração inicial

### Bens patrimoniais (`/bens-patrimoniais`)
- Table: 3 assets (Conta poupança, Automóvel, Portfólio ETF) with category and value
- "+ Adicionar bem" action
- Back/Save → Configuração inicial

### Dados pessoais (`/dados-pessoais`)
- Form: Nome (Ana Silva), Idade (29), NIF, Estado civil (Solteira), Dependentes (0)
- Back/Save → Configuração inicial

### Página financeira individual (`/pagina-financeira-individual`)
- Link input for Subvisual financial page URL
- "Importar dados" action showing imported values (salary, perk balance, company balance)
- Back/Save → Configuração inicial

### Recibos de vencimento (`/recibos-de-vencimento`)
- File upload drop zone (PDF)
- List of 4 uploaded receipts (Jan–Apr 2026, €1,950 each)
- Back/Save → Configuração inicial

### Dashboard (`/dashboard`)
- **Section 1 — Salário e benefícios**: 3 cards (Salário líquido €1,950, Perk balance €350, Company balance €4,200). Link to add receipt.
- **Section 2 — Património**: Bar chart placeholder (Jan–Mai) with category legend. "Editar →" → Património.
- **Section 3 — Impostos**: 4 cards (Deduções provisórias €1,240, Escalão 3.º/28.5%, Impostos pagos €3,850, Poupança €620). "Editar deduções →" → Deduções IRS.
- AI Chat shortcut card → Assistente AI.

### Património (`/patrimonio`)
- Editable table: 3 assets × 5 months (Jan–Mai) with inline value fields
- "+ Adicionar linha" action
- "← Dashboard" back link

### Deduções IRS (`/deducoes-irs`)
- 4 categories (Saúde, Educação, Habitação, Despesas gerais) with editable values and descriptions
- Total summary (€1,490)
- Back/Save → Dashboard

### Assistente AI (`/assistente-ai`)
- **Sugestões automáticas**: 2 proactive suggestion cards (health deduction, PPR optimization)
- **Conversa**: 3-message mock conversation about education deductions
- Message input + send button
- "← Dashboard" back link
