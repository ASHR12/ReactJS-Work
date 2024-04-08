import React from "react";
import { links, social } from "./data";
import { FaTimes } from "react-icons/fa";
import logo from "./logo.svg";
import { useGlobalContext } from "./appContext";
const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContext();
  return (
    <>
      <aside className={`side-bar ${isSideBarOpen ? `show-sidebar` : ``}`}>
        <div className="side-bar-header">
          <div className="side-bar-logo">
            <img src={logo} alt="logo" />
          </div>
          <button className="close-sidebar-btn" onClick={closeSideBar}>
            <FaTimes />
          </button>
        </div>
        <ul className="navlinks">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="socialIcons">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
