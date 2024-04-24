import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../utils"; // Ensure this points to your custom fetch wrapper

// General fetch data thunk for any product-related endpoint
export const fetchProductThunks = createAsyncThunk(
  "products/fetchData",
  async ({ url, type }, { rejectWithValue }) => {
    try {
      const response = await customFetch(url);
      console.log("fetch data", response);
      if (response.status !== 200) {
        // Axios throws an error for non-2xx status codes, so this might not be necessary,
        // but if you need to handle anything specific:
        throw new Error(response.data.message || "Failed to fetch data");
      }
      return { data: response.data, meta: response.meta, type }; // Accessing data directly as Axios already parsed the JSON response
    } catch (error) {
      // Axios wraps the response error in error.response
      if (error.response) {
        // Handle the error response if the request was made and the server responded
        return rejectWithValue(error.response.data.message || error.message);
      } else if (error.request) {
        // The request was made but no response was received
        return rejectWithValue("No response received from server.");
      } else {
        // Something happened in setting up the request and triggered an Error
        return rejectWithValue(error.message);
      }
    }
  }
);
