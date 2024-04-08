// SingleItem.jsx
import React from "react";

function SingleItem({ id, name, completed, removeItem, toggleItem }) {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleItem(id)}
      />
      <p style={{ textDecoration: completed ? "line-through" : "none" }}>
        {name}
      </p>
      <button className="btn" onClick={() => removeItem(id)}>
        Remove
      </button>
    </div>
  );
}

export default SingleItem;
