import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import axios from "axios";
const url = "https://www.course-api.com/react-useReducer-cart-project";

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, { rejectWithValue }) => {
    console.log("_", _); // pass the value from component like useEffect from app.jsx
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  cartItems: [],
  total: 0,
  totalItems: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseItem: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );
    },
    decreaseItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].amount > 1) {
          state.cartItems[itemIndex].amount -= 1;
        } else {
          state.cartItems.splice(itemIndex, 1);
        }
      }
    },
    calculateTotal: (state) => {
      const totals = state.cartItems.reduce(
        (acc, item) => {
          acc.total += item.price * item.amount; // Calculate total price
          acc.totalItems += item.amount; // Calculate total number of items
          return acc;
        },
        { total: 0, totalItems: 0 }
      );
      state.total = totals.total;
      state.totalItems = totals.totalItems;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Failed to fetch cart items:", action.payload);
      });
  },
});

// console.log(cartSlice);

export const {
  clearCart,
  removeItem,
  increaseItem,
  calculateTotal,
  decreaseItem,
} = cartSlice.actions;

export default cartSlice.reducer;
