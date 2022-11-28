import React, { useState, useEffect } from "react";

import Title from "./Title";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = function () {
  let items = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  return items;
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // Display Alert
      showAlert(true, "danger", "Please enter value");
    } else if (name && isEditing) {
      // Perform Edit functionality
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setEditID(null);
      setIsEditing(false);
      setName("");
      showAlert(true, "success", "Item updated.");
    } else {
      // Perform Add item to list.
      // - Display Alert
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "success", "Item added to the list.");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    setList([]);
    showAlert(true, "danger", "All items deleted.");
  };
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, "danger", "Item Removed.");
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <div className="section-center grocery">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert alert={alert} removeAlert={setAlert} list={list} />
          )}
          <Title />
          <div className="form-row">
            <input
              type="text"
              id="task"
              name="task"
              className="form-input"
              placeholder="e.g. Chicken"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="btn submit-btn">
              {isEditing ? "Editing" : "Submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
