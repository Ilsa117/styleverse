import "dotenv/config";
import fs from "fs";
import app from "./app.js";
import { connectDB } from "./db.js";

fs.mkdirSync("uploads", { recursive: true });

await connectDB();
app.listen(process.env.PORT, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);