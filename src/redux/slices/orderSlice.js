import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    loading: false,
  },
  reducers: {},
});

export default orderSlice.reducer;
