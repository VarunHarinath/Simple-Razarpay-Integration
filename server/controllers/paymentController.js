import { instance } from "../server.js";

export const checkout = async (req, res) => {
  const options = {
    amount: 4900,
    currency: "INR",
  };
  try {
    const order = await instance.orders.create(options);
    console.log(order);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({
    sucess: "true",
  });
};
