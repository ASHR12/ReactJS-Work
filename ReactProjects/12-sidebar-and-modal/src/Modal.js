import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./appContext";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <>
      <div className={`modal-overlay ${isModalOpen ? `open-modal` : ``}`}>
        <div className="modal-container">
          <h3>Model content</h3>
          <button
            type="button"
            className="close-modal-btn"
            onClick={closeModal}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
