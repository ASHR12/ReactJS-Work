import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "./../features/user/userSlice";
import NavLinks from "./NavLinks";

export const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button
            className="close-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks sideBarType="smallSideBar" />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
