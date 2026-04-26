import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const industries = [
  { name: 'Retail & Storefront', desc: 'Store cleanouts, fixture removal, seasonal waste — we handle it fast so you can stay open.' },
  { name: 'Warehouses & Distribution', desc: 'High-volume waste removal for warehouses and fulfillment centers on your schedule.' },
  { name: 'Office Buildings', desc: 'Relocations, office cleanouts, and furniture disposal — simple and efficient.' },
  { name: 'Restaurants & Food Service', desc: 'Equipment removal, kitchen demolition, and renovation debris hauled away cleanly.' },
];

export const CommercialPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#f9fafb' }}>
      <section style={{ background: 'white', borderTop: '6px solid #39c318', borderBottom: '1px solid #e5e7eb', padding: '80px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 48, fontWeight: 800, color: '#1f2937', marginBottom: 16 }}>Commercial Dumpsters</h1>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: '#4b5563' }}>High-capacity roll-off dumpsters for businesses of every size. Dependable service, flexible scheduling, no surprises.</p>
        </div>
      </section>

      <section style={{ padding: '80px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 28, fontWeight: 800, color: '#1f2937', marginBottom: 32, textAlign: 'center' }}>Industries We Serve</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, marginBottom: 64 }}>
            {industries.map((i) => (
              <div key={i.name} style={{ background: 'white', borderRadius: 16, borderTop: '4px solid #39c318', padding: '36px 30px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: '#3d1a8a', marginBottom: 10 }}>{i.name}</h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#4b5563', lineHeight: 1.7 }}>{i.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: '#3d1a8a', borderRadius: 16, padding: '60px 40px', textAlign: 'center', borderTop: '4px solid #39c318' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 32, fontWeight: 800, color: 'white', marginBottom: 12 }}>Get your business set up today</h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>We'll find the right size and schedule that works around your business — not the other way around.</p>
            <Link to="/request" style={{ display: 'inline-block', background: '#39c318', color: 'white', fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, padding: '16px 40px', borderRadius: 30, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Request a Quote</Link>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){section{padding:40px 20px!important}h1{font-size:32px!important}div[style*="repeat(2"]{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
};
