import React, { useState, useEffect } from 'react';
import { Menu, X, Plane, Heart, User, Search, ChevronDown } from 'lucide-react';
import './navbar.style.scss';

const navItems = [
  {
    name: 'Destinations',
    href: '#destinations',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Europe', href: '#europe' },
      { name: 'Asia', href: '#asia' },
      { name: 'Americas', href: '#americas' },
      { name: 'Africa', href: '#africa' },
    ],
  },
  {
    name: 'Tours',
    href: '#tours',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Adventure Tours', href: '#adventure' },
      { name: 'Cultural Tours', href: '#cultural' },
      { name: 'Beach Getaways', href: '#beach' },
    ],
  },
  { name: 'Experiences', href: '#experiences' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
        <div className="navbar-container">
          <div className="navbar-logo">
            <div className="logo-wrapper">
              <Plane className="logo-icon" size={32} />
            </div>
            <div className="logo-content">
              <span className="logo-text">Wanderlust</span>
              <span className="logo-tagline">Explore the World</span>
            </div>
          </div>
          <ul className="navbar-menu">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="nav-item"
                onMouseEnter={() => item.hasDropdown && toggleDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && toggleDropdown(null)}
              >
                <a href={item.href} className="nav-link">
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`dropdown-icon ${activeDropdown === item.name ? 'rotated' : ''}`}
                    />
                  )}
                </a>
                {item.hasDropdown && (
                  <ul className={`dropdown-menu ${activeDropdown === item.name ? 'open' : ''}`}>
                    {item.dropdownItems.map((dropdownItem) => (
                      <li key={dropdownItem.name}>
                        <a href={dropdownItem.href} className="dropdown-link">
                          {dropdownItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="navbar-actions">
            <button className="icon-btn search-btn">
              <Search size={20} />
            </button>
            <button className="icon-btn">
              <Heart size={20} />
            </button>
            <button className="icon-btn">
              <User size={20} />
            </button>
            <button className="btn-primary">
              <span className="btn-text">Book Now</span>
              <span className="btn-shine"></span>
            </button>
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="mobile-nav-item">
                <a
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mobile-link-text">{item.name}</span>
                  <span className="mobile-link-arrow">→</span>
                </a>
                {item.hasDropdown && (
                  <ul className="mobile-dropdown-menu">
                    {item.dropdownItems.map((dropdownItem) => (
                      <li key={dropdownItem.name}>
                        <a
                          href={dropdownItem.href}
                          className="mobile-dropdown-link"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mobile-actions">
            <button className="btn-primary mobile-book">
              <span className="btn-text">Book Now</span>
              <span className="btn-shine"></span>
            </button>
            <div className="mobile-icons">
              <button className="mobile-icon-btn">
                <Search size={20} />
              </button>
              <button className="mobile-icon-btn">
                <Heart size={20} />
              </button>
              <button className="mobile-icon-btn">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
