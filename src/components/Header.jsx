import React from "react";
import { NavLink, Link } from "react-router-dom";
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
         <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

          <nav className="nav-menu">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">
          About Us
        </NavLink>
        <NavLink to="/services">
          Services
        </NavLink>
        <NavLink to="/contact">
          Contact Us
        </NavLink>
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
