import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";   // ← nayi line

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use("/auth", authRoutes);                // ← nayi line

export default app;