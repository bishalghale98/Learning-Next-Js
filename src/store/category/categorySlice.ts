import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategoryInitialState } from "./types";
import { getAllCategories } from "./categoryAction";

const initialState: ICategoryInitialState = {
  categories: [],
  loading: false,
  success: false,
  error: null,
  meta: {
    requestId: "",
    arg: null,
    requestStatus: "",
  },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    resetCategoryState(state) {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.categories = action.payload.data;
        state.meta = action.meta;

        state.error = null;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const categoryActions = categorySlice.actions;
export const { resetCategoryState } = categoryActions;
export default categorySlice.reducer;
