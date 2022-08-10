import { prettyDOM } from "@testing-library/react";
import React from "react";

const SingleProduct = ({ data, cart, setCart }) => {
  return (
    <div className="products" >
      <img src={data.image} alt={data.name} />
      <div className="productdDesc">
        <span style={{ fontWeight: 700 }}> {data.name}</span>
        <span>Rs-{data.price.substring(0, 3)}</span>
      </div>
      {cart.includes(data) ? (
        <button
          className="add"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== data.id));
          }}
        >
          Remove to Cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, data]);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
