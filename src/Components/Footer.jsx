import React from "react";
import fb from "../images/fb.png";
import insta from "../images/insta.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <h5>
        <Link className="link link-aboutus" to={"/aboutus"}>
          About Us
        </Link>
      </h5>
      <div className="social-medias">
        <h5>Our Social Links:</h5>
        <a href="https://fb.com" target="_blank" rel="noopener noreferrer">
          <img className="fb-icon social-icon" src={fb} alt="fb icon" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="insta-icon social-icon"
            src={insta}
            alt="insta icon"
          />
        </a>
      </div>
      <h5>Made by: Lanthus</h5>
    </footer>
  );
};

export default Footer;
