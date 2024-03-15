import { app } from "./app.js";
import razorpay from "razorpay";

export const instance = new razorpay({
  key_id: process.env.RAZERPAY_API_KEY,
  key_secret: process.env.RAZERPAY_SECRET_KEY,
});

app.listen(process.env.PORT, () => {
  console.log(`server is runing on ${process.env.PORT}`);
});
