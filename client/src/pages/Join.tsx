import { useState, useEffect } from "react";
import InvestorForm from "@/components/InvestorForm";

/**
 * Direct link page that automatically opens the investor form
 * URL: /join
 * Use case: Share this link directly with potential investors
 */
export default function Join() {
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    // Automatically open the form when the page loads
    setFormOpen(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-background p-4">
      <div className="max-w-2xl w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Join Our Investor Community</h1>
          <p className="text-lg text-muted-foreground">
            Complete your investment profile to get exclusive access to off-market Portuguese property deals.
          </p>
        </div>

        <div className="bg-card border rounded-lg p-8 space-y-4">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>✓ 11 quick questions</span>
            <span>•</span>
            <span>✓ ~5 minutes</span>
            <span>•</span>
            <span>✓ Instant access</span>
          </div>

          <button
            onClick={() => setFormOpen(true)}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Start Investment Profile
          </button>

          <p className="text-xs text-muted-foreground">
            By completing this form, you'll be added to our private WhatsApp investor group with direct access to our founders.
          </p>
        </div>
      </div>

      <InvestorForm open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
}
