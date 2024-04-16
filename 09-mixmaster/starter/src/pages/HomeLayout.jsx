import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigation } from "react-router-dom";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const value = "some value";
  return (
    <div>
      {/* Here you can add the layout for all the component to have like header or nav bar will be shared across all children*/}
      <>
        <Navbar />
        <section className="page">
          {isLoading ? (
            <div className="loading"></div>
          ) : (
            <Outlet context={value} />
          )}
        </section>
      </>

      {/* Here you can add the layout for all the component to have like footer will be shared across all children */}
    </div>
  );
};

export default HomeLayout;
