import React from "react";
import { useGlobalContext } from "./context.jsx";
import sublinks from "./data";
import { useRef } from "react";
const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const specificPage = sublinks.find((item) => item.pageId === pageId);
  const submenuContainer = useRef(null);
  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };
  return (
    <div
      className={`${pageId ? "submenu show-submenu" : "submenu"}`}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{specificPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            specificPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {specificPage?.links.map((link) => {
          return (
            <a key={link.id} href={link.url}>
              {link.icon}
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
