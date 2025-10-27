import React from "react";
import "../style/ServiceCard.css";

export default function ServiceCard() {
  return (
    <section className="services">
      <div className="container">
        <div className="services__header">
          <h4 className="services__subtitle">Our Services</h4>
          <div className="services__title__description">
          <h3 className="services__title">Specialized Storage for Every Special Item</h3>
          <p className="services__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida.
            Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>
          </div>
        </div>

        <div className="services__content">
          {/* Left Column */}
          <div className="services__column services__column--left">
            <div className="service-card">
              <h5 className="service-card__title">Diverse Unit Sizes</h5>
              <p className="service-card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <div className="service-card">
              <h5 className="service-card__title">Moving Assistance</h5>
              <p className="service-card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="services__image">
            <img src="/images/storage-facility.jpg" alt="Storage Facility" />
          </div>

          {/* Right Column */}
          <div className="services__column services__column--right">
            <div className="service-card">
              <h5 className="service-card__title">Vehicle Storage</h5>
              <p className="service-card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <div className="service-card">
              <h5 className="service-card__title">Top-Notch Security</h5>
              <p className="service-card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
