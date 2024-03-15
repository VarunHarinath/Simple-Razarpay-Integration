import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/PaymentsModel.js";

export const checkout = async (req, res) => {
  const options = {
    amount: 4900,
    currency: "INR",
  };
  try {
    const order = await instance.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
  }
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZERPAY_SECRET_KEY)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature == razorpay_signature;

  if (isAuthentic) {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });
    res.redirect(
      `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      sucess: false,
      l̥,
    });
  }
};
