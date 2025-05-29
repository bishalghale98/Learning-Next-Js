import dbConnect from "@/database/connection";
import Category from "@/database/models/category.model";
import { NextRequest } from "next/server";
import { authMiddleware } from "../../../../../middleware/auth.middleware";

export async function POST_Categories(req: NextRequest) {
  try {
    // AUTH CHECK
    const authResponse = await authMiddleware(req as NextRequest);
    if (authResponse) return authResponse; // return if not authorized

    // Connect to DB
    await dbConnect();

    // Get request body
    const body = await req.json();
    const { name, description } = body;

    if (!name || !description) {
      return new Response(
        JSON.stringify({ message: "Please provide name and description" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if category already exists
    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return new Response(
        JSON.stringify({ message: "Category already exists" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create new category
    await Category.create({ name, description });

    return new Response(
      JSON.stringify({ message: "Category created successfully" }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in POST /api/category:", error);

    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
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

export async function GET_Category(req: NextRequest, id: any) {
  try {
    await dbConnect();

    const category = await Category.findById(id);

    if (!category) {
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
        data: category,
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

export async function PATCH_Categories(req: NextRequest, id: string) {
  try {
    // AUTH CHECK
    const authResponse = await authMiddleware(req as NextRequest);
    if (authResponse) return authResponse; // return if not authorized

    // Connect to DB
    await dbConnect();

    // Get request body
    const body = await req.json();
    const { name, description } = body;

    if (!name || !description) {
      return Response.json(
        { message: "Please provide name and description" },
        { status: 400 }
      );
    }

    const category = await Category.findByIdAndUpdate(
      id,
      {
        name,
        description,
      },
      { new: true }
    );

    return Response.json(
      {
        message: "Category edited successfully",
        data: category,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST /api/category:", error);

    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE_Categories(req: NextRequest, id: string) {
  try {
    const authResponse = await authMiddleware(req as NextRequest);
    if (authResponse) return authResponse; // return if not authorized

    // Connect to DB
    await dbConnect();

    if (!id) {
      return Response.json(
        {
          message: "Invalid id",
        },
        { status: 400 }
      );
    }

    const deleted = await Category.findByIdAndDelete(id);

    if (!deleted) {
      return Response.json(
        {
          message: "Something went wrong",
        },
        { status: 400 }
      );
    }

    return Response.json(
      {
        message: "Category deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
