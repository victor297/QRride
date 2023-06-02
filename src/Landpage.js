import React from "react";
import MainPage from "./MainPage";
import AuthNavbar from "./components/AuthNavbar";
import AuthFooter from "./components/AuthFooter";

const Landpage = () => {
  return (
    <>
      <AuthNavbar />
      <MainPage />
      <AuthFooter />
    </>
  );
};

export default Landpage;
