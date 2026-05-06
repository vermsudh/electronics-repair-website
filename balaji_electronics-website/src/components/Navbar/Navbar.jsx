import React, { useState, useEffect } from "react";
import { navLinks, businessInfo } from "./NavbarData";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo / Brand */}
          <div className="flex flex-col leading-tight select-none">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
              Sri Balaji{" "}
              <span className="text-blue-600">Electronics</span>
            </span>
            <span className="text-[11px] md:text-xs font-medium text-gray-400 tracking-widest uppercase">
              {businessInfo.subtitle}
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                onClick={() => setActiveLink(link.title)}
                className={`relative text-sm font-medium transition-colors duration-200 group ${
                  activeLink === link.title
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.title}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${
                    activeLink === link.title
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* CTA Button — Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href={`tel:${businessInfo.phone}`}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.684l1.1 3.305a1 1 0 01-.23 1.05L7.5 9.62a16.016 16.016 0 006.88 6.88l1.58-1.6a1 1 0 011.05-.23l3.305 1.1A1 1 0 0121 16.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"
                />
              </svg>
              Call Now
            </a>
          </div>

          {/* Hamburger — Mobile */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.25 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <span
              className={`block h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 translate-y-[-7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-5 pt-2 bg-white border-t border-gray-100 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.path}
              onClick={() => {
                setActiveLink(link.title);
                closeMenu();
              }}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                activeLink === link.title
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              }`}
            >
              {link.title}
            </a>
          ))}

          {/* CTA — Mobile */}
          <a
            href={`tel:${businessInfo.phone}`}
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-sm transition-all duration-200 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.684l1.1 3.305a1 1 0 01-.23 1.05L7.5 9.62a16.016 16.016 0 006.88 6.88l1.58-1.6a1 1 0 011.05-.23l3.305 1.1A1 1 0 0121 16.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"
              />
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;