import React, { Fragment } from "react";
import HeaderNavigation from "../Header/HeaderNavigation";
import Footer from "../Footer/Footer";
import image from "../../images/Error.jpg";
import "../../styles/Error/Error.scss";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Fragment>
      <HeaderNavigation />
      <main className="main wrapper error">
        <Link to={"/"}>
          <img src={image} alt="Error image" />
        </Link>
        <h1>We are using all our Force to fix this</h1>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Error;
