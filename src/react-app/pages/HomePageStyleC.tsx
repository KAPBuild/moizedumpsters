import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants/contact';
import './HomePageStyleC.css';

const DemoBanner = () => (
  <div className="sc-demo-banner">
    <span className="sc-demo-label">
      <span className="sc-demo-dot"></span>
      PREVIEW: Style C — Dark Industrial
    </span>
    <div className="sc-demo-links">
      <Link to="/style-a" className="sc-demo-link">Style A</Link>
      <Link to="/style-b" className="sc-demo-link">Style B</Link>
      <Link to="/" className="sc-demo-link sc-demo-main">← Main Site</Link>
    </div>
  </div>
);

export const HomePageStyleC = () => {
  const stats = [
    { val: '500+', label: 'JOBS DONE' },
    { val: '3', label: 'SIZES' },
    { val: '100%', label: 'ON TIME' },
    { val: '1 CALL', label: 'THAT\'S IT' },
  ];

  const services = [
    {
      title: 'RESIDENTIAL',
      subtitle: 'Home Cleanouts & Renovations',
      img: '/images/dumpsters/15yd-front.jpg',
      desc: 'Home renovations, garage cleanouts, yard waste, and remodeling debris. We deliver, you fill it, we haul it.',
      align: 'left' as const,
    },
    {
      title: 'CONSTRUCTION',
      subtitle: 'Job Sites & Demolition',
      img: '/images/dumpsters/20yd-front.jpg',
      desc: 'Concrete, drywall, lumber, roofing, and heavy construction debris. Built tough for tough jobs.',
      align: 'right' as const,
    },
    {
      title: 'COMMERCIAL',
      subtitle: 'Business & Industrial',
      img: '/images/dumpsters/30yd-front.jpg',
      desc: 'Ongoing commercial waste management for businesses, retail, and industrial sites across the Capital Region.',
      align: 'left' as const,
    },
  ];

  const sizes = [
    { size: '15 YD', dims: "6' × 8' × 16'", img: '/images/dumpsters/15yd-front.jpg' },
    { size: '20 YD', dims: "6' × 8' × 22'", img: '/images/dumpsters/20yd-front.jpg' },
    { size: '30 YD', dims: "6' × 8' × 22'", img: '/images/dumpsters/30yd-front.jpg' },
  ];

  return (
    <div className="sc-page">
      <DemoBanner />

      {/* HERO */}
      <section className="sc-hero">
        <div className="sc-hero-inner">
          <div className="sc-hero-left">
            <div className="sc-hero-eyebrow">
              <span className="sc-neon-bar"></span>
              CAPITAL REGION'S DUMPSTER COMPANY
            </div>
            <h1 className="sc-hero-title">
              <span className="sc-hero-line-1">MOIZE</span>
              <span className="sc-hero-line-2">DUMP<span className="sc-accent">STERS</span></span>
            </h1>
            <p className="sc-hero-desc">
              We drop the dumpster. You fill it. We haul it away.<br />
              No nonsense. No hidden fees. Just reliable service.
            </p>
            <div className="sc-hero-ctas">
              <Link to="/request" className="sc-btn-neon">BOOK A DUMPSTER</Link>
              <a href={`tel:${CONTACT_INFO.phone}`} className="sc-btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
          <div className="sc-hero-right">
            <div className="sc-dumpster-frame">
              <img src="/images/logo-green-long.png" alt="Moize Dumpsters" className="sc-hero-wordmark" />
              <img src="/images/ROll-OFF.png" alt="Dumpster" className="sc-hero-dumpster" />
            </div>
          </div>
        </div>
        {/* Scrolling text marquee */}
        <div className="sc-marquee">
          <div className="sc-marquee-inner">
            {[...Array(6)].map((_, i) => (
              <span key={i}>
                ROLL-OFF DUMPSTERS &nbsp;·&nbsp; CAPITAL REGION NY &nbsp;·&nbsp; FAST DELIVERY &nbsp;·&nbsp; FREE QUOTES &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="sc-stats">
        {stats.map((s) => (
          <div key={s.label} className="sc-stat">
            <div className="sc-stat-val">{s.val}</div>
            <div className="sc-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <section className="sc-process">
        <div className="sc-section-inner">
          <div className="sc-section-head">
            <span className="sc-section-tag">— HOW IT WORKS</span>
            <h2 className="sc-section-title">THREE STEPS.<br />THAT'S ALL.</h2>
          </div>
          <div className="sc-steps">
            {[
              { n: '01', t: 'CALL OR BOOK ONLINE', d: 'Tell us your project, location, and preferred date. We\'ll confirm your booking fast.' },
              { n: '02', t: 'WE DELIVER', d: 'Your dumpster arrives on time to your property. No waiting, no hassle.' },
              { n: '03', t: 'WE PICK IT UP', d: 'Done filling? Call us or use your agreed pickup date. We haul it away — done.' },
            ].map((s) => (
              <div key={s.n} className="sc-step">
                <div className="sc-step-num">{s.n}</div>
                <div className="sc-step-divider"></div>
                <h3 className="sc-step-title">{s.t}</h3>
                <p className="sc-step-desc">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sc-services">
        <div className="sc-services-header">
          <span className="sc-section-tag">— OUR SERVICES</span>
          <h2 className="sc-section-title">WE HANDLE IT ALL.</h2>
        </div>
        {services.map((svc) => (
          <div key={svc.title} className={`sc-service-row sc-service-row-${svc.align}`}>
            <div className="sc-service-img-wrap">
              <img src={svc.img} alt={svc.title} className="sc-service-img" />
              <div className="sc-service-img-overlay"></div>
            </div>
            <div className="sc-service-content">
              <span className="sc-service-sub">{svc.subtitle}</span>
              <h3 className="sc-service-title">{svc.title}</h3>
              <p className="sc-service-desc">{svc.desc}</p>
              <Link to="/request" className="sc-btn-neon sc-service-cta">BOOK NOW</Link>
            </div>
          </div>
        ))}
      </section>

      {/* DUMPSTER SIZES */}
      <section className="sc-sizes">
        <div className="sc-section-inner">
          <div className="sc-section-head">
            <span className="sc-section-tag">— INVENTORY</span>
            <h2 className="sc-section-title">PICK YOUR SIZE.</h2>
          </div>
          <div className="sc-sizes-grid">
            {sizes.map((d) => (
              <div key={d.size} className="sc-size-card">
                <div className="sc-size-img-wrap">
                  <img src={d.img} alt={d.size} className="sc-size-img" />
                </div>
                <div className="sc-size-body">
                  <h3 className="sc-size-title">{d.size}</h3>
                  <p className="sc-size-dims">{d.dims}</p>
                  <Link to="/request" className="sc-size-book">BOOK IT →</Link>
                </div>
                <div className="sc-size-neon-border"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sc-cta">
        <div className="sc-cta-inner">
          <div className="sc-cta-big-text">READY?</div>
          <h2 className="sc-cta-title">Let's Get That Dumpster Delivered.</h2>
          <p className="sc-cta-sub">
            Call us or book online. Fast, affordable, reliable. Capital Region's go-to dumpster company.
          </p>
          <div className="sc-cta-actions">
            <Link to="/request" className="sc-btn-neon sc-cta-btn">REQUEST A DUMPSTER</Link>
            <a href={`tel:${CONTACT_INFO.phone}`} className="sc-btn-outline sc-cta-phone">{CONTACT_INFO.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
};
