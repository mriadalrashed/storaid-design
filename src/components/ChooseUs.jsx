import React from "react";
import "../style/ChooseUs.css";

export default function ChooseUs() {
  return (
    <section className="chooseus">
      <div className="container">
        <div className="chooseus__header">
          <h4 className="chooseus__subtitle">Why Choose Us</h4>
          <div className="chooseus__title__description">
            <h3 className="chooseus__title">
              Choose Us for Exceptional Storage Solutions
            </h3>
            <p className="chooseus__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
              Mauris ac blandit nisi non sodales augue. Phasellus eget elit
              gravida.
            </p>
          </div>
        </div>

        <div className="chooseus__content">
          <div className="chooseusbox">
            <div className="chooseus_box">
              <img src="/images/chooseus_icon1.png" alt="Security Icon" />
              <div>
                <h5>Security and Safety</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            <div className="chooseus_box">
              <img src="/images/chooseus_icon2.png" alt="Affordable Icon" />
              <div>
                <h5>Flexible and Affordable</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            <div className="chooseus_box">
              <img
                src="/images/chooseus_icon3.png"
                alt="Clean Facilities Icon"
              />
              <div>
                <h5>Clean and Well-Maintained Facilities</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            <div className="chooseus_box">
              <img src="/images/chooseus_icon4.png" alt="24/7 Access Icon" />
              <div>
                <h5>24/7 and Convenient Access</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>

          <div className="chooseus__image">
            <img
              src="/images/chooseus__image.jpg"
              alt="Choose Us Facility"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
