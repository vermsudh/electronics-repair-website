import React from "react";
import { Wrench, Banknote, Zap, Home, ShieldCheck, Tv } from "lucide-react";
import { sectionContent, features } from "./WhyChooseUsData";
import "./WhyChooseUs.css";

const iconMap = { Wrench, Banknote, Zap, Home, ShieldCheck, Tv };

const FeatureCard = ({ feature }) => {
  const IconComponent = iconMap[feature.icon];

  return (
    <div className="wcu-card group">

      {/* Icon */}
      <div className="wcu-card-icon-wrap group-hover:bg-blue-100">
        {IconComponent && (
          <IconComponent className="wcu-card-icon group-hover:scale-110" size={26} strokeWidth={1.8} />
        )}
      </div>

      {/* Text */}
      <div className="wcu-card-body">
        <h3 className="wcu-card-title group-hover:text-blue-600">{feature.title}</h3>
        <p className="wcu-card-desc">{feature.description}</p>
      </div>

      {/* Bottom accent */}
      <div className="wcu-card-divider group-hover:w-16" />

    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="about" className="wcu-section">
      <div className="wcu-container">

        {/* Heading */}
        <div className="wcu-heading-wrap">
          <span className="wcu-badge">Our Advantage</span>
          <h2 className="wcu-heading">{sectionContent.heading}</h2>
          <p className="wcu-subheading">{sectionContent.subheading}</p>
        </div>

        {/* Grid */}
        <div className="wcu-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;