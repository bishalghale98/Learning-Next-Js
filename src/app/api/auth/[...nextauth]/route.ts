import dbConnect from "@/database/connection";
import User, { IUser } from "@/database/models/user.model";
import NextAuth, { AuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

interface ExtendedUser extends IUser {
  id: string;
}

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }): Promise<boolean> {
      try {
        await dbConnect();
        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          await User.create({
            username: user.name,
            email: user.email,
            profileImage: user.image,
            googleId: user.id,
          });
        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
    async jwt({
      token,
      user,
    }: {
      token: JWT;
      user?: ExtendedUser | any;
    }): Promise<JWT> {
      if (user) {
        token.sub = user.id; // store user ID
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> {
      await dbConnect();
      const dbUser = await User.findById(token.sub);

      if (session.user && dbUser) {
        session.user.id = dbUser?._id?.toString();
        session.user.role = dbUser?.role;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
