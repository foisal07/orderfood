import classes from "./Cart.module.css";

import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

export default function Cart({ onClose }) {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.items);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <>
      <div>
        {console.log(cartItems)}
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{cartCtx.totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={onClose}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </>
  );
}
