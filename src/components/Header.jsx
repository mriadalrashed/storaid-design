import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../style/Header.css";

export default function Header() {
  return (
    <header>
      <div className="top-bar">
        <div className="left">
          <i className="fa-solid fa-phone"></i>
          <span>+46 8 123 122 44</span>
          <i className="fa-solid fa-envelope-open"></i>
          <span>contact@domain.com</span>
        </div>

        <div className="right">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>

        <a
          href="https://www.x.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
        </div>
      </div>

      <div className="main-header">
        <img src={logo} alt="Logo" className="logo" />

        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
           <div>
             <Link to="/booking" className="cta">
               Book Now
               </Link>
           </div>
      </div>
    </header>
  );
}
