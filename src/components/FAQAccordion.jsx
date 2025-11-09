import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getFaqs } from "../api/services";
import "../style/FAQAccordion.css";

export default function FAQAccordion() {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await getFaqs();
        setFaqs(data);
      } catch (err) {
        console.error("Error fetching FAQs:", err);
      }
    };

    fetchFaqs();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq__header">
          <h4 className="faq__subtitle">FAQs</h4>
          <div className="faq__title__description">
            <h3 className="faq__title">Frequently Ask Questions</h3>
            <p className="faq__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        <div className="faq-container">
          {faqs.length > 0 ? (
            faqs.map((item, index) => (
              <div
                key={item.id}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <span>{item.title}</span>
                  <span className="faq-icon">
                    {activeIndex === index ? (
                      <i className="fa-solid fa-chevron-up"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-down"></i>
                    )}
                  </span>
                </div>
                <div
                  className="faq-answer"
                  style={{
                    maxHeight: activeIndex === index ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading FAQs...</p>
          )}
        </div>
      </div>
    </section>
  );
}
