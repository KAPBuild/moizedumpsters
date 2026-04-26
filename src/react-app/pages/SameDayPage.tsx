import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants/contact';

const steps = [
  { num: '1', title: 'Call Us Early', desc: 'Get in touch with our team by mid-morning and let us know what you need and where.' },
  { num: '2', title: 'We Confirm Availability', desc: 'We'll check same-day availability in your area and get you a quick quote on the spot.' },
  { num: '3', title: 'We Deliver', desc: 'Your dumpster arrives the same day, dropped exactly where you need it.' },
];

export const SameDayPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#f9fafb' }}>
      <section style={{ background: 'white', borderTop: '6px solid #39c318', borderBottom: '1px solid #e5e7eb', padding: '80px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 48, fontWeight: 800, color: '#1f2937', marginBottom: 16 }}>Same-Day Delivery</h1>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: '#4b5563' }}>Need a dumpster fast? We offer same-day delivery across the Capital District — just give us a call.</p>
        </div>
      </section>

      <section style={{ padding: '80px 60px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 64 }}>
            {steps.map((s) => (
              <div key={s.num} style={{ display: 'flex', alignItems: 'flex-start', gap: 28, background: 'white', borderRadius: 16, padding: '32px 36px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderLeft: '4px solid #39c318' }}>
                <div style={{ flexShrink: 0, width: 52, height: 52, borderRadius: '50%', background: '#3d1a8a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 900, color: 'white' }}>{s.num}</div>
                <div>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 700, color: '#1f2937', marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#4b5563', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'white', borderRadius: 16, borderTop: '4px solid #39c318', padding: '40px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: 64, textAlign: 'center' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: '#39c318', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Good to Know</p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: '#4b5563', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>Same-day delivery is subject to availability and your location within our service area. Call us as early as possible to lock in your spot — we fill up fast on busy days.</p>
          </div>

          <div style={{ background: '#3d1a8a', borderRadius: 16, padding: '60px 40px', textAlign: 'center', borderTop: '4px solid #39c318' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 32, fontWeight: 800, color: 'white', marginBottom: 12 }}>Need it today?</h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>Call us now and we'll do everything we can to get you sorted out same-day.</p>
            <a href={`tel:${CONTACT_INFO.phone}`} style={{ display: 'inline-block', background: '#39c318', color: 'white', fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, padding: '18px 48px', borderRadius: 30, textDecoration: 'none', letterSpacing: '0.5px' }}>{CONTACT_INFO.phone}</a>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){section{padding:40px 20px!important}h1{font-size:32px!important}div[style*="flex-start, gap: 28"]{flex-direction:column}}`}</style>
    </div>
  );
};
