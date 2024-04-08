// App.jsx
import React, { useState } from "react";
import Form from "./Form";
import ColorList from "./ColorList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Values from "values.js";
function App() {
  const [colors, setColors] = useState(new Values("#F15025").all(10));

  // This function will be passed down to Form to handle submissions
  const submitColor = (colorValue) => {
    try {
      const color = new Values(colorValue).all(10); // Generates shades and tints
      setColors(color);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form submitColor={submitColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
}

export default App;
