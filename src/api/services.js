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

// Booking Form

// Newsletter Subscribe
export const sendSubscription = (data) =>
  apiClient(ENDPOINTS.subscribe, {
    method: "POST",
    body: JSON.stringify({
      email: data.email,
    }),
  });