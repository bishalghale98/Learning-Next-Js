import {
  GET_Categories,
  POST_Categories,
} from "./controller/category.controller";

export async function POST(req: Request) {
  return POST_Categories(req);
}

export function GET(req: Request) {
  return GET_Categories(req);
}

export function DELETE(req: Request) {
    return 
}
