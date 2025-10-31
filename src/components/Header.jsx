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
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
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
