import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
const Navbar = () => {
  return (
    <>
      {/* <!-- navbar start--> */}
      <nav className="navbar">
        <div className="nav-center">
          {/* <!-- nav-header --> */}
          <div className="nav-header">
            <img src={logo} alt="" className="nav-logo" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          {/* <!-- nav header end --> */}
          {/* <!-- start nav links --> */}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="nav-link scroll-link"
                    rel="noreferrer"
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <!-- end nav links --> */}
          {/* <!-- nav icons start--> */}
          <ul className="nav-icons">
            {socialLinks.map((slink) => {
              return (
                <li key={slink.id}>
                  <a
                    href={slink.href}
                    target="_blank"
                    className="nav-icon"
                    rel="noreferrer"
                  >
                    <i className={slink.iconClassName}></i>
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <!-- nav icons end --> */}
        </div>
      </nav>
      {/* <!-- navbar end --> */}
    </>
  );
};

export default Navbar;
