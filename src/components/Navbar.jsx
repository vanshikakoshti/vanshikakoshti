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
          <a href="/" onClick={closeMenu}>
            Home
          </a>
          <a href="/about" onClick={closeMenu}>
            About
          </a>
        <a href="/about" onClick={closeMenu}>
            Work
          </a>
          <div
            className="dropdown"
            onMouseEnter={() =>
              window.innerWidth > 768 && setDropdownOpen(true)
            }
            onMouseLeave={() =>
              window.innerWidth > 768 && setDropdownOpen(false)
            }
            onClick={() => window.innerWidth <= 768 && toggleDropdown()}
          >
            <button className="dropbtn">
              Services {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="/web" onClick={closeMenu}>
                  Web Development
                </a>
                <a href="/mobile" onClick={closeMenu}>
                  Mobile Apps
                </a>
                <a href="/seo" onClick={closeMenu}>
                  SEO
                </a>
              </div>
            )}
          </div>

          <a href="/contact" onClick={closeMenu}>
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
