// Carousel.jsx
import React, { useState } from "react";
import { shortList, list, longList } from "./data"; // Adjust the path as necessary
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect } from "react";
function Carousel() {
  const [people] = useState(longList);
  const [index, setIndex] = useState(0);

  const nextPerson = () => {
    setIndex((oldIndex) => {
      return (oldIndex + 1) % people.length;
    });
  };

  const prevPerson = () => {
    setIndex((oldIndex) => {
      return (oldIndex - 1 + people.length) % people.length;
    });
  };

  //   useEffect(() => {
  //     let sliderId = setInterval(() => {
  //       nextPerson();
  //     }, 2000);

  //     return () => {
  //       clearInterval(sliderId);
  //     };
  //   }, [index]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - index)}%)`,
              opacity: personIndex === index ? 1 : 0,
              visibility: personIndex === index ? "visible" : "hidden",
            }}
            key={id}
          >
            <img className="person-img" src={image} alt={name} />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" onClick={prevPerson}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={nextPerson}>
        <FiChevronRight />
      </button>
    </section>
  );
}

export default Carousel;
