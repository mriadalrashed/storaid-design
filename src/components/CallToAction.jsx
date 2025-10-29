import React from "react";
import { Link } from "react-router-dom";
import "../style/CallToAction.css";

export default function CallToAction() {
  return (
    <section className="CallToAction">
      <div className="container">
        <div className="CallToAction__header">
          <h3>
            Looking for Secure and Flexible Storage? <br />
            Find Your Perfect Fit With Us.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
            ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>
        </div>

        <div className="CallToAction__button">
          <Link to="/booking" className="cta-btn">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
