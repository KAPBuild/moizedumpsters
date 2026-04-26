import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Heavy Debris Ready', desc: 'Our roll-off dumpsters are built for concrete, roofing shingles, drywall, lumber, and everything that comes off a job site.' },
  { title: 'Flexible Scheduling', desc: 'We work around your project timeline. Need a swap mid-job? Just call us — we make it easy.' },
  { title: 'Right-Size Options', desc: 'We offer 15, 20, and 30 yard dumpsters so you get exactly what you need without paying for more than you use.' },
  { title: 'Fast Turnaround', desc: "We deliver on time and pick up when you're done, keeping your site clean and your project on schedule." },
];

const accepted = ['Concrete & masonry', 'Wood & lumber', 'Drywall & plaster', 'Roofing shingles', 'Metal scraps', 'Flooring & tile', 'Insulation', 'Fencing & decking'];

export const ConstructionPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#f9fafb' }}>
      <section style={{ background: 'white', borderTop: '6px solid #39c318', borderBottom: '1px solid #e5e7eb', padding: '80px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 48, fontWeight: 800, color: '#1f2937', marginBottom: 16 }}>Construction & Demolition</h1>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: '#4b5563' }}>Heavy-duty dumpsters for contractors, builders, and renovation crews across the Capital District.</p>
        </div>
      </section>

      <section style={{ padding: '80px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, marginBottom: 64 }}>
            {features.map((f) => (
              <div key={f.title} style={{ background: 'white', borderRadius: 16, borderLeft: '4px solid #39c318', padding: '32px 28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#4b5563', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'white', borderRadius: 16, borderTop: '4px solid #39c318', padding: '40px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: 64 }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 800, color: '#1f2937', marginBottom: 24 }}>Common C&D Materials We Accept</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {accepted.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Poppins', sans-serif", fontSize: 14, color: '#4b5563' }}>
                  <span style={{ color: '#39c318', fontWeight: 700 }}>—</span> {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#3d1a8a', borderRadius: 16, padding: '60px 40px', textAlign: 'center', borderTop: '4px solid #39c318' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 32, fontWeight: 800, color: 'white', marginBottom: 12 }}>Ready to get your site set up?</h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>Call us or request a quote — fast delivery available across the Capital Region.</p>
            <Link to="/request" style={{ display: 'inline-block', background: '#39c318', color: 'white', fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, padding: '16px 40px', borderRadius: 30, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Request a Dumpster</Link>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){section{padding:40px 20px!important}h1{font-size:32px!important}div[style*="repeat(2"]{grid-template-columns:1fr!important}div[style*="repeat(4"]{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </div>
  );
};
