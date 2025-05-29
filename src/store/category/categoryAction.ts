import {
  createCategory,
  deleteCategory,
  editCategory,
  getCategory,
  getSingleCategory,
} from "@/lib/api/category";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCategories = createAsyncThunk(
  "category/getAllCategories",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCategory();
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getCategoryById = createAsyncThunk(
  "category/getCategoryById",
  async (id: string, { rejectWithValue }) => {
    try {
      const data = await getSingleCategory(id);
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

interface ICategoryData {
  name: string;
  description: string;
}

export const createNewCategory = createAsyncThunk(
  "category/addCategory",
  async (data: ICategoryData, { rejectWithValue }) => {
    try {
      const result = await createCategory(data);
      return result.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const removeCategory = createAsyncThunk(
  "category/removeCategory",
  async (id: string, { rejectWithValue }) => {
    try {
      const result = await deleteCategory(id);
      return result.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

interface UpdateCategoryParams {
  id: string;
  data: {
    name: string;
    description: string;
  };
}

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async ({ id, data }: UpdateCategoryParams, { rejectWithValue }) => {
    try {
      const result = await editCategory(id, data);
      return result.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
