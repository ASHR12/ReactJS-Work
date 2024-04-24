import axios from "axios";

const prodUrl = "https://strapi-store-server.onrender.com/api";
export const customFetch = axios.create({
  baseURL: prodUrl,
});

export const convertCentsToDollars = (cents) => {
  const dollars = cents / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(dollars);
};

export const generateAmountOptionElement = (number) => {
  return Array.from({ length: number }, (_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ));
};
