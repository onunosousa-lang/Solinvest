import { Router } from "express";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const router = Router();

router.post("/api/investor-form", async (req, res) => {
  try {
    const formData = req.body;

    // Format email content
    const emailContent = `
<h1>New Investor Profile Submission</h1>

<h2>Contact Information</h2>
<p><strong>Name:</strong> ${formData.fullName}</p>
<p><strong>WhatsApp:</strong> ${formData.whatsappNumber}</p>
<p><strong>Email:</strong> ${formData.email || "Not provided"}</p>

<h2>Investment Profile</h2>

<h3>Q1. Investment Goals</h3>
<ul>
${formData.goals.map((goal: string) => `<li>${goal}</li>`).join("")}
${formData.goalsOther ? `<li>Other: ${formData.goalsOther}</li>` : ""}
</ul>

<h3>Q2. Capital Band</h3>
<p>${formData.capitalBand}</p>

<h3>Q3. Ticket Size</h3>
<p>${formData.ticketSize}</p>

<h3>Q4. Return Mindset</h3>
<p>${formData.returnMindset}</p>

<h3>Q5. Time Horizon</h3>
<p>${formData.timeHorizon}</p>

<h3>Q6. Region Preference</h3>
<p>${formData.regionPreference}</p>

<h3>Q7. Product Types</h3>
<ul>
${formData.productTypes.map((type: string) => `<li>${type}</li>`).join("")}
</ul>

<h3>Q8. Disqualifying Issue</h3>
<p>${formData.disqualifyingIssue}</p>

<h3>Q9. Governance Safeguards</h3>
<p>${formData.governanceSafeguards}</p>

<h3>Q10. Visualization (5 years)</h3>
<p>${formData.visualization1}</p>

<h3>Q11. Decision Trigger</h3>
<p>${formData.visualization2}</p>

<h3>Declarations Accepted</h3>
<ul>
${formData.declarations.map((declaration: string) => `<li>${declaration}</li>`).join("")}
</ul>

<hr>
<p><em>Submitted at: ${new Date().toISOString()}</em></p>
    `.trim();

    // Send email to both addresses
    await resend.emails.send({
      from: "Solinvest <noreply@solinvest.net>",
      to: ["onunosousa@gmail.com", "info@solinvest.net"],
      subject: `New Investor Profile: ${formData.fullName}`,
      html: emailContent,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Error submitting investor form:", error);
    res.status(500).json({ error: "Failed to submit form" });
  }
});

export default router;
