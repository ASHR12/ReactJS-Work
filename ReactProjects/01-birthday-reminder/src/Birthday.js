import React from "react";

const Birthday = (props) => {
  console.log(props);
  const { name, image, age, id } = props.person;
  const setPeople = props.setPeople;
  const removeItem = (id) => {
    setPeople((prePeople) => {
      let newPeople = prePeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };
  return (
    <>
      <article className="birthday-comp">
        <figure>
          <img className="person-img img" src={image} alt={name}></img>
        </figure>
        <figcaption>
          <p className="person-name">{name}</p>
          <p className="person-age">{age} years</p>
        </figcaption>
        <button
          type="button"
          className="remove-btn"
          onClick={() => removeItem(id)}
        >
          Remove
        </button>
      </article>
    </>
  );
};

export default Birthday;
