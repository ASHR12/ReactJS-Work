import React from "react";
import { people } from "../../../data";
const List = () => {
  return (
    <>
      {people.map((person) => {
        return <div key={person.id}>{person.name}</div>;
      })}
    </>
  );
};

export default List;
