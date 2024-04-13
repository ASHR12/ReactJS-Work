import axios from "axios";
const customAxios = axios.create({
  baseURL: "https://course-api.com/",
  headers: {
    Accept: "application/json",
  },
});

export default customAxios;
