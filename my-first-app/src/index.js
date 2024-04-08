import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.css";
import books from "./books";
import Book from "./Book";

const newBooks = books.map((book) => {
  // we are returning book component.
  // another way to pass the props are by Object.
  //return <Book key={book.id} book={book}></Book>;
  // by Spread operator
  return <Book key={book.id} {...book}></Book>;
});
//console.log(newBooks);

function BookList() {
  // called HTML or JSX
  return (
    <section className="section-center book-container">{newBooks}</section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
