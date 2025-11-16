import { APP_LOGO } from "@/const";
import { translations, type Language } from "@/translations";
import { useState } from "react";

export default function WhyPortugal() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation - Same style as Home page */}
      <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-md">
        <div className="container flex items-center justify-between py-3">
          <a href="/" className="flex items-center gap-3">
            <img src={APP_LOGO} alt="Solinvest - Sustainable Property Development & Investment in Portugal" className="h-20 w-auto" />
          </a>
          <a href="/" className="text-sm font-medium text-white hover:text-accent transition-colors">{t.backToHome || "← Back to Home"}</a>
        </div>
      </nav>

      {/* Hero Section with Visible Background Image */}
      <section 
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.50), rgba(0, 60, 120, 0.50)), url(/lisbon-portugal-aerial-view.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 container text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}>
            {t.whyPortugalTitle}
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto font-light" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}>
            {t.whyPortugalSubtitle}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.60), rgba(0, 60, 120, 0.60)), url(/algarve-beach-portugal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <p className="text-lg text-white leading-relaxed" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
              {t.whyPortugalIntro}
            </p>
          </div>
        </div>
      </section>

      {/* Market Performance */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/silver-coast-portugal.jpg)",
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
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.55), rgba(0, 60, 120, 0.55)), url(/silver-coast-portugal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}>
            {t.investmentHotspotsTitle}
          </h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-white leading-relaxed mb-6" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
                {t.investmentHotspotsText1}
              </p>
              <p className="text-white leading-relaxed mb-6" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
                {t.investmentHotspotsText2}
              </p>
              <p className="text-white leading-relaxed" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
                {t.investmentHotspotsText3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International Investors Wave */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.87), rgba(255, 255, 255, 0.87)), url(/lisbon-portugal-aerial-view.jpg)",
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
            <p className="text-muted-foreground leading-relaxed">
              {t.internationalInvestorsText3}
            </p>
          </div>
        </div>
      </section>

      {/* Investment Climate */}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}>
            {t.investmentClimateTitle}
          </h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-white leading-relaxed mb-6" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
                {t.investmentClimateText1}
              </p>
              <p className="text-white leading-relaxed mb-6" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
                {t.investmentClimateText2}
              </p>
              <p className="text-white leading-relaxed" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
                {t.investmentClimateText3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Yields */}
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
            {t.rentalYieldsTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {t.rentalYieldsText}
            </p>
          </div>
        </div>
      </section>

      {/* Quality of Life */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.58), rgba(0, 60, 120, 0.58)), url(/algarve-beach-portugal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}>
            {t.qualityOfLifeTitle}
          </h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <p className="text-white leading-relaxed mb-8" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
              {t.qualityOfLifeText1}
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

            <p className="text-white leading-relaxed mb-6" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
              {t.qualityOfLifeText2}
            </p>
            <p className="text-white leading-relaxed" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
              {t.qualityOfLifeText3}
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Heritage */}
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
            {t.cultureHeritageTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.cultureHeritageText1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.cultureHeritageText2}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.cultureHeritageText3}
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Location */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.60), rgba(0, 60, 120, 0.60)), url(/silver-coast-portugal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}>
            {t.strategicLocationTitle}
          </h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <p className="text-white leading-relaxed" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
              {t.strategicLocationText}
            </p>
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.87), rgba(255, 255, 255, 0.87)), url(/algarve-beach-portugal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t.taxBenefitsTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {t.taxBenefitsText}
            </p>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.58), rgba(0, 60, 120, 0.58)), url(/lisbon-portugal-aerial-view.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}>
            {t.investmentThesisTitle}
          </h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <p className="text-white leading-relaxed" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
              {t.investmentThesisText}
            </p>
          </div>
        </div>
      </section>

      {/* Bridge to Investment */}
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
            {t.bridgeToInvestmentTitle}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {t.bridgeToInvestmentText}
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}>
            {t.conclusionTitle}
          </h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <p className="text-white leading-relaxed mb-8" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
              {t.conclusionText}
            </p>
            <div className="text-center">
              <a 
                href="/#contact" 
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors shadow-lg"
              >
                {t.getStartedCTA || "Get Started Today"}
              </a>
            </div>
          </div>
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
            © 2025 Solinvest. {t.footerRights || "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
}
