import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import './Home.css';

const Home = () => {
  const tShirts = useLoaderData();

  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {tShirts.map((tshirt) => (
          <Tshirt tshirt={tshirt} key={tshirt._id}></Tshirt>
        ))}
      </div>

      <div className="cart-container">
          <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
