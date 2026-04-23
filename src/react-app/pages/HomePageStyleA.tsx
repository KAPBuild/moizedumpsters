import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants/contact';
import './HomePageStyleA.css';

const DemoBanner = () => (
  <div className="sa-demo-banner">
    <span className="sa-demo-label">
      <span className="sa-demo-dot"></span>
      PREVIEW: Style A — Bold Professional
    </span>
    <div className="sa-demo-links">
      <Link to="/style-b" className="sa-demo-link">Style B</Link>
      <Link to="/style-c" className="sa-demo-link">Style C</Link>
      <Link to="/" className="sa-demo-link sa-demo-main">← Main Site</Link>
    </div>
  </div>
);

export const HomePageStyleA = () => {
  const stats = [
    { value: '500+', label: 'Jobs Completed' },
    { value: 'Same-Day', label: 'Delivery Available' },
    { value: '5 Sizes', label: '10 to 40 Yards' },
    { value: 'Capital', label: 'Region NY' },
  ];

  const steps = [
    { number: '01', title: 'Call or Book Online', desc: 'Contact our team and tell us about your project. We\'ll find the right dumpster for the job.' },
    { number: '02', title: 'Get Your Free Quote', desc: 'Receive a straightforward price based on size, duration, and location. No hidden fees.' },
    { number: '03', title: 'We Deliver & Pick Up', desc: 'Choose your date — we drop off on time and pick up when you\'re done.' },
  ];

  const services = [
    { title: 'Residential', img: '/images/dumpsters/15yd-front.jpg', desc: 'Home cleanouts, renovations, and landscaping projects. Reliable service for homeowners.' },
    { title: 'Construction', img: '/images/dumpsters/20yd-front.jpg', desc: 'Debris removal, demo waste, and large renovation cleanups for contractors and builders.' },
    { title: 'Commercial', img: '/images/dumpsters/30yd-front.jpg', desc: 'Ongoing commercial waste needs, job-site cleanups, and business waste disposal solutions.' },
  ];

  const sizes = [
    { size: '15 YD', dims: "6'H × 8'W × 16'L", img: '/images/dumpsters/15yd-front.jpg', note: 'Small to mid-size renovations' },
    { size: '20 YD', dims: "6'H × 8'W × 22'L", img: '/images/dumpsters/20yd-front.jpg', note: 'Mid-size projects & roofing' },
    { size: '30 YD', dims: "6'H × 8'W × 22'L", img: '/images/dumpsters/30yd-front.jpg', note: 'Large renovations & additions' },
  ];

  return (
    <div className="sa-page">
      <DemoBanner />

      {/* HERO */}
      <section className="sa-hero">
        <div className="sa-hero-inner">
          <div className="sa-hero-left">
            <img src="/images/logo-green.png" alt="Moize Dumpsters" className="sa-hero-logo" />
            <h1 className="sa-hero-title">
              DUMPSTER RENTAL<br />
              <span className="sa-hero-accent">CAPITAL REGION</span>
            </h1>
            <ul className="sa-hero-benefits">
              {['Affordable Flat-Rate Pricing', 'Fast & Reliable Delivery', 'Flexible Rental Periods', 'Dumpsters For Any Size Job'].map((b) => (
                <li key={b} className="sa-benefit-item">
                  <span className="sa-check">✓</span> {b}
                </li>
              ))}
            </ul>
            <div className="sa-hero-ctas">
              <Link to="/request" className="sa-btn-primary">REQUEST A DUMPSTER</Link>
              <a href={`tel:${CONTACT_INFO.phone}`} className="sa-btn-ghost">{CONTACT_INFO.phone}</a>
            </div>
          </div>
          <div className="sa-hero-right">
            <img src="/images/ROll-OFF.png" alt="Green Dumpster" className="sa-hero-dumpster" />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="sa-stats-bar">
        {stats.map((s) => (
          <div key={s.label} className="sa-stat">
            <div className="sa-stat-value">{s.value}</div>
            <div className="sa-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <section className="sa-process">
        <div className="sa-section-inner">
          <p className="sa-section-tag">HOW IT WORKS</p>
          <h2 className="sa-section-title">Rent A Dumpster In 3 Steps</h2>
          <div className="sa-steps">
            {steps.map((s) => (
              <div key={s.number} className="sa-step">
                <div className="sa-step-number">{s.number}</div>
                <h3 className="sa-step-title">{s.title}</h3>
                <p className="sa-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sa-services">
        <div className="sa-section-inner">
          <p className="sa-section-tag">WHAT WE OFFER</p>
          <h2 className="sa-section-title">Our Services</h2>
          <p className="sa-section-subtitle">
            From small home cleanouts to large construction sites, we have the right dumpster for every project in the Capital Region.
          </p>
          <div className="sa-services-grid">
            {services.map((svc) => (
              <div key={svc.title} className="sa-service-card">
                <div className="sa-service-img-wrap">
                  <img src={svc.img} alt={svc.title} className="sa-service-img" />
                  <div className="sa-service-accent"></div>
                </div>
                <div className="sa-service-body">
                  <h3 className="sa-service-title">{svc.title} Dumpsters</h3>
                  <p className="sa-service-desc">{svc.desc}</p>
                  <Link to="/request" className="sa-service-link">Book Now →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUMPSTER SIZES */}
      <section className="sa-sizes">
        <div className="sa-section-inner">
          <p className="sa-section-tag">OUR INVENTORY</p>
          <h2 className="sa-section-title">Dumpster Sizes</h2>
          <p className="sa-section-subtitle">
            We carry 10, 15, 20, 30, and 40-yard containers. Not sure what size you need? Call us — we'll help.
          </p>
          <div className="sa-sizes-grid">
            {sizes.map((d) => (
              <div key={d.size} className="sa-size-card">
                <div className="sa-size-img-wrap">
                  <img src={d.img} alt={d.size} className="sa-size-img" />
                  <div className="sa-size-badge">{d.dims}</div>
                </div>
                <div className="sa-size-body">
                  <h3 className="sa-size-title">{d.size} DUMPSTER</h3>
                  <p className="sa-size-note">{d.note}</p>
                  <Link to="/request" className="sa-btn-primary sa-size-cta">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="sa-cta-strip">
        <div className="sa-cta-strip-inner">
          <h2 className="sa-cta-title">Ready To Get Started?</h2>
          <p className="sa-cta-sub">Call for a free quote or book online today. Fast delivery throughout the Capital Region.</p>
          <div className="sa-cta-actions">
            <Link to="/request" className="sa-btn-primary sa-cta-btn">Request A Dumpster</Link>
            <a href={`tel:${CONTACT_INFO.phone}`} className="sa-btn-ghost-white">{CONTACT_INFO.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
};
