import { UserRole } from "@/database/models/user.model";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      email: string;
      name?: string;
      image?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    sub: string;
    role?: string;
    email?: string;
  }
}
