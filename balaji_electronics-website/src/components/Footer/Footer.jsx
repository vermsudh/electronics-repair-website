import React from "react";
import { footerContent } from "./FooterData";

const Footer = () => {
  const { brand, links, contact, copyright } = footerContent;

  return (
    <footer className="w-full bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Sri Balaji <span className="text-blue-400">Electronics</span>
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">
                {brand.subtitle}
              </p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm">
                <span>📞</span>
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span>💬</span>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span>📍</span>
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-6" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>{copyright}</span>
          <span>Built with ❤️ for local businesses</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;