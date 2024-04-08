import React, { useState, useContext } from "react";
import { data } from "../../data";

const PersonContext = React.createContext();
// Two components - provider and consumer (We don't need to use consumer after arrival of useContext)

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (id) => {
    setPeople((people) => {
      return people.filter((item) => item.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ removePeople, people }}>
      <h3> CONTEXT API/USE CONTEXT</h3>
      <List people={people} removePeople={removePeople} />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  return (
    <>
      {mainData.people.map((item) => {
        return <SinglePerson key={item.id} {...item} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePeople } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button type="button" className="btn" onClick={() => removePeople(id)}>
        Remove
      </button>
    </div>
  );
};

export default ContextAPI;
