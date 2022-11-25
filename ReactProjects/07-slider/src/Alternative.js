import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import data from "./data";
import Title from "./Title";
function Alternative() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const checkIndex = (indexValue) => {
    if (indexValue > people.length - 1) {
      return 0;
    }
    if (indexValue < 0) {
      return people.length - 1;
    }
    return indexValue;
  };
  const nextSlide = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const prevSlide = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  useEffect(() => {
    let interval = setInterval(() => {
      nextSlide(index + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);
  return (
    <>
      <div className="section-center">
        <Title />
        <section className="slider-container">
          {people.map((person, personIndex) => {
            const { id, name, job, img, text } = person;
            let position = "next";
            if (personIndex === index) {
              position = "active";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "last";
            }
            return (
              <article key={id} className={`slide ${position}`}>
                <img src={img} className="img profileImg" alt={name} />
                <h5>{name}</h5>
                <p className="slide-title">{job}</p>
                <p className="slide-info">{text}</p>
                <div className="quote-icon">
                  <FaQuoteRight />
                </div>
              </article>
            );
          })}
        </section>
        <button className="prev-btn slider-btn" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="next-btn slider-btn" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </>
  );
}

export default Alternative;
