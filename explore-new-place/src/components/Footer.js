import React from "react";
import { pageLinks, socialLinks } from "../data";
const Footer = () => {
  return (
    <>
      {/* <!-- footer --> */}
      <footer className="section footer">
        {/* <!-- start footer links --> */}
        <ul className="footer-links">
          {pageLinks.map((item) => {
            return (
              <li>
                <a
                  href={item.href}
                  className="footer-link scroll-link"
                  rel="noreferrer"
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
        {/* <!-- end footer links --> */}
        {/* <!-- footer icons start--> */}
        <ul className="footer-icons">
          {socialLinks.map((item) => {
            return (
              <li>
                <a
                  href={item.href}
                  target="_blank"
                  className="footer-icon"
                  rel="noreferrer"
                >
                  <i className={item.iconClassName}></i>
                </a>
              </li>
            );
          })}
        </ul>
        {/* <!-- footer icons end --> */}
        <p className="copy-right">
          Copyright &copy; ExploreNewPlace Travel Tours Company
          <span id="date">{new Date().getFullYear()}</span>. All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
