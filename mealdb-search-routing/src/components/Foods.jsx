import React from "react";
import { useLoaderData } from "react-router-dom";
import Food from "./Food";

const Foods = () => {
  const { meals } = useLoaderData();

  return (
    <div className="container mx-auto my-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {meals.map((food) => (
          <Food food={food} key={food.idMeal}></Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
