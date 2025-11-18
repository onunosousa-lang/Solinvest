import express from "express";
import ViteExpress from "vite-express";
import investorFormRouter from "../routes/investor-form";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use(investorFormRouter);

// Start server with Vite
const PORT = Number(process.env.PORT) || 3000;

ViteExpress.listen(app, PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
