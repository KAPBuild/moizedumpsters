import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const sizes = [
  {
    yards: '15',
    title: '15 Yard Dumpster',
    price: 575,
    tons: '2 tons',
    ideal: 'Small to mid-size projects',
    uses: ['Garage or basement cleanout', 'Single room renovation', 'Small landscaping job', 'Junk removal'],
    dimensions: '14 ft long · 8 ft wide · 4 ft tall',
  },
  {
    yards: '20',
    title: '20 Yard Dumpster',
    price: 750,
    tons: '2.5 tons',
    ideal: 'Medium home or commercial projects',
    uses: ['Kitchen or bathroom remodel', 'Roofing tear-off', 'Multi-room cleanout', 'Deck removal'],
    dimensions: '14 ft long · 8 ft wide · 6 ft tall',
  },
  {
    yards: '30',
    title: '30 Yard Dumpster',
    price: 900,
    tons: '3 tons',
    ideal: 'Large jobs and new construction',
    uses: ['Whole-home renovation', 'Large construction site', 'Commercial cleanout', 'Major demolition'],
    dimensions: '22 ft long · 7 ft wide · 5 ft 6 in tall',
  },
];

export const SizesPricingPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#f9fafb' }}>
      <section style={{ background: 'white', borderTop: '6px solid #39c318', borderBottom: '1px solid #e5e7eb', padding: '80px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 48, fontWeight: 800, color: '#1f2937', marginBottom: 16 }}>Dumpster Sizes & Pricing</h1>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: '#4b5563' }}>
            Not sure what size you need? We'll help you pick the right one. All rentals include delivery, pickup, and disposal.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 64 }}>
            {sizes.map((s) => (
              <div key={s.yards} style={{ background: 'white', borderRadius: 16, borderTop: '4px solid #39c318', padding: '40px 32px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 52, fontWeight: 900, color: '#3d1a8a', lineHeight: 1, marginBottom: 4 }}>{s.yards}</div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 700, color: '#39c318', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>Yard Dumpster</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 16 }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 34, fontWeight: 900, color: '#1f2937', lineHeight: 1 }}>${s.price}</span>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, color: '#9ca3af' }}>+ TAX</span>
                </div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 6 }}>{s.ideal}</h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: '#9ca3af', marginBottom: 20 }}>{s.dimensions}</p>
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '12px 14px', marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: '#166534' }}>✓ Includes {s.tons}</div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: '#166534' }}>✓ 7-day rental</div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: '#166534' }}>✓ Delivery & pickup included</div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: '#166534' }}>✓ $200 per additional ton</div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {s.uses.map((u) => (
                    <li key={u} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontFamily: "'Poppins', sans-serif", fontSize: 14, color: '#4b5563' }}>
                      <span style={{ color: '#39c318', fontWeight: 700, flexShrink: 0 }}>—</span> {u}
                    </li>
                  ))}
                </ul>
                <Link to="/reserve" style={{ marginTop: 'auto', display: 'inline-block', textAlign: 'center', background: '#39c318', color: 'white', fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 700, padding: '12px 20px', borderRadius: 24, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Book This Size</Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 32, fontWeight: 800, color: '#1f2937', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '1px' }}>Compare Sizes</h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#4b5563', marginBottom: 24 }}>Straightforward pricing · No hidden fees · Serving within a 15-mile radius of Troy, NY</p>
            <div style={{
              width: 480,
              maxWidth: '100%',
              aspectRatio: '553 / 800',
              overflow: 'hidden',
              borderRadius: 12,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              margin: '0 auto',
            }}>
              <img
                src="/images/ad-pricing.jpg"
                alt="Moize Dumpsters pricing — 15yd $575, 20yd $750, 30yd $900"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center bottom',
                  display: 'block',
                }}
              />
            </div>
          </div>

          <div style={{ background: '#3d1a8a', borderRadius: 16, padding: '60px 40px', textAlign: 'center', borderTop: '4px solid #39c318' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 32, fontWeight: 800, color: 'white', marginBottom: 12 }}>Not sure which size to pick?</h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>Give us a call and we'll help you choose — no pressure, no guesswork.</p>
            <Link to="/request" style={{ display: 'inline-block', background: '#39c318', color: 'white', fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, padding: '16px 40px', borderRadius: 30, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){section{padding:40px 20px!important}h1{font-size:32px!important}div[style*="repeat(3"]{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
};
