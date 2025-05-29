import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategoryInitialState } from "./types";
import {
  createNewCategory,
  getAllCategories,
  getCategoryById,
  removeCategory,
  updateCategory,
} from "./categoryAction";

const initialState: ICategoryInitialState = {
  categories: [],
  loading: false,
  successCreate: false,
  error: {
    message: null,
    statusCode: null,
  },
  meta: {
    requestId: "",
    arg: null,
    requestStatus: "",
  },
  hasFetched: false,
  successRemove: false,
  loadingRemove: false,
  updatedCategory: null,
  successUpdate: false,
  loadingUpdate: false,
  loadingSingle: false,
  successSingle: false,
  singleCategory: null,
  addCategories: null
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    resetFetchedState(state) {
      state.hasFetched = false;
    },
    resetSuccessState(state) {
      state.successCreate = false;
    },
    resetRemoveState(state) {
      state.successRemove = false;
      state.loadingRemove = false;
    },
    resetErrorState(state) {
      state.error.message = null;
      state.error.statusCode = null;
    },
    resetUpdateCategory(state) {
      state.successUpdate = false;
    },
    resetSingleCategory(state) {
      state.successSingle = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.meta = action.meta;
        state.hasFetched = true;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error.message = (action.payload as { message: string })?.message;
        state.hasFetched = false;
      })
      .addCase(createNewCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNewCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.successCreate = true;
        state.categories.push(action.payload); // push new category directly
        state.meta = action.meta;
      })
      .addCase(createNewCategory.rejected, (state, action) => {
        state.loading = false;
        state.error.message = (action.payload as { message: string })?.message;
        state.hasFetched = false;
      })
      .addCase(removeCategory.pending, (state) => {
        state.loadingRemove = true;
        state.successRemove = false;
      })
      .addCase(removeCategory.fulfilled, (state) => {
        state.loadingRemove = false;
        state.successRemove = true;
      })
      .addCase(removeCategory.rejected, (state, action) => {
        state.loadingRemove = false;
        state.error.message = (action.payload as { message: string })?.message;
        state.successRemove = false;
      })
      .addCase(updateCategory.pending, (state) => {
        state.loadingUpdate = true;
        state.successUpdate = false;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loadingUpdate = false;
        state.updatedCategory = action.payload;
        state.successUpdate = true;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loadingUpdate = false;
        state.error.message = (action.payload as { message: string })?.message;
        state.successUpdate = false;
      })
      .addCase(getCategoryById.pending, (state) => {
        state.loadingSingle = true;
        state.successSingle = false;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.loadingSingle = false;
        state.singleCategory = action.payload;
        state.successSingle = true;
      })
      .addCase(getCategoryById.rejected, (state, action) => {
        state.loadingSingle = false;
        state.error.message = (action.payload as { message: string })?.message;
        state.successSingle = false;
      });
  },
});

export const categoryActions = categorySlice.actions;
export const {
  resetFetchedState,
  resetSuccessState,
  resetErrorState,
  resetRemoveState,
  resetUpdateCategory,
  resetSingleCategory,
} = categoryActions;
export default categorySlice.reducer;
