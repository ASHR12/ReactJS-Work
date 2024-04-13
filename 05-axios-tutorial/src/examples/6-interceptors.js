import { useEffect } from "react";
import customAxios from "./axios/interceptors";
const url = "https://course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    console.log("axios interceptors");
    try {
      const response = await customAxios.get("react-store-products");
      console.log(response.data);
    } catch (error) {
      console.error("An error occurred:", error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
