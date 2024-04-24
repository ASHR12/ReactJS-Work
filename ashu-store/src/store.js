import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";
import orderReducer from "./features/order/ordersSlice";
import productReducer from "./features/products/productsSlice";
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
    orderState: orderReducer,
    productState: productReducer,
  },
});
