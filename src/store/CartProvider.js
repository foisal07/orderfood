import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalPrice =
      state.totalPrice + action.item.price * action.item.amount;

    let updatedItems;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      // update the exisitng items amount
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      // copy all items
      updatedItems = [...state.items];

      // add the updated existing item to all items
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }

  if (action.type === "REMOVE") {
    const toDeleteItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const toDeleteItem = state.items[toDeleteItemIndex];

    const updatedTotalPrice = state.totalPrice - toDeleteItem.price;

    let updatedItems;

    if (toDeleteItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== toDeleteItem.id);
    } else {
      const updatedToDeleteItem = {
        ...toDeleteItem,
        amount: toDeleteItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[toDeleteItemIndex] = updatedToDeleteItem;
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

export default function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
