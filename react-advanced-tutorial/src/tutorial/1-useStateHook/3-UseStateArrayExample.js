import React from "react";
import { data } from "../../data";
const UseStateArrayExample = () => {
  const [people, setPeople] = React.useState(data);
  // const removeItem = (id) => {
  //   let newPeople = people.filter((person) => {
  //     if (person.id !== id) {
  //       return person;
  //     }
  //   });
  //   setPeople(newPeople);
  // };
  const removeItem = (id) => {
    setPeople((prePeople) => {
      let newPeople = prePeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear All Items
      </button>
    </>
  );
};

export default UseStateArrayExample;
