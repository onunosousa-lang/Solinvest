export type Language = 'en' | 'nl' | 'pt';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero Section
    heroTitle: "Invest in High-ROI Portuguese Real Estate",
    heroSubtitle: "Exclusive off-market opportunities. From sourcing to sale, we handle everything. Join our private investor group for unique findings and exceptional returns.",
    heroCTA: "Join Our Private Group Now",
    scrollDown: "Scroll to discover more",
    
    // Stats Section
    statsTitle: "Portuguese Real Estate Investment: Europe's #1 Property Market in 2025",
    stat1Value: "17%",
    stat1Label: "YoY Growth in 2025",
    stat1Desc: "Europe's Fastest-Rising Market",
    stat2Value: "5-7%",
    stat2Label: "Gross Yields",
    stat2Desc: "Prime Lisbon & Porto Rentals",
    stat3Value: "226%",
    stat3Label: "Total Appreciation (2015-2025)",
    stat3Desc: "Europe's Top Performer",
    stat4Value: "€2,900",
    stat4Label: "Avg. per m²",
    stat4Desc: "National—Affordable Entry to EU Growth",
    
    // About Section
    aboutTitle: "Full-Service Property Development Portugal",
    aboutSubtitle: "From Research to Sale: We Handle Everything",
    aboutText: "Solinvest is a boutique real-estate development and advisory firm operating between the Netherlands and Portugal.\n\nWe provide a full end-to-end development service: sourcing high-potential properties, securing the right investors, managing the entire design and construction process, and handling the sales strategy.\n\nOur focus includes rural estates, coastal properties, villas, and unique development opportunities—transforming them into high-quality, high-value assets.\n\nFor individuals dreaming of a place in the sun, we offer trusted guidance, access to real market prices, and a fully managed, hassle-free experience from acquisition to completion.\n\nA professional, transparent bridge between investors, development, and Portuguese real estate.",
    aboutVision: "Our Vision: Create developments that deliver exceptional ROI while preserving the authentic charm of Portuguese living.",
    
    // Team Section
    teamTitle: "Meet Your Partners: Expertise You Can Trust",
    teamSubtitle: "A dedicated and passionate team",
    nunoName: "Nuno Sousa",
    nunoRole: "Construction Specialist & Team Leader",
    nunoDesc: "With over 10 years of hands-on experience in construction and project management, Nuno leads the Solinvest development team with precision and passion. His expertise spans sustainable building practices, cost-efficient execution, and quality control across all project phases. From site assessment to final delivery, Nuno ensures every property transformation meets the highest standards while staying on budget and schedule. His collaborative leadership style and deep understanding of Portuguese construction regulations make him an invaluable partner in delivering exceptional real estate projects.",
    christianName: "Christiaan Ticheler",
    christianRole: "Real Estate Strategy & Finance",
    christianDesc: "Christiaan brings over 15 years of institutional real estate investment experience. His career spans portfolio management at major Dutch pension funds, where he managed €650 million in global real estate allocations. As interim Asset Manager at Arcona Capital, he led complete portfolio due diligence for private equity refinancing. Since 2016, he operates Ticheler Taxatie (property valuations) and co-founded GroenVast Bouw (modular construction). His analytical skills and extensive network make him the strategic financial backbone of Solinvest.",
    
    // Process Section
    processTitle: "Our Value Creation Process",
    process1Title: "1. Property Sourcing",
    process1Desc: "We find off-market plots, villas, and estates with strong growth potential in Portugal's most promising regions.",
    process2Title: "2. Development Management",
    process2Desc: "We manage every phase: concept, design, permits, construction, and finishes. Focus on sustainable design and natural materials.",
    process3Title: "3. Partnership Structures",
    process3Desc: "We offer clear co-investment or full ownership models, tailored to your goals.",
    process4Title: "4. Exit & Yield Strategies",
    process4Desc: "We handle sales, marketing, and rental management to maximize your returns.",
    
    // Projects Section
    projectsTitle: "Featured Projects & Opportunities",
    projectsSubtitle: "Explore our portfolio of high-potential developments",
    
    // Contact Section
    contactTitle: "Ready to Invest in Portugal?",
    contactSubtitle: "Join our exclusive investor group for off-market deals and expert guidance",
    contactName: "Your Name",
    contactEmail: "Your Email",
    contactMessage: "Tell us about your investment goals",
    contactSubmit: "Send Message",
    contactSuccess: "Message sent successfully! We'll be in touch soon.",
    contactError: "Failed to send message. Please try again.",
    
    // Footer
    footerTagline: "Your trusted partner for Portuguese real estate development and investment",
    footerAbout: "About",
    footerProcess: "Process",
    footerProjects: "Projects",
    footerContact: "Contact",
    footerRights: "All rights reserved.",
    
    // Why Portugal Page - EXACT ARTICLE CONTENT
    whyPortugalTitle: "Why Portugal? The European Property Investment Opportunity Dutch and American Investors Are Discovering",
    whyPortugalSubtitle: "Europe's Fastest-Growing Real Estate Market Meets Mediterranean Living",
    whyPortugalIntro: "When Dutch investors and international family offices ask us where we're seeing the most compelling risk-adjusted returns in European real estate investment, the answer increasingly points to Portugal. It's not just about the numbers—though those are impressive—it's about the convergence of market fundamentals, demographic trends, and quality-of-life factors that create sustainable, long-term value for property investors.",
    
    marketPerformanceTitle: "Portugal Property Market Performance: The Numbers Tell a Story",
    marketPerformanceText1: "Portugal led the European Union with 15.2% year-on-year property price growth in the first half of 2025. That's not speculation-driven froth; it's demand meeting constrained supply in a politically stable, economically reforming democracy on Europe's Atlantic coast.",
    marketPerformanceText2: "The median appraisal for apartments in Portugal reached €2,105 per square meter by April 2025—a 19% jump from the previous year. Portuguese villas posted an 11% gain across the country. These figures reflect a real estate market that's found its footing after years of post-financial crisis recovery and recent pandemic-era repositioning.",
    marketPerformanceText3: "More importantly, the growth trajectory appears sustainable. Property market forecasts suggest 5-8% appreciation in 2025, moderating to 2-4% in 2026 as the market matures. This is exactly what sophisticated real estate investors want to see: robust growth transitioning to steady, predictable appreciation rather than boom-bust volatility.",
    
    statEULeader: "15.2% YoY Price Growth (H1 2025) - EU Leader",
    statGrowth2025: "5-8% Projected Growth 2025",
    statPricePerSqm: "€2,105 Median Price per m² (Apartments)",
    
    investmentHotspotsTitle: "Investment Hotspots: Where Smart Money is Moving in Portugal",
    investmentHotspotsText1: "While Lisbon property remains a cornerstone investment with established rental markets and international appeal, we're seeing particularly compelling opportunities across Portugal's diverse regions. The Silver Coast (Costa de Prata), Setúbal Peninsula, and the Algarve represent three distinct investment profiles—each offering strong fundamentals at different price points and with different lifestyle characteristics.",
    investmentHotspotsText2: "The Silver Coast delivers Atlantic-facing beaches, growing expat communities, and prices significantly below Lisbon while maintaining easy access to the capital. Setúbal offers proximity to Lisbon's employment markets, stunning coastal landscapes, and emerging development potential. The Algarve combines established international appeal, year-round tourism infrastructure, and strong rental yield potential.",
    investmentHotspotsText3: "These aren't speculative bets on unknown markets. They're established regions with infrastructure, international airports, and proven demand, now benefiting from both local Portuguese buyers and the surge in international investment. For Dutch investors and international buyers seeking renovation projects, new build developments, or turnkey investment properties, these regions offer exceptional risk-adjusted returns.",
    
    internationalInvestorsTitle: "The Dutch, American, and Northern European Investment Wave",
    internationalInvestorsText1: "What's particularly noteworthy is the dramatic shift in international capital sources flowing into Portuguese real estate. American property investors have emerged as the dominant force in Portugal's market. In 2024, Americans led Golden Visa applications with 406 visas, surpassing China, the UK, Brazil, and India. More significantly, US institutional investment reached $12 billion in 2024 alone, with $2.5 billion of institutional capital deployed over the past five years.",
    internationalInvestorsText2: "The trend is accelerating. US client share in Portuguese property investments jumped from 48% in 2024 to 58% in the first quarter of 2025—a remarkable 10-percentage-point increase in just months. The number of American residents in Portugal surged 36.3% year-over-year, from 14,129 to 19,258, while the American population in Portugal increased sevenfold between 2017 and 2024.",
    internationalInvestorsText3: "Dutch investors, with their tradition of international real estate investment and affinity for Portuguese climate and culture, are increasingly active in the market. Northern European investors from Germany, France, and the UK continue as major players. The UK maintains steady activity despite Brexit adjustments, while French and German buyers show particularly strong interest in renovation projects and lifestyle properties.",
    internationalInvestorsText4: "The Algarve remains a powerhouse for international investment with its established infrastructure, year-round appeal, and strong rental markets. Lisbon continues to attract institutional capital and high-value residential buyers. The Silver Coast and Setúbal Peninsula are emerging as the smart money destinations—offering similar lifestyle benefits and accessibility to Lisbon at significantly lower entry points, making them ideal for renovation projects and development opportunities that Dutch and American investors are actively seeking.",
    internationalInvestorsText5: "What's driving this transatlantic and Northern European capital flow to Portuguese real estate? American investors cite political uncertainty at home, concerns about social division, and the search for lifestyle alternatives that offer safety, stability, and European access. Dutch and Northern European investors are drawn by Portugal's superior value proposition compared to traditional markets like France, Spain, and Italy, combined with the country's EU membership, excellent climate, and strong rental yields.",
    internationalInvestorsText6: "This isn't tourism-driven speculation. These are high-capacity investors seeking portfolio diversification and European lifestyle access, with Americans preferring higher-value properties in prime locations and Northern Europeans focusing on both residential and renovation properties across multiple regions.",
    
    foreignInvestmentTitle: "Foreign Investment in Portugal: Capital Flows and Investor Sentiment",
    foreignInvestmentText1: "Foreign direct investment into Portugal hit €13.2 billion in 2024, up 19% year-over-year, with real estate development absorbing a substantial share. What's noteworthy is the diversity of capital sources: American buyers, Dutch investors, British expats, Brazilian diaspora investors, and pan-European funds all maintain active interest despite the 2023 termination of the Golden Visa property route.",
    foreignInvestmentText2: "That last point deserves emphasis. The Portuguese property market didn't collapse when the Golden Visa real estate incentive was removed. It adapted and continued growing, suggesting the fundamentals—not just the incentives—are driving investment decisions.",
    foreignInvestmentText3: "Ernst & Young's 2024 investor sentiment survey captured the mood: 84% of investors plan to expand Portuguese operations this year, compared to 72% across the Eurozone. Perhaps more telling, 77% believe Portugal's attractiveness will continue increasing—up dramatically from 49% just three years ago. Sentiment is moving in the right direction for real estate investors.",
    
    rentalYieldsTitle: "Portugal Rental Yields: The Income Proposition",
    rentalYieldsText: "Rental yields in central Portuguese locations typically range between 5-7%, supported by diverse tenant demand: local professionals, university students, corporate expats, and the growing remote-work population that discovered Portugal during the pandemic and decided to stay. These aren't speculative yields dependent on Airbnb arbitrage in tourist zones. They're sustainable returns from fundamental residential demand in a country where homeownership rates are high but rental markets in urban centers remain tight. For Dutch investors and international buyers seeking cash-flow positive European property investments, Portugal delivers compelling income returns.",
    
    livingInPortugalTitle: "Living in Portugal: Beyond the Investment Spreadsheet",
    livingInPortugalText1: "Real estate investment decisions aren't made in a vacuum. The quality-of-life factors matter, particularly for investors considering personal use, retirement planning, or family estate planning with a lifestyle component.",
    livingInPortugalText2: "Portugal ranks third globally in safety and fourth in peace according to the Global Peace Index. It climbed to sixth place worldwide in overall lifestyle rankings for 2025, surpassing the Netherlands, UK, and Norway. These aren't marketing claims; they're measurable indices that correlate with long-term political stability and social cohesion—factors that protect property asset values.",
    livingInPortugalText3: "The Mediterranean climate delivers over 300 days of sunshine annually, particularly in the Algarve and Silver Coast regions. The cost of living in Portugal runs approximately 30% below the United States, with groceries 30-60% cheaper, restaurants 32-38% less expensive, and rental prices about 40% more affordable than comparable American cities.",
    livingInPortugalText4: "For investors considering personal use or family planning, these factors translate to real value. A €500,000 Portuguese property doesn't just generate rental income; it provides a high-quality European base at a fraction of the carrying cost of equivalent properties in Paris, London, Amsterdam, or Barcelona.",
    
    statSunnyDays: "300+ Days of Sunshine Per Year",
    statSafetyRank: "#3 Global Safety Ranking",
    statLowerCost: "30% Lower Cost of Living vs US",
    statRentalYields: "5-7% Typical Rental Yields",
    
    culturalAssetsTitle: "Portugal's Cultural and Strategic Assets for International Investors",
    culturalAssetsText1: "Portugal offers 17 UNESCO World Heritage Sites, from Lisbon's historic center to the Douro Valley's wine terraces. The country's maritime heritage, combined with centuries of global trade, created a sophisticated, cosmopolitan culture that welcomes international residents while maintaining strong traditional identity—a key factor for Dutch and American expats considering relocation.",
    culturalAssetsText2: "The geographic position on Europe's Atlantic coast provides strategic advantages for international property investors. Portugal serves as a gateway between Europe, Africa, and the Americas, with Lisbon and Porto functioning as major transportation hubs. You're two hours from London, three from New York's time zone, and ideally positioned for European business travel—particularly relevant for Dutch investors maintaining business ties across Europe.",
    
    taxBenefitsTitle: "Portugal Tax Benefits: The Non-Habitual Resident (NHR) Program",
    taxBenefitsText: "Portugal's Non-Habitual Resident tax regime offers new residents significant benefits, including a flat 20% income tax rate for qualifying professions and exemptions on various foreign income streams, including dividends and rental earnings from non-Portuguese sources. Available for ten years, the NHR program represents genuine tax efficiency for high-net-worth Dutch, American, and European individuals considering EU residency. We're not tax advisors, and individual circumstances vary, but the framework exists for structuring tax-efficient European residency in ways that few other EU countries currently offer. This makes Portugal particularly attractive for Dutch investors and American expats seeking European property investment with favorable tax treatment.",
    
    investmentThesisTitle: "The Investment Thesis: Why Portugal Real Estate in 2025",
    investmentThesisText1: "Portugal in 2025 presents what we look for in international real estate markets: strong fundamentals, positive demographic trends, improving infrastructure, stable governance, and a quality-of-life proposition that attracts and retains the professional and entrepreneurial classes who drive long-term property demand.",
    investmentThesisText2: "The remarkable surge in American, Dutch, and Northern European investment—with US investors now comprising 58% of the market and American residents increasing sevenfold since 2017—reflects more than a passing trend. It signals a fundamental reassessment of where sophisticated international capital sees the best combination of returns, stability, and lifestyle value in Europe.",
    investmentThesisText3: "The Portuguese property market has matured beyond the bargain-hunting phase of the 2010s but hasn't reached the valuation saturation of coastal Spain, France, or Italy. There's a window here—not forever, but for the next several years—to enter a European real estate market with genuine growth potential at prices that still make sense.",
    investmentThesisText4: "For Dutch investors, American buyers, and international families seeking portfolio diversification outside traditional markets, tax-efficient European residency options, or simply a Mediterranean property that generates income while appreciating, Portugal warrants serious consideration.",
    
    bridgeToInvestmentTitle: "Your Bridge to Portuguese Property Investment",
    bridgeToInvestmentText: "Whether you're a Dutch investor seeking renovation projects along the Silver Coast, an American family exploring European lifestyle property, or an international buyer looking for turnkey real estate development opportunities, Portugal offers a compelling combination of investment returns and quality of life. The question isn't whether Portugal is a good market. The question is whether it fits your investment objectives, time horizon, and portfolio strategy. That's a conversation worth having.",
    
    finalCTAText: "Ready to explore Portuguese property investment opportunities? Solinvest connects Dutch, American, and international investors with high-quality real estate development projects in Portugal. From deal sourcing and due diligence to turnkey delivery, we provide full-service property investment management.",
    finalCTAButton: "Contact Us to Discuss Your Investment Strategy",
    
    sourcesTitle: "Sources",
    source1: "Essential Business: Portugal in the sights of US investors",
    source2: "Portugal Resident: US investors flock to Portugal's stable market",
    source3: "The Portugal News: Escaping to Portugal: The Rising Wave of American Real Estate Investment",
    source4: "Travel And Tour World: Portugal Sees Record US Buyer Interest",
    source5: "Portugal Buyers Agent: Portugal Real Estate Guide",
    
    backToHome: "← Back to Home",
    getStartedCTA: "Get Started Today",
  },
  
  nl: {
    // Hero Section
    heroTitle: "Investeer in Hoog Rendement Vastgoed in Portugal",
    heroSubtitle: "Exclusieve off-market kansen. Van sourcing tot verkoop, wij regelen alles. Sluit je aan bij onze privé investeerdersgroep voor unieke vondsten en uitzonderlijke rendementen.",
    heroCTA: "Word Nu Lid van Onze Privégroep",
    scrollDown: "Scroll om meer te ontdekken",
    
    // Stats Section
    statsTitle: "Portugal: Europa's #1 Vastgoedmarkt in 2025",
    stat1Value: "17%",
    stat1Label: "Groei in 2025",
    stat1Desc: "Europa's Snelst Groeiende Markt",
    stat2Value: "5-7%",
    stat2Label: "Bruto Rendementen",
    stat2Desc: "Prime Lissabon & Porto Verhuur",
    stat3Value: "226%",
    stat3Label: "Totale Waardevermeerdering (2015-2025)",
    stat3Desc: "Europa's Toppresteerder",
    stat4Value: "€2.900",
    stat4Label: "Gem. per m²",
    stat4Desc: "Nationaal—Betaalbare Toegang tot EU Groei",
    
    // About Section
    aboutTitle: "Full-Service Vastgoedontwikkeling Portugal",
    aboutSubtitle: "Van Onderzoek tot Verkoop: Wij Regelen Alles",
    aboutText: "Solinvest is een boutique vastgoedontwikkelings- en adviesbureau dat opereert tussen Nederland en Portugal.\n\nWij bieden een complete end-to-end ontwikkelingsservice: het vinden van hoogpotentiële eigendommen, het veiligstellen van de juiste investeerders, het beheren van het volledige ontwerp- en bouwproces, en het afhandelen van de verkoopstrategie.\n\nOnze focus omvat landelijke landgoederen, kustwoningen, villa's en unieke ontwikkelingsmogelijkheden—deze transformeren we in hoogwaardige, waardevolle assets.\n\nVoor individuen die dromen van een plek in de zon, bieden we betrouwbare begeleiding, toegang tot echte marktprijzen, en een volledig beheerde, zorgeloze ervaring van aankoop tot oplevering.\n\nEen professionele, transparante brug tussen investeerders, ontwikkeling en Portugees vastgoed.",
    aboutVision: "Onze Visie: Ontwikkelingen creëren die uitzonderlijk ROI leveren terwijl de authentieke charme van het Portugese leven behouden blijft.",
    
    // Team Section
    teamTitle: "Ontmoet Je Partners: Expertise Die Je Kunt Vertrouwen",
    teamSubtitle: "Een toegewijd en gepassioneerd team",
    nunoName: "Nuno Sousa",
    nunoRole: "Bouwspecialist & Teamleider",
    nunoDesc: "Met meer dan 10 jaar praktijkervaring in bouw en projectmanagement leidt Nuno het Solinvest ontwikkelingsteam met precisie en passie. Zijn expertise omvat duurzame bouwpraktijken, kostenefficiënte uitvoering en kwaliteitscontrole in alle projectfasen. Van locatiebeoordeling tot eindoplevering zorgt Nuno ervoor dat elke vastgoedtransformatie aan de hoogste normen voldoet terwijl het binnen budget en planning blijft. Zijn collaboratieve leiderschapsstijl en diepgaande kennis van Portugese bouwregels maken hem een onschatbare partner bij het leveren van uitzonderlijke vastgoedprojecten.",
    christianName: "Christiaan Ticheler",
    christianRole: "Vastgoedstrategie & Financiën",
    christianDesc: "Christiaan brengt meer dan 15 jaar institutionele vastgoedbeleggingservaring mee. Zijn carrière omvat portfoliomanagement bij grote Nederlandse pensioenfondsen, waar hij €650 miljoen aan mondiale vastgoedallocaties beheerde. Als interim Asset Manager bij Arcona Capital leidde hij complete portfolio due diligence voor private equity herfinanciering. Sinds 2016 exploiteert hij Ticheler Taxatie (vastgoedtaxaties) en richtte hij GroenVast Bouw (modulaire bouw) mee op. Zijn analytische vaardigheden en uitgebreide netwerk maken hem de strategische financiële ruggengraat van Solinvest.",
    
    // Process Section
    processTitle: "Ons Waardecreatie Proces",
    process1Title: "1. Vastgoed Sourcing",
    process1Desc: "We vinden off-market percelen, villa's en landgoederen met sterk groeipotentieel in Portugal's meest veelbelovende regio's.",
    process2Title: "2. Ontwikkelingsmanagement",
    process2Desc: "We beheren elke fase: concept, ontwerp, vergunningen, bouw en afwerking. Focus op duurzaam ontwerp en natuurlijke materialen.",
    process3Title: "3. Partnerschapsstructuren",
    process3Desc: "We bieden duidelijke co-investerings- of volledige eigendomsmodellen, afgestemd op jouw doelen.",
    process4Title: "4. Exit & Rendement Strategieën",
    process4Desc: "We verzorgen verkoop, marketing en verhuurbeheer om jouw rendement te maximaliseren.",
    
    // Projects Section
    projectsTitle: "Uitgelichte Projecten & Kansen",
    projectsSubtitle: "Verken onze portfolio van hoogpotentiële ontwikkelingen",
    
    // Contact Section
    contactTitle: "Klaar om te Investeren in Portugal?",
    contactSubtitle: "Sluit je aan bij onze exclusieve investeerdersgroep voor off-market deals en deskundig advies",
    contactName: "Jouw Naam",
    contactEmail: "Jouw Email",
    contactMessage: "Vertel ons over jouw investeringsdoelen",
    contactSubmit: "Verstuur Bericht",
    contactSuccess: "Bericht succesvol verzonden! We nemen binnenkort contact op.",
    contactError: "Verzenden mislukt. Probeer het opnieuw.",
    
    // Footer
    footerTagline: "Jouw vertrouwde partner voor Portugese vastgoedontwikkeling en investeringen",
    footerAbout: "Over",
    footerProcess: "Proces",
    footerProjects: "Projecten",
    footerContact: "Contact",
    footerRights: "Alle rechten voorbehouden.",
    
    // Why Portugal Page - Dutch translations needed
    whyPortugalTitle: "Waarom Portugal?",
    whyPortugalSubtitle: "Europa's Snelst Groeiende Vastgoedmarkt met 300+ Dagen Zon",
    backToHome: "← Terug naar Home",
    getStartedCTA: "Begin Vandaag",
  },
  
  pt: {
    // Hero Section
    heroTitle: "Invista em Imobiliário Português de Alto ROI",
    heroSubtitle: "Oportunidades exclusivas fora do mercado. Da pesquisa à venda, tratamos de tudo. Junte-se ao nosso grupo privado de investidores para descobertas únicas e retornos excecionais.",
    heroCTA: "Junte-se ao Nosso Grupo Privado Agora",
    scrollDown: "Role para descobrir mais",
    
    // Stats Section
    statsTitle: "Investimento Imobiliário Português: Mercado Imobiliário #1 da Europa em 2025",
    stat1Value: "17%",
    stat1Label: "Crescimento em 2025",
    stat1Desc: "Mercado de Crescimento Mais Rápido da Europa",
    stat2Value: "5-7%",
    stat2Label: "Rendimentos Brutos",
    stat2Desc: "Arrendamentos Prime Lisboa & Porto",
    stat3Value: "226%",
    stat3Label: "Valorização Total (2015-2025)",
    stat3Desc: "Melhor Desempenho da Europa",
    stat4Value: "€2.900",
    stat4Label: "Média por m²",
    stat4Desc: "Nacional—Entrada Acessível ao Crescimento da UE",
    
    // About Section
    aboutTitle: "Desenvolvimento Imobiliário Full-Service em Portugal",
    aboutSubtitle: "Da Pesquisa à Venda: Tratamos de Tudo",
    aboutText: "A Solinvest é uma empresa boutique de desenvolvimento e consultoria imobiliária que opera entre os Países Baixos e Portugal.\n\nFornecemos um serviço completo de desenvolvimento end-to-end: procura de propriedades de alto potencial, garantia dos investidores certos, gestão de todo o processo de design e construção, e tratamento da estratégia de vendas.\n\nO nosso foco inclui propriedades rurais, propriedades costeiras, moradias e oportunidades de desenvolvimento únicas—transformando-as em ativos de alta qualidade e alto valor.\n\nPara indivíduos que sonham com um lugar ao sol, oferecemos orientação confiável, acesso a preços reais de mercado e uma experiência totalmente gerida e sem complicações, desde a aquisição até à conclusão.\n\nUma ponte profissional e transparente entre investidores, desenvolvimento e imobiliário português.",
    aboutVision: "Nossa Visão: Criar desenvolvimentos que ofereçam ROI excecional preservando o charme autêntico da vida portuguesa.",
    
    // Team Section
    teamTitle: "Conheça os Seus Parceiros: Experiência em Que Pode Confiar",
    teamSubtitle: "Uma equipa dedicada e apaixonada",
    nunoName: "Nuno Sousa",
    nunoRole: "Especialista em Construção & Líder de Equipa",
    nunoDesc: "Com mais de 10 anos de experiência prática em construção e gestão de projetos, Nuno lidera a equipa de desenvolvimento da Solinvest com precisão e paixão. A sua experiência abrange práticas de construção sustentável, execução eficiente em custos e controlo de qualidade em todas as fases do projeto. Desde a avaliação do local até à entrega final, Nuno garante que cada transformação imobiliária atende aos mais altos padrões, mantendo-se dentro do orçamento e do cronograma. O seu estilo de liderança colaborativa e profundo conhecimento das regulamentações de construção portuguesas fazem dele um parceiro inestimável na entrega de projetos imobiliários excecionais.",
    christianName: "Christiaan Ticheler",
    christianRole: "Estratégia Imobiliária & Finanças",
    christianDesc: "Christiaan traz mais de 15 anos de experiência em investimento imobiliário institucional. A sua carreira abrange gestão de portfólio em grandes fundos de pensões holandeses, onde geriu €650 milhões em alocações imobiliárias globais. Como Gestor de Ativos interino na Arcona Capital, liderou a due diligence completa do portfólio para refinanciamento de private equity. Desde 2016, opera a Ticheler Taxatie (avaliações imobiliárias) e co-fundou a GroenVast Bouw (construção modular). As suas competências analíticas e extensa rede fazem dele a espinha dorsal financeira estratégica da Solinvest.",
    
    // Process Section
    processTitle: "Nosso Processo de Criação de Valor",
    process1Title: "1. Pesquisa de Propriedades",
    process1Desc: "Encontramos terrenos, moradias e propriedades fora do mercado com forte potencial de crescimento nas regiões mais promissoras de Portugal.",
    process2Title: "2. Gestão de Desenvolvimento",
    process2Desc: "Gerimos cada fase: conceito, design, licenças, construção e acabamentos. Foco em design sustentável e materiais naturais.",
    process3Title: "3. Estruturas de Parceria",
    process3Desc: "Oferecemos modelos claros de co-investimento ou propriedade total, adaptados aos seus objetivos.",
    process4Title: "4. Estratégias de Saída & Rendimento",
    process4Desc: "Tratamos de vendas, marketing e gestão de arrendamento para maximizar os seus retornos.",
    
    // Projects Section
    projectsTitle: "Projetos em Destaque & Oportunidades",
    projectsSubtitle: "Explore o nosso portfólio de desenvolvimentos de alto potencial",
    
    // Contact Section
    contactTitle: "Pronto para Investir em Portugal?",
    contactSubtitle: "Junte-se ao nosso grupo exclusivo de investidores para negócios fora do mercado e orientação especializada",
    contactName: "Seu Nome",
    contactEmail: "Seu Email",
    contactMessage: "Conte-nos sobre os seus objetivos de investimento",
    contactSubmit: "Enviar Mensagem",
    contactSuccess: "Mensagem enviada com sucesso! Entraremos em contacto em breve.",
    contactError: "Falha ao enviar mensagem. Por favor, tente novamente.",
    
    // Footer
    footerTagline: "Seu parceiro de confiança para desenvolvimento e investimento imobiliário português",
    footerAbout: "Sobre",
    footerProcess: "Processo",
    footerProjects: "Projetos",
    footerContact: "Contacto",
    footerRights: "Todos os direitos reservados.",
    
    // Why Portugal Page - Portuguese translations needed
    whyPortugalTitle: "Porquê Portugal?",
    whyPortugalSubtitle: "Mercado Imobiliário de Crescimento Mais Rápido da Europa com 300+ Dias de Sol",
    backToHome: "← Voltar à Página Inicial",
    getStartedCTA: "Comece Hoje",
  },
};
