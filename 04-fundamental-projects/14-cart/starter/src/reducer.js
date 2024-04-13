// reducer.js
import {
  CLEAR_CART,
  INCREASE,
  DECREASE,
  REMOVE_ITEM,
  UPDATE_TOTALS,
  LOAD_ITEMS,
  DISPLAY_ITEMS,
} from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case LOAD_ITEMS:
      return { ...state, loading: true };
    case DISPLAY_ITEMS:
      console.log("called", action.payload);
      return {
        ...state,
        cart: new Map(action.payload.map((item) => [item.id, item])),
        loading: false, // Add this line to set loading to false),
      };
    case CLEAR_CART:
      return { ...state, cart: new Map() };
    case REMOVE_ITEM: {
      const updatedCart = new Map(state.cart);
      // console.log(action.payload);
      updatedCart.delete(action.payload); // payload is the item's id
      return { ...state, cart: updatedCart };
    }
    case INCREASE: {
      const updatedCart = new Map(state.cart);
      const item = updatedCart.get(action.payload);
      updatedCart.set(action.payload, { ...item, amount: item.amount + 1 });
      return { ...state, cart: updatedCart };
    }
    case DECREASE: {
      const updatedCart = new Map(state.cart);
      const item = updatedCart.get(action.payload);
      if (item.amount === 1) {
        updatedCart.delete(action.payload);
      } else {
        updatedCart.set(action.payload, { ...item, amount: item.amount - 1 });
      }
      return { ...state, cart: updatedCart };
    }
    case UPDATE_TOTALS:
      return {
        ...state,
        totalCost: action.payload.totalCost,
        totalItems: action.payload.totalItems,
      };
    // Add cases for INCREASE, DECREASE, CALCULATE_TOTALS
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default reducer;
