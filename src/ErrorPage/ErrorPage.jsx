import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import animationError from "./animation_error.json";

const ErrorPage = () => {
  const { error } = useRouteError();

  //   console.log(error);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-base-200">
      <div className="">
        <Lottie animationData={animationError} loop={true} />
      </div>
      <div className="my-auto">
        <h4 className="text-2xl font-semibold">{error.message}</h4>
        <p className="text-base mt-5 mb-3">
          Here are some helpful links instead:
        </p>
        <ul className="flex flex-col gap-2 text-lg font-semibold underline">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Traveling on TripAero</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorPage;
