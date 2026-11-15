import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import wardrobeRoutes from "./routes/Wardrobe.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use("/auth", authRoutes);         
app.use("/wardrobe", wardrobeRoutes);

export default app;