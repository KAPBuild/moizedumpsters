import './ServicesSection.css';

export const ServicesSection = () => {
  const services = [
    {
      title: 'Residential Dumpsters',
      image: '/images/residential-dumpsters.jpg',
      description:
        'Rent affordable residential dumpsters for your home renovation, cleanup, and landscaping projects. Perfect for homeowners who need reliable waste management solutions.',
    },
    {
      title: 'Construction Dumpsters',
      image: '/images/construction-dumpsters-pickup.jpg',
      description:
        'We offer a variety of construction dumpsters to fit your specific project needs. From small renovations to large-scale construction sites, we have you covered.',
    },
    {
      title: 'Commercial Dumpsters',
      image: '/images/commercial-waste-disposal.jpg',
      description:
        'Our commercial dumpsters are perfect for construction sites, businesses, and any commercial waste disposal needs. Reliable service for all your business requirements.',
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <h1 className="services-title">OUR SERVICES</h1>
          <p className="services-subtitle">
            Whether you're cleaning out your basement, renovating your home, or overseeing a construction project, our dumpster rental services ensure quick and easy waste management. With our dependable drop-off and pick-up options, we are the top choice for residential and commercial dumpster rentals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {/* Image with Orange Accent */}
              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <div className="image-accent"></div>
              </div>

              {/* Card Content */}
              <div className="service-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
