// App.jsx
import React, { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data"; // Adjust this import based on the location of your data.js file

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10); // converted text type to int type from input
    // Ensure that the user cannot choose a count less than 1 or more than 8
    if (value >= 1 && value <= 8) {
      setCount(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = count;
    //console.log(count);
    // Create a new array by extracting the first n paragraphs from the text array
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="paragraphs">Paragraphs:</label>
        <input
          type="number"
          id="paragraphs"
          name="paragraphs"
          value={count}
          onChange={handleChange}
          min="1"
          max="8"
          step="1"
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => (
          <p key={nanoid()}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
