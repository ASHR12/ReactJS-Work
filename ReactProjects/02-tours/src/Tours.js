import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <section className="main-section">
        <div className="title">
          <h1>Our Tours</h1>
          <div className="title-underline"></div>
        </div>
      </section>
      <section className="tours-container section-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </section>
    </>
  );
};

export default Tours;
