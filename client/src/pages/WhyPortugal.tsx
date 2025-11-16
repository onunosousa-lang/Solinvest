import { APP_LOGO } from "@/const";
import { translations, type Language } from "@/translations";
import { useState } from "react";

export default function WhyPortugal() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-md">
        <div className="container flex items-center justify-between py-3">
          <a href="/" className="flex items-center gap-3">
            <img src={APP_LOGO} alt="Solinvest" className="h-20 w-auto" />
          </a>
          <a href="/" className="text-sm font-medium text-white hover:text-accent transition-colors">{t.backToHome}</a>
        </div>
      </nav>

      {/* Hero Section with VISIBLE Background */}
      <section 
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.45), rgba(0, 60, 120, 0.45)), url(/lisbon-portugal-aerial-view.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 container text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
            {t.whyPortugalTitle}
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto font-light" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}>
            {t.whyPortugalSubtitle}
          </p>
        </div>
      </section>

      {/* Introduction - EXACT ARTICLE TEXT */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.55), rgba(0, 60, 120, 0.55)), url(/algarve-beach-portugal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="bg-primary/15 backdrop-blur-md p-8 rounded-xl shadow-2xl">
            <p className="text-lg text-white leading-relaxed" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
              {t.whyPortugalIntro}
            </p>
          </div>
        </div>
      </section>

      {/* Portugal Property Market Performance */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)), url(/silver-coast-portugal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t.marketPerformanceTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.marketPerformanceText1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.marketPerformanceText2}
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 my-12 not-prose">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl border-2 border-primary shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">15.2%</div>
                <div className="text-sm text-secondary">{t.statEULeader}</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl border-2 border-accent shadow-lg">
                <div className="text-4xl font-bold text-accent mb-2">5-8%</div>
                <div className="text-sm text-secondary">{t.statGrowth2025}</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl border-2 border-secondary shadow-lg">
                <div className="text-4xl font-bold text-secondary mb-2">€2,105</div>
                <div className="text-sm text-muted-foreground">{t.statPricePerSqm}</div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {t.marketPerformanceText3}
            </p>
          </div>
        </div>
      </section>

      {/* Investment Hotspots */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.50), rgba(0, 60, 120, 0.50)), url(/silver-coast-portugal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}>
            {t.investmentHotspotsTitle}
          </h2>
          <div className="bg-primary/15 backdrop-blur-md p-8 rounded-xl shadow-2xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-white leading-relaxed mb-6" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
                {t.investmentHotspotsText1}
              </p>
              <p className="text-white leading-relaxed mb-6" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
                {t.investmentHotspotsText2}
              </p>
              <p className="text-white leading-relaxed" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
                {t.investmentHotspotsText3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Dutch, American, and Northern European Investment Wave */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url(/lisbon-portugal-aerial-view.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t.internationalInvestorsTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.internationalInvestorsText1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.internationalInvestorsText2}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.internationalInvestorsText3}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.internationalInvestorsText4}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.internationalInvestorsText5}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.internationalInvestorsText6}
            </p>
          </div>
        </div>
      </section>

      {/* Foreign Investment in Portugal */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.52), rgba(0, 60, 120, 0.52)), url(/algarve-beach-portugal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}>
            {t.foreignInvestmentTitle}
          </h2>
          <div className="bg-primary/15 backdrop-blur-md p-8 rounded-xl shadow-2xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-white leading-relaxed mb-6" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
                {t.foreignInvestmentText1}
              </p>
              <p className="text-white leading-relaxed mb-6" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
                {t.foreignInvestmentText2}
              </p>
              <p className="text-white leading-relaxed" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
                {t.foreignInvestmentText3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portugal Rental Yields */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url(/silver-coast-portugal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t.rentalYieldsTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {t.rentalYieldsText}
            </p>
          </div>
        </div>
      </section>

      {/* Living in Portugal */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.54), rgba(0, 60, 120, 0.54)), url(/algarve-beach-portugal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}>
            {t.livingInPortugalTitle}
          </h2>
          <div className="bg-primary/15 backdrop-blur-md p-8 rounded-xl shadow-2xl">
            <p className="text-white leading-relaxed mb-8" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
              {t.livingInPortugalText1}
            </p>
            
            {/* Lifestyle Highlights */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl border-2 border-primary shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">300+</div>
                <div className="text-sm text-secondary">{t.statSunnyDays}</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl border-2 border-accent shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">#3</div>
                <div className="text-sm text-secondary">{t.statSafetyRank}</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl border-2 border-secondary shadow-lg">
                <div className="text-3xl font-bold text-secondary mb-2">30%</div>
                <div className="text-sm text-muted-foreground">{t.statLowerCost}</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl border-2 border-primary shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">5-7%</div>
                <div className="text-sm text-secondary">{t.statRentalYields}</div>
              </div>
            </div>

            <p className="text-white leading-relaxed mb-6" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
              {t.livingInPortugalText2}
            </p>
            <p className="text-white leading-relaxed mb-6" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
              {t.livingInPortugalText3}
            </p>
            <p className="text-white leading-relaxed" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
              {t.livingInPortugalText4}
            </p>
          </div>
        </div>
      </section>

      {/* Portugal's Cultural and Strategic Assets */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(/lisbon-portugal-aerial-view.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t.culturalAssetsTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.culturalAssetsText1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.culturalAssetsText2}
            </p>
          </div>
        </div>
      </section>

      {/* Portugal Tax Benefits */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.56), rgba(0, 60, 120, 0.56)), url(/silver-coast-portugal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}>
            {t.taxBenefitsTitle}
          </h2>
          <div className="bg-primary/15 backdrop-blur-md p-8 rounded-xl shadow-2xl">
            <p className="text-white leading-relaxed" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
              {t.taxBenefitsText}
            </p>
          </div>
        </div>
      </section>

      {/* The Investment Thesis */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url(/algarve-beach-portugal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t.investmentThesisTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.investmentThesisText1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.investmentThesisText2}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.investmentThesisText3}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.investmentThesisText4}
            </p>
          </div>
        </div>
      </section>

      {/* Your Bridge to Portuguese Property Investment */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.52), rgba(0, 60, 120, 0.52)), url(/lisbon-portugal-aerial-view.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}>
            {t.bridgeToInvestmentTitle}
          </h2>
          <div className="bg-primary/15 backdrop-blur-md p-8 rounded-xl shadow-2xl">
            <p className="text-white leading-relaxed" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
              {t.bridgeToInvestmentText}
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(/silver-coast-portugal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {t.finalCTAText}
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
          >
            {t.finalCTAButton}
          </a>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-foreground mb-6">{t.sourcesTitle}</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>• <a href="https://www.essential-business.pt/2025/10/29/portugal-in-the-sights-of-us-investors-but-home-grown-investment-remains-thin/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">{t.source1}</a></li>
            <li>• <a href="https://www.portugalresident.com/us-investors-flock-to-portugals-stable-market/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">{t.source2}</a></li>
            <li>• <a href="https://www.theportugalnews.com/news/2025-05-14/escaping-to-portugal-the-rising-wave-of-american-real-estate-investment/97629" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">{t.source3}</a></li>
            <li>• <a href="https://www.travelandtourworld.com/news/article/portugal-sees-record-us-buyer-interest-in-property-market-as-numbers-soar-and-new-flights-open-doors-to-southern-algarve/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">{t.source4}</a></li>
            <li>• <a href="https://portugalbuyersagent.com/portugal-real-estate/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">{t.source5}</a></li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-12 px-4 relative overflow-hidden border-t border-primary-foreground/20"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.95), rgba(0, 60, 120, 0.95)), url(/ocean-view-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto text-center relative z-10">
          <p className="text-sm text-white/90">
            © 2025 Solinvest. {t.footerRights}
          </p>
        </div>
      </footer>
    </div>
  );
}
