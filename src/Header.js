import React from "react";
import couple from "./images/couple.png";

const Header = () => {
  return (
    <header>
      <div className="header-text">
        <h1>
          Amazing <br /> Experiences from Our <br /> Wonderful Customers
        </h1>
        <p>
          Here is what customers and vendors are saying about us, you can share
          your stories with us too.
        </p>
      </div>
      <img src={couple} alt="couple" />
    </header>
  );
};

export default Header;
