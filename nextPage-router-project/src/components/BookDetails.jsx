import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";

const BookDetails = () => {
  const bookData = useLoaderData();
  const [fold, setFold] = useState(true);
  const navigation = useNavigation();
  
  if (navigation.state === "loading") {
    return <Spinner />;
  }

  const { image, title, desc, authors, publisher, year, rating, url, price } =
    bookData;

  return (
    <div className="my-container">
      <div className="flex flex-col lg:flex-row max-w-screen-lg overflow-hidden bg-white border rounded shadow-lg">
        <div className="lg:w-1/2 h-full">
          <img
            src={image}
            alt="book cover"
            className="object-cover w-full lg:h-full"
          />
        </div>
        <div className="p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="badge">Brand New</p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold sm:text-4xl">{title}</h5>
          <p className="text-gray-900">Authors: {authors}</p>
          <p className="text-gray-900">Publisher: {publisher}</p>
          <p className="text-gray-900">Year: {year}</p>
          <p className="mb-5 text-gray-900">Rating: {rating}</p>
          {fold ? (
            <>
              <p className="mb-3 text-gray-500">
                {desc.substring(0, 100)}
                .....
              </p>
              <span
                className="cursor-pointer text-blue-600"
                onClick={() => setFold(!fold)}
              >
                Read More
              </span>
            </>
          ) : (
            <>
              <p className="mb-3 text-gray-900">{desc}</p>
              <span
                className="cursor-pointer text-blue-600"
                onClick={() => setFold(!fold)}
              >
                Read Less
              </span>
            </>
          )}

          <div className="flex gap-5 items-center mt-8">
            <a href={url} target="_blank" className="btn">
              Buy Now
            </a>
            <p className="items-center font-extrabold text-gray-600">
              Price: {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
