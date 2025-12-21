import { CONTACT_INFO } from '../../constants/contact';
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
        <img
          src="/images/ROll-OFF.png"
          alt="Dumpster"
          className="hero-bg-image"
        />
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
          <a href={`tel:${CONTACT_INFO.phone}`} className="hero-button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            CALL {CONTACT_INFO.phone}
          </a>
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
