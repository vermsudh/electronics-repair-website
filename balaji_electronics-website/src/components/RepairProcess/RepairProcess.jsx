import React from "react";
import { sectionContent, steps } from "./RepairProcessData";

const StepCard = ({ step, isLast }) => {
  return (
    <div className="flex flex-col md:flex-row items-center flex-1 relative">
      {/* Card */}
      <div
        className={`group w-full flex-1 bg-white border ${step.borderColor} rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center gap-4 p-8 h-full`}
      >
        {/* Step Number */}
        <div
          className={`${step.numberBg} text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md`}
        >
          {step.id}
        </div>

        {/* Icon */}
        <div
          className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}
        >
          {step.icon}
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2">
          <h3
            className={`text-base font-bold text-gray-900 tracking-tight group-hover:${step.iconColor} transition-colors duration-200`}
          >
            {step.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>

      {/* Connector Arrow — Desktop only */}
      {!isLast && (
        <div className="hidden md:flex items-center justify-center w-10 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}

      {/* Connector Arrow — Mobile only */}
      {!isLast && (
        <div className="flex md:hidden items-center justify-center h-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

const RepairProcess = () => {
  return (
    <section className="w-full bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            {sectionContent.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed">
            {sectionContent.subheading}
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default RepairProcess;