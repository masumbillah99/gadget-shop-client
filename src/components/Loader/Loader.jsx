import Lottie from "lottie-react";
import loaderAnimation from "./loader-animation.json";

const Loader = () => {
  return (
    <div
      className="
        h-[70vh]
        flex 
        flex-col 
        justify-center 
        items-center 
      "
    >
      <Lottie animationData={loaderAnimation} />
    </div>
  );
};

export default Loader;
