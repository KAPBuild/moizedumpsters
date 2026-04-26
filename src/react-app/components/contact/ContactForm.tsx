import { useState } from 'react';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  border: '2px solid #e5e7eb',
  borderRadius: 8,
  fontFamily: "'Poppins', sans-serif",
  fontSize: 15,
  color: '#1f2937',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: "'Poppins', sans-serif",
  fontSize: 12,
  fontWeight: 700,
  color: '#1f2937',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  marginBottom: 8,
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          backgroundColor: '#39c318',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 24,
          fontWeight: 800,
          color: '#1f2937',
          marginBottom: 12,
        }}>
          Message Sent!
        </h3>
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 15,
          color: '#4b5563',
          marginBottom: 32,
        }}>
          We'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          style={{
            backgroundColor: '#3d1a8a',
            color: 'white',
            fontFamily: "'Poppins', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            padding: '12px 32px',
            borderRadius: 25,
            border: 'none',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const fields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
    { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(518) 555-0123' },
    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
  ];

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {fields.map(({ id, label, type, placeholder }) => (
        <div key={id}>
          <label htmlFor={id} style={labelStyle}>
            {label} <span style={{ color: '#39c318' }}>*</span>
          </label>
          <input
            type={type}
            id={id}
            name={id}
            value={formData[id as keyof typeof formData]}
            onChange={handleChange}
            onFocus={() => setFocused(id)}
            onBlur={() => setFocused(null)}
            required
            placeholder={placeholder}
            style={{
              ...inputStyle,
              borderColor: focused === id ? '#3d1a8a' : '#e5e7eb',
              boxShadow: focused === id ? '0 0 0 3px rgba(61,26,138,0.1)' : 'none',
            }}
          />
        </div>
      ))}

      <div>
        <label htmlFor="message" style={labelStyle}>
          Message <span style={{ color: '#39c318' }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
          required
          rows={5}
          placeholder="Tell us about your project..."
          style={{
            ...inputStyle,
            resize: 'vertical',
            borderColor: focused === 'message' ? '#3d1a8a' : '#e5e7eb',
            boxShadow: focused === 'message' ? '0 0 0 3px rgba(61,26,138,0.1)' : 'none',
          }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          backgroundColor: loading ? '#9ca3af' : '#39c318',
          color: 'white',
          fontFamily: "'Poppins', sans-serif",
          fontSize: 15,
          fontWeight: 700,
          padding: '16px 32px',
          borderRadius: 25,
          border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          transition: 'background-color 0.2s, transform 0.2s',
          width: '100%',
        }}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};
