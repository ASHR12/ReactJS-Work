import React from "react";
import items from "./data";
const Categories = ({ filterItems, activeCategory }) => {
  const catList = items.map((item) => {
    return item.category;
  });
  const uniqueCategories = ["all", ...new Set(catList)];
  return (
    <>
      <div className="button-list">
        {uniqueCategories.map((category, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`btn transparent-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
