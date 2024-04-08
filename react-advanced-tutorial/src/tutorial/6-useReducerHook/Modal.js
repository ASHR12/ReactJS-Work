import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      closeModal();
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  });
  return <div className="modal">{modalContent}</div>;
};

export default Modal;
