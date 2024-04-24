import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";

import { open } from "../features/modal/modalSlice";
const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, totalItems } = useSelector((state) => state.cart);
  if (totalItems < 1) {
    return (
      <section className="cart">
        <h2>Your Cart</h2>
        <h4 className="empty-cart">Your cart is empty</h4>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(open())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
