import { useEffect } from 'react';
import { QuoteForm } from '../components/request/QuoteForm';

export const RequestPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Fill out the form below and we'll contact you within 24 hours with your personalized quote
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-neutral-100">
        <div className="container mx-auto px-4 lg:px-8">
          <QuoteForm />
        </div>
      </section>
    </>
  );
};
