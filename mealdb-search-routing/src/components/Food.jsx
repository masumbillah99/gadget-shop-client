import React from "react";
import { Link, useNavigation } from "react-router-dom";

const Food = ({ food }) => {

  const { strMealThumb, idMeal, strMeal, strCategory, strArea, strTags } = food;

  return (
    <div className="bg-white shadow-lg rounded">
      <div className="transition duration-300 transform hover:scale-95">
        <img className="w-full" src={strMealThumb} alt="" />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold">{strMeal}</h3>
        <p className="text-lg text-gray-500 my-3">
          {strCategory}, {strArea}
        </p>
        <p className="text-gray-500">{strTags}</p>
        <Link to={`/detail/${idMeal}`} className="">
          <button className="btn mt-4">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Food;
