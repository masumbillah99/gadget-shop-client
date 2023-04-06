import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";

const DetailsFood = () => {
  const { meals } = useLoaderData();
  const foodData = meals[0];
  const navigation = useNavigation();

  if(navigation.state === "loading") {
    return <Spinner />
  }

  return (<div></div>);
};

export default DetailsFood;
