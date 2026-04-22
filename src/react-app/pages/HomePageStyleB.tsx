import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants/contact';
import './HomePageStyleB.css';

const DemoBanner = () => (
  <div className="sb-demo-banner">
    <span className="sb-demo-label">
      <span className="sb-demo-dot"></span>
      PREVIEW: Style B — Clean Modern
    </span>
    <div className="sb-demo-links">
      <Link to="/style-a" className="sb-demo-link">Style A</Link>
      <Link to="/style-c" className="sb-demo-link">Style C</Link>
      <Link to="/" className="sb-demo-link sb-demo-main">← Main Site</Link>
    </div>
  </div>
);

export const HomePageStyleB = () => {
  const steps = [
    { num: 1, title: 'Tell Us About Your Project', desc: 'Describe what you\'re hauling, where you are, and when you need it. Takes 2 minutes.' },
    { num: 2, title: 'Get A Free Quote', desc: 'We\'ll give you a clear, upfront price — no surprises, no hidden fees.' },
    { num: 3, title: 'We Handle The Rest', desc: 'On-time delivery and pickup. You focus on the project. We handle the waste.' },
  ];

  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      title: 'Residential',
      desc: 'Home cleanouts, garage purges, yard waste, and renovation debris. We keep your property clean.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      title: 'Construction',
      desc: 'Demolition debris, concrete, lumber, drywall, and roofing materials. Built for job sites.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3h18v18H3z"/>
          <path d="M3 9h18M3 15h18M9 3v18"/>
        </svg>
      ),
      title: 'Commercial',
      desc: 'Retail, office, and multi-unit waste management. Flexible scheduling to suit your business.',
    },
  ];

  const sizes = [
    { size: '10 YD', dims: "3.5' × 8' × 12'", img: '/images/ROll-OFF.png', tag: 'Small', color: '#e0e7ff' },
    { size: '15 YD', dims: "6' × 8' × 16'", img: '/images/dumpsters/15yd-front.jpg', tag: 'Medium', color: '#ddd6fe' },
    { size: '20 YD', dims: "6' × 8' × 22'", img: '/images/dumpsters/20yd-front.jpg', tag: 'Popular', color: '#c4b5fd' },
    { size: '30 YD', dims: "6' × 8' × 22'", img: '/images/dumpsters/30yd-front.jpg', tag: 'Large', color: '#a78bfa' },
    { size: '40 YD', dims: "8' × 8' × 22'", img: '/images/ROll-OFF.png', tag: 'X-Large', color: '#8b5cf6' },
  ];

  return (
    <div className="sb-page">
      <DemoBanner />

      {/* HERO */}
      <section className="sb-hero">
        <div className="sb-hero-inner">
          <div className="sb-hero-content">
            <img src="/images/logo-purple.svg" alt="Moize Dumpsters" className="sb-hero-logo" />
            <div className="sb-hero-pills">
              <span className="sb-pill">Free Quotes</span>
              <span className="sb-pill">Fast Delivery</span>
              <span className="sb-pill">Capital Region NY</span>
            </div>
            <h1 className="sb-hero-title">
              The Easiest Way To Rent<br />
              <span className="sb-hero-highlight">A Dumpster</span>
            </h1>
            <p className="sb-hero-sub">
              Residential and commercial dumpster rentals throughout the Capital Region. Affordable, reliable, and hassle-free.
            </p>
            <div className="sb-hero-ctas">
              <Link to="/request" className="sb-btn-primary">Get A Free Quote</Link>
              <a href={`tel:${CONTACT_INFO.phone}`} className="sb-btn-text">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
          <div className="sb-hero-image">
            <div className="sb-hero-img-bg">
              <img src="/images/ROll-OFF.png" alt="Dumpster" className="sb-hero-dumpster" />
            </div>
            <div className="sb-hero-card sb-hero-card-1">
              <div className="sb-hero-card-icon">✓</div>
              <div>
                <div className="sb-hero-card-title">Same-Day Available</div>
                <div className="sb-hero-card-sub">Call before noon</div>
              </div>
            </div>
            <div className="sb-hero-card sb-hero-card-2">
              <div className="sb-hero-card-icon">★</div>
              <div>
                <div className="sb-hero-card-title">Top Rated Service</div>
                <div className="sb-hero-card-sub">Capital Region</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="sb-trust-bar">
        {['500+ Projects Completed', 'Flat-Rate Pricing', 'No Hidden Fees', 'On-Time Delivery'].map((t) => (
          <div key={t} className="sb-trust-item">
            <span className="sb-trust-check">✓</span> {t}
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <section className="sb-process">
        <div className="sb-section-inner">
          <div className="sb-section-header">
            <span className="sb-tag">THE PROCESS</span>
            <h2 className="sb-section-title">Simple. Fast. Reliable.</h2>
            <p className="sb-section-sub">Renting a dumpster has never been this straightforward.</p>
          </div>
          <div className="sb-steps">
            {steps.map((s) => (
              <div key={s.num} className="sb-step">
                <div className="sb-step-num">{s.num}</div>
                <div className="sb-step-content">
                  <h3 className="sb-step-title">{s.title}</h3>
                  <p className="sb-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sb-services">
        <div className="sb-section-inner">
          <div className="sb-section-header">
            <span className="sb-tag">WHAT WE DO</span>
            <h2 className="sb-section-title">We Handle Every Type Of Project</h2>
          </div>
          <div className="sb-services-grid">
            {services.map((svc) => (
              <div key={svc.title} className="sb-service-card">
                <div className="sb-service-icon">{svc.icon}</div>
                <h3 className="sb-service-title">{svc.title}</h3>
                <p className="sb-service-desc">{svc.desc}</p>
                <Link to="/request" className="sb-service-link">Book Now →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUMPSTER SIZES */}
      <section className="sb-sizes">
        <div className="sb-section-inner">
          <div className="sb-section-header">
            <span className="sb-tag">OUR INVENTORY</span>
            <h2 className="sb-section-title">Find Your Perfect Size</h2>
            <p className="sb-section-sub">Not sure which size you need? Call us — we'll walk you through it.</p>
          </div>
          <div className="sb-sizes-grid">
            {sizes.map((d) => (
              <div key={d.size} className="sb-size-card">
                <div className="sb-size-tag-wrap">
                  <span className="sb-size-tag" style={{ backgroundColor: d.color }}>{d.tag}</span>
                </div>
                <div className="sb-size-img-wrap">
                  <img src={d.img} alt={d.size} className="sb-size-img" />
                </div>
                <div className="sb-size-info">
                  <h3 className="sb-size-title">{d.size} Dumpster</h3>
                  <p className="sb-size-dims">{d.dims}</p>
                  <Link to="/request" className="sb-btn-primary sb-size-btn">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sb-cta">
        <div className="sb-cta-inner">
          <img src="/images/logo-purple.svg" alt="Moize Dumpsters" className="sb-cta-logo" />
          <h2 className="sb-cta-title">Ready to clean up?</h2>
          <p className="sb-cta-sub">Get a free quote in minutes. No commitment required.</p>
          <div className="sb-cta-actions">
            <Link to="/request" className="sb-btn-primary sb-cta-btn">Request A Dumpster</Link>
            <Link to="/contact" className="sb-btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
