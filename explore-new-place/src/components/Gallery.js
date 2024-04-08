import React from "react";

const Gallery = () => {
  return (
    <>
      {/* <!-- gallery  --> */}
      <section id="gallery">
        <div className="gallery-center">
          {/* <!-- single item --> */}
          <article className="gallery-img-container">
            <img
              src="./static/images/bali.jpg"
              className="gallery-img"
              alt=""
            />
            <a href="#abc" className="gallery-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </article>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <div className="gallery-img-container">
            <img
              src="./static/images/canada.jpg"
              className="gallery-img"
              alt=""
            />
            <a href="#abc" className="gallery-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <div className="gallery-img-container">
            <img
              src="./static/images/machu-pichu.jpg"
              className="gallery-img"
              alt=""
            />
            <a href="#abc" className="gallery-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <div className="gallery-img-container">
            <img
              src="./static/images/thailand.jpg"
              className="gallery-img"
              alt=""
            />
            <a href="#abc" className="gallery-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <div className="gallery-img-container">
            <img
              src="./static/images/venice.jpg"
              className="gallery-img"
              alt=""
            />
            <a href="#abc" className="gallery-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <div className="gallery-img-container">
            <img
              src="./static/images/paris.jpg"
              className="gallery-img"
              alt=""
            />
            <a href="#abc" className="gallery-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <div className="gallery-img-container">
            <img
              src="./static/images/background-2.jpg"
              className="gallery-img"
              alt=""
            />
            <a href="#abc" className="gallery-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <div className="gallery-img-container">
            <img
              src="./static/images/india.jpg"
              className="gallery-img"
              alt=""
            />
            <a href="#abc" className="gallery-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
          {/* <!-- end of single item --> */}
        </div>
      </section>
      {/* <!-- end of gallery  --> */}
    </>
  );
};

export default Gallery;
