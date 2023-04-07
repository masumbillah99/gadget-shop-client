import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="cart-details">
      <h2>Order Summary: {cart.length}</h2>
      <hr />
      {cart.map((tshirt) => (
        <div key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;


/** 
 * Conditional Rendering
*/