import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const en: any = process.env.MONGODB_URI;
    await mongoose.connect(en);
    console.log("MongoDB connected");
  } catch (err: any) {
    console.error(`Error: ${err.message}`);
  }
};
