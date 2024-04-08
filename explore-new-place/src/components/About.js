import React from "react";
import aboutImage from "../images/aboutUs.jpg";
import Title from "./Title";
const About = () => {
  return (
    <>
      {/* <!-- about section --> */}
      <section className="section" id="about">
        {/* title component  */}
        <Title p1="About" p2="us" />
        <div className="section-center about-center">
          {/* <!-- image column --> */}
          <article className="about-img">
            <img src={aboutImage} alt="" className="about-photo" />
          </article>
          {/* <!-- image column end --> */}
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              ducimus at vero dolor explicabo eius ipsa? Consequatur aut alias
              dicta?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              ducimus at vero dolor explicabo eius ipsa? Consequatur aut alias
              dicta?
            </p>
            <a href="#about" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
      {/* <!-- end of about section --> */}
    </>
  );
};

export default About;
