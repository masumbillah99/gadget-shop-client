import React from "react";
import reader from "../assets/reader.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <div className="my-container flex flex-col items-center justify-between lg:flex-row gap-5">
      <div>
        <h5 className="font-bold">On Sale!</h5>
        <h1 className="text-3xl font-bold my-3">
          A render lives a <br className="hidden md:block" />
          thousand lives
          <span className="inline-block text-blue-400 md:pl-2">
            before he dies
          </span>
        </h1>
        <p className="text-lg">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can't.
        </p>
        <div className="mt-3 flex flex-col items-center md:flex-row gap-4">
          <Link to="/books" className="btn">
            <div className="inline-flex gap-2">
              Visit Store
              <ShoppingCartIcon className="w-6"></ShoppingCartIcon>
            </div>
          </Link>
          <Link>Learn more</Link>
        </div>
      </div>

      <div className="relative">
        <div className="w-3/5 lg:w-4/5 lg:ml-auto mx-auto h-56 sm:h-96">
          <Lottie animationData={reader}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Home;
