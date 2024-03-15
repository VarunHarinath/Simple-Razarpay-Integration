import { app } from "./app.js";
import razorpay from "razorpay";
import { connectDB } from "./config/database.js";
import { config } from "dotenv";
config({ path: "./config/config.env" });

export const instance = new razorpay({
  key_id: process.env.RAZERPAY_API_KEY,
  key_secret: process.env.RAZERPAY_SECRET_KEY,
});

connectDB(process.env.DATABASE_URI);

app.listen(process.env.PORT, () => {
  console.log(`server is runing on ${process.env.PORT}`);
});
