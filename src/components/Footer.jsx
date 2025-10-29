import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>© 2025 StorAid. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">
              <span className="icon-circle">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              Terms & Conditions
            </a>
            <a href="#">
              <span className="icon-circle">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
