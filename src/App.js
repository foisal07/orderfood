import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvailableMeals from "./Meals/AvailableMeals";
import Modal from "./UI/Modal";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (e) => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
      <CartProvider>
        {cartIsShown && (
          <Modal>
            <Cart onClose={hideCartHandler} />
          </Modal>
        )}
        <Header onShow={showCartHandler} />
        <AvailableMeals />
      </CartProvider>
    </div>
  );
}

export default App;
