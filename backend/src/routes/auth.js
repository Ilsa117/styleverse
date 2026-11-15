import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

const makeToken = (id) =>
  jwt.sign({ sub: id }, process.env.JWT_SECRET, { expiresIn: "7d" });

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ error: "name, email and password are required" });
  if (password.length < 6)
    return res.status(400).json({ error: "Password must be at least 6 characters" });

  const exists = await User.findOne({ email: email.toLowerCase() });
  if (exists) return res.status(400).json({ error: "Email already registered" });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });

  res.status(201).json({
    token: makeToken(user.id),
    user: { id: user.id, name: user.name, email: user.email },
  });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "email and password are required" });

  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ error: "Wrong email or password" });

  res.json({
    token: makeToken(user.id),
    user: { id: user.id, name: user.name, email: user.email },
  });
});

// Logged-in user ki info (token test karne ke liye)
router.get("/me", requireAuth, (req, res) => {
  res.json(req.user);
});

export default router;