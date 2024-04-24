import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "./orderThunks"; // Make sure this import is correct

const initialState = {
  data: [],
  meta: null,
  isLoading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    // Define any synchronous reducers that you may need
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.meta = action.payload.meta; // Storing the meta info for pagination
        state.isLoading = false;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = ordersSlice.actions;
export default ordersSlice.reducer;
