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
    { value: '3 Sizes', label: '15 to 30 Yards' },
    { value: 'Capital', label: 'Region NY' },
  ];

  const steps = [
    { number: '01', title: 'Call or Book Online', desc: 'Tell us your project type, delivery address, and preferred date. We confirm fast — no waiting around.' },
    { number: '02', title: 'Get A Flat-Rate Quote', desc: 'One clear price up front. No fuel surcharges, no hidden fees. What we quote is what you pay.' },
    { number: '03', title: 'We Handle Delivery & Pickup', desc: 'Your dumpster shows up on schedule. When you\'re done, call us and we haul it away — it\'s that simple.' },
  ];

  const services = [
    {
      title: 'Residential',
      img: '/images/dumpsters/15yd-all.jpeg',
      desc: 'Perfect for homeowners tackling cleanouts, remodels, and yard projects.',
      bullets: ['Garage & basement cleanouts', 'Kitchen & bathroom remodels', 'Furniture & junk removal', 'Yard waste & landscaping debris'],
    },
    {
      title: 'Construction',
      img: '/images/dumpsters/20yd-all.jpeg',
      desc: 'Built for contractors and builders. Handles heavy debris without slowing down your crew.',
      bullets: ['Concrete, brick & masonry', 'Drywall & lumber', 'Roofing shingles & tear-offs', 'Demolition debris'],
    },
    {
      title: 'Commercial',
      img: '/images/dumpsters/30yd-all.jpeg',
      desc: 'Reliable waste solutions for businesses, retail spaces, and multi-unit properties.',
      bullets: ['Office & retail cleanouts', 'Property management waste', 'Tenant turnover debris', 'Ongoing job-site service'],
    },
  ];

  const sizes = [
    {
      size: '15 YD',
      dims: "6'H × 8'W × 16'L",
      img: '/images/dumpsters/15yd-all.jpeg',
      fits: 'Equivalent to ~4 pickup truck loads',
      best: 'Bathroom remodel, garage cleanout, small landscaping job',
    },
    {
      size: '20 YD',
      dims: "6'H × 8'W × 22'L",
      img: '/images/dumpsters/20yd-all.jpeg',
      fits: 'Equivalent to ~6 pickup truck loads',
      best: 'Roofing tear-off, kitchen remodel, basement cleanout',
    },
    {
      size: '30 YD',
      dims: "6'H × 8'W × 22'L",
      img: '/images/dumpsters/30yd-all.jpeg',
      fits: 'Equivalent to ~9 pickup truck loads',
      best: 'Full home renovation, large construction debris, additions',
    },
  ];

  const testimonials = [
    {
      name: 'Mike T.',
      location: 'Albany, NY',
      text: 'Ordered online, dumpster showed up the next morning. No hassle, fair price. Will use again for my next project.',
      rating: 5,
    },
    {
      name: 'Sarah R.',
      location: 'Schenectady, NY',
      text: 'Used Moize for a full kitchen gut. They were on time, professional, and the price matched exactly what they quoted.',
      rating: 5,
    },
    {
      name: 'Dave L.',
      location: 'Troy, NY',
      text: 'As a contractor I need reliable service. Moize never misses a drop-off window. That matters more than anything.',
      rating: 5,
    },
  ];

  const whyUs = [
    { icon: '📍', title: 'Locally Operated', desc: 'We\'re based in the Capital Region — not a national chain. You\'re talking to local people who know the area.' },
    { icon: '💰', title: 'Flat-Rate Pricing', desc: 'One price, no surprises. Our quotes include delivery, pickup, and disposal. That\'s it.' },
    { icon: '⏱️', title: 'On-Time Guaranteed', desc: 'Your project schedule matters. We commit to your delivery window and stick to it.' },
    { icon: '♻️', title: 'Responsible Disposal', desc: 'We work with licensed facilities. Waste is disposed of properly and responsibly every time.' },
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
              {['Flat-Rate Pricing — No Hidden Fees', 'Fast Delivery Across Capital Region NY', 'Residential, Construction & Commercial', 'Call for a Free Quote Today'].map((b) => (
                <li key={b} className="sa-benefit-item">
                  <span className="sa-check">✓</span> {b}
                </li>
              ))}
            </ul>
            <div className="sa-hero-phone">
              <span className="sa-hero-phone-label">Call us 7 days a week</span>
              <a href={`tel:${CONTACT_INFO.phone}`} className="sa-hero-phone-number">{CONTACT_INFO.phone}</a>
            </div>
            <div className="sa-hero-ctas">
              <Link to="/request" className="sa-btn-primary">REQUEST A DUMPSTER</Link>
              <a href={`tel:${CONTACT_INFO.phone}`} className="sa-btn-ghost">Get A Free Quote</a>
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
          <p className="sa-section-subtitle">
            We've made the rental process as straightforward as possible. No confusing contracts, no surprise charges.
          </p>
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
          <h2 className="sa-section-title">Services For Every Project</h2>
          <p className="sa-section-subtitle">
            Whether you're a homeowner cleaning out a garage or a contractor running a job site, we have the right dumpster and the right team to support your project.
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
                  <ul className="sa-service-bullets">
                    {svc.bullets.map((b) => (
                      <li key={b} className="sa-service-bullet">
                        <span className="sa-bullet-check">✓</span> {b}
                      </li>
                    ))}
                  </ul>
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
          <h2 className="sa-section-title">Choose Your Dumpster Size</h2>
          <p className="sa-section-subtitle">
            Not sure which size is right? Call us — we'll ask a few quick questions and point you to the right container.
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
                  <p className="sa-size-note sa-size-fits">{d.fits}</p>
                  <p className="sa-size-note"><strong>Best for:</strong> {d.best}</p>
                  <Link to="/request" className="sa-btn-primary sa-size-cta">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="sa-why">
        <div className="sa-section-inner">
          <p className="sa-section-tag">WHY MOIZE</p>
          <h2 className="sa-section-title">The Capital Region's Trusted Hauler</h2>
          <div className="sa-why-grid">
            {whyUs.map((w) => (
              <div key={w.title} className="sa-why-card">
                <div className="sa-why-icon">{w.icon}</div>
                <h3 className="sa-why-title">{w.title}</h3>
                <p className="sa-why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sa-testimonials">
        <div className="sa-section-inner">
          <p className="sa-section-tag">WHAT CUSTOMERS SAY</p>
          <h2 className="sa-section-title">Don't Take Our Word For It</h2>
          <div className="sa-reviews-grid">
            {testimonials.map((r) => (
              <div key={r.name} className="sa-review-card">
                <div className="sa-review-stars">{'★'.repeat(r.rating)}</div>
                <p className="sa-review-text">"{r.text}"</p>
                <div className="sa-review-author">
                  <strong>{r.name}</strong>
                  <span>{r.location}</span>
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
          <p className="sa-cta-sub">Call for a free quote or book online. Fast delivery throughout Albany, Schenectady, Troy, and the surrounding Capital Region.</p>
          <div className="sa-cta-actions">
            <Link to="/request" className="sa-btn-primary sa-cta-btn">Request A Dumpster</Link>
            <a href={`tel:${CONTACT_INFO.phone}`} className="sa-btn-ghost-white sa-cta-btn">{CONTACT_INFO.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
};
