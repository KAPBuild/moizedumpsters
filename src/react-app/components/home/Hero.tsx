import { Link } from 'react-router-dom';
import './Hero.css';

export const Hero = () => {
  const benefits = [
    'Affordable Pricing',
    'Flexible Rental Periods',
    'Dumpsters For Any Size Job',
    'Fast Delivery',
  ];

  return (
    <section className="hero">
      {/* Background with Overlay */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-container">
        {/* Left Side - 40% */}
        <div className="hero-left">
          <h1 className="hero-title">DUMPSTER RENTAL CAPITAL REGION</h1>

          {/* Checkmark Bullets */}
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="checkmark-circle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="benefit-text">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/request" className="hero-button">
            REQUEST A DUMPSTER
          </Link>
        </div>

        {/* Right Side - 60% */}
        <div className="hero-right">
          <img
            src="/images/ROll-OFF.png"
            alt="Green Dumpster"
            className="dumpster-image"
          />
        </div>
      </div>
    </section>
  );
};
