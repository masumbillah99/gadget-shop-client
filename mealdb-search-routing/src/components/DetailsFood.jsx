import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";
import { FlagIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const DetailsFood = () => {
  const { meals } = useLoaderData();
  const [readMore, setReadMore] = useState(true);
  const navigation = useNavigation();

  const foodData = meals[0];
  const {
    idMeal,
    strMeal,
    strArea,
    strCategory,
    strMealThumb,
    strInstructions,
  } = foodData;

  const instructions = strInstructions
    .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
    .split("|");

  // console.log(instructions);

  if (navigation.state === "loading") {
    return <Spinner />;
  }

  return (
    <div className="container mx-2 md:mx-auto mt-32 mb-5 grid items-center lg:grid-cols-2 gap-3 p-7 border-1 bg-white rounded-lg shadow-lg">
      <div>
        <img className="w-4/5 mx-auto lg:mx-0 rounded mb-7" src={strMealThumb} alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{strMeal}</h1>
        <p className="mt-3 mb-2 flex items-center">
          <FlagIcon className="w-6 text-green-700 me-3"></FlagIcon>
          <span className="text-xl font-bold text-gray-500 me-2">
            {strArea}
          </span>
          food
        </p>
        <p className="text-lg mb-3">Category: {strCategory}</p>
        <div>
          <span className="font-bold">
            Make This Food with follow this instructions:
          </span>
          <ul className="list-decimal ml-12 mt-3">
            {instructions.map((part) => (
              <li>{part}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailsFood;
