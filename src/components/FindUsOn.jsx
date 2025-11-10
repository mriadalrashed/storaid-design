import React from "react";
import { Link } from "react-router-dom";
import "../style/FindUsOn.css";

export default function FindUsOn() {
  return (
    <section className="find-us-on">
      <div className="container">
        
        <div className="findus-image">
          <img src="/images/find-us.png" alt="Find us" />
        </div>

        <div className="findus-content">
          <div className="findus-header">
            <h3>Find Us On:</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="findus-info">
            <div className="findus-box">
              <img src="/images/find-CallCenter.png" alt="Call Center Icon" />
              <div>
                <h5>Call Center</h5>
                <p>+46 8 123 122 44</p>
              </div>
            </div>

            <div className="findus-box">
              <img src="/images/find-EmailAddress.png" alt="Email Icon" />
              <div>
                <h5>Email Address</h5>
                <p>contact@domain.com</p>
              </div>
            </div>

            <div className="findus-box">
              <img src="/images/find-location.png" alt="Location Icon" />
              <div>
                <h5>Location</h5>
                <p>Klarabergsviadukten 90, Stockholm</p>
              </div>
            </div>
          </div>

          <div className="findus-social">
            <h5>Our Social Media</h5>
            <span className="divider"></span>

            <div className="social-icons">
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

        </div>
      </div>
    </section>
  );
}
