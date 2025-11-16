import { APP_LOGO } from "@/const";
import { translations, type Language } from "@/translations";
import { useState } from "react";

export default function WhyPortugal() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={APP_LOGO} alt="Solinvest - Sustainable Property Development & Investment in Portugal" className="h-10 w-auto" />
            <span className="text-xl font-bold text-gray-900">Solinvest</span>
          </a>
          <a href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            {t.backToHome || "← Back to Home"}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.whyPortugalTitle}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t.whyPortugalSubtitle}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.whyPortugalIntro}
            </p>
          </div>
        </div>
      </section>

      {/* Market Performance */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t.marketPerformanceTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.marketPerformanceText1}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.marketPerformanceText2}
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 my-12 not-prose">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="text-4xl font-bold text-blue-900 mb-2">15.2%</div>
                <div className="text-sm text-blue-700">{t.statEULeader}</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <div className="text-4xl font-bold text-green-900 mb-2">5-8%</div>
                <div className="text-sm text-green-700">{t.statGrowth2025}</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl">
                <div className="text-4xl font-bold text-amber-900 mb-2">€2,105</div>
                <div className="text-sm text-amber-700">{t.statPricePerSqm}</div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {t.marketPerformanceText3}
            </p>
          </div>
        </div>
      </section>

      {/* Investment Climate */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t.investmentClimateTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.investmentClimateText1}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.investmentClimateText2}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t.investmentClimateText3}
            </p>
          </div>
        </div>
      </section>

      {/* Quality of Life */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t.qualityOfLifeTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.qualityOfLifeText1}
            </p>
            
            {/* Lifestyle Highlights */}
            <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-6 rounded-xl">
                <div className="text-3xl font-bold text-sky-900 mb-2">300+</div>
                <div className="text-sm text-sky-700">{t.statSunnyDays}</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <div className="text-3xl font-bold text-purple-900 mb-2">#3</div>
                <div className="text-sm text-purple-700">{t.statSafetyRank}</div>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-xl">
                <div className="text-3xl font-bold text-rose-900 mb-2">30%</div>
                <div className="text-sm text-rose-700">{t.statLowerCost}</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl">
                <div className="text-3xl font-bold text-emerald-900 mb-2">5-7%</div>
                <div className="text-sm text-emerald-700">{t.statRentalYields}</div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {t.qualityOfLifeText2}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t.qualityOfLifeText3}
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Heritage */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t.cultureHeritageTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.cultureHeritageText1}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.cultureHeritageText2}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t.cultureHeritageText3}
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Location */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t.strategicLocationTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {t.strategicLocationText}
            </p>
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t.taxBenefitsTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {t.taxBenefitsText}
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t.conclusionTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              {t.conclusionText}
            </p>
            <div className="not-prose">
              <a 
                href="/#contact" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {t.getStartedCTA || "Get Started Today"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2025 Solinvest. {t.footerRights || "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
}
