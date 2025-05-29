import { NextRequest } from "next/server";
import {
  DELETE_Categories,
  GET_Category,
  PATCH_Categories,
} from "../controller/category.controller";
import { string } from "zod";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  return DELETE_Categories(req, id);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  return PATCH_Categories(req, id);
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = await params.id;

  console.log(params.id);

  return GET_Category(req, id);
}
