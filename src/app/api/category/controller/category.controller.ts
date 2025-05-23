import dbConnect from "@/database/connection";
import Category from "@/database/models/category.model";
import { NextRequest } from "next/server";
import { authMiddleware } from "../../../../../middleware/auth.middleware";

export async function POST_Categories(req: Request) {
  try {
    const response = authMiddleware(req as NextRequest);

    if (response) {
      return response;
    }

    // database connection
    await dbConnect();

    const { name, description } = await req.json();

    if (!name) {
      return Response.json(
        {
          message: "Please provide name and description",
        },
        { status: 400 }
      );
    }

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return Response.json(
        {
          message: "Category already exists",
        },
        { status: 400 }
      );
    }

    await Category.create({
      name,
      description,
    });

    return Response.json(
      {
        message: "Category created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
    console.error("Error creating category:", error);
  }
}

export async function GET_Categories(req: Request) {
  try {
    await dbConnect();

    const categories = await Category.find();

    if (categories.length === 0) {
      return Response.json(
        {
          message: "No categories found",
        },
        { status: 404 }
      );
    }
    return Response.json(
      {
        message: "Categories fetched successfully",
        data: categories,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
    console.error("Error fetching categories:", error);
  }
}

export async function DELETE_Categories(req: Request) {}
