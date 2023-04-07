import React from "react";
import "./T-shirt.css";

const Tshirt = ({ tshirt }) => {
  const { _id, picture, name, price, gender } = tshirt;

  return (
    <div className="t-shirts">
      <img src={picture} alt="" />
      <hr />
      <div className="t-shirts-details">
        <h2>{name}</h2>
        <p>
          Price: <span>${price}</span>
        </p>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default Tshirt;
