import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  //console.log("cart", cart);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>My Cart</h2>
      <h2 style={{ textAlign: "center", color: "teal" }}>
        Total Amount - {total}
      </h2>
      <div className="productContainer">
        {cart.map((data) => (
          <SingleProduct
            key={data.id}
            data={data}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </>
  );
};

export default Cart;

