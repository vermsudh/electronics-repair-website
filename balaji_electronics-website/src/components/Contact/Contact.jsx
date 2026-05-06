import React, { useState } from "react";
import { sectionContent, contactInfo, mapEmbedUrl } from "./ContactData";
import "./Contact.css";

const ContactInfoItem = ({ item }) => (
  <div className="contact-item">
    <div className="contact-item-icon">{item.icon}</div>
    <div className="contact-item-body">
      <span className="contact-item-label">{item.label}</span>
      {item.href ? (
        <a
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="contact-item-value"
        >
          {item.value}
        </a>
      ) : (
        <span className="text-sm font-semibold text-gray-800">{item.value}</span>
      )}
      {item.subValue && <span className="contact-item-sub">{item.subValue}</span>}
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const { name, phone, message } = formData;

    const whatsappMessage =
`Hello Sri Balaji Electronics,

Name: ${name}
Phone: ${phone}

Issue:
${message}

Please contact me regarding this repair request.`;

    const whatsappUrl = `https://wa.me/919810485083?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank");

    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading-wrap">
          <span className="contact-badge">Get In Touch</span>
          <h2 className="contact-heading">{sectionContent.heading}</h2>
          <p className="contact-subheading">{sectionContent.subheading}</p>
        </div>

        {/* Top Row — Info + Map */}
        <div className="contact-top-grid">

          {/* Left — Info Card */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Business Information</h3>
            <div className="contact-info-list">
              <ContactInfoItem item={contactInfo.phone} />
              <ContactInfoItem item={contactInfo.whatsapp} />
              <ContactInfoItem item={contactInfo.address} />
              <ContactInfoItem item={contactInfo.hours} />
            </div>
            <div className="contact-info-divider" />
            <div className="contact-cta-row">
              <a href={contactInfo.phone.href} className="contact-btn-call">
                <span>📞</span> Call Now
              </a>
              <a href={contactInfo.whatsapp.href} target="_blank" rel="noopener noreferrer" className="contact-btn-whatsapp">
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Map */}
          <div className="contact-map-wrap">
            <iframe
              title="Sri Balaji Electronics Location"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="contact-map-iframe"
            />
          </div>
        </div>

        {/* Bottom — Form */}
        <div className="contact-form-card">
          <div className="contact-form-inner">
            <h3 className="contact-form-title">Send Us a Message</h3>

            <form onSubmit={handleWhatsAppSubmit} className="contact-form">
              <div className="contact-form-row">
                <div className="contact-form-field">
                  <label className="contact-form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Suraj Verma"
                    required
                    className="contact-form-input"
                  />
                </div>
                <div className="contact-form-field">
                  <label className="contact-form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98104 85083"
                    required
                    className="contact-form-input"
                  />
                </div>
              </div>
              <div className="contact-form-field">
                <label className="contact-form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your device issue..."
                  required
                  rows={5}
                  className="contact-form-textarea"
                />
              </div>
              <button type="submit" className="contact-form-submit">
                💬 Send on WhatsApp
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;