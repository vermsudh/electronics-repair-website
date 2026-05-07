import React from "react";
import { heroContent } from "./HeroData";
import "./Hero.css";

const Hero = () => {
  const { headline, subheadline, features, buttons, partners, image } = heroContent;

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-inner">

          {/* ── Left: Text Content ── */}
          <div className="hero-content">

            {/* Badge */}
            <span className="hero-badge">
              <span className="hero-badge-dot" />
              Available Today
            </span>

            {/* Headline */}
            <h1 className="hero-headline">
              {headline.split("Electronics")[0]}
              <span className="hero-headline-accent">Electronics</span>
              {headline.split("Electronics")[1]}
            </h1>

            {/* Subheadline */}
            <p className="hero-subheadline">{subheadline}</p>

            {/* Features */}
            <ul className="hero-features">
              {features.map((feature) => (
                <li key={feature.id} className="hero-feature-item">
                  <span>{feature.icon}</span>
                  {feature.label}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="hero-buttons">
              <a href={buttons.call.phone} className="hero-btn-call">
                <svg xmlns="http://www.w3.org/2000/svg" className="hero-btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.684l1.1 3.305a1 1 0 01-.23 1.05L7.5 9.62a16.016 16.016 0 006.88 6.88l1.58-1.6a1 1 0 011.05-.23l3.305 1.1A1 1 0 0121 16.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" />
                </svg>
                {buttons.call.label}
              </a>
              <a href={buttons.whatsapp.link} target="_blank" rel="noopener noreferrer" className="hero-btn-whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" className="hero-btn-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {buttons.whatsapp.label}
              </a>
            </div>

            {/* Trust line */}
            <p className="hero-trust">
              ★★★★★
              <span className="ml-1">Trusted by 5,000+ customers across the city</span>
            </p>

            {/* ── Trusted Service Partners ── */}
            <div className="hero-partners">
              <div className="hero-partners-divider" />
              <span className="hero-partners-label">Trusted Service Partners</span>
              <div className="hero-partners-row">
                {partners.map((partner) => (
                  <img
                    key={partner.id}
                    src={partner.src}
                    alt={partner.alt}
                    className="hero-partner-logo"
                    draggable={false}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* ── Right: Image ── */}
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <div className="hero-image-blob" />
              <img src={image.src} alt={image.alt} className="hero-image" />

              {/* Floating Badge */}
              <div className="hero-floating-badge">
                <div className="hero-floating-icon">🛠️</div>
                <div className="leading-tight">
                  <p className="hero-floating-label">Experience</p>
                  <p className="hero-floating-value">25+ Years</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;