// Items.jsx
import React from "react";
import SingleItem from "./SingleItem";

function Items({ items, removeItem, toggleItem }) {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          {...item}
          removeItem={removeItem}
          toggleItem={toggleItem}
        />
      ))}
    </div>
  );
}

export default Items;
