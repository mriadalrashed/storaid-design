import React from "react";
import "../style/Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter">
        <div className="container">
        <div className="text-box">
            <h3>Subscribe Our Newsletter</h3>
            <p>Subscribe to our newsletter to receive early discount offers, updates and info</p>
        </div>
        <form className="form-email">
          <div className="input-form">
            <input type="text" id="email-subs" placeholder="Enter your email *" className="form-email" required />
          </div>
          <div className="Submit-box">
            <button type="submit" className="Submit-button">Submit</button>
          </div>
        </form>

        </div>
    </section>
      );
}