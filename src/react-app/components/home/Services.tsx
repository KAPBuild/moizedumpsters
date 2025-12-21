import { Link } from 'react-router-dom';

export const Services = () => {
  const services = [
    {
      title: 'Residential Dumpsters',
      description: 'Perfect for home renovations, cleanouts, and landscaping projects. Affordable and convenient waste management for homeowners.',
      image: '/images/residential-dumpsters.jpg',
    },
    {
      title: 'Construction Dumpsters',
      description: 'Heavy-duty dumpster solutions for construction sites and building projects of any scale. Reliable debris removal.',
      image: '/images/construction-dumpsters-pickup.jpg',
    },
    {
      title: 'Commercial Dumpsters',
      description: 'Efficient waste management for businesses, offices, and retail locations. Tailored to your business needs.',
      image: '/images/commercial-waste-disposal.jpg',
    },
  ];

  return (
    <section className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">Our Services</h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Comprehensive dumpster rental solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-block font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
