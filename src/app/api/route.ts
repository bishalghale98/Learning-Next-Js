import dbConnect from "@/database/connection";
import User from "@/database/models/user.model";

export async function GET() {
  dbConnect();

  await User.create({
    username: "test",
    email: "test@email.com",
    googleId: "123456789",
    profileImage: "this is image",
  });

  return Response.json({
    message: "you api hit",
  });
}
