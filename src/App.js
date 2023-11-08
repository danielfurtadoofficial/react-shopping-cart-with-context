import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(true);

  const toggleCartHandler = () => {
    console.log("event");
    setShowCart((prevState) => !prevState);
  };

  const products = [
    {
      id: "0",
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      id: "1",
      title: "Test 2",
      price: 4,
      description: "This is a second product - amazing!",
    },
    {
      id: "2",
      title: "Test 3",
      price: 5,
      description: "This is a third product - amazing!",
    },
  ];

  return (
    <CartProvider>
      <Layout onCartClick={toggleCartHandler}>
        {showCart && <Cart />}
        <Products products={products} />
      </Layout>
    </CartProvider>
  );
}

export default App;
