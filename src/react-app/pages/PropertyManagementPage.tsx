import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const benefits = [
  { title: 'Tenant Turnover Cleanouts', desc: 'When tenants move out and leave things behind, we make it simple. Drop a dumpster, fill it up, we take it away.' },
  { title: 'Renovation & Rehab Projects', desc: 'Updating a unit between tenants? Our dumpsters handle demo debris, flooring, fixtures, and more.' },
  { title: 'Common Area Cleanups', desc: 'Parking lots, storage rooms, landscaping waste — we help keep shared spaces clean and presentable.' },
  { title: 'Flexible Rental Periods', desc: 'Big or small property, we work around your schedule with rental periods that fit your project timeline.' },
];

export const PropertyManagementPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#f9fafb' }}>
      <section style={{ background: 'white', borderTop: '6px solid #39c318', borderBottom: '1px solid #e5e7eb', padding: '80px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 48, fontWeight: 800, color: '#1f2937', marginBottom: 16 }}>Property Management</h1>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: '#4b5563' }}>Reliable dumpster service for landlords, property managers, and apartment complexes throughout the Capital District.</p>
        </div>
      </section>

      <section style={{ padding: '80px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, marginBottom: 64 }}>
            {benefits.map((b) => (
              <div key={b.title} style={{ background: 'white', borderRadius: 16, borderLeft: '4px solid #3d1a8a', padding: '32px 28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 10 }}>{b.title}</h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#4b5563', lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'white', borderRadius: 16, borderTop: '4px solid #39c318', padding: '40px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: 64, textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 800, color: '#1f2937', marginBottom: 12 }}>Managing multiple properties?</h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#4b5563', maxWidth: 600, margin: '0 auto' }}>We make it easy to coordinate dumpster service across multiple locations. One call, one reliable team — every time.</p>
          </div>

          <div style={{ background: '#3d1a8a', borderRadius: 16, padding: '60px 40px', textAlign: 'center', borderTop: '4px solid #39c318' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 32, fontWeight: 800, color: 'white', marginBottom: 12 }}>Let's make your next cleanout easy</h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>Call us or get a quote online — we'll take care of the rest.</p>
            <Link to="/request" style={{ display: 'inline-block', background: '#39c318', color: 'white', fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, padding: '16px 40px', borderRadius: 30, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){section{padding:40px 20px!important}h1{font-size:32px!important}div[style*="repeat(2"]{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
};
