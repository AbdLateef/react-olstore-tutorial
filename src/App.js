import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Product from './pages/Product';
import { useState, useEffect } from "react";
import Checkout from './pages/Checkout';

function App() {
  const [cart, setCart] = useState(false);
  useEffect(() => {
    if( localStorage.getItem("cart") !== null ) {
      setCart(true);
    }
  }, [])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home Cart={cart} />} />
        <Route path="product/:id" element={<Product Cart={cart} UpdatedCart={setCart} />} />
        <Route path="checkout" element={<Checkout Cart={cart} UpdatedCart={setCart} />} />
      </Routes>
    </Router>
  )
}

export default App;
