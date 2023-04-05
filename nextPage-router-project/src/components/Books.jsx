import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import Spinner from "./Spinner";

const Books = () => {
  //   const [books, setBooks] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.itbook.store/1.0/new")
  //       .then((res) => res.json())
  //       .then((data) => console.log(data.books));
  //   });
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spinner />;
  }

  const { books } = useLoaderData();

  return (
    <div className="my-container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {books.map((book) => (
          <Book key={book.isbn13} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
