import "./App.css"
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { useState } from "react";
import About from "./components/About";

function App() {

  const [cart,setCart] = useState([])


  return (
    <div>
      <h1>Cart Website made by Vivek Goswami</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart  cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About   />} />
      </Routes>
    </div>
  );
}

export default App;
