import React from "react";
import phone from "./images/phone.png";
import subscribe from "./images/subscribe.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-1">
        <img src={phone} alt="subscribe" className="phone-img" />

        <div className="footer-text">
          <img src={subscribe} alt="subscribe" />
          <p>
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </p>
          <input type="email" placeholder="enter your email address" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
