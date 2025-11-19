import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface InvestorFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  // Q1 - Goals (multi-select)
  goals: string[];
  goalsOther: string;
  
  // Q2 - Capital band
  capitalBand: string;
  
  // Q3 - Ticket size
  ticketSize: string;
  
  // Q4 - Return mindset
  returnMindset: string;
  
  // Q5 - Time horizon
  timeHorizon: string;
  
  // Q6 - Region preference
  regionPreference: string;
  
  // Q7 - Product type (multi-select, max 2)
  productTypes: string[];
  
  // Q8 - Disqualifying issue
  disqualifyingIssue: string;
  
  // Q9 - Governance safeguards
  governanceSafeguards: string;
  

  
  // Q11 - Visualization 1
  visualization1: string;
  
  // Q12 - Visualization 2
  visualization2: string;
  
  // Q13-15 - Contact
  fullName: string;
  whatsappNumber: string;
  email: string;
  
  // Q16 - Declarations
  declarations: string[];
}

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/E2AsebwrnRgA8Jk7bqVyIY";

export default function InvestorForm({ open, onOpenChange }: InvestorFormProps) {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    goals: [],
    goalsOther: "",
    capitalBand: "",
    ticketSize: "",
    returnMindset: "",
    timeHorizon: "",
    regionPreference: "",
    productTypes: [],
    disqualifyingIssue: "",
    governanceSafeguards: "",

    visualization1: "",
    visualization2: "",
    fullName: "",
    whatsappNumber: "",
    email: "",
    declarations: [],
  });

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const handleProductTypeToggle = (type: string) => {
    setFormData(prev => {
      const current = prev.productTypes;
      if (current.includes(type)) {
        return { ...prev, productTypes: current.filter(t => t !== type) };
      }
      if (current.length >= 2) {
        toast.error("Maximum 2 product types allowed");
        return prev;
      }
      return { ...prev, productTypes: [...current, type] };
    });
  };

  const handleDeclarationToggle = (declaration: string) => {
    setFormData(prev => ({
      ...prev,
      declarations: prev.declarations.includes(declaration)
        ? prev.declarations.filter(d => d !== declaration)
        : [...prev.declarations, declaration]
    }));
  };

  const validateScreen = (screen: number): boolean => {
    switch (screen) {
      case 2:
        if (formData.goals.length === 0) {
          toast.error("Please select at least one goal");
          return false;
        }
        break;
      case 3:
        if (!formData.capitalBand) {
          toast.error("Please select your capital band");
          return false;
        }
        break;
      case 4:
        if (!formData.ticketSize) {
          toast.error("Please select your ticket size");
          return false;
        }
        break;
      case 5:
        if (!formData.returnMindset) {
          toast.error("Please select your return expectation");
          return false;
        }
        break;
      case 6:
        if (!formData.timeHorizon) {
          toast.error("Please select your time horizon");
          return false;
        }
        break;
      case 7:
        if (!formData.regionPreference) {
          toast.error("Please select your preferred region");
          return false;
        }
        break;
      case 8:
        if (formData.productTypes.length === 0) {
          toast.error("Please select at least one product type");
          return false;
        }
        break;
      case 9:
        if (!formData.disqualifyingIssue.trim()) {
          toast.error("Please describe a disqualifying issue");
          return false;
        }
        break;
      case 10:
        if (!formData.governanceSafeguards.trim()) {
          toast.error("Please list governance safeguards");
          return false;
        }
        break;
      case 11:
        if (!formData.visualization1.trim()) {
          toast.error("Please describe your future vision");
          return false;
        }
        break;
      case 12:
        if (!formData.visualization2.trim()) {
          toast.error("Please describe your decision trigger");
          return false;
        }
        break;
      case 13:
        if (!formData.fullName.trim()) {
          toast.error("Please enter your full name");
          return false;
        }
        if (!formData.whatsappNumber.trim()) {
          toast.error("Please enter your WhatsApp number");
          return false;
        }
        if (formData.declarations.length < 2) {
          toast.error("Please accept at least 2 declarations");
          return false;
        }
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (validateScreen(currentScreen)) {
      setCurrentScreen(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentScreen(prev => prev - 1);
  };

  const handleSubmit = async () => {
    if (!validateScreen(13)) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/investor-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      toast.success("Profile submitted successfully!");
      setCurrentScreen(14);
      
      // Redirect to WhatsApp after 2 seconds
      setTimeout(() => {
        window.open(WHATSAPP_GROUP_URL, "_blank");
        onOpenChange(false);
        // Reset form
        setCurrentScreen(1);
        setFormData({
          goals: [],
          goalsOther: "",
          capitalBand: "",
          ticketSize: "",
          returnMindset: "",
          timeHorizon: "",
          regionPreference: "",
          productTypes: [],
          disqualifyingIssue: "",
          governanceSafeguards: "",
      
          visualization1: "",
          visualization2: "",
          fullName: "",
          whatsappNumber: "",
          email: "",
          declarations: [],
        });
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return (
          <div className="space-y-6 text-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Portuguese Investment Intent Profile</h2>
              <p className="text-muted-foreground">
                Ten short questions – five minutes – then instant access to off-market mid-high & high-end Portuguese deals.
              </p>
            </div>
            <Button onClick={handleNext} size="lg" className="w-full">
              Start Intent Profile
            </Button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Q1. Which outcomes are you actively pursuing in Portugal?</h3>
              <p className="text-sm text-muted-foreground mb-4">(Choose any)</p>
            </div>
            <div className="space-y-3">
              {[
                "Develop & exit – value-add construction, sell within 1-3 years",
                "Long-term rental – steady 5-7% net yield, hands-off",
                "Tourism asset – boutique hotel, AL-licensed villas, glamping",
                "Holiday / second home – personal use + occasional letting",
                "Bed-and-breakfast / guest-house – owner-operator or managed",
                "Passive land-bank – secure permits, sell to operator later",
              ].map((goal) => (
                <div key={goal} className="flex items-start space-x-2">
                  <Checkbox
                    id={goal}
                    checked={formData.goals.includes(goal)}
                    onCheckedChange={() => handleGoalToggle(goal)}
                  />
                  <label htmlFor={goal} className="text-sm leading-tight cursor-pointer">
                    {goal}
                  </label>
                </div>
              ))}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="other"
                  checked={formData.goals.includes("Other")}
                  onCheckedChange={() => handleGoalToggle("Other")}
                />
                <div className="flex-1">
                  <label htmlFor="other" className="text-sm leading-tight cursor-pointer">
                    Other
                  </label>
                  {formData.goals.includes("Other") && (
                    <Input
                      placeholder="Describe briefly..."
                      value={formData.goalsOther}
                      onChange={(e) => setFormData(prev => ({ ...prev, goalsOther: e.target.value }))}
                      className="mt-2"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Q2. Capital I can place inside Portugal in the next 12 months (incl. partners)</h3>
            <RadioGroup value={formData.capitalBand} onValueChange={(value) => setFormData(prev => ({ ...prev, capitalBand: value }))}>
              {[
                "< €150k",
                "€150k – €400k",
                "€400k – €1M",
                "€1M – €3M",
                "> €3M",
              ].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Q3. Equity cheque I customarily write per transaction</h3>
            <RadioGroup value={formData.ticketSize} onValueChange={(value) => setFormData(prev => ({ ...prev, ticketSize: value }))}>
              {[
                "€25k – €100k",
                "€100k – €250k",
                "€250k – €500k",
                "€500k – €1M",
                "€1M+",
              ].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Q4. Net annual return (after all local costs & taxes) that satisfies my mandate</h3>
            <RadioGroup value={formData.returnMindset} onValueChange={(value) => setFormData(prev => ({ ...prev, returnMindset: value }))}>
              {[
                "3% – covers holding costs",
                "4% – match low-risk EU sovereign",
                "5% – beat inflation",
                "6% – compensate for illiquidity",
                "7%+ – alternative-asset premium",
              ].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Q5. Minimum holding period I model before reassessment</h3>
            <RadioGroup value={formData.timeHorizon} onValueChange={(value) => setFormData(prev => ({ ...prev, timeHorizon: value }))}>
              {[
                "2 years",
                "5 years",
                "10 years",
                "15+ years",
                "Indefinite – I rarely sell",
              ].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Q6. Portuguese region that best aligns with my risk-adjusted outlook</h3>
            <RadioGroup value={formData.regionPreference} onValueChange={(value) => setFormData(prev => ({ ...prev, regionPreference: value }))}>
              {[
                "Lisbon prime",
                "Porto core",
                "Algarve coast",
                "Silver Coast",
                "Alentejo coast",
                "Azores / Madeira",
                "Interior low-density (Golden-Visa eligible)",
              ].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 8:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Q7. Property segment I can confidently underwrite</h3>
              <p className="text-sm text-muted-foreground mb-4">(Select up to 2)</p>
            </div>
            <div className="space-y-3">
              {[
                "City condominium – long-term tenancy",
                "Short-term rental licensed unit (AL)",
                "Boutique hotel / guest-house ≤ 20 keys",
                "Rural tourism quinta",
                "Turnkey development for sale",
                "Off-plan turnkey with rental guarantee",
                "Development land – I control construction",
                "Portfolio diversification – multi-segment",
              ].map((type) => (
                <div key={type} className="flex items-start space-x-2">
                  <Checkbox
                    id={type}
                    checked={formData.productTypes.includes(type)}
                    onCheckedChange={() => handleProductTypeToggle(type)}
                  />
                  <label htmlFor={type} className="text-sm leading-tight cursor-pointer">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Q8. State the single issue that would immediately disqualify a Portuguese project for you</h3>
            <Textarea
              placeholder="No approved short-term rental licence path."
              value={formData.disqualifyingIssue}
              onChange={(e) => setFormData(prev => ({ ...prev, disqualifyingIssue: e.target.value }))}
              maxLength={250}
              rows={4}
            />
            <p className="text-xs text-muted-foreground text-right">{formData.disqualifyingIssue.length}/250</p>
          </div>
        );

      case 10:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Q9. List the governance safeguards you insist on before co-investing (1-3 items)</h3>
            <Textarea
              placeholder="Independent RICS valuation + audited SPV accounts."
              value={formData.governanceSafeguards}
              onChange={(e) => setFormData(prev => ({ ...prev, governanceSafeguards: e.target.value }))}
              maxLength={250}
              rows={4}
            />
            <p className="text-xs text-muted-foreground text-right">{formData.governanceSafeguards.length}/250</p>
          </div>
        );

      case 11:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Q10. Future-pace: It is five years from today and you are standing inside your Portuguese asset. Describe one sensory detail (sight, sound, scent) that confirms you chose wisely.</h3>
            <Textarea
              placeholder="Late-afternoon Atlantic light across the limestone floor…"
              value={formData.visualization1}
              onChange={(e) => setFormData(prev => ({ ...prev, visualization1: e.target.value }))}
              maxLength={300}
              rows={4}
            />
            <p className="text-xs text-muted-foreground text-right">{formData.visualization1.length}/300</p>
          </div>
        );

      case 12:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Q11. Decision trigger: Give us the exact line in a deal teaser that would make you request the full data-room immediately.</h3>
            <Textarea
              placeholder="Net yield 5.8% at 65% LTV, 14-month construction timeline, fixed-rate debt covered 1.4×."
              value={formData.visualization2}
              onChange={(e) => setFormData(prev => ({ ...prev, visualization2: e.target.value }))}
              maxLength={300}
              rows={4}
            />
            <p className="text-xs text-muted-foreground text-right">{formData.visualization2.length}/300</p>
          </div>
        );

      case 13:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact & Declarations</h3>
            
            <div className="space-y-2">
              <Label htmlFor="fullName">Q10. First & last name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                placeholder="John Smith"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsappNumber">Q11. WhatsApp number (international format) *</Label>
              <Input
                id="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData(prev => ({ ...prev, whatsappNumber: e.target.value }))}
                placeholder="+351 912 345 678"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email (optional back-up)</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-3 pt-4">
              <Label>Declarations (minimum 2 required) *</Label>
              {[
                "I conduct due-diligence before investing",
                "I will share red-flag findings promptly",
                "Deals are first-committed, first-served – I reply timely",
                "I consent to secure storage of responses & e-mail updates",
              ].map((declaration) => (
                <div key={declaration} className="flex items-start space-x-2">
                  <Checkbox
                    id={declaration}
                    checked={formData.declarations.includes(declaration)}
                    onCheckedChange={() => handleDeclarationToggle(declaration)}
                  />
                  <label htmlFor={declaration} className="text-sm leading-tight cursor-pointer">
                    {declaration}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 14:
        return (
          <div className="space-y-6 text-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Profile complete – proceed to deal feed</h2>
              <p className="text-muted-foreground">
                Tap below to open WhatsApp; an administrator will validate your request within one business day.
              </p>
            </div>
            <Button
              onClick={() => {
                window.open(WHATSAPP_GROUP_URL, "_blank");
                onOpenChange(false);
              }}
              size="lg"
              className="w-full"
            >
              Enter Investor Forum
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {currentScreen === 1 ? "Welcome" : currentScreen === 14 ? "Thank You!" : `Question ${currentScreen - 1} of 11`}
          </DialogTitle>
        </DialogHeader>

        <div className="py-4">
          {renderScreen()}
        </div>

        {currentScreen > 1 && currentScreen < 14 && (
          <div className="flex gap-3 pt-4 border-t">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={isSubmitting}
              className="flex-1"
            >
              Back
            </Button>
            {currentScreen === 14 ? (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Profile"
                )}
              </Button>
            ) : (
              <Button onClick={handleNext} className="flex-1">
                Next
              </Button>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
