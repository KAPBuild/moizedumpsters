import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../../constants/contact';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="header-logo">
          <div className="logo-icon">
            {/* Simple Dumpster Icon */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="12" width="32" height="18" rx="2" fill="#10b981" stroke="#10b981" strokeWidth="2"/>
              <rect x="8" y="8" width="24" height="6" fill="#10b981"/>
              <path d="M10 30L12 20M30 30L28 20" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="logo-text">
            <div className="logo-main">MOIZE DUMPSTERS</div>
            <div className="logo-sub">Residential & Commercial</div>
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="header-nav">
          <Link to="/" className="nav-item">HOME</Link>
          <a href="#about" className="nav-item">ABOUT</a>
          <a href="#services" className="nav-item">SERVICES <span className="dropdown-arrow">▾</span></a>
          <a href="#sizes" className="nav-item">DUMPSTER SIZES <span className="dropdown-arrow">▾</span></a>
          <Link to="/contact" className="nav-item">CONTACT</Link>
        </nav>

        {/* Right Side - Phone Button */}
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
    </header>
  );
};
