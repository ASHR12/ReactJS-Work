// JobInfo.jsx
import React from "react";
import Duties from "./Duties";

function JobInfo({ company, dates, title, duties }) {
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-dates">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
}

export default JobInfo;
