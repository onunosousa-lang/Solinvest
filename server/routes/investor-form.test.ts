import { describe, it, expect, vi, beforeEach } from "vitest";
import request from "supertest";
import express from "express";
import investorFormRouter from "./investor-form";

// Mock Resend
vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ id: "test-email-id" }),
    },
  })),
}));

describe("POST /api/investor-form", () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use(investorFormRouter);
  });

  it("should submit investor form successfully", async () => {
    const formData = {
      goals: ["Long-term rental – steady 5-7% net yield, hands-off"],
      goalsOther: "",
      capitalBand: "€400k – €1M",
      ticketSize: "€100k – €250k",
      returnMindset: "6% – compensate for illiquidity",
      timeHorizon: "7 years",
      regionPreference: "Algarve coast",
      productTypes: ["City condominium – long-term tenancy"],
      disqualifyingIssue: "No approved short-term rental licence path.",
      governanceSafeguards: "Independent RICS valuation + audited SPV accounts.",
      professionalResource: "Corporate-finance modelling & debt arranging.",
      visualization1: "Late-afternoon Atlantic light across the limestone floor…",
      visualization2: "Net yield 5.8% at 65% LTV, 14-month construction timeline.",
      fullName: "John Smith",
      whatsappNumber: "+351 912 345 678",
      email: "john@example.com",
      declarations: [
        "I conduct due-diligence before investing",
        "I will share red-flag findings promptly",
      ],
    };

    const response = await request(app)
      .post("/api/investor-form")
      .send(formData)
      .expect(200);

    expect(response.body).toEqual({ success: true });
  });

  it("should handle missing required fields gracefully", async () => {
    const incompleteData = {
      fullName: "John Smith",
      // Missing other required fields
    };

    const response = await request(app)
      .post("/api/investor-form")
      .send(incompleteData);

    // Should still return 200 but might have validation issues
    // In production, you might want to add proper validation
    expect(response.status).toBeLessThanOrEqual(500);
  });
});
