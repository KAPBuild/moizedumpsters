import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../../constants/contact';
import './Header.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Center - Logo and Phone Button */}
        <div className="header-center">
          <Link to="/" className="header-logo">
            <div className="logo-text">
              <div className="logo-main">MOIZE DUMPSTERS</div>
              <div className="logo-sub">Residential & Commercial</div>
            </div>
          </Link>

          <div className="header-cta">
            <div className="cta-label">Call For A Free Quote</div>
            <a href={`tel:${CONTACT_INFO.phone}`} className="phone-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>

        {/* Right - Navigation and Hamburger */}
        <div className="header-right">
          <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
            <Link to="/dumpsters" className="nav-item" onClick={closeMenu}>DUMPSTERS</Link>
            <Link to="/about-us" className="nav-item" onClick={closeMenu}>ABOUT US</Link>
          </nav>

          <button className="hamburger-menu" onClick={toggleMenu}>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
          </button>
        </div>
      </div>
    </header>
  );
};
