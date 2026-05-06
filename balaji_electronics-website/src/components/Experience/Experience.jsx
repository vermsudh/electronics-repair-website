import React, { useState, useEffect, useRef } from "react";
import { sectionContent, stats } from "./ExperienceData";

const useCountUp = (target, from, duration, triggered) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!triggered) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(from + (target - from) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [triggered, target, from, duration]);

  return count;
};

const AnimatedStatCard = ({ stat, triggered }) => {
  const count = useCountUp(
    stat.value,
    stat.countFrom,
    2000,
    triggered && stat.animated
  );

  const displayValue = stat.animated
    ? `${count.toLocaleString()}${stat.displaySuffix}`
    : stat.value;

  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center p-8 gap-4 h-full">
      {/* Icon */}
      <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-100 rounded-2xl flex items-center justify-center text-2xl transition-colors duration-300">
        {stat.icon}
      </div>

      {/* Value */}
      <div className="flex flex-col gap-1">
        <span className="text-5xl font-bold text-gray-900 tracking-tight leading-none">
          {displayValue}
        </span>
        <span className="text-base font-semibold text-blue-600 mt-1">
          {stat.label}
        </span>
      </div>

      {/* Divider */}
      <div className="w-10 h-0.5 bg-blue-100 rounded-full group-hover:w-16 transition-all duration-300" />

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed">{stat.description}</p>
    </div>
  );
};

const Experience = () => {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [triggered]);

  return (
    <section ref={sectionRef} className="w-full bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">
            Our Track Record
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            {sectionContent.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed">
            {sectionContent.subheading}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <AnimatedStatCard key={stat.id} stat={stat} triggered={triggered} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;