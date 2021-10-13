import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvailableMeals from "./Meals/AvailableMeals";
import Modal from "./UI/Modal";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (e) => {
    console.log(e);
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
      {cartIsShown && (
        <Modal>
          <Cart onClose={hideCartHandler} />
        </Modal>
      )}

      <Header onShow={showCartHandler} />
      <AvailableMeals />
    </div>
  );
}

export default App;
