import React from "react";
import { sectionContent, testimonials } from "./TestimonialsData";
import "./Testimonials.css";

const StarRating = ({ rating }) => (
  <div className="testi-star-row">
    {Array.from({ length: rating }).map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="testi-star" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="testi-card group">

    {/* Top Row */}
    <div className="testi-card-top">
      <div className="testi-quote-wrap group-hover:bg-blue-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="testi-quote-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <StarRating rating={testimonial.rating} />
    </div>

    {/* Review */}
    <p className="testi-review">"{testimonial.review}"</p>

    {/* Divider */}
    <div className="testi-divider" />

    {/* Customer Info */}
    <div className="testi-customer-row">
      <div className={`testi-avatar ${testimonial.color}`}>{testimonial.initial}</div>
      <div className="testi-customer-info">
        <span className="testi-customer-name">{testimonial.name}</span>
        <span className="testi-customer-loc">📍 {testimonial.location}</span>
      </div>
      <div className="testi-verified">
        <svg xmlns="http://www.w3.org/2000/svg" className="testi-verified-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        Verified
      </div>
    </div>

  </div>
);

const Testimonials = () => (
  <section className="testi-section">
    <div className="testi-container">

      {/* Heading */}
      <div className="testi-heading-wrap">
        <span className="testi-badge">Testimonials</span>
        <h2 className="testi-heading">{sectionContent.heading}</h2>
        <p className="testi-subheading">{sectionContent.subheading}</p>
      </div>

      {/* Grid */}
      <div className="testi-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* Trust line */}
      <div className="testi-trust-row">
        <svg xmlns="http://www.w3.org/2000/svg" className="testi-trust-star" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span><strong className="testi-trust-bold">4.9 / 5</strong> average rating from 5,000+ customers</span>
      </div>

    </div>
  </section>
);

export default Testimonials;