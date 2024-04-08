import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const removeItemById = (id) => {
    setPerson(person.filter((item) => item.id !== id));
  };

  const clearAllItems = () => {
    setPerson([]);
  };

  const [person, setPerson] = useState(data);
  return (
    <div>
      {person.map((item) => {
        return (
          <>
            <div key={item.id}>
              <h4>{item.name}</h4>
              <button type="button" onClick={() => removeItemById(item.id)}>
                remove
              </button>
            </div>
          </>
        );
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: "2rem" }}
        //onClick={clearAllItems}
        onClick={() => {
          setPerson([]);
        }}
      >
        clear all
      </button>
    </div>
  );
};

export default UseStateArray;
