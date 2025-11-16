import { useState } from "react";
import { Link } from "wouter";
import { APP_LOGO } from "@/const";
import { Button } from "@/components/ui/button";

export default function WhyPortugal() {
  const [language, setLanguage] = useState<"en" | "nl" | "pt">("en");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation - Same as Home */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src={APP_LOGO}
              alt="Solinvest - Portuguese real estate investment"
              className="h-16 w-auto"
              loading="eager"
            />
          </Link>

          <div className="flex items-center gap-6">
            {/* Language Switcher */}
            <div className="flex gap-2">
              {(["en", "nl", "pt"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded transition-colors ${
                    language === lang
                      ? "bg-blue-600 text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <Link href="/">
              <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10">
                ← Back to home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-16"
        style={{
          backgroundImage: "url(/lisbon-portugal-real-estate-investment.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-slate-900/90" />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Why Portugal?
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            The European property investment opportunity Dutch and American investors are discovering
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 space-y-20">
        
        {/* Introduction */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
            Europe's fastest-growing real estate market meets Mediterranean living
          </h2>
          <p className="text-lg text-blue-50/90 leading-relaxed">
            When Dutch investors and international family offices ask us where we're seeing the most compelling risk-adjusted returns in European real estate investment, the answer increasingly points to Portugal. It's not just about the numbers—though those are impressive—it's about the convergence of market fundamentals, demographic trends, and quality-of-life factors that create sustainable, long-term value for property investors.
          </p>
        </section>

        {/* Market Performance with Background */}
        <section
          className="relative rounded-2xl overflow-hidden"
          style={{
            backgroundImage: "url(/algarve-portugal-property-beach.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
          <div className="relative z-10 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
              Portugal property market performance: the numbers tell a story
            </h2>
            <div className="space-y-4 text-lg text-blue-50/90 leading-relaxed">
              <p>
                Portugal led the European Union with <strong className="text-blue-300">15.2% year-on-year property price growth</strong> in the first half of 2025. That's not speculation-driven froth; it's demand meeting constrained supply in a politically stable, economically reforming democracy on Europe's Atlantic coast.
              </p>
              <p>
                The median appraisal for apartments in Portugal reached <strong className="text-blue-300">€2,105 per square meter</strong> by April 2025—a 19% jump from the previous year. Portuguese villas posted an 11% gain across the country. These figures reflect a real estate market that's found its footing after years of post-financial crisis recovery and recent pandemic-era repositioning.
              </p>
              <p>
                More importantly, the growth trajectory appears sustainable. Property market forecasts suggest <strong className="text-blue-300">5-8% appreciation in 2025</strong>, moderating to 2-4% in 2026 as the market matures. This is exactly what sophisticated real estate investors want to see: robust growth transitioning to steady, predictable appreciation rather than boom-bust volatility.
              </p>
            </div>
          </div>
        </section>

        {/* Investment Hotspots */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
            Investment hotspots: where smart money is moving in Portugal
          </h2>
          <div className="space-y-4 text-lg text-blue-50/90 leading-relaxed">
            <p>
              While Lisbon property remains a cornerstone investment with established rental markets and international appeal, we're seeing particularly compelling opportunities across Portugal's diverse regions. The Silver Coast (Costa de Prata), Setúbal Peninsula, and the Algarve represent three distinct investment profiles—each offering strong fundamentals at different price points and with different lifestyle characteristics.
            </p>
            <p>
              The Silver Coast delivers Atlantic-facing beaches, growing expat communities, and prices significantly below Lisbon while maintaining easy access to the capital. Setúbal offers proximity to Lisbon's employment markets, stunning coastal landscapes, and emerging development potential. The Algarve combines established international appeal, year-round tourism infrastructure, and strong rental yield potential.
            </p>
            <p>
              These aren't speculative bets on unknown markets. They're established regions with infrastructure, international airports, and proven demand, now benefiting from both local Portuguese buyers and the surge in international investment. For Dutch investors and international buyers seeking renovation projects, new build developments, or turnkey investment properties, these regions offer exceptional risk-adjusted returns.
            </p>
          </div>
        </section>

        {/* American & Dutch Investment Wave with Background */}
        <section
          className="relative rounded-2xl overflow-hidden"
          style={{
            backgroundImage: "url(/silver-coast-portugal-investment-opportunity.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
          <div className="relative z-10 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
              The Dutch, American, and Northern European investment wave
            </h2>
            <div className="space-y-4 text-lg text-blue-50/90 leading-relaxed">
              <p>
                What's particularly noteworthy is the dramatic shift in international capital sources flowing into Portuguese real estate. American property investors have emerged as the dominant force in Portugal's market. <a href="https://www.essential-business.pt/2025/10/29/portugal-in-the-sights-of-us-investors-but-home-grown-investment-remains-thin/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">In 2024, Americans led Golden Visa applications with 406 visas</a>, surpassing China, the UK, Brazil, and India. More significantly, <a href="https://www.portugalresident.com/us-investors-flock-to-portugals-stable-market/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">US institutional investment reached $12 billion in 2024 alone</a>, with $2.5 billion of institutional capital deployed over the past five years.
              </p>
              <p>
                The trend is accelerating. <a href="https://www.theportugalnews.com/news/2025-05-14/escaping-to-portugal-the-rising-wave-of-american-real-estate-investment/97629" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">US client share in Portuguese property investments jumped from 48% in 2024 to 58% in the first quarter of 2025</a>—a remarkable 10-percentage-point increase in just months. <a href="https://www.travelandtourworld.com/news/article/portugal-sees-record-us-buyer-interest-in-property-market-as-numbers-soar-and-new-flights-open-doors-to-southern-algarve/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">The number of American residents in Portugal surged 36.3% year-over-year</a>, from 14,129 to 19,258, while <a href="https://portugalbuyersagent.com/portugal-real-estate/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">the American population in Portugal increased sevenfold between 2017 and 2024</a>.
              </p>
              <p>
                Dutch investors, with their tradition of international real estate investment and affinity for Portuguese climate and culture, are increasingly active in the market. Northern European investors from Germany, France, and the UK continue as major players. <a href="https://www.portugalresident.com/the-state-of-real-estate-2024-property-trends-in-portugal/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">The UK maintains steady activity despite Brexit adjustments</a>, while French and German buyers show particularly strong interest in renovation projects and lifestyle properties.
              </p>
            </div>
          </div>
        </section>

        {/* Foreign Investment */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
            Foreign investment in Portugal: capital flows and investor sentiment
          </h2>
          <div className="space-y-4 text-lg text-blue-50/90 leading-relaxed">
            <p>
              Foreign direct investment into Portugal hit <strong className="text-blue-300">€13.2 billion in 2024</strong>, up 19% year-over-year, with real estate development absorbing a substantial share. What's noteworthy is the diversity of capital sources: American buyers, Dutch investors, British expats, Brazilian diaspora investors, and pan-European funds all maintain active interest despite the 2023 termination of the Golden Visa property route.
            </p>
            <p>
              That last point deserves emphasis. The Portuguese property market didn't collapse when the Golden Visa real estate incentive was removed. It adapted and continued growing, suggesting the fundamentals—not just the incentives—are driving investment decisions.
            </p>
            <p>
              Ernst & Young's 2024 investor sentiment survey captured the mood: <strong className="text-blue-300">84% of investors plan to expand Portuguese operations this year</strong>, compared to 72% across the Eurozone. Perhaps more telling, 77% believe Portugal's attractiveness will continue increasing—up dramatically from 49% just three years ago. Sentiment is moving in the right direction for real estate investors.
            </p>
          </div>
        </section>

        {/* Rental Yields */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
            Portugal rental yields: the income proposition
          </h2>
          <div className="space-y-4 text-lg text-blue-50/90 leading-relaxed">
            <p>
              Rental yields in central Portuguese locations typically range between <strong className="text-blue-300">5-7%</strong>, supported by diverse tenant demand: local professionals, university students, corporate expats, and the growing remote-work population that discovered Portugal during the pandemic and decided to stay.
            </p>
            <p>
              These aren't speculative yields dependent on Airbnb arbitrage in tourist zones. They're sustainable returns from fundamental residential demand in a country where homeownership rates are high but rental markets in urban centers remain tight. For Dutch investors and international buyers seeking cash-flow positive European property investments, Portugal delivers compelling income returns.
            </p>
          </div>
        </section>

        {/* Living in Portugal */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
            Living in Portugal: beyond the investment spreadsheet
          </h2>
          <div className="space-y-4 text-lg text-blue-50/90 leading-relaxed">
            <p>
              Real estate investment decisions aren't made in a vacuum. The quality-of-life factors matter, particularly for investors considering personal use, retirement planning, or family estate planning with a lifestyle component.
            </p>
            <p>
              Portugal ranks <strong className="text-blue-300">third globally in safety and fourth in peace</strong> according to the Global Peace Index. It climbed to sixth place worldwide in overall lifestyle rankings for 2025, surpassing the Netherlands, UK, and Norway. These aren't marketing claims; they're measurable indices that correlate with long-term political stability and social cohesion—factors that protect property asset values.
            </p>
            <p>
              The Mediterranean climate delivers over <strong className="text-blue-300">300 days of sunshine annually</strong>, particularly in the Algarve and Silver Coast regions. The cost of living in Portugal runs approximately 30% below the United States, with groceries 30-60% cheaper, restaurants 32-38% less expensive, and rental prices about 40% more affordable than comparable American cities.
            </p>
            <p>
              For investors considering personal use or family planning, these factors translate to real value. A €500,000 Portuguese property doesn't just generate rental income; it provides a high-quality European base at a fraction of the carrying cost of equivalent properties in Paris, London, Amsterdam, or Barcelona.
            </p>
          </div>
        </section>

        {/* Cultural Assets */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
            Portugal's cultural and strategic assets for international investors
          </h2>
          <div className="space-y-4 text-lg text-blue-50/90 leading-relaxed">
            <p>
              Portugal offers <strong className="text-blue-300">17 UNESCO World Heritage Sites</strong>, from Lisbon's historic center to the Douro Valley's wine terraces. The country's maritime heritage, combined with centuries of global trade, created a sophisticated, cosmopolitan culture that welcomes international residents while maintaining strong traditional identity—a key factor for Dutch and American expats considering relocation.
            </p>
            <p>
              The geographic position on Europe's Atlantic coast provides strategic advantages for international property investors. Portugal serves as a gateway between Europe, Africa, and the Americas, with Lisbon and Porto functioning as major transportation hubs. You're two hours from London, three from New York's time zone, and ideally positioned for European business travel—particularly relevant for Dutch investors maintaining business ties across Europe.
            </p>
          </div>
        </section>

        {/* Tax Benefits */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
            Portugal tax benefits: the Non-Habitual Resident (NHR) program
          </h2>
          <div className="space-y-4 text-lg text-blue-50/90 leading-relaxed">
            <p>
              Portugal's Non-Habitual Resident tax regime offers new residents significant benefits, including a <strong className="text-blue-300">flat 20% income tax rate</strong> for qualifying professions and exemptions on various foreign income streams, including dividends and rental earnings from non-Portuguese sources. Available for ten years, the NHR program represents genuine tax efficiency for high-net-worth Dutch, American, and European individuals considering EU residency.
            </p>
            <p>
              We're not tax advisors, and individual circumstances vary, but the framework exists for structuring tax-efficient European residency in ways that few other EU countries currently offer. This makes Portugal particularly attractive for Dutch investors and American expats seeking European property investment with favorable tax treatment.
            </p>
          </div>
        </section>

        {/* Investment Thesis */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
            The investment thesis: why Portugal real estate in 2025
          </h2>
          <div className="space-y-4 text-lg text-blue-50/90 leading-relaxed">
            <p>
              Portugal in 2025 presents what we look for in international real estate markets: strong fundamentals, positive demographic trends, improving infrastructure, stable governance, and a quality-of-life proposition that attracts and retains the professional and entrepreneurial classes who drive long-term property demand.
            </p>
            <p>
              The remarkable surge in American, Dutch, and Northern European investment—with US investors now comprising 58% of the market and American residents increasing sevenfold since 2017—reflects more than a passing trend. It signals a fundamental reassessment of where sophisticated international capital sees the best combination of returns, stability, and lifestyle value in Europe.
            </p>
            <p>
              The Portuguese property market has matured beyond the bargain-hunting phase of the 2010s but hasn't reached the valuation saturation of coastal Spain, France, or Italy. There's a window here—not forever, but for the next several years—to enter a European real estate market with genuine growth potential at prices that still make sense.
            </p>
            <p>
              For Dutch investors, American buyers, and international families seeking portfolio diversification outside traditional markets, tax-efficient European residency options, or simply a Mediterranean property that generates income while appreciating, Portugal warrants serious consideration.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 md:p-12 border border-blue-500/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
            Your bridge to Portuguese property investment
          </h2>
          <p className="text-lg text-blue-50/90 leading-relaxed mb-8">
            Whether you're a Dutch investor seeking renovation projects along the Silver Coast, an American family exploring European lifestyle property, or an international buyer looking for turnkey real estate development opportunities, Portugal offers a compelling combination of investment returns and quality of life.
          </p>
          <p className="text-lg text-blue-50/90 leading-relaxed mb-8">
            The question isn't whether Portugal is a good market. The question is whether it fits your investment objectives, time horizon, and portfolio strategy. That's a conversation worth having.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-6 text-lg">
              Explore investment opportunities →
            </Button>
          </Link>
        </section>

        {/* Sources */}
        <section className="max-w-4xl mx-auto text-sm text-blue-200/70">
          <h3 className="text-lg font-semibold mb-4 text-blue-300">Sources:</h3>
          <ul className="space-y-2">
            <li>• Essential Business: <a href="https://www.essential-business.pt/2025/10/29/portugal-in-the-sights-of-us-investors-but-home-grown-investment-remains-thin/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Portugal in the sights of US investors</a></li>
            <li>• Portugal Resident: <a href="https://www.portugalresident.com/us-investors-flock-to-portugals-stable-market/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">US investors flock to Portugal's stable market</a></li>
            <li>• The Portugal News: <a href="https://www.theportugalnews.com/news/2025-05-14/escaping-to-portugal-the-rising-wave-of-american-real-estate-investment/97629" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Escaping to Portugal: the rising wave of American real estate investment</a></li>
            <li>• Travel And Tour World: <a href="https://www.travelandtourworld.com/news/article/portugal-sees-record-us-buyer-interest-in-property-market-as-numbers-soar-and-new-flights-open-doors-to-southern-algarve/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Portugal sees record US buyer interest</a></li>
            <li>• Portugal Buyers Agent: <a href="https://portugalbuyersagent.com/portugal-real-estate/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Portugal real estate guide</a></li>
          </ul>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-blue-200/60">
          <p>© 2025 Solinvest. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Ready to explore Portuguese property investment opportunities? <strong>Solinvest</strong> connects Dutch, American, and international investors with high-quality real estate development projects in Portugal.
          </p>
        </div>
      </footer>
    </div>
  );
}
