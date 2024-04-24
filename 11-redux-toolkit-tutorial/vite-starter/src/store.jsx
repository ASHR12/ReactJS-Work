import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer, // whatever name we define here will be used in useSelector
    modal: modalReducer,
  },
});

export default store;
