import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <article className="tour">
        <figure>
          <img className="img tour-img" src={image} alt={name}></img>
        </figure>
        <figcaption>
          <div className="tour-info">
            <p className="tour-title">{name}</p>
            <p className="tour-price">$ {price}</p>
          </div>
          <div className="tour-desc">
            <p>
              {readMore ? info : `${info.substring(0, 200)}...`}
              <button
                type="button"
                className="text-btn"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "show less" : `read more`}
              </button>
            </p>
          </div>
          <button type="button" className="btn" onClick={() => removeTour(id)}>
            Not Interested
          </button>
        </figcaption>
      </article>
    </>
  );
};

export default Tour;
