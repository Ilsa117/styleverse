import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import WardrobeItem from "../models/WardrobeItem.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) =>
      cb(null, crypto.randomUUID() + path.extname(file.originalname)),
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) =>
    file.mimetype.startsWith("image/")
      ? cb(null, true)
      : cb(new Error("Only image files are allowed")),
});

// Naya kapra add karna
router.post("/items", requireAuth, upload.single("image"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "image file is required" });
  try {
    const item = await WardrobeItem.create({
      user: req.user.id,
      category: req.body.category,
      imageUrl: `/uploads/${req.file.filename}`,
    });
    res.status(201).json(item);
  } catch (err) {
    fs.unlink(req.file.path, () => {});
    res.status(400).json({ error: err.message });
  }
});

// Apne kapre dekhna (optional ?category=top)
router.get("/items", requireAuth, async (req, res) => {
  const filter = { user: req.user.id };
  if (req.query.category) filter.category = req.query.category;
  const items = await WardrobeItem.find(filter).sort({ createdAt: -1 });
  res.json(items);
});

// Kapra delete karna
router.delete("/items/:id", requireAuth, async (req, res) => {
  const item = await WardrobeItem.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id,
  });
  if (!item) return res.status(404).json({ error: "Item not found" });
  fs.unlink("." + item.imageUrl, () => {});
  res.json({ deleted: true });
});

export default router;