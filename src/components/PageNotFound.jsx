import React from "react";
import { Link } from "react-router-dom";
import "../style/PageNotFound.css";


export default function PageNotFound() {
  return (
    <section className="Pagenotfound">
      <div className="container">
        <h5>Oops!</h5>
        <h1>Page Not Found</h1>
        <p>
          Sorry, the page you are looking for does not exist. It may have
          been moved, removed altogether or is temporarily unavailable.
        </p>
        <Link to="/" className="button">
          Back To Home
        </Link>
      </div>
    </section>
  );
}
