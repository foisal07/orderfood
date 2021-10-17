import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton({ onClick }) {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx);
  const numberOfItems = cartCtx.items.reduce(
    (curItem, NewItem) => curItem + NewItem.amount,
    0
  );

  return (
    <>
      <button className={classes.button} onClick={onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
      </button>
    </>
  );
}
