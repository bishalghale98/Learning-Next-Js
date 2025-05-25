import { combineReducers } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";
import paymentSlice from "./payment/paymentSlice";

const rootReducer = combineReducers({
  category: categorySlice,
  payment: paymentSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
