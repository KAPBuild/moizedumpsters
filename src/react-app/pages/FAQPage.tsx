import { useState } from 'react';
import './FAQPage.css';

export const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How long can I rent a dumpster?',
      answer: 'Our standard rental period is 7 days, but we offer flexible rental periods to fit your needs. Contact us to discuss custom rental durations for your project.',
    },
    {
      question: 'What size dumpster do I need?',
      answer: 'We offer dumpsters in 10, 15, 20, 30, and 40-yard sizes. A 10-yard is ideal for small projects, 20-yard for medium renovations, and 40-yard for large construction sites. Our team can help you choose the right size based on your project.',
    },
    {
      question: 'Are there weight limits on the dumpsters?',
      answer: 'Yes, each dumpster has a weight capacity. The typical limit is around 3-4 tons per dumpster, but this varies by size. Exceeding weight limits may result in additional fees. Contact us for specific details.',
    },
    {
      question: 'What can and cannot be disposed of?',
      answer: 'We accept most household and construction waste, including wood, drywall, concrete, and metal. We cannot accept hazardous materials, electronics, appliances, tires, asbestos, or paint. Contact us if you have questions about specific items.',
    },
    {
      question: 'How much does dumpster rental cost?',
      answer: 'Pricing depends on the dumpster size, rental duration, and location. We offer competitive rates and free quotes. Call us or fill out our quote form to get an estimate for your project.',
    },
    {
      question: 'Do you deliver and pick up the dumpsters?',
      answer: 'Yes! We handle both delivery and pickup at your convenience. Simply let us know your preferred dates and times, and we\'ll make sure everything is scheduled to work with your project timeline.',
    },
    {
      question: 'How quickly can you deliver a dumpster?',
      answer: 'We offer fast delivery options. In most cases, we can deliver within 24-48 hours. For urgent needs, contact us directly to discuss expedited delivery options.',
    },
    {
      question: 'Is there a damage deposit or additional fees?',
      answer: 'There are no hidden fees. Our quoted price includes delivery, pickup, and disposal. Additional fees may apply if weight limits are exceeded or if prohibited items are found in the dumpster.',
    },
    {
      question: 'Do you service my area?',
      answer: 'We serve the Capital Region and surrounding areas. Contact us with your location to confirm service availability in your area.',
    },
    {
      question: 'Can I move the dumpster once it\'s delivered?',
      answer: 'No, the dumpster should remain in the location where it was delivered. Moving it may damage property or void your rental agreement. Contact us if you need to relocate the dumpster.',
    },
  ];

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="faq-container">
          <h1 className="faq-hero-title">DUMPSTER RENTAL FAQ</h1>
          <p className="faq-hero-subtitle">Find answers to your dumpster rental questions</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="faq-content">
        <div className="faq-container">
          {/* About Section */}
          <div className="faq-about">
            <h2 className="faq-section-title">ABOUT OUR SERVICES</h2>
            <p className="faq-about-text">
              Welcome to the Capital Region's trusted dumpster rental service. Whether you're tackling a home renovation, clearing out your basement, or managing a large construction project, we have the right dumpster solution for you.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="faq-items">
            <h2 className="faq-section-title">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openIndex === index ? 'active' : ''}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <svg
                      className="faq-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="faq-cta">
            <h2>READY TO RENT?</h2>
            <p>Get a free quote and schedule your dumpster delivery today</p>
            <a href="/request" className="faq-cta-button">
              REQUEST A DUMPSTER
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
