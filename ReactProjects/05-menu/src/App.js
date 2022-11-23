import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("all");
  const filterItems = (category) => {
    if (category !== "all") {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
      setActiveCategory(category);
    } else {
      setMenuItems(items);
      setActiveCategory(category);
    }
  };
  return (
    <>
      <div className="section-center">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="title-underline"></div>
        </div>
        <Categories filterItems={filterItems} activeCategory={activeCategory} />
        <Menu menuItems={menuItems}></Menu>
      </div>
    </>
  );
}

export default App;
