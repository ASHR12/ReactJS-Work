import NavLinks from "./NavLinks";
import Logo from "../Components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useSelector } from "react-redux";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.userState);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? "sidebar-container "
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks sideBarType="bigSideBar"/>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
