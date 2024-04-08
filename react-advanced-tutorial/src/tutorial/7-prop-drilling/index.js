import React, { useState } from "react";
import { data } from "../../data";

const PropDrilling = () => {
  console.log(data);
  const [people, setPeople] = useState(data);

  const removePeople = (id) => {
    setPeople((people) => {
      return people.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <h3> PROP DRILLING</h3>
      <List people={people} removePeople={removePeople} />
    </>
  );
};

const List = ({ people, removePeople }) => {
  return (
    <>
      {people.map((item) => {
        return (
          <SinglePerson key={item.id} {...item} removePeople={removePeople} />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePeople }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button type="button" className="btn" onClick={() => removePeople(id)}>
        Remove
      </button>
    </div>
  );
};

export default PropDrilling;
