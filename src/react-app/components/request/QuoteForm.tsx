import { useState } from 'react';
import './QuoteForm.css';

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: 'dumpster-rental',
    dumpsterSize: '20',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
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
          Thank you for your submission. We'll review your request and contact you within 24 hours with a free quote.
        </p>
        <p>
          Expected contact method: <strong>{formData.phone}</strong>
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
            <label htmlFor="address" className="form-label">Project Address <span className="required">*</span></label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required className="form-input" placeholder="123 Main St, Albany, NY" />
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
