import React, { useState } from "react";
import { sendSubscription } from "../api/services";
import "../style/Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsSuccess(false);
      setMessage("⚠️ Please enter a valid email address.");
      return;
    }

    try {
      const res = await sendSubscription({ email });
      if (res.success) {
        setIsSuccess(true);
        setMessage(res.message || "✅ Subscription successful!");
        setEmail("");
      } else {
        setIsSuccess(false);
        setMessage("❌ Subscription failed. Please try again.");
      }
    } catch (err) {
      setIsSuccess(false);
      setMessage("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="text-box">
          <h3>Subscribe to Our Newsletter</h3>
          <p>
            Subscribe to our newsletter to receive early discount offers, updates, and info
          </p>
        </div>

        <form className="form-email" onSubmit={handleSubmit}>
          <div className="input-form">
            <input
              type="email"
              placeholder="Enter your email *"
              className="form-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="Submit-box">
            <button type="submit" className="Submit-button">
              Submit
            </button>
          </div>
        </form>

        {message && (
          <p className={isSuccess ? "success-msg" : "error-msg"}>{message}</p>
        )}
      </div>
    </section>
  );
}
