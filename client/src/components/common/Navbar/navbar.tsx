import React, { useState, useEffect } from 'react';
import { Menu, X, Plane, Heart, User, ChevronDown, Bell, MapPin } from 'lucide-react';
import './navbar.style.scss';

interface DropdownItem {
  name: string;
  href: string;
  badge?: string;
}

interface NavItem {
  name: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    name: 'Destinations',
    href: '/destinations',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Europe', href: '/destinations/europe' },
      { name: 'Asia', href: '/destinations/asia' },
      { name: 'Americas', href: '/destinations/americas' },
      { name: 'Africa', href: '/destinations/africa' },
    ],
  },
  {
    name: 'Tours',
    href: '/tours',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Adventure Tours', href: '/tours/adventuretours', badge: 'Hot' },
      { name: 'Cultural Tours', href: '/tours/cultural' },
      { name: 'Beach Getaways', href: '/tours/beach', badge: 'New' },
    ],
  },
  { name: 'Experiences', href: '/experiences', hasDropdown: false },
  { name: 'About', href: '/about', hasDropdown: false },
  { name: 'Contact', href: '/contact', hasDropdown: false },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [isMobileView, setIsMobileView] = useState<boolean>(typeof window !== 'undefined' ? window.innerWidth <= 1024 : false);
  const [notificationCount] = useState<number>(3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      const mobileView = window.innerWidth <= 1024;
      setIsMobileView(mobileView);
      if (!mobileView) {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isMobileMenuOpen]);

  const toggleDesktopDropdown = (name: string) => {
    if (!isMobileView) {
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.hasDropdown) {
      e.preventDefault();
      if (isMobileView) {
        toggleMobileDropdown(item.name);
      }
    } else if (isMobileView) {
      handleMobileClose();
    }
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
              <span className="logo-text">Curiosity Tour & Travels</span>
              <span className="logo-tagline">Explore the World</span>
            </div>
          </div>

          <ul className="navbar-menu">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="nav-item"
                onMouseEnter={() => toggleDesktopDropdown(item.name)}
                onMouseLeave={() => toggleDesktopDropdown(item.name)}
              >
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, item)}
                  aria-expanded={item.hasDropdown ? activeDropdown === item.name : undefined}
                >
                  <span className="nav-link-text">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`dropdown-icon ${activeDropdown === item.name ? 'rotated' : ''}`}
                    />
                  )}
                </a>
                {item.hasDropdown && (
                  <ul className={`dropdown-menu ${activeDropdown === item.name ? 'open' : ''}`}>
                    {item.dropdownItems?.map((dropdownItem) => (
                      <li key={dropdownItem.name}>
                        <a href={dropdownItem.href} className="dropdown-link" onClick={isMobileView ? handleMobileClose : undefined}>
                          <span className="dropdown-link-text">{dropdownItem.name}</span>
                          {dropdownItem.badge && (
                            <span className={`dropdown-badge ${dropdownItem.badge.toLowerCase()}`}>
                              {dropdownItem.badge}
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button className="icon-btn notification-btn" aria-label="Notifications">
              <Bell size={20} />
              {notificationCount > 0 && (
                <span className="notification-badge">{notificationCount}</span>
              )}
            </button>
            <button className="icon-btn" aria-label="Favorites">
              <Heart size={20} />
            </button>
            <button className="icon-btn" aria-label="User profile">
              <User size={20} />
            </button>
            <button className="btn-primary">
              <MapPin size={18} />
              <span className="btn-text">Book Now</span>
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

      <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={handleMobileClose}></div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-logo">
            <div className="mobile-logo-wrapper">
              <Plane className="mobile-logo-icon" size={28} />
            </div>
            <div className="mobile-logo-content">
              <span className="mobile-logo-text">Curiosity</span>
              <span className="mobile-logo-tagline">Tour & Travels</span>
            </div>
          </div>
          <button className="mobile-close-btn" onClick={handleMobileClose} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <div className="mobile-menu-content">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="mobile-nav-item">
                {item.hasDropdown ? (
                  <>
                    <button
                      className="mobile-nav-link"
                      onClick={() => toggleMobileDropdown(item.name)}
                      aria-expanded={activeMobileDropdown === item.name}
                    >
                      <span className="mobile-link-text">{item.name}</span>
                      <ChevronDown
                        size={20}
                        className={`mobile-dropdown-icon ${activeMobileDropdown === item.name ? 'rotated' : ''}`}
                      />
                    </button>
                    {activeMobileDropdown === item.name && (
                      <ul className="mobile-dropdown-menu">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <li key={dropdownItem.name}>
                            <a
                              href={dropdownItem.href}
                              className="mobile-dropdown-link"
                              onClick={handleMobileClose}
                            >
                              <span>{dropdownItem.name}</span>
                              {dropdownItem.badge && (
                                <span className={`mobile-badge ${dropdownItem.badge.toLowerCase()}`}>
                                  {dropdownItem.badge}
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={handleMobileClose}
                  >
                    <span className="mobile-link-text">{item.name}</span>
                    <span className="mobile-link-arrow">→</span>
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="mobile-actions">
            <button className="btn-primary mobile-book">
              <MapPin size={18} />
              <span className="btn-text">Book Now</span>
            </button>
            <div className="mobile-icons">
              <button className="mobile-icon-btn notification-btn" aria-label="Notifications">
                <Bell size={20} />
                {notificationCount > 0 && (
                  <span className="notification-badge">{notificationCount}</span>
                )}
              </button>
              <button className="mobile-icon-btn" aria-label="Favorites">
                <Heart size={20} />
              </button>
              <button className="mobile-icon-btn" aria-label="User profile">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
