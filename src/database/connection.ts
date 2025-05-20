import mongoose from "mongoose";

const MONGODB_CS = process.env.MONGODB_CS;

if (!MONGODB_CS) {
  throw new Error("Please define the MONGODB_URI in .env.local");
}

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_CS);
    console.log("connected successfully");
  } catch (error) {
    console.log("error connecting ...", error);
  }
};

export default dbConnect;
