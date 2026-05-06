import React, { useState } from "react";
import { sectionContent, contactInfo, mapEmbedUrl } from "./ContactData";

const ContactInfoItem = ({ item }) => (
  <div className="flex items-start gap-4">
    <div className="w-11 h-11 bg-blue-50 rounded-2xl flex items-center justify-center text-xl shrink-0">
      {item.icon}
    </div>
    <div className="flex flex-col gap-0.5">
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
        {item.label}
      </span>
      {item.href ? (
        <a
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
        >
          {item.value}
        </a>
      ) : (
        <span className="text-sm font-semibold text-gray-800">{item.value}</span>
      )}
      {item.subValue && (
        <span className="text-xs text-gray-500">{item.subValue}</span>
      )}
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="w-full bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            {sectionContent.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed">
            {sectionContent.subheading}
          </p>
        </div>

        {/* Top Row — Contact Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">

          {/* Left — Contact Info Card */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col gap-7">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight">
              Business Information
            </h3>

            {/* Info Items */}
            <div className="flex flex-col gap-6">
              <ContactInfoItem item={contactInfo.phone} />
              <ContactInfoItem item={contactInfo.whatsapp} />
              <ContactInfoItem item={contactInfo.address} />
              <ContactInfoItem item={contactInfo.hours} />
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-100" />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={contactInfo.phone.href}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold px-6 py-3.5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>📞</span> Call Now
              </a>
              <a
                href={contactInfo.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:scale-95 text-white text-sm font-semibold px-6 py-3.5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Google Maps */}
          <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-80 lg:h-auto min-h-80">
            <iframe
              title="Sri Balaji Electronics Location"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Bottom Row — Contact Form */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-6 text-center">
              Send Us a Message
            </h3>

            {/* Success Message */}
            {submitted && (
              <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-100 text-green-700 text-sm font-medium px-5 py-4 rounded-2xl">
                <span className="text-lg">✅</span>
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name + Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Rajesh Kumar"
                    required
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl px-5 py-3.5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl px-5 py-3.5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your device issue and we'll get back to you quickly..."
                  required
                  rows={5}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl px-5 py-3.5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold px-6 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 mt-2"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;