import React from "react";
import logo from "./images/logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="logo" />

      <div className="navbar-links">
        <a href="#">ABOUT US</a>
        <a href="#">STORIES</a>
        <a href="#">CONTACT</a>
        <a href="#">LOG IN</a>
        <a href="#" className="sign-up">
          SIGN UP
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
