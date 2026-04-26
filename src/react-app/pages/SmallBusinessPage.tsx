import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const perks = [
  { title: 'Affordable Flat-Rate Pricing', desc: 'No hidden fees. You get a straightforward quote before we drop anything off.' },
  { title: 'No Long-Term Contracts', desc: 'Rent for as long as you need — a day, a week, or longer. You're never locked in.' },
  { title: 'Right-Sized for Smaller Jobs', desc: 'Our 15 yard dumpster is perfect for small businesses that don't need an industrial-scale solution.' },
  { title: 'Quick & Easy Scheduling', desc: 'One phone call is all it takes. We handle the logistics so you can focus on your business.' },
];

export const SmallBusinessPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#f9fafb' }}>
      <section style={{ background: 'white', borderTop: '6px solid #39c318', borderBottom: '1px solid #e5e7eb', padding: '80px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 48, fontWeight: 800, color: '#1f2937', marginBottom: 16 }}>Small Business</h1>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: '#4b5563' }}>Affordable, hassle-free dumpster rentals built for small businesses. We keep it simple so you can focus on what matters.</p>
        </div>
      </section>

      <section style={{ padding: '80px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, marginBottom: 64 }}>
            {perks.map((p) => (
              <div key={p.title} style={{ background: 'white', borderRadius: 16, borderLeft: '4px solid #39c318', padding: '32px 28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#4b5563', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'white', borderRadius: 16, borderTop: '4px solid #39c318', padding: '40px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: 64, textAlign: 'center' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, color: '#4b5563', maxWidth: 680, margin: '0 auto', lineHeight: 1.8 }}>
              Whether you're doing a one-time office cleanout or need a dumpster for a short-term project, we've got a solution that fits your budget and your timeline.
            </p>
          </div>

          <div style={{ background: '#3d1a8a', borderRadius: 16, padding: '60px 40px', textAlign: 'center', borderTop: '4px solid #39c318' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 32, fontWeight: 800, color: 'white', marginBottom: 12 }}>Simple pricing. Fast delivery.</h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>Get a free quote today — no commitment required.</p>
            <Link to="/request" style={{ display: 'inline-block', background: '#39c318', color: 'white', fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, padding: '16px 40px', borderRadius: 30, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){section{padding:40px 20px!important}h1{font-size:32px!important}div[style*="repeat(2"]{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
};
