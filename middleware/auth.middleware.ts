import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserRole } from "@/database/models/user.model";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export const authMiddleware = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (session.user.role !== UserRole.ADMIN) {
    return new Response(JSON.stringify({ message: "Forbidden" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  // If everything is okay, return null to continue
  return null;
};
