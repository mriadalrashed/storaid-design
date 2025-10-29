import React from "react";
import { Link } from "react-router-dom";
import "../style/AboutUs.css";

export default function AboutUs() {
  return (
 <section className="about-section">
      <div className="container">
        {/* Left side - image and stats */}
        <div className="about-left">
          <div className="about-image">
            <img src="/images/about-as.png" alt="Delivery Service" />
          </div>

          <div className="about-stats">
            <div>
              <h2>12+</h2>
              <p>Years of Experience</p>
            </div>
            <div>
              <h2>150K+</h2>
              <p>Satisfied Clients</p>
            </div>
            <div>
              <h2>35+</h2>
              <p>Warehouse</p>
            </div>
          </div>
        </div>

        {/* Right side - content */}
        <div className="about-right">
          <div className="about-header">
            <h4>About Us</h4>
            <h3>Providing a Safe Space for Your Treasured Items</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              inventore quidem veniam reprehenderit repudiandae aut optio impedit
              corporis cumque blanditiis, tenetur vero aspernatur itaque
              laboriosam animi eligendi nostrum quos magnam.
            </p>
          </div>

          <div className="about-vision-mission">
            <div className="about-box">
              <h5>Vision</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
            <div className="about-box">
              <h5>Mission</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
          </div>

          <div className="about-actions">
            <button className="about-btn">Discover More</button>

            <div className="about-contact">
              <i className="fa-solid fa-phone"></i>
              <div>
                <h5>More Information</h5>
                <h6>+46 8 123 122 44</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
