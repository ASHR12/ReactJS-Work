import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../utils"; // Ensure this path is correct
import { toast } from "react-toastify";
import { convertCentsToDollars } from "../../utils/index";
export const checkoutCart = createAsyncThunk(
  "cart/checkout",
  async (orderDetails, { getState, rejectWithValue }) => {
    const { cartState, userState } = getState();
    console.log("cartState", cartState);
    console.log("userState", userState);
    const { cartItems, cartTotal, numItemsInCart, orderTotal } = cartState;
    if (!userState.user || !userState.user.jwt) {
      toast.error("You must be logged in to place an order.");
      return rejectWithValue("Authentication required.");
    }

    const { shippingAddress, shippingName } = orderDetails;
    const authToken = userState.user.jwt;

    try {
      const response = await customFetch.post(
        "/orders",
        {
          data: {
            address: shippingAddress,
            name: shippingName,
            cartItems: cartItems,
            chargeTotal: cartTotal,
            numItemsInCart: numItemsInCart,
            orderTotal: convertCentsToDollars(orderTotal),
          },
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      return response.data; // This might include order confirmation info, etc.
    } catch (error) {
      // console.log("inside catch", error);

      return rejectWithValue(
        error?.response?.data?.error?.message || error.message
      );
    }
  }
);
