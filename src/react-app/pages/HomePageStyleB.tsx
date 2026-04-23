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
  const services = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      title: 'Residential',
      tagline: 'For Homeowners',
      desc: 'Tackle your home project without the hauling headache.',
      bullets: ['Garage & basement cleanouts', 'Kitchen & bath renovations', 'Yard waste & landscaping', 'Moving & estate cleanouts'],
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      title: 'Construction',
      tagline: 'For Contractors',
      desc: 'Keep job sites clean and compliant. We keep up with your crew.',
      bullets: ['Demolition & tear-out debris', 'Concrete, drywall & lumber', 'Roofing materials', 'New construction waste'],
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3h18v18H3z"/>
          <path d="M3 9h18M3 15h18M9 3v18"/>
        </svg>
      ),
      title: 'Commercial',
      tagline: 'For Businesses',
      desc: 'Flexible scheduling and dependable service for any commercial need.',
      bullets: ['Office & retail cleanouts', 'Property management', 'Tenant turnover debris', 'Ongoing site contracts'],
    },
  ];

  const sizes = [
    {
      size: '15 YD',
      dims: "6' × 8' × 16'",
      img: '/images/dumpsters/15yd-all.jpeg',
      tag: 'Standard',
      color: '#ddd6fe',
      fits: '~4 truck loads',
      best: 'Bathroom remodel, garage cleanout',
    },
    {
      size: '20 YD',
      dims: "6' × 8' × 22'",
      img: '/images/dumpsters/20yd-all.jpeg',
      tag: 'Most Popular',
      color: '#c4b5fd',
      fits: '~6 truck loads',
      best: 'Roofing, kitchen remodel',
    },
    {
      size: '30 YD',
      dims: "6' × 8' × 22'",
      img: '/images/dumpsters/30yd-all.jpeg',
      tag: 'Large',
      color: '#a78bfa',
      fits: '~9 truck loads',
      best: 'Full renovations, additions',
    },
  ];

  const accepted = [
    'Household furniture & appliances',
    'Construction debris (drywall, lumber)',
    'Roofing shingles & materials',
    'Yard waste & brush',
    'Concrete & masonry',
    'General junk & mixed waste',
  ];

  const notAccepted = [
    'Hazardous materials',
    'Paints, solvents & chemicals',
    'Tires & batteries',
    'Medical waste',
    'Asbestos',
    'Electronics (call for options)',
  ];

  const testimonials = [
    {
      name: 'Mike T.',
      location: 'Albany, NY',
      text: 'Easiest dumpster rental I\'ve ever done. Ordered online, showed up next morning, price was exactly what they quoted.',
      rating: 5,
    },
    {
      name: 'Sarah R.',
      location: 'Schenectady, NY',
      text: 'Used them for a full kitchen gut renovation. Prompt delivery, no hidden fees. I\'d recommend Moize to anyone.',
      rating: 5,
    },
    {
      name: 'Dave L.',
      location: 'Troy, NY',
      text: 'As a contractor, reliability is everything. Moize has never missed a drop-off window. That\'s why I keep coming back.',
      rating: 5,
    },
  ];

  return (
    <div className="sb-page">
      <DemoBanner />

      {/* HERO */}
      <section className="sb-hero">
        <div className="sb-hero-inner">
          <div className="sb-hero-content">
            <img src="/images/logo-purple.png" alt="Moize Dumpsters" className="sb-hero-logo" />
            <div className="sb-hero-pills">
              <span className="sb-pill">Free Quotes</span>
              <span className="sb-pill">Fast Delivery</span>
              <span className="sb-pill">Capital Region NY</span>
            </div>
            <h1 className="sb-hero-title">
              Responsible Waste Removal.<br />
              <span className="sb-hero-highlight">Done Right.</span>
            </h1>
            <p className="sb-hero-sub">
              Moize Dumpsters delivers clean, reliable roll-off service to homeowners and contractors throughout the Capital Region — with flat-rate pricing and no surprises.
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
        {['500+ Projects Completed', 'Flat-Rate Pricing', 'No Hidden Fees', 'On-Time Every Time'].map((t) => (
          <div key={t} className="sb-trust-item">
            <span className="sb-trust-check">✓</span> {t}
          </div>
        ))}
      </div>

      {/* MISSION STATEMENT */}
      <section className="sb-mission">
        <div className="sb-mission-inner">
          <div className="sb-mission-text">
            <span className="sb-tag">OUR COMMITMENT</span>
            <h2 className="sb-mission-title">Local. Responsible. Reliable.</h2>
            <p className="sb-mission-desc">
              We're a locally operated company serving Albany, Schenectady, Troy, and surrounding communities. Every load we haul goes to licensed disposal facilities — we take responsible waste management seriously, because the communities we serve deserve it.
            </p>
          </div>
          <div className="sb-mission-stats">
            <div className="sb-mstat">
              <div className="sb-mstat-val">500+</div>
              <div className="sb-mstat-label">Jobs Completed</div>
            </div>
            <div className="sb-mstat">
              <div className="sb-mstat-val">3</div>
              <div className="sb-mstat-label">Container Sizes</div>
            </div>
            <div className="sb-mstat">
              <div className="sb-mstat-val">100%</div>
              <div className="sb-mstat-label">Licensed Disposal</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sb-process">
        <div className="sb-section-inner">
          <div className="sb-section-header">
            <span className="sb-tag">THE PROCESS</span>
            <h2 className="sb-section-title">Three Steps. That's All.</h2>
            <p className="sb-section-sub">We've stripped away the complexity so you can focus on your project.</p>
          </div>
          <div className="sb-steps">
            {[
              { num: 1, title: 'Tell Us About Your Project', desc: 'Call or fill out our quick online form. We\'ll ask about your project type, location, and timing. Takes 2 minutes.' },
              { num: 2, title: 'Receive Your Flat-Rate Quote', desc: 'One clear price that includes delivery, pickup, and disposal. No fuel surcharges, no surprise fees at the end.' },
              { num: 3, title: 'We Deliver & Pick Up', desc: 'Your dumpster arrives on the date you choose. When you\'re done filling it, call us — we\'ll come get it.' },
            ].map((s) => (
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
            <h2 className="sb-section-title">Service For Every Type Of Project</h2>
            <p className="sb-section-sub">Whether it's a weekend cleanout or a months-long construction job, we have the right solution.</p>
          </div>
          <div className="sb-services-grid">
            {services.map((svc) => (
              <div key={svc.title} className="sb-service-card">
                <div className="sb-service-icon">{svc.icon}</div>
                <span className="sb-service-tagline">{svc.tagline}</span>
                <h3 className="sb-service-title">{svc.title}</h3>
                <p className="sb-service-desc">{svc.desc}</p>
                <ul className="sb-service-bullets">
                  {svc.bullets.map((b) => (
                    <li key={b}><span className="sb-bullet">→</span> {b}</li>
                  ))}
                </ul>
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
            <h2 className="sb-section-title">Find The Right Size</h2>
            <p className="sb-section-sub">Not sure what you need? Call us — we'll walk you through it based on your project.</p>
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
                  <p className="sb-size-fits">{d.fits} · <strong>Best for:</strong> {d.best}</p>
                  <Link to="/request" className="sb-btn-primary sb-size-btn">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCEPTED MATERIALS */}
      <section className="sb-materials">
        <div className="sb-section-inner">
          <div className="sb-section-header">
            <span className="sb-tag">MATERIALS GUIDE</span>
            <h2 className="sb-section-title">What Can Go In The Dumpster?</h2>
            <p className="sb-section-sub">Not sure if your material is accepted? Give us a call — we're happy to help.</p>
          </div>
          <div className="sb-materials-grid">
            <div className="sb-materials-col sb-accepted">
              <h3 className="sb-materials-heading sb-heading-yes">
                <span className="sb-heading-icon">✓</span> Accepted
              </h3>
              <ul className="sb-materials-list">
                {accepted.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="sb-materials-col sb-not-accepted">
              <h3 className="sb-materials-heading sb-heading-no">
                <span className="sb-heading-icon">✕</span> Not Accepted
              </h3>
              <ul className="sb-materials-list">
                {notAccepted.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sb-testimonials">
        <div className="sb-section-inner">
          <div className="sb-section-header">
            <span className="sb-tag">CUSTOMER REVIEWS</span>
            <h2 className="sb-section-title">What Our Customers Say</h2>
          </div>
          <div className="sb-reviews-grid">
            {testimonials.map((r) => (
              <div key={r.name} className="sb-review-card">
                <div className="sb-review-stars">{'★'.repeat(r.rating)}</div>
                <p className="sb-review-text">"{r.text}"</p>
                <div className="sb-review-author">
                  <strong>{r.name}</strong>
                  <span>{r.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sb-cta">
        <div className="sb-cta-inner">
          <img src="/images/logo-purple.png" alt="Moize Dumpsters" className="sb-cta-logo" />
          <h2 className="sb-cta-title">Ready to clean up?</h2>
          <p className="sb-cta-sub">
            Get a free quote in minutes. Serving Albany, Schenectady, Troy, and the Capital Region.
          </p>
          <div className="sb-cta-actions">
            <Link to="/request" className="sb-btn-primary sb-cta-btn">Request A Dumpster</Link>
            <a href={`tel:${CONTACT_INFO.phone}`} className="sb-btn-outline sb-cta-phone">{CONTACT_INFO.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
};
