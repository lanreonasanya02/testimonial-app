import React from "react";
import fb from "./images/fb.png";
import ig from "./images/ig.png";
import tw from "./images/tw.png";
import li from "./images/linkedin.png";

const Footer2 = () => {
  return (
    <footer className="footer-2">
      <div className="one">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Term of Use</li>
          <li>Privacy Policy</li>
          <li>Press & Media</li>
        </ul>
      </div>

      <div className="two">
        <h4>Products</h4>
        <ul>
          <li>Marketplace</li>
          <li>Magazine</li>
          <li>Seller</li>
          <li>Wholesale</li>
          <li>Services</li>
        </ul>
      </div>

      <div className="three">
        <h4>Careers</h4>
        <ul>
          <li>Become a Campus Rep</li>
          <li>Become a Vasiti Influencer</li>
          <li>Become a Campus Writer</li>
          <li>Become an Affiliate</li>
        </ul>
      </div>

      <div className="four">
        <h4>Get In Touch</h4>
        <ul>
          <li>Contact us</li>
          <li>Partner with us</li>
          <li>Advertise with us</li>
          <li>Help FAQs</li>
        </ul>
      </div>

      <div className="five">
        <h4>Join Our Community</h4>
        <div className="five-image">
          <img src={fb} alt="facebook" />
          <img src={ig} alt="instagram" />
          <img src={tw} alt="twitter" />
          <img src={li} alt="linkedin" />
        </div>
        <a href="#">Email Newsletter</a>
      </div>
    </footer>
  );
};

export default Footer2;
