// App.jsx
import React, { useState, useEffect } from "react";
import menu from "./data";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [
      "All",
      ...new Set(menu.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <div className="title">
          <Title title="Our Menu" />
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
