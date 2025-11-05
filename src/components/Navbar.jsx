import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setDropdownOpen(false); // optional: close dropdown when toggling menu
  };

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">Vanshika</div>

        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#services" onClick={closeMenu}>
           Services
          </a>
        <a href="#projects" onClick={closeMenu}>
           Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "✖" : "☰"}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
