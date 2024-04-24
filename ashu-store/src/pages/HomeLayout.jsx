import { Outlet, useNavigation } from "react-router-dom"; // This component renders the matched child route component.
import { Header, Navbar, Loading } from "../components";
// HomeLayout component definition
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-elements py-20">
          <Outlet />
        </section>
      )}
      {/* Placeholder for rendering the child pages */}
    </>
  );
};

export default HomeLayout;
