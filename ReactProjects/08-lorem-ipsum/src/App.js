import React, { useState } from "react";
import data from "./data";

function App() {
  const [text, setText] = useState([data[0]]);
  const [count, setCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };
  return (
    <>
      <main className="section-center">
        <div className="title">
          <h2>Try new lorem impsum !</h2>
        </div>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            min="1"
            max="8"
            onChange={(e) => setCount(parseInt(e.target.value))}
          />
          <button type="submit" className="btn">
            generate
          </button>
        </form>
        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </main>
    </>
  );
}

export default App;
