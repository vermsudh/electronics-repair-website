import React from "react";
import { services, sectionContent } from "./ServicesData";

const ServiceCard = ({ service }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
      {/* Image */}
      <div className="overflow-hidden rounded-t-3xl h-52 w-full">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        {/* Category label */}
        <span className="self-start text-[11px] font-semibold text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full">
          {service.category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 leading-snug tracking-tight group-hover:text-blue-600 transition-colors duration-200">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed flex-1">
          {service.description}
        </p>

        {/* Footer link */}
        <div className="pt-2 border-t border-gray-100 mt-2">
          <span className="text-sm font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all duration-200 cursor-pointer">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="w-full bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">
            What We Fix
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
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;