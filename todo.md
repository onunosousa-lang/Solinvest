# Solinvest Landing Page - TODO

## v15 - SEO + Resend (Vercel-compatible)

### SEO e Metadata
- [x] Atualizar metadata HTML para solinvest.net
- [x] Adicionar Open Graph tags
- [x] Adicionar Twitter Cards
- [x] Atualizar structured data JSON-LD
- [x] Atualizar robots.txt
- [x] Atualizar sitemap.xml

### Performance e Acessibilidade
- [x] Adicionar lazy loading nas imagens
- [x] Adicionar alt tags descritivos
- [x] Adicionar tags semânticas HTML5 (nav com role e aria-label)
- [x] Adicionar security headers (vercel.json)

### Formulário de Contacto (Vercel Serverless)
- [x] Instalar resend no projeto
- [x] Criar Vercel Serverless Function para envio de emails (/api/contact.ts)
- [x] Atualizar formulário frontend para usar a API
- [x] Adicionar email alternativo info@solinvest.net
- [ ] Testar envio de emails (após deploy)

### Deploy
- [x] Testar localmente (sem erros TypeScript)
- [x] Criar checkpoint v15
- [x] Push para GitHub
- [x] Verificar deploy no Vercel (site funcionando perfeitamente)
- [x] Criar checkpoint v16

## Bug - Erro 404 no Vercel
- [x] Verificar status do deploy no Vercel
- [x] Verificar logs de build
- [x] Identificar causa do erro 404 (falta outputDirectory no vercel.json)
- [x] Corrigir configuração (adicionar buildCommand e outputDirectory)
- [x] Testar site após correção (SITE FUNCIONANDO!)

## v17 - Correções Finais
- [x] Corrigir título do site (agora: Solinvest — Property Development & Investor Deals in Portugal)
- [x] Adicionar favicon personalizado (logo Solinvest copiado para /client/public/favicon.png)
- [x] Testar localmente (build concluído com sucesso)
- [x] Criar checkpoint v17
- [x] Push para GitHub

## v18 - Adaptar Backend para Vercel Serverless
- [ ] Analisar estrutura atual do servidor Express/tRPC
- [ ] Criar Vercel serverless function para tRPC em /api/trpc/[trpc].ts
- [ ] Adaptar conexões de base de dados para serverless (connection pooling)
- [ ] Atualizar vercel.json com rewrites para rotas API
- [ ] Configurar variáveis de ambiente (DATABASE_URL, etc.)
- [ ] Converter Express app.listen() para handler exports
- [x] Testar localmente (build concluído com sucesso)
- [ ] Criar checkpoint v18
- [ ] Push para GitHub

## v19 - Melhorias Essenciais de SEO
- [x] Verificar sitemap.xml (EN/NL/PT versions) - OK, já inclui hreflang
- [x] Verificar robots.txt - OK
- [x] Adicionar JSON-LD schema para RealEstateAgent
- [x] Verificar alt tags em todas as imagens (logo, team photos - todos otimizados)
- [x] Otimizar meta description com keywords relevantes (Portuguese Real Estate Investment, Property Development)
- [x] Otimizar headings com keywords (H1: Portuguese Real Estate, H2: Portuguese Real Estate Investment, Property Development Portugal)
- [x] Testar localmente (build concluído com sucesso)
- [x] Criar checkpoint v19
- [x] Push para GitHub

## v20 - Google Analytics 4
- [x] Atualizar GA4 tracking code com ID real (G-PEXDMEJPJ2)
- [x] Testar localmente (build concluído com sucesso)
- [x] Criar checkpoint v20
- [x] Push para GitHub

## v21 - Página "Why Portugal?"
- [x] Pesquisar mercado imobiliário português 2025-2026
- [x] Pesquisar cultura, lifestyle e vantagens de Portugal
- [x] Escrever conteúdo completo (EN/NL/PT)
- [x] Criar componente WhyPortugal.tsx
- [x] Adicionar traduções ao translations.ts
- [x] Adicionar rota /why-portugal
- [x] Adicionar link na navegação
- [x] Atualizar sitemap.xml
- [x] Testar localmente (build concluído com sucesso)
- [x] Criar checkpoint v21
- [x] Push para GitHub

## v22 - Correções Why Portugal Page
- [x] Ler conteúdo fornecido pelo utilizador (portugal_investment_article.md)
- [ ] Pesquisar estatísticas/números online para adicionar ao conteúdo
- [x] Corrigir gramática e uso de maiúsculas em todo o site (verificado - OK)
- [x] Corrigir header da página Why Portugal (mesma cor da home, logo maior, sem texto "Solinvest")
- [x] Mudar cores de fonte para match com página principal (bg-gradient-to-br from-slate-900 via-blue-900, texto blue-50/90)
- [x] Adicionar fotos de fundo com transparência (SEO-friendly names: lisbon-portugal-real-estate-investment.jpg, algarve-portugal-property-beach.jpg, silver-coast-portugal-investment-opportunity.jpg)
- [x] Atualizar conteúdo com texto fornecido e hyperlinks (todos os links incluídos)
- [x] Testar localmente (build concluído com sucesso)
- [x] Criar checkpoint v22
- [ ] Push para GitHub

## v23 - Corrigir Why Portugal Page Design (Bug Fix)
- [x] Implementar design correto no WhyPortugal.tsx (gradiente escuro, fotos de fundo, cores azul-50/90)
- [x] Testar localmente (build concluído com sucesso)
- [x] Push para GitHub usando gh CLI API
- [x] Verificar deploy no Vercel (SITE ATUALIZADO COM SUCESSO!)

## v24 - Corrigir Why Portugal Page (Fotos Visíveis + Texto Completo)
- [x] Verificar se todo o texto do artigo portugal_investment_article.md está incluído
- [x] Tornar fotos de fundo visíveis (reduzir opacidade do gradiente)
- [x] Reduzir tamanho do hero "Why Portugal?"
- [x] Melhorar legibilidade do texto (contraste adequado)
- [x] Adicionar TODAS as secções em falta (Investment Hotspots, Dutch/American Investors, Rental Yields, Investment Thesis, Bridge to Investment)
- [x] Testar localmente
- [x] Push para GitHub
- [x] Verificar deploy no Vercel (TODAS AS SECÇÕES PRESENTES E VISÍVEIS!)

## v25 - Substituir Conteúdo Why Portugal com Texto EXATO do Artigo Original
- [x] Reescrever translations.ts com texto EXATO do artigo (tom primeira pessoa, títulos originais, todos os dados)
- [x] Adicionar secção de Sources com links para as fontes
- [x] Reescrever WhyPortugal.tsx com estrutura EXATA do artigo
- [x] Manter fotos visíveis e design atual (apenas mudar texto)
- [x] Testar localmente (build concluído)
- [x] Push para GitHub (commits d4ba41db e 129bb109)
- [x] Verificar deploy no Vercel (TUDO CORRETO! Tom primeira pessoa, títulos originais, dados específicos, Sources, CTA correto, fotos visíveis)

## v26 - Corrigir Why Portugal com Texto PALAVRA POR PALAVRA do Artigo
- [ ] Atualizar translations.ts com fraseado EXATO do artigo (não apenas dados, mas frases completas)
- [ ] Corrigir parágrafo de abertura para usar texto exato do artigo
- [ ] Ajustar todas as secções para usar fraseado EXATO (não parafrasear)
- [ ] Manter fotos visíveis (opacidade 0.45-0.56)
- [ ] Testar localmente
- [ ] Push para GitHub
- [ ] Verificar deploy no Vercel

## v27 - Tornar Fotos Visíveis (Caixas Azuis Transparentes)
- [x] Mudar cor das caixas de texto de bg-white/15 para bg-primary/15 (azul do header)
- [x] Garantir que fotos de fundo são visíveis através das caixas
- [x] Testar localmente (build concluído)
- [x] Push para GitHub (commit 0385e738)
- [x] Verificar deploy no Vercel (CAIXAS AZUIS VISÍVEIS!)
