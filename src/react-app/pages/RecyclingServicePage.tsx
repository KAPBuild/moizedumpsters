import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const recyclables = ['Wood & lumber', 'Clean concrete', 'Metal & steel', 'Cardboard', 'Brick & block', 'Dirt & soil', 'Yard trimmings', 'Clean fill material'];

export const RecyclingServicePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#f9fafb' }}>
      <section style={{ background: 'white', borderTop: '6px solid #39c318', borderBottom: '1px solid #e5e7eb', padding: '80px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 48, fontWeight: 800, color: '#1f2937', marginBottom: 16 }}>Recycling</h1>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: '#4b5563' }}>We're committed to keeping as much material out of the landfill as possible. Here's how we do it.</p>
        </div>
      </section>

      <section style={{ padding: '80px 60px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 64, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 26, fontWeight: 800, color: '#1f2937', marginBottom: 20 }}>How It Works</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { title: 'We Sort at Disposal', desc: 'When your dumpster is picked up, we sort through the load and pull out materials that can be recycled or repurposed.' },
                  { title: 'Materials Go to the Right Place', desc: 'Recyclable materials are sent to appropriate recycling facilities rather than straight to the landfill.' },
                  { title: 'You Don\'t Have to Do Anything Extra', desc: 'Just fill up your dumpster like normal — we handle the sorting and recycling on our end.' },
                ].map((item) => (
                  <div key={item.title} style={{ background: 'white', borderRadius: 12, borderLeft: '4px solid #39c318', padding: '24px 22px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: '#1f2937', marginBottom: 6 }}>{item.title}</h3>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: '#4b5563', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: 16, borderTop: '4px solid #39c318', padding: '36px 32px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 800, color: '#1f2937', marginBottom: 20 }}>Commonly Recycled Materials</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {recyclables.map((r) => (
                  <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: "'Poppins', sans-serif", fontSize: 14, color: '#4b5563', padding: '10px 0', borderBottom: '1px solid #f3f4f6' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#39c318', flexShrink: 0, display: 'inline-block' }} />
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ background: '#3d1a8a', borderRadius: 16, padding: '60px 40px', textAlign: 'center', borderTop: '4px solid #39c318' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 32, fontWeight: 800, color: 'white', marginBottom: 12 }}>Questions about what we recycle?</h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>Just ask — we're happy to walk you through it before your rental.</p>
            <Link to="/contact" style={{ display: 'inline-block', background: '#39c318', color: 'white', fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, padding: '16px 40px', borderRadius: 30, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){section{padding:40px 20px!important}h1{font-size:32px!important}div[style*="1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
};
