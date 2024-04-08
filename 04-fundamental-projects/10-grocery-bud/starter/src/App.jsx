// App.jsx
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form";
import Items from "./Items";

function App() {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("groceryList")) || []
  );

  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(items));
  }, [items]);

  const addItem = (name) => {
    if (!name) {
      toast.error("Please enter an item");
      return;
    }
    const newItem = { id: nanoid(), name, completed: false };
    setItems((prevItems) => [...prevItems, newItem]);
    toast.success("Item added to the list");
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    toast.info("Item removed");
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} toggleItem={toggleItem} />
      <ToastContainer position="top-center" />
    </section>
  );
}

export default App;
