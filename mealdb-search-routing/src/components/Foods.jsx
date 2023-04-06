import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Food from "./Food";
import Spinner from "./Spinner";

const Foods = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinner />;
  }

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
