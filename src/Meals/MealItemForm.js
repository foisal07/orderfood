import React, { useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useRef } from "react";

export default function MealItemForm({ id, onAddToCart }) {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const inputAmountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim() === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={inputAmountRef}
          label="Amount"
          input={{
            id: "amount_" + id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+Add</button>
        {!amountIsValid && <p>Please enter between 1 to 5</p>}
      </form>
    </>
  );
}
