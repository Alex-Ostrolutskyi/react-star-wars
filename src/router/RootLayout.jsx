import React, { Fragment } from "react";
import HeaderNavigation from "../Components/Header/HeaderNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
const RootLayout = () => {
  return (
    <Fragment>
      <HeaderNavigation />
      <main className="main wrapper">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
