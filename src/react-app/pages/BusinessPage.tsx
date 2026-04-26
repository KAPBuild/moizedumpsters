import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const cards = [
  { title: 'Construction & Demolition', desc: 'Heavy-duty roll-off dumpsters built for job sites — concrete, debris, roofing shingles, lumber, and more.' },
  { title: 'Property Management', desc: 'Scheduled pickups and flexible rental periods for apartment complexes, HOAs, and commercial properties.' },
  { title: 'Commercial Dumpsters', desc: 'High-capacity dumpsters for large-volume commercial projects with fast, reliable scheduling.' },
  { title: 'Small Business', desc: 'Affordable options for retail cleanouts, office moves, and ongoing commercial waste needs.' },
  { title: 'Long-Term Contracts', desc: 'We work with large businesses and industries that need ongoing, recurring dumpster service. Ask about long-term rates and dedicated scheduling — no one-size-fits-all pricing here.' },
  { title: 'Industrial & Large-Scale Projects', desc: 'Managing a large renovation, demolition, or multi-phase build? We can coordinate multi-dumpster setups and swap schedules to keep your site moving.' },
];

export const BusinessPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#f9fafb' }}>
      <section style={{ background: 'white', borderTop: '6px solid #39c318', borderBottom: '1px solid #e5e7eb', padding: '80px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 48, fontWeight: 800, color: '#1f2937', marginBottom: 16 }}>Business Dumpster Rental</h1>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: '#4b5563' }}>Commercial waste solutions for contractors, property managers, and businesses of all sizes across the Capital District.</p>
        </div>
      </section>

      <section style={{ padding: '80px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, marginBottom: 64 }}>
            {cards.map((c) => (
              <div key={c.title} style={{ background: 'white', borderRadius: 16, borderLeft: '4px solid #39c318', padding: '32px 28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#4b5563', lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: '#3d1a8a', borderRadius: 16, padding: '60px 40px', textAlign: 'center', borderTop: '4px solid #39c318' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 32, fontWeight: 800, color: 'white', marginBottom: 12 }}>Get a commercial quote today</h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>We work with businesses across Albany, Troy, Schenectady, and the entire Capital District.</p>
            <Link to="/request" style={{ display: 'inline-block', background: '#39c318', color: 'white', fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, padding: '16px 40px', borderRadius: 30, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Request a Quote</Link>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){section{padding:40px 20px!important}h1{font-size:32px!important}div[style*="repeat(2"]{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
};
