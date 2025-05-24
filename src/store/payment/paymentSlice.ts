import { createSlice } from "@reduxjs/toolkit";
import { IPayment } from "./type";

interface IPaymentInitialState {
  payments: IPayment[];
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: IPaymentInitialState = {
  payments: [],
  loading: false,
  success: false,
  error: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    fetchPaymentsStart(state) {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    fetchPaymentsSuccess(state, action) {
      state.loading = false;
      state.success = true;
      state.payments = action.payload;
      state.error = null;
    },
    fetchPaymentsFailure(state, action) {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

const { fetchPaymentsStart, fetchPaymentsSuccess, fetchPaymentsFailure } =
  paymentSlice.actions;
export default paymentSlice.reducer;
