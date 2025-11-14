import React, { useState } from "react";
import { sendBooking } from "../api/services";
import "../style/BookingUnit.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookingUnit() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedUnit: "",
    purpose: "",
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
    if (!formData.selectedUnit.trim())
      newErrors.selectedUnit = "Unit selection is required";
    if (!formData.purpose.trim())
      newErrors.purpose = "Purpose is required";
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
      const response = await sendBooking(formData);
      toast.success("✅ Booking request sent successfully!", {
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
        selectedUnit: "",
        purpose: "",
      });
      setTouched({});
      setSubmitted(false);
    } catch (error) {
      console.error(error);
      toast.error("❌ Something went wrong while submitting your booking!", {
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
    <section className="booking-section">
      <div className="container">
        <div className="booking__info">
          <h4>Booking Unit</h4>
          <h2>Book Your Storage Unit Now & Simplify Your Life!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nisl leo. Mauris
            ac blandit nisi non sodales augue.
          </p>
          <div className="booking__image-placeholder">
            <img src="/images/booking.jpg" alt="storage preview" />
          </div>
        </div>
        <div className="booking__form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label>
                  Your Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("name")}
                />
                {(touched.name || submitted) && errors.name && (
                  <p className="error-message">{errors.name}</p>
                )}
              </div>

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
            </div>

            <div className="form-group">
              <label>
                Choose Unit <span className="required">*</span>
              </label>
              <select
                name="selectedUnit"
                value={formData.selectedUnit}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("selectedUnit")}
              >
                <option value="">Choose Unit</option>
                <option value="Small Unit">Small Unit</option>
                <option value="Medium Unit">Medium Unit</option>
                <option value="Large Unit">Large Unit</option>
                <option value="Executive Unit">Executive Unit</option>
              </select>

              {(touched.selectedUnit || submitted) && errors.selectedUnit && (
                <p className="error-message">{errors.selectedUnit}</p>
              )}
            </div>

            <div className="form-group">
              <label>
                Storage Purpose <span className="required">*</span>
              </label>
              <textarea
                name="purpose"
                placeholder="Describe your storage purpose so that we can match your request"
                value={formData.purpose}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("purpose")}
              />
              {(touched.purpose || submitted) && errors.purpose && (
                <p className="error-message">{errors.purpose}</p>
              )}
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Book Unit"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
