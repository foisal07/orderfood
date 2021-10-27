import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";
import classes from "./CheckoutForm.module.css";

export default function CheckoutForm() {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    phone: true,
  });

  const enteredNameRef = useRef();
  const enteredAddressRef = useRef();
  const enteredPhoneRef = useRef();

  const isEmpty = (enteredValue) => enteredValue.trim() === "";

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = enteredNameRef.current.value;
    const enteredAddress = enteredAddressRef.current.value;
    const enteredPhone = enteredPhoneRef.current.value;

    const isEneteredNameValid = !isEmpty(enteredName);
    const isEneteredAddressValid = !isEmpty(enteredAddress);
    const isEneteredPhoneValid = !isEmpty(enteredPhone);

    setFormInputsValidity({
      name: isEneteredNameValid,
      address: isEneteredAddressValid,
      phone: isEneteredPhoneValid,
    });

    const isFormValid =
      isEneteredNameValid && isEneteredAddressValid && isEneteredPhoneValid;

    if (!isFormValid) return;
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const addressControlClasses = `${classes.control} ${
    formInputsValidity.address ? "" : classes.invalid
  }`;
  const phoneControlClasses = `${classes.control} ${
    formInputsValidity.phone ? "" : classes.invalid
  }`;

  return (
    <>
      <form className={nameControlClasses} onSubmit={confirmHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" ref={enteredNameRef} />
          {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        </div>

        <div className={addressControlClasses}>
          <label htmlFor="address">Address</label>
          <input type="text" ref={enteredAddressRef} />
          {!formInputsValidity.address && <p>Please enter a valid address!</p>}
        </div>

        <div className={phoneControlClasses}>
          <label htmlFor="phone">Phone</label>
          <input type="number" ref={enteredPhoneRef} />
          {!formInputsValidity.phone && (
            <p>Please enter a valid phone number!</p>
          )}
        </div>

        <div className={classes.action}>
          <button type="button">Cancel</button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
    </>
  );
}
