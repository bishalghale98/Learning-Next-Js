import {
  createCategory,
  deleteCategory,
  getCategory,
} from "@/lib/api/category";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCategories = createAsyncThunk(
  "category/getAllCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCategory();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
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
      const response = await createCategory(data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeCategory = createAsyncThunk(
  "category/removeCategory",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await deleteCategory(id);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
