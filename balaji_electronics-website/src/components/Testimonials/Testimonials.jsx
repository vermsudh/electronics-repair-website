import React from "react";
import { sectionContent, testimonials } from "./TestimonialsData";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-yellow-400 fill-yellow-400"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col gap-5 p-8 h-full">

      {/* Top Row — Quote icon + Stars */}
      <div className="flex items-center justify-between">
        {/* Quote Icon */}
        <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Stars */}
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Review Text */}
      <p className="text-sm text-gray-600 leading-relaxed flex-1 italic">
        "{testimonial.review}"
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-gray-100" />

      {/* Customer Info */}
      <div className="flex items-center gap-3">
        {/* Avatar Initial */}
        <div
          className={`w-11 h-11 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-base shrink-0`}
        >
          {testimonial.initial}
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold text-gray-900">
            {testimonial.name}
          </span>
          <span className="text-xs text-gray-400 mt-0.5">
            📍 {testimonial.location}
          </span>
        </div>

        {/* Verified badge */}
        <div className="ml-auto flex items-center gap-1 bg-green-50 text-green-600 text-[10px] font-semibold px-2.5 py-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Verified
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            {sectionContent.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed">
            {sectionContent.subheading}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Bottom trust line */}
        <div className="flex items-center justify-center gap-2 mt-12 text-sm text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-yellow-400 fill-yellow-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>
            <strong className="text-gray-700">4.9 / 5</strong> average rating
            from 5,000+ customers
          </span>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;