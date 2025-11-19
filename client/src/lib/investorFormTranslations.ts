export type Language = 'en' | 'nl' | 'pt';

export interface FormTranslations {
  welcome: {
    title: string;
    subtitle: string;
    description: string;
    startButton: string;
  };
  questions: {
    q1: {
      title: string;
      options: string[];
    };
    q2: {
      title: string;
      options: string[];
    };
    q3: {
      title: string;
      options: string[];
    };
    q4: {
      title: string;
      options: string[];
    };
    q5: {
      title: string;
      options: string[];
    };
    q6: {
      title: string;
      options: string[];
    };
    q7: {
      title: string;
      options: string[];
    };
    q8: {
      title: string;
      options: string[];
    };
    q9: {
      title: string;
      options: string[];
    };
    q10: {
      title: string;
      options: string[];
    };
    q11: {
      title: string;
      options: string[];
    };
  };
  contact: {
    title: string;
    subtitle: string;
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
    };
  };
  final: {
    title: string;
    subtitle: string;
    description: string;
  };
  buttons: {
    back: string;
    next: string;
    submit: string;
  };
  validation: {
    selectOption: string;
    fillRequired: string;
  };
}

export const translations: Record<Language, FormTranslations> = {
  en: {
    welcome: {
      title: 'Portuguese Investment Intent Profile',
      subtitle: 'Welcome',
      description: 'Ten short questions – five minutes – then instant access to off-market mid-high & high-end Portuguese deals.',
      startButton: 'Start Intent Profile',
    },
    questions: {
      q1: {
        title: 'Q1. Which outcomes are you actively pursuing in Portugal?',
        options: [
          'Develop & exit – value-add construction, sell within 1-3 years',
          'Long-term rental – steady 5-7% net yield, hands-off',
          'Tourism asset – boutique hotel, AL-licensed villa, glamping',
          'Holiday / second home – personal use + occasional letting',
          'Bed-and-breakfast / guest-house – owner-operator or managed',
          'Passive land-bank – secure permits, sell to operator later',
          'Turnkey development for sale',
          'Other',
        ],
      },
      q2: {
        title: 'Q2. What is your target investment range (EUR)?',
        options: [
          '€100k – €250k',
          '€250k – €500k',
          '€500k – €1M',
          '€1M – €2M',
          '€2M+',
        ],
      },
      q3: {
        title: 'Q3. How do you prefer to structure ownership?',
        options: [
          'Solo – 100% ownership',
          'Co-investment – partner with Solinvest or other investors',
          'Syndicate / SPV – pooled capital with defined exit',
          'Open to discussion',
        ],
      },
      q4: {
        title: 'Q4. What level of involvement do you want?',
        options: [
          'Fully passive – I want turnkey delivery',
          'Light oversight – quarterly updates, major decisions only',
          'Active partner – regular input on design, budget, timeline',
          'Hands-on – I want to be involved in day-to-day decisions',
        ],
      },
      q5: {
        title: 'Q5. What is your intended hold period?',
        options: [
          '2 years',
          '5 years',
          '10 years',
          '15+ years (legacy / lifestyle asset)',
        ],
      },
      q6: {
        title: 'Q6. Which Portuguese regions interest you most?',
        options: [
          'Greater Lisbon (Cascais, Sintra, Setúbal)',
          'Algarve (Lagos, Tavira, Albufeira)',
          'Silver Coast (Óbidos, Nazaré, Peniche)',
          'Porto & North',
          'Alentejo (rural estates, vineyards)',
          'No strong preference – show me the best opportunities',
        ],
      },
      q7: {
        title: 'Q7. What property types appeal to you?',
        options: [
          'Coastal villa or apartment',
          'Rural estate or quinta',
          'Urban apartment (Lisbon / Porto)',
          'Land with building permits',
          'Renovation project (fixer-upper)',
          'New-build development',
          'Turnkey development for sale',
          'Mixed-use (residential + commercial)',
        ],
      },
      q8: {
        title: 'Q8. How important is sustainability / eco-design?',
        options: [
          'Essential – I want solar, natural materials, low-impact design',
          'Preferred – willing to pay a modest premium',
          "Nice to have – if it doesn't add significant cost",
          'Not a priority',
        ],
      },
      q9: {
        title: 'Q9. What is your primary motivation?',
        options: [
          'Financial ROI – maximize capital growth or yield',
          'Lifestyle – personal use, family legacy',
          'Diversification – hedge against home-market volatility',
          'Residency / visa pathway (e.g., D7, Golden Visa alternative)',
          'Mix of financial and lifestyle',
        ],
      },
      q10: {
        title: 'Q10. Do you see yourself relocating to Portugal (full-time or part-time)?',
        options: [
          'Yes – planning to move within 1-2 years',
          'Maybe – exploring options',
          'No – pure investment, occasional visits',
        ],
      },
      q11: {
        title: 'Q11. How soon are you ready to move forward?',
        options: [
          'Immediately – ready to review opportunities now',
          '1-3 months – gathering information, preparing capital',
          '3-6 months – still exploring',
          '6-12 months – long-term planning',
        ],
      },
    },
    contact: {
      title: 'Your Contact Details',
      subtitle: 'Almost there! Please share your contact information so we can send you exclusive opportunities.',
      fields: {
        name: { label: 'Full Name', placeholder: 'John Smith' },
        email: { label: 'Email Address', placeholder: 'john@example.com' },
        phone: { label: 'Phone Number (optional)', placeholder: '+31 6 1234 5678' },
      },
    },
    final: {
      title: 'Profile Complete!',
      subtitle: 'Thank you for sharing your investment intent.',
      description: 'Your profile has been submitted. Click below to join our private WhatsApp investor group for instant access to off-market deals, project updates, and direct communication with our team.',
    },
    buttons: {
      back: 'Back',
      next: 'Next',
      submit: 'Submit Profile',
    },
    validation: {
      selectOption: 'Please select at least one option',
      fillRequired: 'Please fill in all required fields',
    },
  },
  nl: {
    welcome: {
      title: 'Portugees Investeringsintenties Profiel',
      subtitle: 'Welkom',
      description: 'Tien korte vragen – vijf minuten – dan directe toegang tot off-market mid-high & high-end Portugese deals.',
      startButton: 'Start Intentieprofiel',
    },
    questions: {
      q1: {
        title: 'V1. Welke uitkomsten streef je actief na in Portugal?',
        options: [
          'Ontwikkelen & verkopen – waarde toevoegen via bouw, verkoop binnen 1-3 jaar',
          'Langetermijn verhuur – stabiel 5-7% netto rendement, hands-off',
          'Toerisme-asset – boetiekhotel, AL-gelicentieerde villa, glamping',
          'Vakantie / tweede huis – persoonlijk gebruik + incidentele verhuur',
          'Bed-and-breakfast / pension – eigenaar-exploitant of beheerd',
          'Passieve grondbank – vergunningen verkrijgen, later verkopen aan exploitant',
          'Turnkey ontwikkeling voor verkoop',
          'Anders',
        ],
      },
      q2: {
        title: 'V2. Wat is je beoogde investeringsbereik (EUR)?',
        options: [
          '€100k – €250k',
          '€250k – €500k',
          '€500k – €1M',
          '€1M – €2M',
          '€2M+',
        ],
      },
      q3: {
        title: 'V3. Hoe structureer je het eigendom bij voorkeur?',
        options: [
          'Solo – 100% eigendom',
          'Co-investering – partner met Solinvest of andere investeerders',
          'Syndicaat / SPV – gebundeld kapitaal met gedefinieerde exit',
          'Open voor bespreking',
        ],
      },
      q4: {
        title: 'V4. Welk niveau van betrokkenheid wil je?',
        options: [
          'Volledig passief – ik wil turnkey levering',
          'Licht toezicht – kwartaalupdates, alleen grote beslissingen',
          'Actieve partner – regelmatige input over ontwerp, budget, tijdlijn',
          'Hands-on – ik wil betrokken zijn bij dagelijkse beslissingen',
        ],
      },
      q5: {
        title: 'V5. Wat is je beoogde bezitsperiode?',
        options: [
          '2 jaar',
          '5 jaar',
          '10 jaar',
          '15+ jaar (erfgoed / lifestyle asset)',
        ],
      },
      q6: {
        title: "V6. Welke Portugese regio's interesseren je het meest?",
        options: [
          'Groot-Lissabon (Cascais, Sintra, Setúbal)',
          'Algarve (Lagos, Tavira, Albufeira)',
          'Zilverkust (Óbidos, Nazaré, Peniche)',
          'Porto & Noord',
          'Alentejo (landelijke landgoederen, wijngaarden)',
          'Geen sterke voorkeur – laat me de beste kansen zien',
        ],
      },
      q7: {
        title: 'V7. Welke vastgoedtypes spreken je aan?',
        options: [
          'Kust villa of appartement',
          'Landelijk landgoed of quinta',
          'Stedelijk appartement (Lissabon / Porto)',
          'Grond met bouwvergunningen',
          'Renovatieproject (opknappertje)',
          'Nieuwbouwontwikkeling',
          'Turnkey ontwikkeling voor verkoop',
          'Gemengd gebruik (residentieel + commercieel)',
        ],
      },
      q8: {
        title: 'V8. Hoe belangrijk is duurzaamheid / eco-design?',
        options: [
          'Essentieel – ik wil zonne-energie, natuurlijke materialen, lage-impact design',
          'Voorkeur – bereid om een bescheiden meerprijs te betalen',
          'Nice to have – als het geen significante kosten toevoegt',
          'Geen prioriteit',
        ],
      },
      q9: {
        title: 'V9. Wat is je primaire motivatie?',
        options: [
          'Financieel ROI – maximaliseer kapitaalgroei of rendement',
          'Lifestyle – persoonlijk gebruik, familie-erfgoed',
          'Diversificatie – hedge tegen thuismarkt volatiliteit',
          'Verblijfsvergunning / visa traject (bijv. D7, Golden Visa alternatief)',
          'Mix van financieel en lifestyle',
        ],
      },
      q10: {
        title: 'V10. Zie je jezelf verhuizen naar Portugal (fulltime of parttime)?',
        options: [
          'Ja – van plan om binnen 1-2 jaar te verhuizen',
          'Misschien – opties aan het verkennen',
          'Nee – pure investering, incidentele bezoeken',
        ],
      },
      q11: {
        title: 'V11. Hoe snel ben je klaar om verder te gaan?',
        options: [
          'Onmiddellijk – klaar om nu kansen te bekijken',
          '1-3 maanden – informatie verzamelen, kapitaal voorbereiden',
          '3-6 maanden – nog aan het verkennen',
          '6-12 maanden – langetermijn planning',
        ],
      },
    },
    contact: {
      title: 'Je Contactgegevens',
      subtitle: 'Bijna klaar! Deel je contactinformatie zodat we je exclusieve kansen kunnen sturen.',
      fields: {
        name: { label: 'Volledige Naam', placeholder: 'Jan Jansen' },
        email: { label: 'E-mailadres', placeholder: 'jan@voorbeeld.nl' },
        phone: { label: 'Telefoonnummer (optioneel)', placeholder: '+31 6 1234 5678' },
      },
    },
    final: {
      title: 'Profiel Compleet!',
      subtitle: 'Bedankt voor het delen van je investeringsintentie.',
      description: 'Je profiel is ingediend. Klik hieronder om lid te worden van onze privé WhatsApp investeerdersgroep voor directe toegang tot off-market deals, projectupdates en directe communicatie met ons team.',
    },
    buttons: {
      back: 'Terug',
      next: 'Volgende',
      submit: 'Profiel Indienen',
    },
    validation: {
      selectOption: 'Selecteer minimaal één optie',
      fillRequired: 'Vul alle verplichte velden in',
    },
  },
  pt: {
    // Portuguese translation (copy from EN for now, can be translated later)
    welcome: {
      title: 'Perfil de Intenção de Investimento em Portugal',
      subtitle: 'Bem-vindo',
      description: 'Dez perguntas curtas – cinco minutos – depois acesso instantâneo a negócios portugueses off-market de médio-alto e alto padrão.',
      startButton: 'Iniciar Perfil de Intenção',
    },
    questions: {
      q1: {
        title: 'P1. Que resultados procura ativamente em Portugal?',
        options: [
          'Desenvolver & vender – construção com valor acrescentado, venda em 1-3 anos',
          'Arrendamento de longo prazo – rendimento líquido estável de 5-7%, sem gestão',
          'Ativo turístico – hotel boutique, villa licenciada AL, glamping',
          'Férias / segunda casa – uso pessoal + arrendamento ocasional',
          'Bed-and-breakfast / casa de hóspedes – proprietário-operador ou gerido',
          'Banco de terrenos passivo – obter licenças, vender a operador mais tarde',
          'Desenvolvimento turnkey para venda',
          'Outro',
        ],
      },
      q2: {
        title: 'P2. Qual é o seu intervalo de investimento alvo (EUR)?',
        options: [
          '€100k – €250k',
          '€250k – €500k',
          '€500k – €1M',
          '€1M – €2M',
          '€2M+',
        ],
      },
      q3: {
        title: 'P3. Como prefere estruturar a propriedade?',
        options: [
          'Solo – 100% propriedade',
          'Co-investimento – parceria com Solinvest ou outros investidores',
          'Sindicato / SPV – capital conjunto com saída definida',
          'Aberto a discussão',
        ],
      },
      q4: {
        title: 'P4. Que nível de envolvimento deseja?',
        options: [
          'Totalmente passivo – quero entrega turnkey',
          'Supervisão leve – atualizações trimestrais, apenas decisões importantes',
          'Parceiro ativo – contribuição regular sobre design, orçamento, cronograma',
          'Hands-on – quero estar envolvido nas decisões do dia-a-dia',
        ],
      },
      q5: {
        title: 'P5. Qual é o seu período de detenção pretendido?',
        options: [
          '2 anos',
          '5 anos',
          '10 anos',
          '15+ anos (legado / ativo de estilo de vida)',
        ],
      },
      q6: {
        title: 'P6. Que regiões portuguesas lhe interessam mais?',
        options: [
          'Grande Lisboa (Cascais, Sintra, Setúbal)',
          'Algarve (Lagos, Tavira, Albufeira)',
          'Costa de Prata (Óbidos, Nazaré, Peniche)',
          'Porto & Norte',
          'Alentejo (propriedades rurais, vinhas)',
          'Sem preferência forte – mostre-me as melhores oportunidades',
        ],
      },
      q7: {
        title: 'P7. Que tipos de propriedade lhe atraem?',
        options: [
          'Villa ou apartamento costeiro',
          'Propriedade rural ou quinta',
          'Apartamento urbano (Lisboa / Porto)',
          'Terreno com licenças de construção',
          'Projeto de renovação (para recuperar)',
          'Desenvolvimento de construção nova',
          'Desenvolvimento turnkey para venda',
          'Uso misto (residencial + comercial)',
        ],
      },
      q8: {
        title: 'P8. Quão importante é a sustentabilidade / eco-design?',
        options: [
          'Essencial – quero solar, materiais naturais, design de baixo impacto',
          'Preferido – disposto a pagar um prémio modesto',
          'Nice to have – se não adicionar custo significativo',
          'Não é prioridade',
        ],
      },
      q9: {
        title: 'P9. Qual é a sua motivação principal?',
        options: [
          'ROI financeiro – maximizar crescimento de capital ou rendimento',
          'Estilo de vida – uso pessoal, legado familiar',
          'Diversificação – proteção contra volatilidade do mercado doméstico',
          'Residência / via de visto (ex. D7, alternativa Golden Visa)',
          'Mistura de financeiro e estilo de vida',
        ],
      },
      q10: {
        title: 'P10. Vê-se a mudar para Portugal (tempo integral ou parcial)?',
        options: [
          'Sim – planeia mudar dentro de 1-2 anos',
          'Talvez – a explorar opções',
          'Não – investimento puro, visitas ocasionais',
        ],
      },
      q11: {
        title: 'P11. Quão cedo está pronto para avançar?',
        options: [
          'Imediatamente – pronto para rever oportunidades agora',
          '1-3 meses – a reunir informação, preparar capital',
          '3-6 meses – ainda a explorar',
          '6-12 meses – planeamento de longo prazo',
        ],
      },
    },
    contact: {
      title: 'Os Seus Dados de Contacto',
      subtitle: 'Quase lá! Por favor partilhe a sua informação de contacto para que possamos enviar-lhe oportunidades exclusivas.',
      fields: {
        name: { label: 'Nome Completo', placeholder: 'João Silva' },
        email: { label: 'Endereço de Email', placeholder: 'joao@exemplo.pt' },
        phone: { label: 'Número de Telefone (opcional)', placeholder: '+351 91 234 5678' },
      },
    },
    final: {
      title: 'Perfil Completo!',
      subtitle: 'Obrigado por partilhar a sua intenção de investimento.',
      description: 'O seu perfil foi submetido. Clique abaixo para se juntar ao nosso grupo privado de investidores no WhatsApp para acesso instantâneo a negócios off-market, atualizações de projetos e comunicação direta com a nossa equipa.',
    },
    buttons: {
      back: 'Voltar',
      next: 'Próximo',
      submit: 'Submeter Perfil',
    },
    validation: {
      selectOption: 'Por favor selecione pelo menos uma opção',
      fillRequired: 'Por favor preencha todos os campos obrigatórios',
    },
  },
};
