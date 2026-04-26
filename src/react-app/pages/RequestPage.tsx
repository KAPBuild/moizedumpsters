import { useEffect } from 'react';
import { QuoteForm } from '../components/request/QuoteForm';

export const RequestPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#f9fafb' }}>
      <section style={{ background: 'white', borderTop: '6px solid #39c318', borderBottom: '1px solid #e5e7eb', padding: '80px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 48, fontWeight: 800, color: '#1f2937', marginBottom: 16 }}>Get a Free Quote</h1>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: '#4b5563' }}>Fill out the form below and we'll get back to you fast with a personalized quote.</p>
        </div>
      </section>

      <section style={{ padding: '80px 60px' }}>
        <QuoteForm />
      </section>

      <style>{`@media(max-width:768px){section{padding:40px 20px!important}h1{font-size:32px!important}}`}</style>
    </div>
  );
};
