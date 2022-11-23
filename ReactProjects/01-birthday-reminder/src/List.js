import React from "react";
import Birthday from "./Birthday";
//import data from "./data";

const List = (props) => {
  let people = props.people;
  let setPeople = props.setPeople;
  return (
    <>
      {people.map((person) => {
        return (
          <Birthday
            key={person.id}
            person={person}
            people={people}
            setPeople={setPeople}
          ></Birthday>
        );
      })}
    </>
  );
};

export default List;
