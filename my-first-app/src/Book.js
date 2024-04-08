import React from "react";

const clickHandler = (e) => {
  console.log(e);
  alert("Reference Example");
};
const complexExample = (author) => {
  alert(author);
};

// props contains books so we have nested object destructing
const Book = ({ title, img, author }) => {
  // You can also do
  // const { title, img, author }= props.book;
  return (
    <article className="book">
      <img
        className="img book-thumbnail"
        onMouseOver={() => {
          console.log("mouse over image");
        }}
        src={img}
        alt={title}
      />
      <h2>{title}</h2>
      <h5>{author}</h5>
      <section className="btn-container">
        <button className="btn" type="button" onClick={clickHandler}>
          Reference Example
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => {
            alert(title);
          }}
        >
          Inline Example
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => {
            complexExample(author);
          }}
        >
          Complex Example
        </button>
      </section>
    </article>
  );
};

export default Book;
