import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./appContext";
const Home = () => {
  // const data = useContext(AppContext);
  // const newData = useGlobalContext();
  const { openModal, openSideBar } = useGlobalContext();
  return (
    <>
      <main>
        <button className="sidebar-toggle" onClick={openSideBar}>
          <FaBars />
        </button>
        <button className="btn" onClick={openModal}>
          show modal
        </button>
      </main>
    </>
  );
};

export default Home;
