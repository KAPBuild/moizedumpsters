import { useEffect } from 'react';

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-container">
          <h1>About Moize Dumpsters</h1>
          <p>Reliable waste management solutions for residential and commercial needs</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="about-section">
            <h2>Who We Are</h2>
            <p>
              Moize Dumpsters is a trusted provider of dumpster rental services serving residential and commercial customers.
              With years of experience in the waste management industry, we pride ourselves on delivering reliable, affordable,
              and professional services.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              To provide convenient, affordable, and environmentally responsible waste management solutions that help our customers
              manage their projects efficiently.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose Us</h2>
            <ul className="about-list">
              <li>Affordable pricing with no hidden fees</li>
              <li>Fast and reliable delivery</li>
              <li>Professional customer service</li>
              <li>Flexible rental periods</li>
              <li>Wide range of dumpster sizes</li>
              <li>Environmentally responsible disposal</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Get In Touch</h2>
            <p>
              Have questions? We're here to help. Contact us today for a free quote or more information about our services.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .about-page {
          background-color: #f9fafb;
        }

        .about-hero {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 80px 60px;
          text-align: center;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-hero h1 {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 16px;
          font-family: 'Poppins', 'Montserrat', sans-serif;
        }

        .about-hero p {
          font-size: 18px;
          font-weight: 500;
          font-family: 'Poppins', sans-serif;
        }

        .about-content {
          padding: 80px 60px;
        }

        .about-section {
          margin-bottom: 60px;
        }

        .about-section h2 {
          font-size: 32px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 16px;
          font-family: 'Poppins', 'Montserrat', sans-serif;
        }

        .about-section p {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.8;
          font-family: 'Poppins', sans-serif;
        }

        .about-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .about-list li {
          font-size: 16px;
          color: #4b5563;
          padding: 12px 0;
          padding-left: 30px;
          position: relative;
          font-family: 'Poppins', sans-serif;
        }

        .about-list li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .about-hero {
            padding: 40px 20px;
          }

          .about-hero h1 {
            font-size: 32px;
          }

          .about-hero p {
            font-size: 16px;
          }

          .about-content {
            padding: 40px 20px;
          }

          .about-section h2 {
            font-size: 24px;
          }

          .about-section p {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};
