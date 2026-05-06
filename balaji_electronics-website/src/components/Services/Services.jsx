import React from "react";
import { services, sectionContent } from "./ServicesData";
import "./Services.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card group">

      {/* Image */}
      <div className="service-card-img-wrap">
        <img
          src={service.image}
          alt={service.title}
          className="service-card-img group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="service-card-body">
        <span className="service-card-category">{service.category}</span>
        <h3 className="service-card-title group-hover:text-blue-600">{service.title}</h3>
        <p className="service-card-desc">{service.description}</p>

        {/* Footer link */}
        <div className="service-card-footer">
          <span className="service-card-link group-hover:gap-2">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="service-card-link-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>

    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">

        {/* Heading */}
        <div className="services-heading-wrap">
          <span className="services-badge">What We Fix</span>
          <h2 className="services-heading">{sectionContent.heading}</h2>
          <p className="services-subheading">{sectionContent.subheading}</p>
        </div>

        {/* Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;