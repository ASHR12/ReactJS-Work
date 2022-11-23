import React, { useState } from "react";
import "./App.css";
import List from "./List";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <section className="birthday-container section-center">
        <h2>{people.length} Birthdays Today</h2>
        <List people={people} setPeople={setPeople}></List>
        <button
          type="button"
          className="btn clear-btn"
          onClick={() => setPeople([])}
        >
          Clear All
        </button>
      </section>
    </>
  );
}

export default App;
