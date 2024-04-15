import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            molestiae temporibus reiciendis. Voluptatem tempora eligendi fugit
            repellat, porro facilis ea reiciendis facere. Commodi tempora
            aliquid, rem eius natus ab placeat.
          </p>
        </div>
        <div className="img-container">
          <img className="img" src={heroImg} alt="heroimg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
