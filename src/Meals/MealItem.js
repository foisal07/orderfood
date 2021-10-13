import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem({ name, description, price, id, key }) {
  return (
    <>
      <li className={classes.meal} key={key}>
        <div>
          <h3>{name}</h3>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm id={id} />
        </div>
      </li>
    </>
  );
}
