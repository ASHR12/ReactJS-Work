// BtnContainer.jsx
import React from "react";

function BtnContainer({ jobs, setCurrentItem, currentItem }) {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => (
        <button
          className={index === currentItem ? "active-btn job-btn" : "job-btn"}
          key={item.id}
          onClick={() => setCurrentItem(index)}
        >
          {item.company}
        </button>
      ))}
    </div>
  );
}

export default BtnContainer;
