import { useState } from 'react';

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
      <div className="bg-accent/10 border-2 border-accent rounded-lg p-8 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Quote Request Submitted!</h2>
        <p className="text-lg text-neutral-600 mb-6">
          Thank you for your submission. We'll review your request and contact you within 24 hours with a free quote.
        </p>
        <p className="text-neutral-600 mb-6">
          Expected contact method: <strong>{formData.phone}</strong>
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
        >
          Submit Another Quote
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-neutral-900 mb-2">
          Full Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="John Smith"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-neutral-900 mb-2">
          Phone Number <span className="text-accent">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="(518) 555-0123"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-neutral-900 mb-2">
          Email Address <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="john@example.com"
        />
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="block text-sm font-bold text-neutral-900 mb-2">
          Project Address <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="123 Main St, Albany, NY 12207"
        />
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-bold text-neutral-900 mb-2">
          Service Type <span className="text-accent">*</span>
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option value="dumpster-rental">Dumpster Rental</option>
          <option value="residential-demolition">Residential Demolition</option>
          <option value="commercial-demolition">Commercial Demolition</option>
          <option value="debris-removal">Debris Removal</option>
        </select>
      </div>

      {/* Dumpster Size */}
      <div>
        <label htmlFor="dumpsterSize" className="block text-sm font-bold text-neutral-900 mb-2">
          Dumpster Size <span className="text-accent">*</span>
        </label>
        <select
          id="dumpsterSize"
          name="dumpsterSize"
          value={formData.dumpsterSize}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option value="10">10 Yard</option>
          <option value="15">15 Yard</option>
          <option value="20">20 Yard</option>
          <option value="25">25 Yard</option>
          <option value="30">30 Yard</option>
          <option value="40">40 Yard</option>
        </select>
      </div>

      {/* Project Details */}
      <div>
        <label htmlFor="projectDetails" className="block text-sm font-bold text-neutral-900 mb-2">
          Project Details
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Tell us more about your project..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-accent text-white font-bold py-4 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Get My Free Quote'}
      </button>

      <p className="text-sm text-neutral-600 text-center">
        We'll contact you within 24 hours with your free quote.
      </p>
    </form>
  );
};
