import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  const handleSubMenu = (e) => {
    console.log(e.target.classList);
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleSubMenu}>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        {/* nav links */}
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
