import dbConnect from "@/database/connection";
import User, { IUser } from "@/database/models/user.model";
import NextAuth, { AuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

interface ExtendedUser extends IUser {
  id: string;
  _id?: string;
  dbUserId?: string;
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
    // Runs after successful OAuth login
    async signIn({ user }): Promise<boolean> {
      try {
        await dbConnect();

        // Check if user exists in MongoDB
        let dbUser = await User.findOne({ email: user.email });

        // Create user if not exists
        if (!dbUser) {
          dbUser = await User.create({
            username: user.name,
            email: user.email,
            profileImage: user.image,
            googleId: user.id,
          });
        }

        // Attach MongoDB user ID to `user` for jwt callback
        (user as any).dbUserId = dbUser._id.toString();

        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },

    // Runs when JWT token is created or updated
    async jwt({ token, user }): Promise<JWT> {
      // First time user logs in
      if (user) {
        // Store MongoDB _id in token.sub
        token.sub = (user as any).dbUserId || user.id;
      }
      return token;
    },

    // Runs whenever session is checked/created
    async session({ session, token }): Promise<Session> {
      await dbConnect();

      // Find user by MongoDB _id stored in token.sub
      const dbUser = await User.findById(token.sub);

      if (session.user && dbUser) {
        session.user.id = dbUser._id.toString();
        session.user.role = dbUser.role;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
