import mongoose from "mongoose";

export const connectDB = async (URI) => {
  try {
    await mongoose.connect(URI);
    console.log(`connection to database is sucessfull `);
  } catch (error) {
    console.log(error);
  }
};
