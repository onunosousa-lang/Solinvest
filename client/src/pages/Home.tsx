import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Leaf, TrendingUp, Users, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Obrigado pelo seu interesse! Entraremos em contacto em breve.");
    setFormData({ name: "", email: "", whatsapp: "", message: "" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/hero-villa.jpg)",
            filter: "brightness(0.6)",
          }}
        />
        <div className="relative z-10 container text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Investir em Vida Sustentável em Portugal.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Oportunidades imobiliárias exclusivas: unimos o rigor financeiro do Norte da Europa com a arte da construção ecológica portuguesa.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
          >
            Descubra Oportunidades Exclusivas
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Solinvest: Desenvolvimento Imobiliário com Propósito.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              A Solinvest é uma boutique de desenvolvimento imobiliário sediada em Portugal. A nossa missão é transformar propriedades únicas – de quintas rurais a villas – em ativos de alto valor, sustentáveis e que preservam a autenticidade do estilo de vida português. Através de um modelo de parceria transparente, oferecemos aos nossos investidores acesso a oportunidades que combinam <strong className="text-foreground">arquitetura, natureza e valor financeiro</strong>.
            </p>
            <Card className="bg-accent/20 border-accent">
              <CardContent className="p-8">
                <p className="text-lg font-medium text-accent-foreground italic">
                  <strong>Visão:</strong> Criar empreendimentos que combinam arquitetura, natureza e valor financeiro, preservando o charme e a autenticidade da vida portuguesa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-card-foreground">
            A Nossa Dupla Expertise: Rigor e Sustentabilidade.
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            O seu investimento é gerido por uma parceria única de competências:
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-12 h-12 text-primary mr-4" />
                  <h3 className="text-2xl font-semibold text-card-foreground">Estratégia e Finanças</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-card-foreground">Christiaan Ticheler</strong>, com vasta experiência em gestão de portfólio e análise de ativos, garante que cada projeto é uma oportunidade de investimento sólida e bem estruturada.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Leaf className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-semibold text-card-foreground">Construção Ecológica e Qualidade</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-card-foreground">Nuno Sousa</strong>, especialista em construção sustentável e houtskeletbouw, assegura que o seu ativo é construído com a máxima eficiência energética e respeito pelo ambiente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            O Nosso Processo de Criação de Valor.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "1. Identificação de Propriedades",
                description: "Encontramos terrenos e imóveis off-market com forte potencial de crescimento nas regiões mais promissoras de Portugal.",
              },
              {
                icon: Building2,
                title: "2. Gestão de Desenvolvimento",
                description: "Gerimos todas as fases: conceito, design, licenciamento, construção e acabamentos. Foco em design sustentável e materiais naturais.",
              },
              {
                icon: Users,
                title: "3. Estruturas de Parceria",
                description: "Oferecemos modelos claros de co-investimento ou propriedade total, adaptados aos seus objetivos.",
              },
              {
                icon: TrendingUp,
                title: "4. Estratégias de Saída e Rendimento",
                description: "Escolha entre a revenda com valorização ou um modelo de rendimento de aluguer boutique de longo prazo.",
              },
            ].map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <step.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-card-foreground">
            Onde Investimos: O Melhor de Portugal.
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Concentramos a nossa atenção em áreas com potencial de valorização e qualidade de vida inigualável, garantindo que o seu investimento está alinhado com as tendências de mercado e a beleza natural do país.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Setúbal & Palmela",
                description: "A tranquilidade do Alentejo e a proximidade de Lisboa. Foco em eco-villas e quintas.",
                image: "/region-setubal.jpeg",
              },
              {
                title: "Costa de Prata (Leiria)",
                description: "A beleza intocada da costa atlântica, ideal para projetos de segunda habitação e turismo sustentável.",
                image: "/villa-pool.png",
              },
              {
                title: "Algarve (Projetos Específicos)",
                description: "Oportunidades de boutique resorts e conversões rurais com foco em bem-estar e ecoturismo.",
                image: "/region-algarve.jpg",
              },
            ].map((region, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${region.image})` }}
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-card-foreground">{region.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{region.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Community Section */}
      <section className="py-20 bg-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <MessageCircle className="w-20 h-20 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Transparência em Tempo Real: O Nosso Grupo Exclusivo.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              A Solinvest não é apenas um investimento; é uma parceria. Mantemos um <strong className="text-foreground">grupo privado de investidores no WhatsApp</strong> onde partilhamos descobertas de novas propriedades, atualizações de projetos e objetivos de Retorno sobre o Investimento (ROI). É um espaço direto e privado para conversação com os fundadores, focado em <strong className="text-foreground">oportunidades reais, números reais e confiança mútua</strong>.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              Peça Acesso ao Grupo Exclusivo
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
              O Seu Próximo Investimento Começa Aqui.
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              Está pronto para construir um futuro sustentável e lucrativo em Portugal? Contacte-nos diretamente para agendar uma conversa inicial e explorar as oportunidades de investimento disponíveis.
            </p>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="João Silva"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="joao@exemplo.com"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium mb-2 text-card-foreground">
                      WhatsApp (opcional)
                    </label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+351 912 345 678"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte-nos sobre o seu interesse em investir em Portugal..."
                      className="w-full min-h-32"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg">
                    Falar com um Fundador
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8 border-t border-border">
        <div className="container text-center">
          <p className="text-muted-foreground">
            Solinvest © {new Date().getFullYear()}. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
