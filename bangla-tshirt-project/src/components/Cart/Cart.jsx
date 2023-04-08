import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p className="warn-msg">Please add some products</p>;
  }
  // else {
  //   message = <p>Boro-loxxx Rustom</p>;
  // }

  return (
    <div className="cart-details">
      <h2>Order Summary: {cart.length}</h2>
      <hr />

      {/* {cart.length ? (
        <span className="plum">Rich Rustom</span>
      ) : (
        <span className="red">Fokira Rustom</span>
      )} */}

      {message}

      {cart.map((tshirt) => (
        <div key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </div>
      ))}

      {/* {cart.length === 2 && <p>Double Bonanza!</p>}
      {cart.length === 3 || <h3>Not same is 3 product</h3>} */}
    </div>
  );
};

export default Cart;

/** 
 * Conditional Rendering
    1. use if/else to set a variable that will contain an element, components
    2. ternary operator: condition ? 'for true' : 'false'
    3. Logical && : (if the condition is true then the next thing will be displayed)
    4. Logical || : (if the condition is false then the next thing will be displayed)
*/

/**
 * Conditional CSS class
    1. use ternary 
    2. ternary inside template string
*/
