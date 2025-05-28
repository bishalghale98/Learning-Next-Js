import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategoryInitialState } from "./types";
import {
  createNewCategory,
  getAllCategories,
  removeCategory,
} from "./categoryAction";
import { nullable, string } from "zod";

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
  addCategories: "", // to store newly added category
  successRemove: false,
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
    },
    resetErrorState(state) {
      state.error.message = null;
      state.error.statusCode = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data;
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
        state.successCreate = false;
      })
      .addCase(createNewCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.successCreate = true;
        state.addCategories = action.payload.data; // add new category to the list
        state.meta = action.meta;
      })
      .addCase(createNewCategory.rejected, (state, action) => {
        state.loading = false;
        state.successCreate = false;
        state.error.message = (action.payload as { message: string })?.message;

        state.hasFetched = false;
      })
      .addCase(removeCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.successRemove = true;
        state.meta = action.meta;
      })
      .addCase(removeCategory.rejected, (state, action) => {
        state.loading = false;
        state.error.message = (action.payload as { message: string })?.message;
        state.successRemove = false
      }); // add category
  },
});

export const categoryActions = categorySlice.actions;
export const { resetFetchedState, resetSuccessState, resetErrorState, resetRemoveState } =
  categoryActions;
export default categorySlice.reducer;
