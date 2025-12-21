import { CONTACT_INFO } from '../../constants/contact';
import './ProcessSection.css';

export const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Call Us',
      phone: CONTACT_INFO.phone,
      description: 'Contact our team and describe your dumpster rental needs and project details.',
    },
    {
      number: 2,
      title: 'Get A Free Quote',
      description: 'Receive an instant quote based on dumpster size, rental period, and location.',
    },
    {
      number: 3,
      title: 'Schedule Delivery',
      description: 'Choose your delivery date and time. We deliver and pick up at your convenience.',
    },
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        {/* Left Side - Timeline */}
        <div className="process-left">
          <h2 className="process-heading">RENT A DUMPSTER IN 3 STEPS</h2>

          <div className="timeline">
            {steps.map((step, index) => (
              <div key={index} className="timeline-step">
                {/* Circle */}
                <div className="timeline-circle">
                  {step.number}
                </div>

                {/* Vertical Line (except after last step) */}
                {index < steps.length - 1 && <div className="timeline-line"></div>}

                {/* Content */}
                <div className="timeline-content">
                  {step.number === 1 ? (
                    <h3 className="timeline-title">
                      Call Us:{' '}
                      <a href={`tel:${step.phone}`} className="phone-link">
                        {step.phone}
                      </a>
                    </h3>
                  ) : (
                    <h3 className="timeline-title">{step.title}</h3>
                  )}
                  <p className="timeline-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Images & CTA */}
        <div className="process-right">
          {/* Images */}
          <div className="process-images">
            <img
              src="/images/residential-dumpsters.jpg"
              alt="Residential Dumpster"
              className="process-image"
            />
            <img
              src="/images/construction-dumpsters-pickup.jpg"
              alt="Construction Dumpster"
              className="process-image"
            />
          </div>

          {/* CTA Box */}
          <div className="process-cta">
            <p className="cta-main">Questions? Need a quote?</p>
            <p className="cta-sub">Contact our friendly team!</p>
          </div>
        </div>
      </div>
    </section>
  );
};
