import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';

const SIZES = [
  {
    yards: '15',
    price: 299,
    tag: 'Standard',
    best: 'Garage cleanout, single-room reno, junk removal',
    dims: '14 ft × 7.5 ft × 4.5 ft tall',
  },
  {
    yards: '20',
    price: 399,
    tag: 'Most Popular',
    best: 'Kitchen/bath remodel, roofing tear-off, deck removal',
    dims: '22 ft × 7.5 ft × 4.5 ft tall',
  },
  {
    yards: '30',
    price: 499,
    tag: 'Large',
    best: 'Full renovation, large construction, demolition',
    dims: '22 ft × 7.5 ft × 6 ft tall',
  },
];

const stripePromise = (() => {
  const pk = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
  return pk ? loadStripe(pk) : null;
})();

export const ReservePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [step, setStep] = useState<'form' | 'checkout'>('form');
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    size: '20',
    name: '',
    email: '',
    phone: '',
    address: '',
    startDate: '',
    notes: '',
  });

  const selected = SIZES.find(s => s.yards === form.size)!;

  const setField = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          returnUrl: `${window.location.origin}/reserve/success?session_id={CHECKOUT_SESSION_ID}`,
        }),
      });
      if (!res.ok) throw new Error('Server error');
      const data = await res.json() as { clientSecret: string };
      setClientSecret(data.clientSecret);
      setStep('checkout');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#f9fafb' }}>

      {/* Banner */}
      <section style={{ background: 'white', borderTop: '6px solid #39c318', borderBottom: '1px solid #e5e7eb', padding: '80px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 48, fontWeight: 800, color: '#1f2937', marginBottom: 16 }}>
            Book Your Dumpster Online
          </h1>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: '#4b5563', marginBottom: 24 }}>
            Pick your size, fill out your details, and pay securely. We confirm your delivery within 2 hours.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            {['7-day rental included', 'Delivery & pickup', 'Disposal included', 'No hidden fees'].map(item => (
              <span key={item} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: '#39c318', fontWeight: 700 }}>
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Step indicator */}
      <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '14px 60px', display: 'flex', justifyContent: 'center', gap: 60 }}>
        {[
          { label: 'STEP 1 — Choose & Details', active: step === 'form' },
          { label: 'STEP 2 — Secure Payment', active: step === 'checkout' },
        ].map(({ label, active }) => (
          <span key={label} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.5px', color: active ? '#3d1a8a' : '#9ca3af', borderBottom: active ? '2px solid #39c318' : '2px solid transparent', paddingBottom: 4 }}>
            {label}
          </span>
        ))}
      </div>

      {step === 'form' && (
        <section style={{ padding: '80px 60px' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>

            {/* Size cards */}
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 16 }}>
              Select Your Dumpster Size
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 48 }}>
              {SIZES.map(s => {
                const isSelected = form.size === s.yards;
                return (
                  <button
                    key={s.yards}
                    type="button"
                    onClick={() => setForm(prev => ({ ...prev, size: s.yards }))}
                    style={{
                      background: isSelected ? '#3d1a8a' : 'white',
                      border: `2px solid ${isSelected ? '#3d1a8a' : '#e5e7eb'}`,
                      borderRadius: 14,
                      padding: '22px 28px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s',
                      boxShadow: isSelected ? '0 4px 20px rgba(61,26,138,0.25)' : '0 2px 8px rgba(0,0,0,0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 28,
                    }}
                  >
                    {/* Left: size + price */}
                    <div style={{ minWidth: 90, textAlign: 'center', flexShrink: 0 }}>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 36, fontWeight: 900, color: isSelected ? 'white' : '#3d1a8a', lineHeight: 1 }}>
                        {s.yards}<span style={{ fontSize: 16, fontWeight: 600 }}>yd</span>
                      </div>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 800, color: isSelected ? '#a3e895' : '#39c318' }}>
                        ${s.price}
                      </div>
                    </div>

                    {/* Divider */}
                    <div style={{ width: 1, height: 48, background: isSelected ? 'rgba(255,255,255,0.2)' : '#e5e7eb', flexShrink: 0 }} />

                    {/* Right: details */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: isSelected ? 'white' : '#1f2937' }}>
                          {s.yards} Yard Dumpster
                        </span>
                        {s.tag === 'Most Popular' && (
                          <span style={{ background: '#39c318', color: 'white', fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 700, padding: '2px 10px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Most Popular
                          </span>
                        )}
                      </div>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: isSelected ? 'rgba(255,255,255,0.8)' : '#6b7280' }}>
                        {s.best}
                      </div>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: isSelected ? 'rgba(255,255,255,0.5)' : '#9ca3af', marginTop: 4 }}>
                        {s.dims}
                      </div>
                    </div>

                    {/* Right: radio indicator */}
                    <div style={{ width: 22, height: 22, borderRadius: '50%', border: `2px solid ${isSelected ? 'white' : '#d1d5db'}`, background: isSelected ? 'white' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {isSelected && <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#3d1a8a' }} />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Form card — matches QuoteForm style */}
            <div style={{ background: 'white', borderRadius: 16, borderTop: '4px solid #39c318', padding: '48px 56px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

                <div className="reserve-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, color: '#1f2937', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Full Name <span style={{ color: '#39c318' }}>*</span>
                    </label>
                    <input
                      type="text" required value={form.name} onChange={setField('name')} placeholder="John Smith"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#1f2937', border: '2px solid #e5e7eb', borderRadius: 8, padding: '12px 16px', background: 'white', width: '100%', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, color: '#1f2937', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Phone Number <span style={{ color: '#39c318' }}>*</span>
                    </label>
                    <input
                      type="tel" required value={form.phone} onChange={setField('phone')} placeholder="(201) 555-0123"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#1f2937', border: '2px solid #e5e7eb', borderRadius: 8, padding: '12px 16px', background: 'white', width: '100%', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, color: '#1f2937', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Email Address <span style={{ color: '#39c318' }}>*</span>
                  </label>
                  <input
                    type="email" required value={form.email} onChange={setField('email')} placeholder="john@example.com"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#1f2937', border: '2px solid #e5e7eb', borderRadius: 8, padding: '12px 16px', background: 'white', width: '100%', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, color: '#1f2937', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Delivery Address <span style={{ color: '#39c318' }}>*</span>
                  </label>
                  <input
                    type="text" required value={form.address} onChange={setField('address')} placeholder="123 Main St, Wayne, NJ 07470"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#1f2937', border: '2px solid #e5e7eb', borderRadius: 8, padding: '12px 16px', background: 'white', width: '100%', boxSizing: 'border-box' }}
                  />
                </div>

                <div className="reserve-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, color: '#1f2937', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Preferred Start Date
                    </label>
                    <input
                      type="date" value={form.startDate} onChange={setField('startDate')}
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#1f2937', border: '2px solid #e5e7eb', borderRadius: 8, padding: '12px 16px', background: 'white', width: '100%', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, color: '#1f2937', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Notes
                    </label>
                    <input
                      type="text" value={form.notes} onChange={setField('notes')} placeholder="Gate code, access info, etc."
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#1f2937', border: '2px solid #e5e7eb', borderRadius: 8, padding: '12px 16px', background: 'white', width: '100%', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                {/* Order summary */}
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, color: '#166534' }}>
                      {selected.yards} Yard Dumpster — 7-Day Rental
                    </div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: '#4b5563', marginTop: 2 }}>
                      Delivery, pickup & disposal included · No hidden fees
                    </div>
                  </div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 28, fontWeight: 900, color: '#3d1a8a' }}>
                    ${selected.price}
                  </div>
                </div>

                {error && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 8, padding: '12px 16px', fontFamily: "'Poppins', sans-serif", fontSize: 14, color: '#991b1b' }}>
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    background: loading ? '#9ca3af' : '#39c318',
                    color: 'white',
                    border: 'none',
                    borderRadius: 30,
                    padding: '18px 40px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    width: '100%',
                    transition: 'background-color 0.2s, transform 0.2s',
                    marginTop: 8,
                  }}
                >
                  {loading ? 'Setting up payment...' : `Continue to Payment — $${selected.price}`}
                </button>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: '#6b7280', textAlign: 'center', marginTop: 4 }}>
                  Secured by Stripe · We never store your card info
                </p>

              </form>
            </div>
          </div>
        </section>
      )}

      {step === 'checkout' && clientSecret && stripePromise && (
        <section style={{ padding: '80px 60px' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>

            {/* Booking summary bar */}
            <div style={{ background: 'white', borderRadius: 12, border: '1px solid #e5e7eb', padding: '20px 28px', marginBottom: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: '#1f2937' }}>
                  {selected.yards} Yard Dumpster · {form.name}
                </div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: '#6b7280', marginTop: 2 }}>
                  Delivery to: {form.address}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 26, fontWeight: 900, color: '#3d1a8a' }}>
                  ${selected.price}
                </span>
                <button
                  onClick={() => setStep('form')}
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, color: '#6b7280', background: 'none', border: '1.5px solid #e5e7eb', borderRadius: 20, padding: '6px 16px', cursor: 'pointer' }}
                >
                  Edit details
                </button>
              </div>
            </div>

            <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </div>
        </section>
      )}

      <style>{`
        @media(max-width:768px){
          section{padding:40px 20px!important}
          h1{font-size:32px!important}
          .reserve-two-col{grid-template-columns:1fr!important}
        }
        input:focus{outline:none;border-color:#3d1a8a!important;box-shadow:0 0 0 3px rgba(61,26,138,0.1)!important}
      `}</style>
    </div>
  );
};
