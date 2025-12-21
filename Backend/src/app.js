import express from "express";
import cors from "cors";

import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= HEALTH ================= */
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "ShoeStore API is running",
  });
});

/* ================= ROUTES ================= */
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

export default app;
