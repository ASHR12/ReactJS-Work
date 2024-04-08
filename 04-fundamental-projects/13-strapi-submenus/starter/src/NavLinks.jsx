// src/NavLinks.jsx
import React from "react";
import sublinks from "./data.jsx";
import { useGlobalContext } from "./context.jsx";
import Submenu from "./Submenu.jsx";
const NavLinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map(({ pageId, page }) => (
        <button
          key={pageId}
          className="nav-link"
          onMouseEnter={() => setPageId(pageId)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default NavLinks;
