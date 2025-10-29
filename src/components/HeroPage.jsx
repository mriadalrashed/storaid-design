import React from "react";
import { Link } from "react-router-dom";
import "../style/HeroPage.css";

export default function HeroPage({ title, subtitle }) {
  return (
    <section className="hero-page">
      <div className="hero-page-overlay">
        <div className="container">
          <h1 className="hero-page-title">{title}</h1>
          {subtitle && <p className="hero-page-subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}