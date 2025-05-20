import mongoose from "mongoose";

const MONGODB_CS = process.env.MONGODB_CS;

if (!MONGODB_CS) {
  throw new Error("Please define the MONGODB_URI in .env.local");
}

const dbConnect = async () => {

  if (mongoose.connection.readyState === 1) {
    console.log("Already connected to the database");
    return;
  }
  try {
    await mongoose.connect(MONGODB_CS);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("error connecting ...", error);
  }
};

export default dbConnect;
