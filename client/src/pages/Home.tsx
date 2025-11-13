import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { APP_LOGO } from "@/const";
import { 
  Building2, 
  Leaf, 
  TrendingUp, 
  Users, 
  MapPin, 
  MessageCircle, 
  ChevronDown,
  CheckCircle,
  Phone,
  Shield
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { translations, type Language } from "@/translations";

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const t = translations[language];
  const whatsappLink = "https://wa.me/31629841297?text=Hi%2C%20I%27d%20like%20to%20join%20the%20Solinvest%20private%20investor%20group";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(language === 'en' ? "Thank you for your interest! We'll be in touch soon." : "Bedankt voor uw interesse! We nemen binnenkort contact op.");
    setFormData({ name: "", email: "", whatsapp: "", message: "" });
  };

  const WhatsAppCTA = ({ className = "" }: { className?: string }) => (
    <Button
      asChild
      size="lg"
      className={`bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-lg ${className}`}
    >
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 h-5 w-5" />
        {t.heroCTA}
      </a>
    </Button>
  );

  return (
    <div className="min-h-screen">
      {/* Simplified Navigation Header - No Logo */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-end py-4">
          <div className="flex gap-2 bg-muted rounded-lg p-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('nl')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                language === 'nl' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              NL
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Large Logo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/hero-villa.jpg)",
            filter: "brightness(0.35)",
          }}
        />
        <div className="relative z-10 container text-center text-white px-6">
          {/* Large Logo Above Title */}
          <img 
            src={APP_LOGO} 
            alt="Solinvest" 
            className="h-32 md:h-40 mx-auto mb-8 drop-shadow-2xl" 
          />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto font-light drop-shadow-md">
            {t.heroSubtitle}
          </p>
          <WhatsAppCTA />
          <div className="mt-16 flex flex-col items-center animate-bounce">
            <ChevronDown className="w-10 h-10 text-white/80" />
            <span className="text-sm text-white/80 mt-2">{t.scrollDown}</span>
          </div>
        </div>
      </section>

      {/* Stats Section with Ocean Background */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.92), rgba(0, 60, 120, 0.92)), url(/ocean-view-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            {t.statsTitle}
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: t.stat1Value, label: t.stat1Label, desc: t.stat1Desc },
              { value: t.stat2Value, label: t.stat2Label, desc: t.stat2Desc },
              { value: t.stat3Value, label: t.stat3Label, desc: t.stat3Desc },
              { value: t.stat4Value, label: t.stat4Label, desc: t.stat4Desc },
            ].map((stat, index) => (
              <Card key={index} className="text-center bg-white/95 border-secondary/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold mb-2 text-secondary">{stat.value}</div>
                  <div className="text-lg font-semibold mb-1 text-card-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <WhatsAppCTA />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t.aboutTitle}
            </h2>
            <p className="text-xl text-secondary font-semibold mb-8">
              {t.aboutSubtitle}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {t.aboutText}
            </p>
            <Card className="bg-gradient-to-r from-accent/10 to-secondary/10 border-accent">
              <CardContent className="p-8">
                <p className="text-lg font-medium text-foreground italic">
                  {t.aboutVision}
                </p>
              </CardContent>
            </Card>
            <div className="mt-12">
              <WhatsAppCTA />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-card-foreground">
            {t.processTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: MapPin, title: t.process1Title, desc: t.process1Desc, color: "text-primary" },
              { icon: Building2, title: t.process2Title, desc: t.process2Desc, color: "text-secondary" },
              { icon: Users, title: t.process3Title, desc: t.process3Desc, color: "text-accent" },
              { icon: TrendingUp, title: t.process4Title, desc: t.process4Desc, color: "text-primary" },
            ].map((step, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow border-2 hover:border-primary">
                <CardContent className="p-6">
                  <step.icon className={`w-16 h-16 mx-auto mb-4 ${step.color}`} />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <WhatsAppCTA />
          </div>
        </div>
      </section>

      {/* Problem-Solving Section with Ocean View */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.88), rgba(0, 60, 120, 0.88)), url(/ocean-view-4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            {t.solutionTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: t.problem1Title, desc: t.problem1Desc },
              { title: t.problem2Title, desc: t.problem2Desc },
              { title: t.problem3Title, desc: t.problem3Desc },
              { title: t.problem4Title, desc: t.problem4Desc },
            ].map((problem, index) => (
              <div key={index} className="text-center">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-3 text-white">{problem.title}</h3>
                <p className="text-sm text-white/90 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <WhatsAppCTA />
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            {t.regionsTitle}
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            {t.regionsSubtitle}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { title: t.region1Title, desc: t.region1Desc, image: "/region-setubal.jpeg" },
              { title: t.region2Title, desc: t.region2Desc, image: "/ocean-view-1.jpg" },
              { title: t.region3Title, desc: t.region3Desc, image: "/rustic-retreat.jpg" },
              { title: t.region4Title, desc: t.region4Desc, image: "/region-algarve.jpg" },
            ].map((region, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-2 hover:border-accent">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${region.image})` }} />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{region.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{region.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-lg text-secondary font-semibold mt-12">
            {t.regionsExpansion}
          </p>
          <div className="text-center mt-8">
            <WhatsAppCTA />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-secondary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <MessageCircle className="w-20 h-20 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t.communityTitle}
            </h2>
            <p className="text-xl text-secondary font-semibold mb-6">
              {t.communitySubtitle}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {t.communityText}
            </p>
            <WhatsAppCTA />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-card-foreground">
              {t.contactTitle}
            </h2>
            <p className="text-center text-xl text-secondary font-semibold mb-6">
              {t.contactSubtitle}
            </p>
            <p className="text-center text-lg text-muted-foreground mb-8">
              {t.contactText}
            </p>
            
            {/* Contact Numbers */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2 border-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <a href="tel:+31629841297" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    {t.contactPhone1}
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">{t.contactPhone1Lang}</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-secondary hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-3 text-secondary" />
                  <a href="tel:+31615079953" className="text-xl font-bold text-foreground hover:text-secondary transition-colors">
                    {t.contactPhone2}
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">{t.contactPhone2Lang}</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                      {t.contactNameLabel} *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'en' ? "John Smith" : "Jan de Vries"}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                      {t.contactEmailLabel} *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={language === 'en' ? "john@example.com" : "jan@voorbeeld.nl"}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium mb-2 text-card-foreground">
                      {t.contactWhatsAppLabel}
                    </label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+31 6 1234 5678"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                      {t.contactMessageLabel} *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={language === 'en' ? "Tell us about your investment interests in Portugal..." : "Vertel ons over uw investeringsinteresses in Portugal..."}
                      className="w-full min-h-32"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg bg-primary hover:bg-primary/90">
                    {t.contactSubmit}
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <WhatsAppCTA />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Moved to End */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(/ocean-view-3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            {t.teamTitle}
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            {t.teamSubtitle}
          </p>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Nuno Sousa */}
            <Card className="border-2 hover:border-accent transition-colors overflow-hidden shadow-lg">
              <div 
                className="h-96 bg-cover bg-center" 
                style={{ backgroundImage: "url(/nuno-sousa-cropped.png)" }} 
              />
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Leaf className="w-10 h-10 text-accent mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">{t.nunoName}</h3>
                    <p className="text-secondary font-semibold">{t.nunoRole}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t.nunoDesc}
                </p>
              </CardContent>
            </Card>

            {/* Christiaan Ticheler */}
            <Card className="border-2 hover:border-secondary transition-colors overflow-hidden shadow-lg">
              <div 
                className="h-96 bg-cover bg-top" 
                style={{ backgroundImage: "url(/christiaan-ticheler.webp)" }} 
              />
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-10 h-10 text-secondary mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">{t.christianName}</h3>
                    <p className="text-secondary font-semibold">{t.christianRole}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t.christianDesc}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <WhatsAppCTA />
          </div>
        </div>
      </section>

      {/* Footer with KVK and Insurance */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/20">
        <div className="container">
          <div className="text-center mb-8">
            <img src={APP_LOGO} alt="Solinvest" className="h-16 mx-auto mb-6 brightness-0 invert" />
            
            {/* KVK and Insurance Information */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span className="text-sm font-medium">{t.footerKVK}: [Your KVK Number]</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">{t.footerInsurance}</span>
              </div>
            </div>
            
            <p className="text-sm opacity-90">
              {t.footerCopyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
