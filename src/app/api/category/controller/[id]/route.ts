import { NextRequest } from "next/server";
import { PATCH_Categories } from "../category.controller";

export function DELETE(req: Request) {
  return;
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  return PATCH_Categories(req, id);
}
