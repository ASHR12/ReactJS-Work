// context.js
import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import cartItems from "./data";
import axios from "axios";
const AppContext = createContext();
import {
  CLEAR_CART,
  INCREASE,
  REMOVE_ITEM,
  DECREASE,
  LOAD_ITEMS,
  DISPLAY_ITEMS,
} from "./actions.js";
import { calculateCartTotals } from "./utils";
const initialState = {
  loading: false,
  cart: new Map(),
  total: 0,
  itemCount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: LOAD_ITEMS });
    try {
      const response = await axios.get(
        "https://www.course-api.com/react-useReducer-cart-project"
      );
      dispatch({ type: DISPLAY_ITEMS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { totalCost, totalItems } = calculateCartTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  // To remove an item
  const removeItem = (id) => {
    // console.log(id);
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  // To increase item quantity
  const increaseAmount = (id) => {
    dispatch({ type: INCREASE, payload: id });
  };

  // To decrease item quantity
  const decreaseAmount = (id) => {
    dispatch({ type: DECREASE, payload: id });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        totalCost,
        totalItems,
        fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
