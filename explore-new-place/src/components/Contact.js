import React from "react";

const Contact = () => {
  return (
    <>
      {/* <!-- contact --> */}
      <section className="section section-contact" id="contact">
        <div className="section-center contact-center">
          <div className="contact-title">
            <h3>Want latest tour info and updates ?</h3>
            <p>Sign up for newsletter and stay up to date.</p>
          </div>
          <form className="contact-form">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="your email"
            />
            <button type="submit" className="btn">
              submit
            </button>
          </form>
        </div>
      </section>
      {/* <!-- end of contact --> */}
    </>
  );
};

export default Contact;
