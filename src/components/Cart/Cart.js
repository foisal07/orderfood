import classes from "./Cart.module.css";

import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { useState } from "react/cjs/react.development";
import CheckoutForm from "./CheckoutForm";

export default function Cart({ onClose }) {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const checkoutFormHandler = () => {
    setShowCheckoutForm(true);
  };

  const confirmHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://reactorderfood-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          ordered: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          name={item.name}
          amount={item.amount}
          price={item.price}
          key={item.id}
          onAdd={addItemHandler.bind(null, item)}
          onRemove={removeItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <div>
      {cartItems}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalPrice.toFixed(2)}</span>
      </div>

      {!showCheckoutForm && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={onClose}>
            Close
          </button>
          <button className={classes.button} onClick={checkoutFormHandler}>
            Order
          </button>
        </div>
      )}

      {showCheckoutForm && (
        <CheckoutForm onCancel={onClose} onConfirm={confirmHandler} />
      )}
    </div>
  );

  const isSubmittingModalContent = <h2>Placing your orders...</h2>;

  const didSubmitModalContent = (
    <>
      <h2>Order successfull!</h2>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </>
  );
}
