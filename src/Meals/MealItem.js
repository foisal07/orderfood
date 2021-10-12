import React from "react";
import classes from "./MealItem.module.css";

export default function MealItem({ name, description, price }) {
  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{name}</h3>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </li>
    </>
  );
}
