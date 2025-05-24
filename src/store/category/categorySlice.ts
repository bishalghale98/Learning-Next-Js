import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategoryInitialState } from "./types";


const initialState: ICategoryInitialState = {
  categories: [],
  loading: false,
  success: false,
  error: null,
};

 const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
   fetchCategoriesStart(state){
      state.loading = true;
      state.success = false;
      state.error = null;
   },
    fetchCategoriesSuccess(state, action) {
      state.loading = false;
      state.success = true;
      state.categories = action.payload;
      state.error = null;
    },
    fetchCategoriesFailure(state, action) {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});


const  { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailure } = categorySlice.actions;
export default categorySlice.reducer;