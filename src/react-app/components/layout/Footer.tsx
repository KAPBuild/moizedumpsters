import './Footer.css';
import { CONTACT_INFO } from '../../constants/contact';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Our Address */}
        <div className="footer-column">
          <h3 className="footer-heading">OUR ADDRESS</h3>
          <div className="footer-items">
            {/* Location */}
            <div className="address-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12h8" />
              </svg>
              <span className="address-text">Serving the Capital Region, NY</span>
            </div>

            {/* Phone */}
            <div className="address-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
              </svg>
              <a href={`tel:${CONTACT_INFO.phone}`} className="address-text footer-link">
                {CONTACT_INFO.phone}
              </a>
            </div>

            {/* Hours */}
            <div className="address-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="address-text">Mon - Sat: 7am - 7pm</span>
            </div>
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div className="footer-column">
          <h3 className="footer-heading">OUR SERVICES</h3>
          <div className="footer-items">
            <a href="/services" className="footer-link footer-link-item">
              <span className="chevron">&gt;</span>
              <span>Residential Dumpsters</span>
            </a>
            <a href="/services" className="footer-link footer-link-item">
              <span className="chevron">&gt;</span>
              <span>Construction Dumpsters</span>
            </a>
            <a href="/services" className="footer-link footer-link-item">
              <span className="chevron">&gt;</span>
              <span>Commercial Dumpsters</span>
            </a>
          </div>
        </div>

        {/* Column 3: Roll Off Sizes */}
        <div className="footer-column">
          <h3 className="footer-heading">ROLL OFF SIZES</h3>
          <div className="footer-items">
            <a href="/services" className="footer-link footer-link-item">
              <span className="chevron">&gt;</span>
              <span>10 Yard Dumpsters</span>
            </a>
            <a href="/services" className="footer-link footer-link-item">
              <span className="chevron">&gt;</span>
              <span>15 Yard Dumpsters</span>
            </a>
            <a href="/services" className="footer-link footer-link-item">
              <span className="chevron">&gt;</span>
              <span>20 Yard Dumpsters</span>
            </a>
            <a href="/services" className="footer-link footer-link-item">
              <span className="chevron">&gt;</span>
              <span>30 Yard Dumpsters</span>
            </a>
            <a href="/services" className="footer-link footer-link-item">
              <span className="chevron">&gt;</span>
              <span>40 Yard Dumpsters</span>
            </a>
          </div>
        </div>

        {/* Column 4: Connect & Quick Links */}
        <div className="footer-column">
          {/* Connect With Us Section */}
          <div>
            <h3 className="footer-heading">CONNECT WITH US</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="white">
                  <circle cx="20" cy="20" r="19" fill="none" stroke="white" strokeWidth="1" />
                  <path d="M20 8c6.627 0 12 5.373 12 12s-5.373 12-12 12S8 26.627 8 20 13.373 8 20 8zm-2 10h-2v8h2v-8zm0-3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm4 11h-2v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2V26h-2v-8h2v1c.45-.75 1.4-2 3-2 2.2 0 4 1.8 4 4v5z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="white">
                  <circle cx="20" cy="20" r="19" fill="none" stroke="white" strokeWidth="1" />
                  <path d="M28 11.3c-1 .4-2 .7-3.2.8 1.1-.7 2-1.8 2.4-3.1-1.1.6-2.3 1-3.6 1.2-1-.9-2.4-1.5-4-1.5-3 0-5.5 2.4-5.5 5.5 0 .4 0 .9.1 1.3-4.6-.2-8.7-2.4-11.4-5.8-.5.8-.8 1.8-.8 2.8 0 1.9 1 3.6 2.4 4.6-1 0-1.9-.3-2.7-.8v.1c0 2.7 1.9 4.9 4.4 5.4-.5.1-1 .2-1.5.2-.4 0-.7 0-1-.1.7 2.1 2.7 3.7 5.2 3.7-1.9 1.5-4.3 2.3-6.8 2.3-.4 0-.9 0-1.3-.1 2.4 1.6 5.3 2.5 8.3 2.5 10 0 15.4-8.3 15.4-15.4 0-.2 0-.4 0-.7 1.1-.8 2-1.8 2.8-2.9z" />
                </svg>
              </a>
              <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Yelp">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="white">
                  <circle cx="20" cy="20" r="19" fill="none" stroke="white" strokeWidth="1" />
                  <path d="M20 10c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10zm1.5 7h-3l-.5 1.5 1 2 1-2 1.5-1.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="quick-links-section">
            <h3 className="footer-heading">QUICK LINKS</h3>
            <div className="footer-items">
              <a href="/" className="footer-link footer-link-item">
                <span className="chevron">&gt;</span>
                <span>Home</span>
              </a>
              <a href="/services" className="footer-link footer-link-item">
                <span className="chevron">&gt;</span>
                <span>About Us</span>
              </a>
              <a href="/contact" className="footer-link footer-link-item">
                <span className="chevron">&gt;</span>
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
