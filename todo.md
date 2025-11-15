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
- [ ] Criar checkpoint v17
- [ ] Push para GitHub
