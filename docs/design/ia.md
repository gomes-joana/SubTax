# IA — SubTax

## Glossary
- Património: the set of financial assets a team member owns (real estate, savings, investments, etc.), tracked monthly by value.
- Deduções IRS: Portuguese income tax deductions, organized by legally defined categories (health, education, housing, etc.).
- Escalão: the progressive income tax bracket the user falls into based on taxable income.
- Perk balance: the monetary value of company perks allocated to the team member.
- Company balance: the team member's overall financial position within Subvisual (salary, perks, benefits combined).
- Recibo de vencimento: a monthly salary receipt issued by the company, uploaded to track gross/net income over time.

## Sitemap
- Login — authenticate with company credentials
- Configuração inicial — provide the financial data needed to populate the dashboard
  - Despesas por categoria — enter spending broken down by category
  - Bens patrimoniais — list owned assets and their current value
  - Dados pessoais — enter age and other personal details
  - Página financeira individual — import data from the Subvisual individual financial page
  - Recibos de vencimento — upload salary receipts
- Dashboard — overview of financial position and tax situation
- Património — track asset values month by month in an editable table
- Deduções IRS — review and edit tax deduction amounts per category
- Assistente AI — ask tax and finance questions and receive proactive optimization suggestions

## Flows

### Configuração inicial
Login → Configuração inicial → Dashboard

### Editar património
Dashboard → Património → Dashboard

### Editar deduções IRS
Dashboard → Deduções IRS → Dashboard

### Adicionar recibo de vencimento
Dashboard → Configuração inicial → Dashboard

### Consultar assistente AI
Dashboard → Assistente AI → Dashboard

## Open questions
- What authentication method is used for Login — Subvisual SSO, email/password, or something else?
- Configuração inicial sub-screens (Despesas por categoria, Bens patrimoniais, etc.) — are these sequential wizard steps or independently accessible sections?
- Can users return to Configuração inicial after the first setup to update their base data, or do edits happen only through Património and Deduções IRS?
- Does Assistente AI live as a sidebar/overlay accessible from any screen, or is it a standalone page navigated to from the Dashboard?
- Are there any roles or permissions (e.g. admin vs. team member)?
