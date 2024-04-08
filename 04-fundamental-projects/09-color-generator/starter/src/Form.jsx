// Form.jsx
import React, { useState } from "react";

function Form({ submitColor }) {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the submitColor function passed via props
    submitColor(color);
  };

  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button className="btn" style={{ background: color }} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;
