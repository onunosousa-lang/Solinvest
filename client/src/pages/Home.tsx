import React from "react";
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
import { useState, useEffect, useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { toast } from "sonner";
import { translations, type Language } from "@/translations";


function CounterCard({ value, label, desc, language }: { value: string, label: string, desc: string, language: Language }) {
  // Extract number from value string (e.g., "17%" -> 17, "€2,900" -> 2900)
  const numMatch = value.match(/[\d,]+/);
  const targetNum = numMatch ? parseInt(numMatch[0].replace(/,/g, '')) : 0;
  const { count, ref } = useCountUp(targetNum, 2000);
  
  // Reconstruct the value with animated count
  let displayValue = value;
  if (value.includes('%')) {
    displayValue = `${count}%`;
  } else if (value.includes('€')) {
    displayValue = `€${count.toLocaleString()}`;
  } else if (value.includes('-')) {
    // For ranges like "5-7%", just show the value as is
    displayValue = value;
  }
  
  return (
    <Card ref={ref} className="bg-white/95 backdrop-blur-sm">
      <CardContent className="pt-8 pb-6 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">{displayValue}</h3>
        <p className="text-lg font-semibold text-foreground mb-1">{label}</p>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </CardContent>
    </Card>
  );
}

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

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const messages = {
        en: "Thank you for your message! We'll be in touch soon.",
        nl: "Bedankt voor uw bericht! We nemen binnenkort contact op.",
        pt: "Obrigado pela sua mensagem! Entraremos em contato em breve."
      };
      toast.success(messages[language]);
      setFormData({ name: "", email: "", whatsapp: "", message: "" });
    } catch (error) {
      const errorMessages = {
        en: "Failed to send message. Please try again or contact us directly at info@solinvest.net",
        nl: "Bericht verzenden mislukt. Probeer het opnieuw of neem direct contact op via info@solinvest.net",
        pt: "Falha ao enviar mensagem. Tente novamente ou contacte-nos diretamente em info@solinvest.net"
      };
      toast.error(errorMessages[language]);
    } finally {
      setIsSubmitting(false);
    }
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
      {/* Sticky Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-md" role="navigation" aria-label="Main navigation">
        <div className="container flex items-center justify-between py-3">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }); }} className="text-sm font-medium text-white hover:text-accent transition-colors">
              {language === 'en' ? 'Home' : language === 'nl' ? 'Home' : 'Início'}
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }} className="text-sm font-medium text-white hover:text-accent transition-colors">
              {language === 'en' ? 'About' : language === 'nl' ? 'Over' : 'Sobre'}
            </a>
            <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }} className="text-sm font-medium text-white hover:text-accent transition-colors">
              {language === 'en' ? 'Services' : language === 'nl' ? 'Diensten' : 'Serviços'}
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="text-sm font-medium text-white hover:text-accent transition-colors">
              {language === 'en' ? 'Contact' : language === 'nl' ? 'Contact' : 'Contato'}
            </a>
          </div>
          <div className="flex gap-2 bg-black/30 rounded-lg p-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                language === 'en' ? 'bg-white text-primary' : 'text-white hover:text-white/80'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('nl')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                language === 'nl' ? 'bg-white text-primary' : 'text-white hover:text-white/80'
              }`}
            >
              NL
            </button>
            <button
              onClick={() => setLanguage('pt')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                language === 'pt' ? 'bg-white text-primary' : 'text-white hover:text-white/80'
              }`}
            >
              PT
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Large Logo */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/hero-villa.jpg)",
            filter: "brightness(0.35)",
          }}
        />
        <div className="relative z-10 container text-center text-white px-6">
          {/* Large Logo Above Title - 2x Bigger */}
          <img 
            src={APP_LOGO} 
            alt="Solinvest - Portuguese Real Estate Investment & Property Development" 
            className="h-64 md:h-80 mx-auto mb-8 drop-shadow-2xl" 
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
      <section id="stats" 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.92), rgba(0, 60, 120, 0.92)), url(/ocean-view-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
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

      {/* About Section with Ocean Background */}
      <section id="about" 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.93), rgba(255, 255, 255, 0.93)), url(/ocean-view-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container relative z-10">
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
            <Card className="bg-white/80 backdrop-blur-sm border-accent shadow-xl">
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

      {/* Process Section with Ocean Background */}
      <section id="services" 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url(/ocean-view-3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            {t.processTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: MapPin, title: t.process1Title, desc: t.process1Desc, color: "text-primary" },
              { icon: Building2, title: t.process2Title, desc: t.process2Desc, color: "text-secondary" },
              { icon: Users, title: t.process3Title, desc: t.process3Desc, color: "text-accent" },
              { icon: TrendingUp, title: t.process4Title, desc: t.process4Desc, color: "text-primary" },
            ].map((step, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow border-2 hover:border-primary bg-white/90 backdrop-blur-sm">
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
          backgroundAttachment: "fixed",
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

      {/* Regions Section with Ocean Background - No Property Photos */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(/ocean-view-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            {t.regionsTitle}
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            {t.regionsSubtitle}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { title: t.region1Title, desc: t.region1Desc, icon: MapPin },
              { title: t.region2Title, desc: t.region2Desc, icon: Building2 },
              { title: t.region3Title, desc: t.region3Desc, icon: TrendingUp },
              { title: t.region4Title, desc: t.region4Desc, icon: Leaf },
            ].map((region, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-2 hover:border-accent bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <region.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
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

      {/* Community Section with Ocean Background */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(96, 165, 200, 0.15), rgba(96, 165, 200, 0.15)), linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url(/ocean-view-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container relative z-10">
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

      {/* Team Section - Moved to End with Reduced Photo Sizes */}
      <section id="team" 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(/ocean-view-4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
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
            {/* Nuno Sousa - Reduced Photo Size */}
            <Card className="border-2 hover:border-accent transition-colors overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <img 
                    src="/nuno-photo.png" 
                    alt="Nuno Sousa - Construction Specialist & Team Leader at Solinvest"
                    loading="lazy" 
                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-accent shadow-lg"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-card-foreground flex items-center justify-center gap-2">
                      <Leaf className="w-6 h-6 text-accent" />
                      {t.nunoName}
                    </h3>
                    <p className="text-secondary font-semibold">{t.nunoRole}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {t.nunoDesc}
                </p>
              </CardContent>
            </Card>

            {/* Christiaan Ticheler - Reduced Photo Size */}
            <Card className="border-2 hover:border-secondary transition-colors overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <img 
                    src="/christiaan-photo.jpg" 
                    alt="Christiaan Ticheler - Real Estate Strategy Expert at Solinvest"
                    loading="lazy" 
                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-secondary shadow-lg"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-card-foreground flex items-center justify-center gap-2">
                      <TrendingUp className="w-6 h-6 text-secondary" />
                      {t.christianName}
                    </h3>
                    <p className="text-secondary font-semibold">{t.christianRole}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-center">
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

      {/* Contact Section with Ocean Background */}
      <section 
        id="contact" 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.94)), url(/ocean-view-3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
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
              <Card className="border-2 border-primary hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <a href="tel:+31629841297" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    {t.contactPhone1}
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">{t.contactPhone1Lang}</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-secondary hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-3 text-secondary" />
                  <a href="tel:+31615079953" className="text-xl font-bold text-foreground hover:text-secondary transition-colors">
                    {t.contactPhone2}
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">{t.contactPhone2Lang}</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-accent bg-white/90 backdrop-blur-sm">
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
                  <Button type="submit" size="lg" className="w-full text-lg bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? (language === 'en' ? 'Sending...' : language === 'nl' ? 'Verzenden...' : 'Enviando...') : t.contactSubmit}
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground mb-4">
                {language === 'en' ? 'Or email us directly at' : language === 'nl' ? 'Of email ons direct op' : 'Ou envie-nos um email diretamente para'}{' '}
                <a href="mailto:info@solinvest.net" className="text-accent hover:underline font-medium">info@solinvest.net</a>
              </p>
              <WhatsAppCTA />
            </div>
          </div>
        </div>
      </section>

      {/* Footer with KVK and Insurance - Ocean Background */}
      <footer 
        className="py-12 relative overflow-hidden border-t border-primary-foreground/20"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 60, 120, 0.95), rgba(0, 60, 120, 0.95)), url(/ocean-view-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <div className="text-center mb-8">
            <img src={APP_LOGO} alt="Solinvest Logo" className="h-16 mx-auto mb-6 drop-shadow-xl" loading="lazy" />
            
            {/* KVK and Insurance Information */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6 text-white">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span className="text-sm font-medium">{t.footerKVK}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">{t.footerInsurance}</span>
              </div>
            </div>
            
            <p className="text-sm text-white/90">
              {t.footerCopyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
