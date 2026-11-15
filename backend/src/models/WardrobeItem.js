import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    category: {
      type: String,
      enum: ["top", "bottom", "dress", "outerwear", "shoes", "accessory"],
      required: true,
    },
    imageUrl: { type: String, required: true },
    color: { type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.model("WardrobeItem", itemSchema);