import React from "react";
import { Link } from "react-router-dom";
import "../style/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text-button">
          <div className="hero-text">
            <p>Welcome to StorAid</p>
            <h1>Space Simplified, Storage Perfected</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna.
              Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus,
              nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.
            </p>
          </div>

          <div className="button">
            <button>Discover More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/delivery-man.png" alt="Delivery Service" />
        </div>
      </div>
    </section>
  );
}
