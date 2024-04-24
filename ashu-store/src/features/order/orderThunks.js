// orderThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../utils"; // Ensure this path is correct
import { toast } from "react-toastify";

export const fetchOrders = createAsyncThunk(
  "order/fetchOrders",
  async (page, { getState, rejectWithValue }) => {
    const { userState } = getState();
    if (!userState.user || !userState.user.jwt) {
      toast.error("You must be logged in to view your orders.");
      return rejectWithValue("Authentication required.");
    }
    const authToken = userState.user.jwt;

    try {
      const response = await customFetch.get(`/orders?page=${page}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.status !== 200) {
        throw new Error("Failed to fetch orders");
      }
      return response.data; // Make sure this aligns with your API's response structure
    } catch (error) {
      toast.error(`Failed to fetch orders: ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);
