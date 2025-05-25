import { getCategory } from "@/lib/api/category";
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
