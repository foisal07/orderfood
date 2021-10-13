import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvailableMeals from "./Meals/AvailableMeals";
import Modal from "./UI/Modal";

function App() {
  return (
    <div className="App">
      <Modal>
        <Cart />
      </Modal>
      <Header />
      <AvailableMeals />
    </div>
  );
}

export default App;
