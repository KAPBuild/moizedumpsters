import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../../constants/contact';
import './Header.css';


const NAV_ITEMS = [
  {
    label: 'RESIDENTIAL',
    path: '/residential',
    dropdown: [
      { label: 'Dumpster Rental', path: '/residential' },
      { label: 'Sizes & Pricing', path: '/residential/sizes-pricing' },
      { label: 'Get a Quote', path: '/request' },
    ],
  },
  {
    label: 'BUSINESS',
    path: '/business',
    dropdown: [
      { label: 'Construction & Demolition', path: '/business/construction' },
      { label: 'Property Management', path: '/business/property-management' },
      { label: 'Commercial Dumpsters', path: '/business/commercial' },
      { label: 'Small Business', path: '/business/small-business' },
    ],
  },
  { label: 'FAQ', path: '/faq' },
  {
    label: 'SUSTAINABILITY',
    path: '/sustainability',
    dropdown: [
      { label: 'Eco-Friendly Disposal', path: '/sustainability' },
      { label: 'Recycling Programs', path: '/sustainability/recycling' },
      { label: 'Our Commitment', path: '/sustainability' },
    ],
  },
  { label: 'ABOUT US', path: '/about-us' },
  { label: 'CONTACT', path: '/contact' },
  { label: 'AREAS WE SERVE', path: '/locations' },
] as const;

type NavItem = (typeof NAV_ITEMS)[number];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMobileExpanded(null);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  const hasDropdown = (item: NavItem) => 'dropdown' in item;

  return (
    <header className="header">
      {/* Row 1: Hamburger left | Logo centered | Phone right */}
      <div className="header-top">
        <div className="header-top-left">
          <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
          </button>
        </div>

        <Link to="/" className="header-logo" onClick={closeMenu}>
          <img
            src="/images/header-logo.jpg"
            alt="Moize Dumpsters Logo"
            className="logo-image"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="logo-text">
            <div className="logo-main">MOIZE DUMPSTERS</div>
            <div className="logo-sub">Residential & Commercial</div>
          </div>
        </Link>

        <div className="header-top-right">
          <div className="cta-label">Call For A Free Quote</div>
          <a href={`tel:${CONTACT_INFO.phone}`} className="phone-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="phone-button-text">{CONTACT_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Row 2: Desktop Nav Bar */}
      <nav className="header-nav-bar">
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="nav-item-wrapper">
            <Link to={item.path} className="nav-item" onClick={closeMenu}>
              {item.label}
              {hasDropdown(item) && <span className="dropdown-arrow">▾</span>}
            </Link>

            {hasDropdown(item) && 'dropdown' in item && (
              <div className="dropdown-panel">
                {item.dropdown.map((sub) => (
                  <Link key={sub.label} to={sub.path} className="dropdown-item" onClick={closeMenu}>
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="mobile-nav-group">
            {hasDropdown(item) && 'dropdown' in item ? (
              <>
                <button className="mobile-nav-button" onClick={() => toggleMobileDropdown(item.label)}>
                  {item.label}
                  <span className={`mobile-arrow ${mobileExpanded === item.label ? 'open' : ''}`}>▾</span>
                </button>
                {mobileExpanded === item.label && (
                  <div className="mobile-dropdown">
                    {item.dropdown.map((sub) => (
                      <Link key={sub.label} to={sub.path} className="mobile-dropdown-item" onClick={closeMenu}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link to={item.path} className="mobile-nav-link" onClick={closeMenu}>
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};
