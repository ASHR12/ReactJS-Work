// features/user/userActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "./userSlice";
import { customFetch } from "../../utils"; // Ensure this path is correct
import { toast } from "react-toastify";

export const performLogin = createAsyncThunk(
  "user/performLogin",
  async ({ loginDetails }, thunkAPI) => {
    // Default isGuest to false
    try {
      const response = await customFetch.post("/auth/local", loginDetails);
      const data = response.data;
      if (response.status === 200) {
        thunkAPI.dispatch(loginUser(data));
        return data;
      } else {
        // toast.error(data.message || "Login failed");
        return thunkAPI.rejectWithValue(data.message);
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.error.message
        : "Network error";
      // toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
