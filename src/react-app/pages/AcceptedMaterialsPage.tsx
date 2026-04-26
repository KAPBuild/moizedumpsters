import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const accepted = [
  'Household junk & furniture', 'Wood & lumber', 'Drywall & plaster', 'Concrete & masonry',
  'Roofing shingles', 'Metal & steel', 'Flooring & tile', 'Yard waste & brush',
  'Dirt & gravel', 'Cardboard & packaging', 'Appliances (freon removed)', 'Renovation debris',
];

const notAccepted = [
  'Hazardous waste', 'Paint & solvents', 'Asbestos', 'Tires',
  'Batteries', 'Electronics (TVs, computers)', 'Propane tanks', 'Medical waste',
  'Oils & fluids', 'Fluorescent bulbs', 'Refrigerants / Freon', 'Railroad ties',
];

export const AcceptedMaterialsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#f9fafb' }}>
      <section style={{ background: 'white', borderTop: '6px solid #39c318', borderBottom: '1px solid #e5e7eb', padding: '80px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 48, fontWeight: 800, color: '#1f2937', marginBottom: 16 }}>Accepted Materials</h1>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: '#4b5563' }}>Wondering what can go in the dumpster? Here's a quick guide. When in doubt, just give us a call.</p>
        </div>
      </section>

      <section style={{ padding: '80px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 64 }}>
            {/* Accepted */}
            <div style={{ background: 'white', borderRadius: 16, borderTop: '4px solid #39c318', padding: '40px 36px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 800, color: '#1f2937', marginBottom: 24 }}>
                <span style={{ color: '#39c318' }}>✓</span> What We Accept
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {accepted.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid #f3f4f6', fontFamily: "'Poppins', sans-serif", fontSize: 14, color: '#374151' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#39c318', flexShrink: 0, display: 'inline-block' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Not Accepted */}
            <div style={{ background: 'white', borderRadius: 16, borderTop: '4px solid #ef4444', padding: '40px 36px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 800, color: '#1f2937', marginBottom: 24 }}>
                <span style={{ color: '#ef4444' }}>✕</span> What We Don't Accept
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {notAccepted.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid #f3f4f6', fontFamily: "'Poppins', sans-serif", fontSize: 14, color: '#374151' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', flexShrink: 0, display: 'inline-block' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: 16, borderLeft: '4px solid #f59e0b', padding: '28px 32px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginBottom: 64 }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#4b5563', lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: '#1f2937' }}>Not sure about a specific item?</strong> Call us before tossing it in — disposing of prohibited materials can result in additional fees. We'd rather help you figure it out ahead of time.
            </p>
          </div>

          <div style={{ background: '#3d1a8a', borderRadius: 16, padding: '60px 40px', textAlign: 'center', borderTop: '4px solid #39c318' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 32, fontWeight: 800, color: 'white', marginBottom: 12 }}>Ready to get started?</h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>Book your dumpster online or give us a call — quick and easy.</p>
            <Link to="/request" style={{ display: 'inline-block', background: '#39c318', color: 'white', fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, padding: '16px 40px', borderRadius: 30, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Request a Dumpster</Link>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){section{padding:40px 20px!important}h1{font-size:32px!important}div[style*="1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
};
