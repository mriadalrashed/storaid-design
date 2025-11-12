import { apiClient } from "./apiClient";
import { ENDPOINTS } from "./endpoints";

/* ========== GET Requests ========== */

// Testimonials

export const getTestimonials = () => apiClient(ENDPOINTS.testimonials);

// Blogs
export const getBlogs = () => apiClient(ENDPOINTS.blogs);

// FAQs
export const getFaqs = () => apiClient(ENDPOINTS.faqs);

/* ========== POST Requests ========== */

// Contact Form
export const sendContact = (data) =>
  apiClient(ENDPOINTS.contact, {
    method: "POST",
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      subject: data.subject,
      comment: data.comment,
    }),
  });

// Booking Form
export const sendBooking = (data) =>
  apiClient(ENDPOINTS.booking, {
    method: "POST",
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      selectedUnit: data.selectedUnit,
      purpose: data.purpose,
    }),
  });

// Newsletter Subscribe
export const sendSubscription = (data) =>
  apiClient(ENDPOINTS.subscribe, {
    method: "POST",
    body: JSON.stringify({
      email: data.email,
    }),
  });