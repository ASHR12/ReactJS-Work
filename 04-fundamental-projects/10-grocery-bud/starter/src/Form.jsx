// Form.jsx
import React, { useState } from "react";

function Form({ addItem }) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., Eggs"
        />
        <button className="btn" type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
}

export default Form;
