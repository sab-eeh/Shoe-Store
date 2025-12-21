import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ================= STATIC FILES ================= */
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

/* ================= ROUTES ================= */
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

export default app;
