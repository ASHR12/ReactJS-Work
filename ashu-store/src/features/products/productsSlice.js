import { createSlice } from "@reduxjs/toolkit";
import { fetchProductThunks } from "./fetchProductThunks";

const initialState = {
  products: null, // Stores the product data fetched
  meta: null, // Additional metadata if needed (e.g., pagination)
  isLoading: true, // Indicates if the request is in progress
  error: null, // Holds error messages if any
  layout: "grid", // Default layout
  singleProduct: null,
  searchParams: {
    search: "", // The search parameter starts as an empty string.
    company: "", // Company starts with 'all' and can be set to a specific company.
    category: "", // Category starts with 'all' and can be set to a specific category.
    shipping: "", // Shipping starts as false and can be toggled to true for free shipping.
    order: "", // Default sorting order.
    price: 100000,
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProductData(state) {
      state.products = null;
      state.meta = null;
      state.isLoading = false;
      state.error = null;
      state.singleProduct = null;
    },
    toggleLayout(state) {
      // Toggle between 'grid' and 'list'
      state.layout = state.layout === "grid" ? "list" : "grid";
    },
    setSearchParams(state, action) {
      console.log("setSearchParams", action.payload);
      state.searchParams = action.payload;
      console.log("searchParams after calling setSearch", state.searchParams);
    },
    resetSearchParams(state, action) {
      state.searchParams = {
        search: "",
        company: "all",
        category: "all",
        shipping: false,
        order: "a-z",
        price: 100000,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductThunks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductThunks.fulfilled, (state, action) => {
        console.log("action", action);
        state.isLoading = false;
        switch (action.payload.type) {
          case "single":
            state.singleProduct = action.payload.data;
            break;
          case "featured":
            state.products = action.payload.data;
            state.meta = action.payload.meta;
            break;
          default:
            state.products = action.payload.data;
            state.meta = action.payload.meta;
        }

        console.log("Fulfilled action payload:", action.payload);
      })
      .addCase(fetchProductThunks.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const {
  clearProductData,
  toggleLayout,
  setSearchParams,
  resetSearchParams,
} = productsSlice.actions;
export default productsSlice.reducer;
