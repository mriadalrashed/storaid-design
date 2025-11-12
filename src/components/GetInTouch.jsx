import React, { useState } from "react";
import { sendContact } from "../api/services";
import "../style/GetInTouch.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (formData.phoneNumber && !/^\+?[0-9]{7,15}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Invalid phone number format";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.comment.trim()) newErrors.comment = "Comment is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const response = await sendContact(formData);
      toast.success("✅ Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      console.log(response);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        comment: "",
      });
      setTouched({});
      setSubmitted(false);
    } catch (error) {
      console.error(error);
      toast.error("❌ Something went wrong while sending your message!", {
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

  const inputClass = (field) => {
    if ((touched[field] || submitted) && errors[field]) return "input-error";
    if ((touched[field] || submitted) && !errors[field]) return "input-valid";
    return "";
  };

  return (
    <section className="get-in-touch">
      <div className="container">
        <div className="get-in-touch__info">
          <h4>Get in Touch</h4>
          <h2>Get Personalized Assistance – Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="get-in-touch__image-placeholder">
            <img src="/images/getintouch.png" alt="map" />
          </div>
        </div>

        <div className="get-in-touch__form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>
                Your Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("name")}
              />
              {(touched.name || submitted) && errors.name && (
                <p className="error-message">{errors.name}</p>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("email")}
                />
                {(touched.email || submitted) && errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>

              <div className="form-group">
                <label>Telephone</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Telephone"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("phoneNumber")}
                />
                {(touched.phoneNumber || submitted) && errors.phoneNumber && (
                  <p className="error-message">{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>
                Subject <span className="required">*</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="How can we help you"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("subject")}
              />
              {(touched.subject || submitted) && errors.subject && (
                <p className="error-message">{errors.subject}</p>
              )}
            </div>

            <div className="form-group">
              <label>
                Comments / Questions <span className="required">*</span>
              </label>
              <textarea
                name="comment"
                placeholder="Comments"
                value={formData.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("comment")}
              />
              {(touched.comment || submitted) && errors.comment && (
                <p className="error-message">{errors.comment}</p>
              )}
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
