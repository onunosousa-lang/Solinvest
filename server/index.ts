import express from "express";
import investorFormRouter from "./routes/investor-form";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(investorFormRouter);

export default app;
