import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants/contact';

const font = "'Poppins', sans-serif";

export const ReserveSuccessPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 40px' }}>
      <div style={{ maxWidth: 560, textAlign: 'center' }}>
        <div style={{ width: 80, height: 80, background: '#39c318', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <h1 style={{ fontFamily: font, fontSize: 38, fontWeight: 800, color: '#1f2937', marginBottom: 12 }}>
          Booking Confirmed!
        </h1>
        <p style={{ fontFamily: font, fontSize: 16, color: '#4b5563', marginBottom: 8, lineHeight: 1.6 }}>
          Your payment was received. We'll call or text you within 2 hours to confirm your delivery date and time.
        </p>
        <p style={{ fontFamily: font, fontSize: 14, color: '#6b7280', marginBottom: 8 }}>
          A receipt was sent to your email from Stripe.
        </p>
        <p style={{ fontFamily: font, fontSize: 14, color: '#6b7280', marginBottom: 36 }}>
          Questions? Call us at{' '}
          <a href={`tel:${CONTACT_INFO.phone}`} style={{ color: '#3d1a8a', fontWeight: 700, textDecoration: 'none' }}>
            {CONTACT_INFO.phone}
          </a>
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/"
            style={{ background: '#3d1a8a', color: 'white', fontFamily: font, fontSize: 14, fontWeight: 700, padding: '14px 32px', borderRadius: 30, textDecoration: 'none' }}
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            style={{ background: 'white', color: '#3d1a8a', fontFamily: font, fontSize: 14, fontWeight: 700, padding: '14px 32px', borderRadius: 30, textDecoration: 'none', border: '2px solid #3d1a8a' }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
