import React from "react";
import Lottie from "lottie-react";
import lottieAnimation from "../../public/lottie.json";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const LandingPage = () => {
  return (
    <section className="my-14 ml-5 grid lg:grid-cols-2 items-center justify-between">
      <div>
        <p className="font-bold">Hello!</p>
        <h1 className="text-2xl md:text-5xl font-bold py-5">
          Welcome to World's smallest
          <span className="text-blue-500 ms-2">Food website</span>
        </h1>
        <p className="text-lg">
          Healthy food refers to foods that provide the body with essential
          nutrients, vitamins, and minerals needed to maintain good health and
          prevent diseases. These foods include fresh fruits and vegetables,
          lean proteins, whole grains, and healthy fats. They are low in
          saturated and trans fats, added sugars, and sodium.
        </p>
        <div className="mt-3 flex flex-col items-center md:flex-row gap-4">
          <Link to="/foods" className="btn">
            <div className="inline-flex me-2">Visit Store</div>
            <ShoppingCartIcon className="w-6" />
          </Link>
          <Link className="hover:underline text-blue-700">Learn More</Link>
        </div>
      </div>
      <div>
        <div className="w-3/5 mx-auto">
          <Lottie animationData={lottieAnimation}></Lottie>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
