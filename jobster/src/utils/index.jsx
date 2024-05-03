import axios from "axios";

const prodUrl = "https://ashutosh-jobs-api.onrender.com/api/v1/";
export const customFetch = axios.create({
  baseURL: prodUrl,
});

// Function to store user data in local storage
export const addUserToLocalStorage = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

// Function to get user data from local storage
export const getUserFromLocalStorage = () => {
  const userData = localStorage.getItem("user");
  return userData ? JSON.parse(userData) : null;
};

// Function to delete user data from local storage
export const deleteUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};
