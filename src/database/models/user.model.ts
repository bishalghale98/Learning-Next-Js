import mongoose from "mongoose";
const Schema = mongoose.Schema;

export enum UserRole {
  STUDENT = "student",
  ADMIN = "admin",
}

export interface IUser extends Document {
  username: string;
  email: string;
  googleId: string;
  profileImage?: string;
  role: UserRole;
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: [UserRole.STUDENT, UserRole.ADMIN],
    required: true,
    default: UserRole.STUDENT,
  },
  googleId: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: "../../../public/default-profile.png",
  },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;
