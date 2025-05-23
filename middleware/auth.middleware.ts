// check if incomming user is authenticated
// req user is admin or not
// check if user is admin
// check if user is student

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserRole } from "@/database/models/user.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const authMiddleware = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json(
      {
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }

  if (session.user.role !== UserRole.ADMIN) {
    return Response.json({ message: "Forbidden" }, { status: 403 });
  }

  return NextResponse.next();
};


export { authMiddleware };
