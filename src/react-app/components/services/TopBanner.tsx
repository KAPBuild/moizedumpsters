import './TopBanner.css';
import { CONTACT_INFO } from '../../constants/contact';

export const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="banner-content">
        {/* Left: Green Dumpster Icon */}
        <div className="banner-icon">
          <svg width="150" height="100" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
            <g fill="#10b981">
              {/* Dumpster body */}
              <rect x="20" y="40" width="110" height="45" rx="0" ry="0" />
              {/* Dumpster lid */}
              <path d="M 20 40 Q 30 20 75 15 Q 120 20 130 40" fill="#10b981" />
              {/* Wheels */}
              <circle cx="35" cy="85" r="8" fill="#10b981" />
              <circle cx="115" cy="85" r="8" fill="#10b981" />
              {/* Handle */}
              <rect x="70" y="25" width="10" height="15" fill="#10b981" />
            </g>
          </svg>
        </div>

        {/* Center: Text */}
        <div className="banner-text">
          <h2>GET A FREE QUOTE IN LESS THAN 3 MINUTES</h2>
        </div>

        {/* Right: Phone Button */}
        <a href={`tel:${CONTACT_INFO.phone}`} className="banner-button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {CONTACT_INFO.phone}
        </a>
      </div>
    </div>
  );
};
