import { ToastContainer } from "react-toastify";
import Form from "./Form";
import Items from "./Items";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form />
      <Items />
    </section>
  );
};
export default App;
