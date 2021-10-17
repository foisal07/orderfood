import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../store/cart-context";

export default function MealItem({ id, name, description, price }) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      name: name,
      id: id,
      amount: amount,
      description: description,
      price: price,
    });
  };

  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{name}</h3>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm id={id} onAddToCart={addToCartHandler} />
        </div>
      </li>
    </>
  );
}
