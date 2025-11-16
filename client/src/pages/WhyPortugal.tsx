import { APP_LOGO } from "@/const";
import { translations, type Language } from "@/translations";
import { useState } from "react";

export default function WhyPortugal() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col bg-white">
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

      {/* Hero Section with VISIBLE Background Photo */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.20), rgba(0, 60, 120, 0.20)), url(/lisbon-portugal-aerial-view.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          marginTop: "72px", // Offset for fixed nav
        }}
      >
        <div className="relative z-10 container text-center text-white px-6 py-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" style={{ textShadow: "2px 2px 12px rgba(0,0,0,0.9)" }}>
            {t.whyPortugalTitle}
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto font-light" style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.8)" }}>
            {t.whyPortugalSubtitle}
          </p>
        </div>
      </section>

      {/* Article Content - Blog Style */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            {t.whyPortugalIntro}
          </p>
        </div>

        {/* Section 1: Market Performance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">{t.marketPerformanceTitle}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">{t.marketPerformanceText1}</p>
            <p className="text-gray-700 leading-relaxed mb-4">{t.marketPerformanceText2}</p>
            <p className="text-gray-700 leading-relaxed">{t.marketPerformanceText3}</p>
          </div>
        </section>

        {/* Photo Break 1 */}
        <div 
          className="w-full h-96 mb-12 rounded-xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: "url(/algarve-beach-portugal.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Section 2: Investment Hotspots */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">{t.investmentHotspotsTitle}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">{t.investmentHotspotsText1}</p>
            <p className="text-gray-700 leading-relaxed mb-4">{t.investmentHotspotsText2}</p>
            <p className="text-gray-700 leading-relaxed mb-4">{t.investmentHotspotsText3}</p>
            <p className="text-gray-700 leading-relaxed">{t.investmentHotspotsText4}</p>
          </div>
        </section>

        {/* Photo Break 2 */}
        <div 
          className="w-full h-96 mb-12 rounded-xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: "url(/silver-coast-portugal.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Section 3: Dutch, American, Northern European Wave */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">{t.investorWaveTitle}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">{t.investorWaveText1}</p>
            <p className="text-gray-700 leading-relaxed mb-4">{t.investorWaveText2}</p>
            <p className="text-gray-700 leading-relaxed">{t.investorWaveText3}</p>
          </div>
        </section>

        {/* Section 4: Foreign Investment */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">{t.foreignInvestmentTitle}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">{t.foreignInvestmentText1}</p>
            <p className="text-gray-700 leading-relaxed">{t.foreignInvestmentText2}</p>
          </div>
        </section>

        {/* Photo Break 3 */}
        <div 
          className="w-full h-96 mb-12 rounded-xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: "url(/lisbon-portugal-aerial-view.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Section 5: Rental Yields */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">{t.rentalYieldsTitle}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{t.rentalYieldsText}</p>
          </div>
        </section>

        {/* Section 6: Living in Portugal */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">{t.livingInPortugalTitle}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">{t.livingInPortugalText1}</p>
            <p className="text-gray-700 leading-relaxed">{t.livingInPortugalText2}</p>
          </div>
        </section>

        {/* Section 7: Cultural Assets */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">{t.culturalAssetsTitle}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{t.culturalAssetsText}</p>
          </div>
        </section>

        {/* Section 8: Tax Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">{t.taxBenefitsTitle}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{t.taxBenefitsText}</p>
          </div>
        </section>

        {/* Section 9: Investment Thesis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">{t.investmentThesisTitle}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{t.investmentThesisText}</p>
          </div>
        </section>

        {/* Section 10: Bridge to Investment */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">{t.bridgeToInvestmentTitle}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">{t.bridgeToInvestmentText}</p>
          </div>
          <div className="text-center">
            <a 
              href="/#contact" 
              className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
            >
              {t.getStartedCTA}
            </a>
          </div>
        </section>

        {/* Sources Section */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.sourcesTitle}</h3>
          <ul className="space-y-2">
            <li>
              <a href={t.source1Url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {t.source1Text}
              </a>
            </li>
            <li>
              <a href={t.source2Url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {t.source2Text}
              </a>
            </li>
            <li>
              <a href={t.source3Url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {t.source3Text}
              </a>
            </li>
            <li>
              <a href={t.source4Url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {t.source4Text}
              </a>
            </li>
            <li>
              <a href={t.source5Url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {t.source5Text}
              </a>
            </li>
          </ul>
        </section>

      </article>

      {/* Footer */}
      <footer 
        className="py-12 relative overflow-hidden border-t border-primary-foreground/20 mt-16"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.95), rgba(0, 60, 120, 0.95)), url(/ocean-view-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container relative z-10 text-center">
          <p className="text-white/90">
            © 2025 Solinvest. {t.footerRights}
          </p>
        </div>
      </footer>
    </div>
  );
}
