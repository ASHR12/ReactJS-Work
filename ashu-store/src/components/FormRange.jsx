import { convertCentsToDollars } from "../utils";
import { useState, useEffect } from "react";

const FormRange = ({ label, name, size, price, onChange }) => {
  const step = 1000;
  const maxPrice = 100000;

  const handleChange = (e) => {
    onChange({
      target: {
        name: name,
        value: e.target.value,
        type: "range",
      },
    });
  };

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{convertCentsToDollars(price)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={price}
        onChange={handleChange}
        className={`range range-primary ${size}`}
        step={step}
      />
    </div>
  );
};

export default FormRange;
