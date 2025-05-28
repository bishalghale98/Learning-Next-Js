import { NextRequest } from "next/server";
import {
  GET_Categories,
  POST_Categories,
} from "./controller/category.controller";

export async function POST(req: NextRequest) {
  return POST_Categories(req);
}

export function GET(req: Request) {
  return GET_Categories(req);
}


