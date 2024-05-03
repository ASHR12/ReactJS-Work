import { customFetch } from "./index"; // Your Axios instance

export async function makeApiRequest(endpoint, method, data, token) {
  try {
    const config = {
      method: method,
      url: endpoint,
      headers: {},
    };

    // Attach the Authorization header if a token is present
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // For GET requests, append parameters in the URL
    if (method.toLowerCase() === "get" && data) {
      config.params = data; // Axios uses `params` for query parameters in GET requests
    } else {
      config.data = data;
    }

    const response = await customFetch(config);
    return response.data;
  } catch (error) {
    console.error("API Request Error:", error);
    const isUnauthorized = error.response && error.response.status === 401;
    const errorMessage =
      error.response && error.response.data
        ? error.response.data.msg || "Network error"
        : "Network error";
    return { error: errorMessage, isUnauthorized };
  }
}
