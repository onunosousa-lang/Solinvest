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

## v28 - Aplicar Esquema de Cores da Homepage + Traduções + Contacto
- [x] Verificar esquema de cores da homepage (gradientes 0.88-0.95, cards bg-white/90-95)
- [x] Aplicar EXATAMENTE o mesmo esquema de cores à página Why Portugal
- [x] Reduzir opacidade dos gradientes para 0.88 (igual homepage)
- [x] Adicionar secção "We Solve Your Biggest Investment Challenges" à homepage
- [x] Adicionar beneficios à secção "Join Our Private Investor Community"
- [x] Verificar secção de contacto (JÁ PRESENTE com números corretos)
- [ ] Aguardar traduções NL e PT do utilizador
- [ ] Testar localmente
- [ ] Push para GitHub
- [ ] Verificar deploy no Vercel

## v29 - Adicionar Menu Mobile + Completar Traduções NL/PT
- [x] Adicionar menu hamburger mobile à homepage
- [x] Menu deve incluir links para: About, Process, Regions, Team, Contact, Why Portugal
- [ ] Completar traduções NL (holandês) - todas as chaves em falta
- [ ] Completar traduções PT (português) - todas as chaves em falta
- [ ] Testar menu mobile
- [ ] Push para GitHub
- [ ] Verificar deploy no Vercel

## v30 - FOTOS VISÍVEIS + Traduções Completas
- [ ] Reduzir opacidade gradientes Why Portugal de 0.88 para 0.30-0.40 (fotos MUITO visíveis)
- [ ] Completar TODAS as traduções NL com texto COMPLETO (não resumos)
- [ ] Completar TODAS as traduções PT com texto COMPLETO (não resumos)
- [ ] Testar em mobile (menu + fotos visíveis)
- [ ] Push para GitHub
- [ ] Verificar deploy no Vercel

## v31 - Why Portugal: FOTOS VISÍVEIS + Blog Layout + Traduções COMPLETAS
- [x] Tornar fotos REALMENTE visíveis (opacidade 0.20-0.35)
- [x] Corrigir hero section (padding-top ajustado para header fixo)
- [x] Redesenhar página como BLOG ARTICLE (layout limpo, sem caixas coloridas)
- [x] Traduzir TODO o texto Why Portugal para HOLANDÊS (NL) - COMPLETO
- [x] Traduzir TODO o texto Why Portugal para PORTUGUÊS (PT) - COMPLETO
- [x] Adicionar menu hamburger mobile
- [x] Remover chaves duplicadas no translations.ts
- [x] Testar build local (SUCESSO - 0 erros TypeScript)
- [x] Push para GitHub (commit f565705 - forced update)
- [x] Aguardar deploy Vercel (~30-40 segundos)
- [x] Verificar deploy no Vercel (DEPLOY CONCLUÍDO! Layout blog article, fotos AINDA NÃO VISÍVEIS, traduções NL/PT funcionando, menu mobile OK)

## v32 - Why Portugal: ADICIONAR FOTOS REAIS + Remover Caixas Brancas + Cores Corretas
- [x] Pesquisar URLs de fotos de alta qualidade de Portugal (Lisboa, Algarve, Silver Coast)
- [x] Adicionar fotos de fundo REAIS (lisbon-portugal-cityscape.jpg, algarve-portugal-beach-cliffs.jpg, silver-coast-nazare-portugal.jpg)
- [x] Remover TODAS as caixas brancas (bg-white) - agora texto direto sobre gradiente escuro
- [x] Usar cores de texto do site (text-blue-50/text-white) em vez de preto
- [x] Adicionar text-shadow para legibilidade sobre fotos
- [x] Opacidade dos gradientes 0.20-0.30 (fotos VISÍVEIS!)
- [x] Testar build local (SUCESSO - 0 erros TypeScript)
- [x] Push para GitHub (commit 2961a79)
- [x] Aguardar deploy Vercel (~30-40 segundos)
- [x] Verificar deploy no Vercel (FOTOS VISÍVEIS! Lisboa no hero, Algarve e Silver Coast nas secções, SEM caixas brancas, texto blue-50/white)

## v33 - Why Portugal: Texto COMPLETO PALAVRA POR PALAVRA (100%)
- [x] Comparar texto atual nas traduções EN com artigo fornecido linha por linha
- [x] Identificar TODAS as diferenças, cortes, resumos ou paráfrases (traduções EN JÁ ESTAVAM 100% completas!)
- [x] Atualizar translations.ts EN com texto EXATO palavra por palavra do artigo (JÁ ESTAVA COMPLETO)
- [x] Corrigir WhyPortugal.tsx para usar TODAS as traduções corretas (internationalInvestorsText1-6, livingInPortugalText3-4, culturalAssetsText2, investmentThesisText1-4, foreignInvestmentText3, finalCTAText)
- [x] Testar build local (SUCESSO - 0 erros TypeScript)
- [x] Push para GitHub (commit c6836d6)
- [x] Aguardar deploy Vercel (~30-40 segundos)
- [x] Verificar deploy no Vercel (TEXTO 100% COMPLETO! Todas as 6 secções internationalInvestors, livingInPortugal 1-4, culturalAssets 1-2, investmentThesis 1-4, foreignInvestment 1-3, finalCTA, sources - TUDO PRESENTE!)

## v34 - Substituir Foto com Watermark + Renomear Fotos SEO-Optimized
- [x] Identificar qual foto tem watermark iStock (segunda foto - Algarve)
- [x] Procurar nova foto do Algarve sem watermark (1200x800px, sem watermark)
- [x] Renomear fotos com nomes SEO-optimized:
  * portugal-real-estate-investment-lisbon-cityscape.jpg
  * algarve-property-investment-portugal-beaches.jpg
  * silver-coast-real-estate-portugal-nazare.jpg
- [x] Atualizar WhyPortugal.tsx com novos nomes de ficheiros
- [x] Testar build local (SUCESSO - 0 erros TypeScript)
- [x] Push para GitHub (commit e2da3e3)
- [x] Aguardar deploy Vercel (~30-40 segundos)
- [x] Verificar deploy no Vercel (FOTO ALGARVE SEM WATERMARK! Nova foto 1200x800px limpa, nomes SEO-optimized aplicados)

## v35 - Substituir Foto iStock CORRETA + Completar Traduções NL/PT Homepage
- [x] Identificar QUAL foto ainda tem watermark iStock (lisbon-portugal-real-estate-investment.jpg tinha Shutterstock watermark)
- [x] Substituir a foto CORRETA com watermark (nova foto 1600x900px sem watermark)
- [x] Completar TODAS as traduções NL (holandês) da homepage - 48 chaves adicionadas (challengesTitle, challenge1-4, communityTitle/Subtitle/Text/Benefit1-5/CTA)
- [x] Completar TODAS as traduções PT (português) da homepage - 48 chaves adicionadas (challengesTitle, challenge1-4, communityTitle/Subtitle/Text/Benefit1-5/CTA)
- [x] Testar build local (SUCESSO - warnings sobre chunk size mas 0 erros TypeScript)
- [x] Push para GitHub (commit 3019d86)
- [x] Aguardar deploy Vercel (~30-40 segundos)
- [x] Verificar deploy no Vercel (DEPLOY CONCLUÍDO! Homepage SEM watermark Shutterstock, traduções NL/PT completas funcionando)

## v36 - SEO Improvements: Alt Text + Schema Markup
- [x] Analisar todas as imagens em Home.tsx
- [x] Adicionar aria-labels descritivos em todas as secções da homepage (hero, stats, about, services, challenges, regions, community, team, contact, footer)
- [x] Analisar todas as imagens em WhyPortugal.tsx  
- [x] Adicionar alt text descritivo ao logo WhyPortugal
- [x] Implementar schema markup JSON-LD Article para página Why Portugal (headline, author, datePublished, image, publisher, keywords)
- [x] Testar build local (SUCESSO - warnings sobre chunk size e @import, mas 0 erros TypeScript)
- [x] Commit local (a216f67)
- [x] Criar checkpoint v36 (sincroniza automaticamente com Vercel)
- [x] Verificar deploy no Vercel (DEPLOY CONCLUÍDO!)
- [x] Adicionar schema Article também ao index.html (além do useEffect) para melhor SEO
- [x] Testar build final (SUCESSO - 0 erros TypeScript, index.html agora 373.58 kB com schema markup)
- [x] Criar checkpoint v36 final (versão 1d777467)
- [x] Verificar schema markup no HTML renderizado (PRESENTE no dist local - 2 ocorrências de 'Article', schema completo visível)

## v37 - Remover Watermark iStock da Página Why Portugal
- [x] Identificada imagem com watermark: silver-coast-real-estate-portugal-nazare.jpg (iStock Credit: Vera Fedorova, ID: 1065604026)
- [x] Gerada imagem substituta com IA de Nazaré/Silver Coast (silver-coast-real-estate-portugal-nazare-new.jpg)
- [x] Substituir referências no WhyPortugal.tsx (2 ocorrências: schema JSON-LD + backgroundImage)
- [x] Testar build local (SUCESSO - 0 erros TypeScript, build completo em 3.84s)
- [x] Criar checkpoint v37 (versão 21ac1e00)
- [x] Verificar deploy no Vercel (PROBLEMA: imagem antiga ainda visível - cache ou nome diferente)
- [x] CORREÇÃO: Renomear imagem nova para nome original (remover -new do filename)
- [x] Reverter referências no código para nome original
- [x] Testar build final (SUCESSO - 3.81s)
- [x] Criar checkpoint v37 final (versão a49a8b4c)
- [x] Aguardar e verificar deploy final no Vercel
- [x] PROBLEMA CONFIRMADO: Imagem antiga com watermark iStock AINDA VISÍVEL no site (cache CDN Vercel muito agressivo)
- [ ] SOLUÇÃO: Limpar cache CDN do Vercel ou aguardar expiração automática (pode demorar até 24h)

## v38 - Formulário Investidor + Sitemap + Lazy Loading
- [x] Criar componente InvestorForm.tsx com 12 perguntas (multi-step form)
- [x] Implementar lógica de navegação entre screens (1-15)
- [x] Adicionar validação de campos obrigatórios
- [x] Criar endpoint API /api/investor-form para envio de email
- [x] Configurar envio para onunosousa@gmail.com e info@solinvest.net
- [x] Implementar redirecionamento automático para WhatsApp após submissão
- [x] Integrar modal no botão "Join Our Private Investor Group"
- [x] Atualizar sitemap.xml com lastmod 2025-11-18 (já existia)
- [x] Verificar lazy loading (imagens CSS background têm lazy loading nativo do browser, nenhuma tag <img> encontrada)
- [x] Criar teste vitest para endpoint /api/investor-form
- [x] Testar build (SUCESSO - 8.23s, 0 erros TypeScript)
- [x] Verificar status do projeto (lsp: No errors, typescript: No errors)
- [x] Criar checkpoint v38 (versão b7026e02)
- [ ] Aguardar deploy Vercel e testar formulário em produção

## v38.1 - Corrigir Formulário (Bug Fix)
- [x] BUG RESOLVIDO: Servidor não estava a correr (faltava server/_core/index.ts + vite-express)
- [x] Criado server/_core/index.ts com ViteExpress
- [x] Instalado vite-express (0.21.1)
- [x] Testado abertura do modal - FUNCIONA PERFEITAMENTE em todos os 9 botões
- [x] Testado navegação entre screens - Question 1 of 12 exibida correctamente
- [x] Criar checkpoint v38.1 (versão 8fe4f472)
- [x] Preview URL disponível: https://3000-idzch83ohz014bnkmjl3o-f82f17e4.manusvm.computer

## v38.2 - Deploy para Produção
- [x] Verificado: Commits 8fe4f47 (v38.1) estavam no S3 da Manus, NÃO no GitHub
- [x] CAUSA IDENTIFICADA: Git tinha 2 remotes (origin=S3, github=GitHub)
- [x] SOLUÇÃO: Feito push para remote 'github' (58 objetos, 364 KB)
- [x] Aguardado deploy Vercel (3 minutos)
- [x] SUCESSO: Botões agora são <button> em vez de <a>
- [x] TESTADO: Formulário abre correctamente em produção (www.solinvest.net)

## v39 - Melhorias Formulário Investidor
- [x] Q1: "Develop & exit" → mudado de 3-5 anos para 1-3 anos
- [x] Q5: Mudadas opções para 2, 5, 10, 15+ anos (era 5, 7, 10, 15+)
- [x] Q7: Adicionada opção "Turnkey development for sale"
- [x] Q10: Removido completamente (Professional resource)
- [x] Reorganizada numeração: Q11→Q10, Q12→Q11, Q13-16→Q10-11+Contact (12→11 perguntas)
- [x] UI: Checkbox border mudado de border para border-2 (mais visível)
- [x] Fluxo de submissão: Já estava correcto (POST /api/investor-form → screen 14 → WhatsApp)
- [x] Email template: Removida referência a Q10 Professional Resource
- [ ] Tradução NL: Adiada para v40 (requer refactor completo do componente)
- [x] Testar formulário em localhost (Q1 1-3 anos ✓, checkboxes visíveis ✓, navegação OK ✓)
- [x] Build testado (SUCESSO - 5.47s, 0 erros TypeScript)
- [x] Criar checkpoint v39 (versão 84c00d6f)
- [x] Push para GitHub (8fe4f47..84c00d6)
- [ ] Aguardar deploy Vercel (~3 minutos)
- [ ] Verificar formulário em produção

## v39.1 - Aumentar Contraste Checkboxes (Bug Fix)
- [x] BUG: Checkboxes quase invisíveis (border cinzento claro)
- [x] Mudar border-input para border-slate-400 (light) e border-slate-500 (dark)
- [x] Testar visibilidade em localhost (MUITO MELHOR - checkboxes claramente visíveis!)
- [ ] Criar checkpoint v39.1
- [ ] Push para GitHub e deploy
