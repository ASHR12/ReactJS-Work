import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    console.log({ toggle });
    const navLinksHeight = navLinksRef.current.getBoundingClientRect();
    console.log(navLinksHeight);
    if (toggle) {
      linksContainerRef.current.style.height = `${navLinksHeight.height}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [toggle]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>
          <button
            className="nav-toggle"
            id="navToggle"
            onClick={() => setToggle(!toggle)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`links-container ${toggle ? `show-links` : ""}`}
          ref={linksContainerRef}
        >
          <ul className="navlinks" ref={navLinksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="socialIcons">
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
