import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton({ onClick }) {

  return (
    <>
      <button className={classes.button} onClick={onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>0</span>
      </button>
    </>
  );
}
