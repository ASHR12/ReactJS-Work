import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import "./assets/css/index.css";
import { ToastContainer } from "react-toastify";
import { store } from "./store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer position="top-center" />
  </Provider>
);
