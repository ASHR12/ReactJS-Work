import data from "./data";
import { useState } from "react";
import List from "./List";
const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h1 className="title">{people.length} birthday(s) today</h1>
        <List people={people} />
        <button className="btn btn-block" onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
