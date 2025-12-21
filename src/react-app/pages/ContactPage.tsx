import { CONTACT_INFO } from '../constants/contact';
import { ContactForm } from '../components/contact/ContactForm';

export const ContactPage = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">Get In Touch</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">Phone</h3>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-2xl font-bold text-accent hover:opacity-80 transition-opacity"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">Email</h3>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-lg text-primary hover:opacity-80 transition-opacity"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">Address</h3>
                  <p className="text-neutral-600">{CONTACT_INFO.address}</p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">Business Hours</h3>
                  <div className="space-y-1 text-neutral-600">
                    <p>{CONTACT_INFO.hours.weekdays}</p>
                    <p>{CONTACT_INFO.hours.saturday}</p>
                    <p>{CONTACT_INFO.hours.sunday}</p>
                  </div>
                </div>

                {/* Service Area */}
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">Service Area</h3>
                  <p className="text-neutral-600">{CONTACT_INFO.serviceArea}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
