import React from "react";
import { footerContent } from "./FooterData";
import "./Footer.css";

const Footer = () => {
  const { brand, links, contact, copyright } = footerContent;

  return (
    <footer className="footer-root">
      <div className="footer-container">

        {/* Top Grid */}
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand-wrap">
            <div>
              <h3 className="footer-brand-name">
                Sri Balaji <span className="footer-brand-accent">Electronics</span>
              </h3>
              <p className="footer-brand-sub">{brand.subtitle}</p>
            </div>
            <p className="footer-brand-desc">{brand.description}</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-wrap">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-links-list">
              {links.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact-wrap">
            <h4 className="footer-contact-title">Contact</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <span>📞</span>
                <a href={`tel:${contact.phone}`} className="footer-contact-phone">{contact.phone}</a>
              </li>
              <li className="footer-contact-item">
                <span>💬</span>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="footer-contact-wa">WhatsApp Us</a>
              </li>
              <li className="footer-contact-item">
                <span>📍</span>
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <span>{copyright}</span>
          <span>Reliable electronics service since 25+ years</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;