import axios from "axios";
const customAxios = axios.create({
  baseURL: "https://course-api.com/",
});
customAxios.interceptors.request.use(
  (config) => {
    config.headers["Accept"] = "application/json";
    console.log("Request Interceptor - Request Config:", config);
    return config;
  },
  (error) => {
    console.error("Request Interceptor - Request Error:", error);
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (response) => {
    console.log("Response Interceptor - Response Data:", response.data);
    return response;
  },
  (error) => {
    console.error("Response Interceptor - Response Error:", error);
    return Promise.reject(error);
  }
);

export default customAxios;
