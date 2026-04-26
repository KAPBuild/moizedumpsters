import { useEffect } from 'react';
import { AreasWeServe } from '../components/layout/AreasWeServe';
import { Link } from 'react-router-dom';

export const LocationsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="locations-page">
      <section className="loc-hero">
        <div className="loc-container">
          <h1>Locations We Serve</h1>
          <p>Proudly serving Albany, Troy, Schenectady, Saratoga Springs, and communities throughout the Capital District</p>
        </div>
      </section>

      <AreasWeServe />

      <section className="loc-cta">
        <div className="loc-container">
          <h2>Don't see your town?</h2>
          <p>Give us a call — we may still be able to help with delivery to your area.</p>
          <Link to="/contact" className="loc-button">Contact Us</Link>
        </div>
      </section>

      <style>{`
        .locations-page { background-color: #f9fafb; }

        .loc-hero {
          background: white;
          border-top: 6px solid #39c318;
          border-bottom: 1px solid #e5e7eb;
          padding: 80px 60px;
          text-align: center;
        }

        .loc-container { max-width: 1100px; margin: 0 auto; }

        .loc-hero h1 {
          font-family: 'Poppins', sans-serif;
          font-size: 48px;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .loc-hero p {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          color: #4b5563;
        }

        .loc-cta {
          padding: 80px 60px;
          text-align: center;
          background: white;
        }

        .loc-cta h2 {
          font-family: 'Poppins', sans-serif;
          font-size: 36px;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .loc-cta p {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          color: #4b5563;
          margin-bottom: 32px;
        }

        .loc-button {
          display: inline-block;
          background-color: #3d1a8a;
          color: white;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          padding: 16px 40px;
          border-radius: 30px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: background-color 0.3s, transform 0.2s;
        }

        .loc-button:hover {
          background-color: #1a0a3d;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .loc-hero { padding: 50px 20px; }
          .loc-hero h1 { font-size: 32px; }
          .loc-cta { padding: 50px 20px; }
          .loc-cta h2 { font-size: 26px; }
        }
      `}</style>
    </div>
  );
};
