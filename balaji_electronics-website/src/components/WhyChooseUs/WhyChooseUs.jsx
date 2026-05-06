import React from "react";
import { Wrench, Banknote, Zap, Home, ShieldCheck, Tv } from "lucide-react";
import { sectionContent, features } from "./WhyChooseUsData";

const iconMap = {
  Wrench,
  Banknote,
  Zap,
  Home,
  ShieldCheck,
  Tv,
};

// ...existing code...

const FeatureCard = ({ feature }) => {
  const IconComponent = iconMap[feature.icon];

  return (
    <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col gap-5 p-8 h-full">
      {/* Icon */}
      <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-100 rounded-2xl flex items-center justify-center transition-colors duration-300 shrink-0">
        {IconComponent && (
          <IconComponent
            className="text-blue-600 group-hover:scale-110 transition-transform duration-300"
            size={26}
            strokeWidth={1.8}
          />
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors duration-200">
          {feature.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Bottom accent */}
      <div className="w-10 h-0.5 bg-blue-100 rounded-full group-hover:w-16 transition-all duration-300" />
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">
            Our Advantage
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            {sectionContent.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed">
            {sectionContent.subheading}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;