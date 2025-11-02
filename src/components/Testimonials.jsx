import React, { useEffect, useState } from "react";
import "../style/Testimonials.css";
import { Link } from "react-router-dom";
import { getTestimonials } from "../api/services"; 

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <Header />
        <Cards testimonials={testimonials} />
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="testimonials__header">
      <h4 className="testimonials__subtitle">Testimonials</h4>
      <div className="testimonials__title__description">
        <h3 className="testimonials__title">See What Our Clients Have to Say</h3>
        <p className="testimonials__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam sed veniam temporibus,
          optio delectus doloremque vel esse expedita incidunt voluptas molestiae dignissimos nam fuga
          architecto quidem ab iusto iure obcaecati.
        </p>
      </div>
    </div>
  );
}

function Cards({ testimonials }) {
  if (testimonials.length === 0) {
    return <p className="no-data">No testimonials available yet.</p>;
  }

  return (
    <div className="testimonials__cards">
      {testimonials.map((item) => (
        <div className="testimonial__card" key={item.id}>
          <div className="testimonial__rating">
            {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
          </div>
          <p className="testimonial__comment">{item.comment}</p>
          <div className="testimonial__footer">
            <img
              src={item.avatarUrl}
              alt={item.name}
              className="testimonial__avatar"
            />
            <div>
              <h5 className="testimonial__name">{item.name}</h5>
              <p className="testimonial__company">{item.companyName}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
