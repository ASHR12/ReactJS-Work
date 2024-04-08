import React from "react";
import Title from "./Title";
import { tours } from "../data";
const Featuretour = () => {
  return (
    <>
      {/* <!-- featured tours --> */}
      <section className="section" id="featured">
        {/* title component  */}
        <Title p1="featured" p2="Tours" />

        <div className="section-center featured-center">
          {/* <!-- single tour card start--> */}
          {tours.map((tour) => {
            return (
              <article className="tour-card" key={tour.id}>
                <div className="tour-img-container">
                  <img src={tour.image} className="tour-img" alt={tour.title} />
                  <p className="tour-date">{tour.date}</p>
                </div>
                {/* <!-- tour info --> */}
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{tour.title}</h4>
                  </div>
                  <p>{tour.description}</p>
                  {/* <!-- tour footer --> */}
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fa-solid fa-map-location"></i>
                      </span>{" "}
                      {tour.location}
                    </p>
                    <p>{tour.days} days</p>
                    <p>from {tour.price}</p>
                  </div>
                </div>
              </article>
            );
          })}
          ;
        </div>
      </section>
      {/* <!-- end of featured tours --> */}
    </>
  );
};

export default Featuretour;
