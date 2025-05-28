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
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase("payment/getPayments/pending", (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    })
  }
});


export default paymentSlice.reducer;
