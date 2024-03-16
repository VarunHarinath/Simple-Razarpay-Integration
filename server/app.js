import express from "express";
import cors from "cors";
import { config } from "dotenv";
import paymentRoute from "./routes/PaymentRoutes.js";

config({ path: "./config/config.env" });

export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({
    key: process.env.RAZERPAY_API_KEY,
  })
);

app.get("/", (req, res) =>
  res.send("Home Page")
);
