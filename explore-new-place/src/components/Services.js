import React from "react";
import Title from "./Title";
import { services } from "../data";
const Services = () => {
  return (
    <>
      {/* <!-- services --> */}
      <section className="section-services section" id="services">
        {/* title component  */}
        <Title p1="Our" p2="Services" />
        {/* <!-- individual service start --> */}
        <div className="section-center services-center">
          {services.map((service) => {
            console.log(service);
            return (
              <article className="service" key={service.id}>
                <span className="service-icon">
                  <i className={service.iconClassName}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-text">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      {/* <!--end services --> */}
    </>
  );
};

export default Services;
