import { useEffect } from "react";

import axios from "axios";
import customAxios from "./axios/customaxios";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    // try {
    //   const response = await customAxios.get("react-store-products");
    //   console.log(response.data);
    // } catch (error) {
    //   console.error("An error occurred:", error.response);
    // }
    try {
      const randomUserResponse = await axios.get(randomUserUrl);
      console.log(randomUserResponse.data);
    } catch (error) {
      console.error(
        "An error occurred while fetching random user data:",
        error.response
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
