import { useEffect } from 'react';
import { CONTACT_INFO } from '../constants/contact';
import { ContactForm } from '../components/contact/ContactForm';

export const ContactPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{
        background: 'white',
        borderTop: '6px solid #39c318',
        borderBottom: '1px solid #e5e7eb',
        padding: '80px 60px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{
            fontFamily: "'Poppins', 'Montserrat', sans-serif",
            fontSize: 48,
            fontWeight: 800,
            color: '#1f2937',
            marginBottom: 16,
          }}>
            Contact Us
          </h1>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 18,
            color: '#4b5563',
          }}>
            Have questions or ready to book? Reach out — we're here to help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '80px 60px' }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'clamp(280px, 35%, 400px) 1fr',
          gap: 40,
          alignItems: 'start',
        }}>
          {/* Left — Contact Info */}
          <div style={{
            backgroundColor: '#3d1a8a',
            borderRadius: 16,
            padding: '48px 40px',
            borderTop: '4px solid #39c318',
          }}>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 24,
              fontWeight: 800,
              color: 'white',
              marginBottom: 36,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              Get In Touch
            </h2>

            {[
              {
                label: 'Phone',
                content: (
                  <a href={`tel:${CONTACT_INFO.phone}`} style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#39c318',
                    textDecoration: 'none',
                  }}>
                    {CONTACT_INFO.phone}
                  </a>
                ),
              },
              {
                label: 'Business Hours',
                content: (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {[CONTACT_INFO.hours.weekdays, CONTACT_INFO.hours.saturday, CONTACT_INFO.hours.sunday].map((h) => (
                      <span key={h} style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 14,
                        color: 'rgba(255,255,255,0.8)',
                      }}>{h}</span>
                    ))}
                  </div>
                ),
              },
              {
                label: 'Service Area',
                content: (
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: 1.6,
                  }}>
                    {CONTACT_INFO.serviceArea}
                  </span>
                ),
              },
              {
                label: 'Address',
                content: (
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.8)',
                  }}>
                    {CONTACT_INFO.address}
                  </span>
                ),
              },
            ].map(({ label, content }) => (
              <div key={label} style={{
                marginBottom: 32,
                paddingBottom: 32,
                borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#39c318',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: 8,
                }}>
                  {label}
                </div>
                {content}
              </div>
            ))}
          </div>

          {/* Right — Form */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: 16,
            padding: '48px 40px',
            borderTop: '4px solid #39c318',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 24,
              fontWeight: 800,
              color: '#1f2937',
              marginBottom: 36,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-section { padding: 40px 20px !important; }
          .contact-hero { padding: 50px 20px !important; }
          .contact-hero h1 { font-size: 32px !important; }
        }
      `}</style>
    </div>
  );
};
