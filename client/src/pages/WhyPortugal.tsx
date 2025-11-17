import { APP_LOGO } from "@/const";
import { translations, type Language } from "@/translations";
import { useState, useEffect } from "react";

export default function WhyPortugal() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  // Add JSON-LD schema markup for SEO
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Why Portugal? The Ultimate Real Estate Investment Destination for 2025-2026",
      "description": "Comprehensive analysis of Portugal's real estate market: investment opportunities, rental yields, quality of life, and why international investors are choosing Portuguese property.",
      "image": [
        "https://www.solinvest.net/portugal-real-estate-investment-lisbon-cityscape.jpg",
        "https://www.solinvest.net/algarve-property-investment-portugal-beaches.jpg",
        "https://www.solinvest.net/silver-coast-real-estate-portugal-nazare.jpg"
      ],
      "author": {
        "@type": "Organization",
        "name": "Solinvest",
        "url": "https://www.solinvest.net"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Solinvest",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.solinvest.net/logo.png"
        }
      },
      "datePublished": "2025-01-15",
      "dateModified": "2025-01-15",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.solinvest.net/why-portugal"
      },
      "articleSection": "Real Estate Investment",
      "keywords": "Portugal real estate, Portuguese property investment, Lisbon real estate, Algarve property, Silver Coast, rental yields Portugal, international investment Portugal, Dutch investors Portugal, American investors Portugal"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-md">
        <div className="container flex items-center justify-between py-3">
          <a href="/" className="flex items-center gap-3">
            <img src={APP_LOGO} alt="Solinvest" className="h-16 w-auto" />
          </a>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 bg-black/30 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  language === 'en' ? 'bg-white text-primary' : 'text-white hover:text-white/80'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('nl')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  language === 'nl' ? 'bg-white text-primary' : 'text-white hover:text-white/80'
                }`}
              >
                NL
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  language === 'pt' ? 'bg-white text-primary' : 'text-white hover:text-white/80'
                }`}
              >
                PT
              </button>
            </div>
            <a href="/" className="text-sm font-medium text-white hover:text-accent transition-colors">{t.backToHome}</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with VISIBLE Lisbon Background Photo */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 40, 80, 0.25), rgba(0, 60, 120, 0.30)), url(/portugal-real-estate-investment-lisbon-cityscape.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          marginTop: "72px",
        }}
      >
        <div className="relative z-10 container text-center text-white px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ textShadow: "2px 2px 12px rgba(0,0,0,0.9)" }}>
            {t.whyPortugalTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto" style={{ textShadow: "1px 1px 8px rgba(0,0,0,0.8)" }}>
            {t.whyPortugalSubtitle}
          </p>
        </div>
      </section>

      {/* Article Content - Blog Style with NO WHITE BOXES */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Introduction */}
        <div className="mb-16">
          <p className="text-lg md:text-xl leading-relaxed text-blue-50 mb-6" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}>
            {t.whyPortugalIntro}
          </p>
        </div>

        {/* Section 1: Market Performance */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
            {t.marketPerformanceTitle}
          </h2>
          <div className="space-y-4 text-blue-50 text-lg leading-relaxed" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}>
            <p>{t.marketPerformanceText1}</p>
            <p>{t.marketPerformanceText2}</p>
            <p>{t.marketPerformanceText3}</p>
          </div>
        </section>

        {/* Photo Break 1 - Algarve with VISIBLE Background */}
        <div 
          className="w-full h-96 mb-16 rounded-xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 40, 80, 0.20), rgba(0, 60, 120, 0.25)), url(/algarve-property-investment-portugal-beaches.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Section 2: Investment Hotspots */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
            {t.investmentHotspotsTitle}
          </h2>
          <div className="space-y-4 text-blue-50 text-lg leading-relaxed" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}>
            <p>{t.investmentHotspotsText1}</p>
            <p>{t.investmentHotspotsText2}</p>
            <p>{t.investmentHotspotsText3}</p>
          </div>
        </section>

        {/* Section 3: The Dutch, American, and Northern European Investment Wave */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
            {t.internationalInvestorsTitle}
          </h2>
          <div className="space-y-4 text-blue-50 text-lg leading-relaxed" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}>
            <p>{t.internationalInvestorsText1}</p>
            <p>{t.internationalInvestorsText2}</p>
            <p>{t.internationalInvestorsText3}</p>
            <p>{t.internationalInvestorsText4}</p>
            <p>{t.internationalInvestorsText5}</p>
            <p>{t.internationalInvestorsText6}</p>
          </div>
        </section>

        {/* Photo Break 2 - Silver Coast with VISIBLE Background */}
        <div 
          className="w-full h-96 mb-16 rounded-xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 40, 80, 0.20), rgba(0, 60, 120, 0.25)), url(/silver-coast-real-estate-portugal-nazare.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Section 4: Foreign Investment */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
            {t.foreignInvestmentTitle}
          </h2>
          <div className="space-y-4 text-blue-50 text-lg leading-relaxed" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}>
            <p>{t.foreignInvestmentText1}</p>
            <p>{t.foreignInvestmentText2}</p>
            <p>{t.foreignInvestmentText3}</p>
          </div>
        </section>

        {/* Section 5: Rental Yields */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
            {t.rentalYieldsTitle}
          </h2>
          <p className="text-blue-50 text-lg leading-relaxed" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}>
            {t.rentalYieldsText}
          </p>
        </section>

        {/* Section 6: Living in Portugal */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
            {t.livingInPortugalTitle}
          </h2>
          <div className="space-y-4 text-blue-50 text-lg leading-relaxed" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}>
            <p>{t.livingInPortugalText1}</p>
            <p>{t.livingInPortugalText2}</p>
            <p>{t.livingInPortugalText3}</p>
            <p>{t.livingInPortugalText4}</p>
          </div>
        </section>

        {/* Section 7: Cultural and Strategic Assets */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
            {t.culturalAssetsTitle}
          </h2>
          <div className="space-y-4 text-blue-50 text-lg leading-relaxed" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}>
            <p>{t.culturalAssetsText1}</p>
            <p>{t.culturalAssetsText2}</p>
          </div>
        </section>

        {/* Section 8: Tax Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
            {t.taxBenefitsTitle}
          </h2>
          <p className="text-blue-50 text-lg leading-relaxed" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}>
            {t.taxBenefitsText}
          </p>
        </section>

        {/* Section 9: The Investment Thesis */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
            {t.investmentThesisTitle}
          </h2>
          <div className="space-y-4 text-blue-50 text-lg leading-relaxed" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}>
            <p>{t.investmentThesisText1}</p>
            <p>{t.investmentThesisText2}</p>
            <p>{t.investmentThesisText3}</p>
            <p>{t.investmentThesisText4}</p>
          </div>
        </section>

        {/* Section 10: Your Bridge to Portuguese Property Investment */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
            {t.bridgeToInvestmentTitle}
          </h2>
          <p className="text-blue-50 text-lg leading-relaxed mb-8" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}>
            {t.bridgeToInvestmentText}
          </p>
        </section>

        {/* Final CTA */}
        <div className="mb-16 p-8 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-xl border border-white/10">
          <p className="text-blue-50 text-lg leading-relaxed mb-6" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}>
            {t.finalCTAText}
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            {t.finalCTAButton}
          </a>
        </div>

        {/* Sources Section */}
        <section className="mb-16 border-t border-white/20 pt-8">
          <h3 className="text-2xl font-bold text-white mb-4" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
            {t.sourcesTitle}
          </h3>
          <ul className="space-y-2 text-blue-100 text-sm">
            <li>
              <a 
                href="https://www.essential-business.pt/2025/10/29/portugal-in-the-sights-of-us-investors-but-home-grown-investment-remains-thin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors underline"
              >
                {t.source1}
              </a>
            </li>
            <li>
              <a 
                href="https://www.portugalresident.com/us-investors-flock-to-portugals-stable-market/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors underline"
              >
                {t.source2}
              </a>
            </li>
            <li>
              <a 
                href="https://www.theportugalnews.com/news/2025-05-14/escaping-to-portugal-the-rising-wave-of-american-real-estate-investment/97629" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors underline"
              >
                {t.source3}
              </a>
            </li>
            <li>
              <a 
                href="https://www.travelandtourworld.com/news/article/portugal-sees-record-us-buyer-interest-in-property-market-as-numbers-soar-and-new-flights-open-doors-to-southern-algarve/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors underline"
              >
                {t.source4}
              </a>
            </li>
            <li>
              <a 
                href="https://portugalbuyersagent.com/portugal-real-estate/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors underline"
              >
                {t.source5}
              </a>
            </li>
          </ul>
        </section>

      </article>

      {/* Footer */}
      <footer className="bg-black/30 py-6 mt-auto">
        <div className="container text-center text-blue-100 text-sm">
          <p>© {new Date().getFullYear()} Solinvest. {t.footerRights}</p>
        </div>
      </footer>
    </div>
  );
}
