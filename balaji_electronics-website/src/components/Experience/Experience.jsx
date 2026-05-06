import React, { useState, useEffect, useRef } from "react";
import { sectionContent, stats } from "./ExperienceData";
import "./Experience.css";

const useCountUp = (target, from, duration, triggered) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!triggered) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(from + (target - from) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target, from, duration]);

  return count;
};

const AnimatedStatCard = ({ stat, triggered }) => {
  const count = useCountUp(stat.value, stat.countFrom, 2000, triggered && stat.animated);
  const displayValue = stat.animated ? `${count.toLocaleString()}${stat.displaySuffix}` : stat.value;

  return (
    <div className="exp-card group">
      <div className="exp-card-icon group-hover:bg-blue-100">
        {stat.icon}
      </div>
      <div className="exp-card-value-wrapper">
        <span className="exp-card-value">{displayValue}</span>
        <span className="exp-card-label">{stat.label}</span>
      </div>
      <div className="exp-card-divider group-hover:w-16" />
      <p className="exp-card-description">{stat.description}</p>
    </div>
  );
};

const Experience = () => {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !triggered) setTriggered(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [triggered]);

  return (
    <section ref={sectionRef} className="exp-section">
      <div className="exp-container">

        {/* Section Heading */}
        <div className="exp-heading-wrapper">
          <span className="exp-badge">Our Track Record</span>
          <h2 className="exp-heading">{sectionContent.heading}</h2>
          <p className="exp-subheading">{sectionContent.subheading}</p>
        </div>

        {/* Stats Grid */}
        <div className="exp-grid">
          {stats.map((stat) => (
            <AnimatedStatCard key={stat.id} stat={stat} triggered={triggered} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;