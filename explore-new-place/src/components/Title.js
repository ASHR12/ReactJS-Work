import React from "react";

const Title = ({ p1, p2 }) => {
  return (
    <>
      {/* <!-- Title --> */}
      <div className="section-title">
        <h2>
          {p1} <span>{p2}</span>
        </h2>
      </div>
      {/* <!-- Title end --> */}
    </>
  );
};

export default Title;
