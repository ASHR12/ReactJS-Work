import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { checkoutCart } from "./cartThunks"; // Ensure path to thunks is correct
const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
const getCartFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem("cart");
    // console.log("getCartFromLocalStorage", cart);
    if (cart) return JSON.parse(cart);
  } catch (error) {
    console.error("Failed to parse cart from localStorage", error);
  }
  return defaultState;
};
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.cartID === product.cartID
      );
      if (existingItem) {
        existingItem.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Item added to cart successfully!");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },

    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const index = state.cartItems.findIndex((item) => item.cartID === cartID);
      if (index !== -1) {
        const removedItem = state.cartItems[index];
        state.numItemsInCart -= removedItem.amount;
        state.cartTotal -= removedItem.price * removedItem.amount;
        state.cartItems.splice(index, 1);
        cartSlice.caseReducers.calculateTotals(state);
        toast.error("Item removed from cart successfully!");
      }
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.cartID === cartID
      );
      if (existingItem && amount !== existingItem.amount) {
        const diff = amount - existingItem.amount;
        state.numItemsInCart += diff;
        // Update the cartTotal
        state.cartTotal += existingItem.price * diff;
        // Since we are directly updating the amount
        existingItem.amount = amount;
        cartSlice.caseReducers.calculateTotals(state);
        toast.info("Item quantity updated in cart!");
      }
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkoutCart.fulfilled, (state, action) => {
        // Clear the cart after successful checkout
        state.cartItems = [];
        state.numItemsInCart = 0;
        state.shipping = 500;
        state.tax = 0;
        state.cartTotal = 0;
        state.orderTotal = 0;
        localStorage.setItem("cart", JSON.stringify(state));
        toast.success("Checkout successful! Your order has been placed.");
      })
      .addCase(checkoutCart.rejected, (state, action) => {
        console.log(action);
        toast.error(`Checkout failed: ${action.payload}`);
      });
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
