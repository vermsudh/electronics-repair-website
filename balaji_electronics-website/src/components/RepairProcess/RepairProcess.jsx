import React from "react";
import { sectionContent, steps } from "./RepairProcessData";
import "./RepairProcess.css";

const StepCard = ({ step, isLast }) => (
  <div className="rp-step-wrap">

    {/* Card */}
    <div className={`rp-card group border ${step.borderColor}`}>

      {/* Step Number */}
      <div className={`rp-card-number ${step.numberBg}`}>{step.id}</div>

      {/* Icon */}
      <div className={`rp-card-icon-wrap ${step.color} group-hover:scale-110`}>
        {step.icon}
      </div>

      {/* Text */}
      <div className="rp-card-text">
        <h3 className={`rp-card-title group-hover:${step.iconColor}`}>{step.title}</h3>
        <p className="rp-card-desc">{step.description}</p>
      </div>

    </div>

    {/* Arrow — Desktop */}
    {!isLast && (
      <div className="rp-arrow-desktop">
        <svg xmlns="http://www.w3.org/2000/svg" className="rp-arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    )}

    {/* Arrow — Mobile */}
    {!isLast && (
      <div className="rp-arrow-mobile">
        <svg xmlns="http://www.w3.org/2000/svg" className="rp-arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    )}

  </div>
);

const RepairProcess = () => (
  <section className="rp-section">
    <div className="rp-container">

      {/* Heading */}
      <div className="rp-heading-wrap">
        <span className="rp-badge">Our Process</span>
        <h2 className="rp-heading">{sectionContent.heading}</h2>
        <p className="rp-subheading">{sectionContent.subheading}</p>
      </div>

      {/* Steps */}
      <div className="rp-steps-row">
        {steps.map((step, index) => (
          <StepCard key={step.id} step={step} isLast={index === steps.length - 1} />
        ))}
      </div>

    </div>
  </section>
);

export default RepairProcess;