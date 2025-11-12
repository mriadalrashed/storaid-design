import React, { useState } from "react";
import { sendSubscription } from "../api/services";
import "../style/Newsletter.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !emailRegex.test(email)) {
      setHasError(true);
      toast.warn("⚠️ Please enter a valid email address.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    setHasError(false);
    setIsSubmitting(true);

    try {
      const res = await sendSubscription({ email });
      if (res.success) {
        toast.success(res.message || "✅ Subscription successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        setEmail("");
      } else {
        toast.error("❌ Subscription failed. Please try again.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
    } catch (err) {
      toast.error("❌ Something went wrong. Please try again later.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } finally {
      setIsSubmitting(false);
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
              className={`form-input ${hasError ? "input-error" : ""}`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setHasError(false);
              }}
            />
          </div>

          <div className="Submit-box">
            <button type="submit" className="Submit-button" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer theme="colored" />
    </section>
  );
}
