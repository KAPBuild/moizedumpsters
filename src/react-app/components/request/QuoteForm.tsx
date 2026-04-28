import { useState } from 'react';
import './QuoteForm.css';

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    serviceType: 'dumpster-rental',
    dumpsterSize: '20',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let formatted = value;
    if (name === 'name') formatted = value.replace(/[^a-zA-Z\s'\-]/g, '');
    if (name === 'phone') {
      const d = value.replace(/\D/g, '').slice(0, 10);
      if (d.length <= 3) formatted = d;
      else if (d.length <= 6) formatted = `(${d.slice(0, 3)}) ${d.slice(3)}`;
      else formatted = `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
    }
    if (name === 'state') formatted = value.replace(/[^a-zA-Z]/g, '').slice(0, 2).toUpperCase();
    if (name === 'zip') formatted = value.replace(/\D/g, '').slice(0, 5);
    setFormData((prev) => ({ ...prev, [name]: formatted }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          address: `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zip}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: '',
          serviceType: 'dumpster-rental',
          dumpsterSize: '20',
          projectDetails: '',
        });
        // Scroll to top to show success message
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
      <div className="quote-success">
        <h2>Quote Request Submitted!</h2>
        <p>
          Thank you for your submission. We'll review your request and reach out within 24 hours with a free quote.
        </p>
        <button onClick={() => setSubmitted(false)}>
          Submit Another Quote
        </button>
      </div>
    );
  }

  return (
    <div className="quote-form-container">
      <form onSubmit={handleSubmit} className="quote-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name <span className="required">*</span></label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder="John Smith" />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number <span className="required">*</span></label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="form-input" placeholder="(518) 555-0123" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address <span className="required">*</span></label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="streetAddress" className="form-label">Street Address <span className="required">*</span></label>
            <input type="text" id="streetAddress" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required className="form-input" placeholder="123 Main St" />
          </div>
        </div>

        <div className="form-row" style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
          <div className="form-group">
            <label htmlFor="city" className="form-label">City <span className="required">*</span></label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required className="form-input" placeholder="Wayne" />
          </div>
          <div className="form-group">
            <label htmlFor="state" className="form-label">State <span className="required">*</span></label>
            <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required className="form-input" placeholder="NJ" maxLength={2} />
          </div>
          <div className="form-group">
            <label htmlFor="zip" className="form-label">ZIP Code <span className="required">*</span></label>
            <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} required className="form-input" placeholder="07470" inputMode="numeric" maxLength={5} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="serviceType" className="form-label">Service Type <span className="required">*</span></label>
            <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} className="form-select">
              <option value="dumpster-rental">Dumpster Rental</option>
              <option value="residential-demolition">Residential Demolition</option>
              <option value="commercial-demolition">Commercial Demolition</option>
              <option value="debris-removal">Debris Removal</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dumpsterSize" className="form-label">Dumpster Size <span className="required">*</span></label>
            <select id="dumpsterSize" name="dumpsterSize" value={formData.dumpsterSize} onChange={handleChange} className="form-select">
              <option value="15">15 Yard</option>
              <option value="20">20 Yard</option>
              <option value="30">30 Yard</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="projectDetails" className="form-label">Tell Us About Your Project</label>
          <textarea id="projectDetails" name="projectDetails" value={formData.projectDetails} onChange={handleChange} className="form-textarea" placeholder="What are you hauling? Any access restrictions? Questions?" />
        </div>

        <button type="submit" disabled={loading} className="form-submit">
          {loading ? 'Submitting...' : 'Get My Free Quote'}
        </button>
        <p className="form-helper-text">We'll get back to you fast — usually the same day.</p>
      </form>
    </div>
  );
};
