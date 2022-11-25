import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import data from "./data";
import Title from "./Title";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex(index + 1);
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
        <button
          className="prev-btn slider-btn"
          onClick={() => setIndex(index - 1)}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn slider-btn"
          onClick={() => setIndex(index + 1)}
        >
          <FaChevronRight />
        </button>
      </div>
    </>
  );
}

export default App;
