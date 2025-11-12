import React, { useEffect, useState } from "react";
import "../style/BlogCard.css";
import { getBlogs } from "../api/services";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="blogs">
      <div className="container">
        <Header />
        <Cards blogs={blogs} />
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="blogs__header">
      <h4 className="blogs__subtitle">Latest Blog and News</h4>
      <div className="blogs__title__description">
        <h3 className="blogs__title">
          Check Out Our Latest Blog and News Update
        </h3>
        <p className="blogs__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam sed
          veniam temporibus, optio delectus doloremque vel esse expedita incidunt
          voluptas molestiae dignissimos nam fuga architecto quidem ab iusto iure
          obcaecati.
        </p>
      </div>
    </div>
  );
}

function Cards({ blogs }) {
  const [expanded, setExpanded] = useState(null);

  if (blogs.length === 0) {
    return <p className="no-data">No blogs available yet.</p>;
  }

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="blogs__cards">
      {blogs.map((item) => (
        <div className="blog__card" key={item.id}>
          <div className="blog__image__wrapper">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="blog__image"
            />
          </div>
          <div className="blog__content">
            <p className="blog__date">
              <img src="/images/calendar.png" alt="calendar" className="calendarlogo" />{" "}
              {new Date(item.created).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <h4 className="blog__title">{item.title}</h4>
            <p className="blog__description">
              {expanded === item.id
                ? item.description
                : `${item.description.substring(0, 200)}...`}
            </p>
            <button
              className="read-more"
              onClick={() => toggleExpand(item.id)}
            >
              {expanded === item.id ? "Read less →" : "Read more →"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
