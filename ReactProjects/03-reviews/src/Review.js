import React, { useState } from "react";
import people from "./data";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, img, text } = people[index];
  //   const nextPerson = () => {
  //     const newIndex = index + 1;
  //     console.log("newIndex", newIndex);
  //     if (newIndex > people.length - 1) {
  //       setIndex(0);
  //     } else {
  //       setIndex(newIndex);
  //     }
  //   };
  //   const prevPerson = () => {
  //     const newIndex = index - 1;
  //     console.log("newIndex", newIndex);
  //     if (newIndex < 0) {
  //       setIndex(people.length - 1);
  //     } else {
  //       setIndex(newIndex);
  //     }
  //   };

  const checkIndex = (indexValue) => {
    if (indexValue > people.length - 1) {
      return 0;
    }
    if (indexValue < 0) {
      return people.length - 1;
    }
    return indexValue;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const surprisePerson = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    if (newIndex === index) {
      newIndex = newIndex + 1;
    }
    setIndex(checkIndex(newIndex));
  };

  return (
    <>
      <article className="review-card-body">
        <div className="review-img">
          <img src={img} className="img" alt="profile" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <div className="review-info">
          <h3>{name}</h3>
          <h6>{job}</h6>
          <p>{text}</p>
        </div>
        <div className="button-container">
          <button type="button" onClick={prevPerson} className="prev-btn">
            <FaChevronLeft />
          </button>
          <button type="button" onClick={nextPerson} className="next-btn">
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          onClick={surprisePerson}
          className="btn surprise-me "
        >
          surprise me
        </button>
      </article>
    </>
  );
};

export default Review;
