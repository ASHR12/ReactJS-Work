import links from "../data";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);
  return (
    <>
      {links.map((link) => {
        // Check if the user is not present and the link is one of the restricted ones
        if (!user && (link.text === "orders" || link.text === "checkout")) {
          return null; // Do not render this link if user is not logged in
        }
        return (
          <li key={link.id}>
            <NavLink className="capitalize" to={link.url}>
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
