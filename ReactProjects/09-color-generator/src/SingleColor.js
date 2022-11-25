import React, { useState, useEffect } from "react";
const SingleColor = ({ rgb, weight, hex, index, midIndex }) => {
  const bcg = rgb.join(",");
  const hexValue = `#${hex}`;
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    let idValue = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(idValue);
    };
  }, [alert]);
  return (
    <article
      className={`color ${index > midIndex ? `color-light` : ``}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="copy-alert">copied to clip board</p>}
    </article>
  );
};

export default SingleColor;
