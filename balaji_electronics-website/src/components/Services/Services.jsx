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