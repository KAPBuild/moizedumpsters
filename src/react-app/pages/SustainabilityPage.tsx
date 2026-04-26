import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const SustainabilityPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="stub-page">
      <section className="stub-hero">
        <div className="stub-container">
          <h1>Sustainability</h1>
          <p>Committed to responsible waste management and a cleaner Capital District</p>
        </div>
      </section>

      <section className="stub-content">
        <div className="stub-container">
          <div className="stub-grid">
            <div className="stub-card">
              <div className="stub-icon">♻️</div>
              <h3>Recycling Programs</h3>
              <p>We sort and divert recyclable materials from landfills whenever possible, reducing environmental impact.</p>
            </div>
            <div className="stub-card">
              <div className="stub-icon">🌍</div>
              <h3>Eco-Friendly Disposal</h3>
              <p>Responsible disposal practices that comply with all state and local environmental regulations.</p>
            </div>
            <div className="stub-card">
              <div className="stub-icon">🌱</div>
              <h3>Our Commitment</h3>
              <p>We're dedicated to operating in a way that protects our communities and the environment for future generations.</p>
            </div>
          </div>

          <div className="stub-cta">
            <h2>Have questions about our disposal process?</h2>
            <p>We're happy to walk you through how we handle your waste responsibly.</p>
            <Link to="/contact" className="stub-button">Get in Touch</Link>
          </div>
        </div>
      </section>

      <style>{`
        .stub-page { background-color: #f9fafb; }

        .stub-hero {
          background: linear-gradient(135deg, #3d1a8a 0%, #1a0a3d 100%);
          color: white;
          padding: 80px 60px;
          text-align: center;
          border-bottom: 4px solid #39c318;
        }

        .stub-container { max-width: 1100px; margin: 0 auto; }

        .stub-hero h1 {
          font-family: 'Poppins', sans-serif;
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .stub-hero p {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 400;
          opacity: 0.9;
        }

        .stub-content { padding: 80px 60px; }

        .stub-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 80px;
        }

        .stub-card {
          background: white;
          border-radius: 12px;
          padding: 40px 32px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          border-top: 4px solid #39c318;
          text-align: center;
        }

        .stub-icon { font-size: 48px; margin-bottom: 16px; }

        .stub-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .stub-card p {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          color: #4b5563;
          line-height: 1.7;
        }

        .stub-cta {
          background: #3d1a8a;
          color: white;
          border-radius: 16px;
          padding: 60px;
          text-align: center;
          border-left: 6px solid #39c318;
        }

        .stub-cta h2 {
          font-family: 'Poppins', sans-serif;
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .stub-cta p {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          opacity: 0.85;
          margin-bottom: 32px;
        }

        .stub-button {
          display: inline-block;
          background-color: #39c318;
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

        .stub-button:hover {
          background-color: #2da814;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .stub-hero { padding: 50px 20px; }
          .stub-hero h1 { font-size: 32px; }
          .stub-content { padding: 40px 20px; }
          .stub-grid { grid-template-columns: 1fr; gap: 20px; }
          .stub-cta { padding: 40px 24px; }
          .stub-cta h2 { font-size: 26px; }
        }
      `}</style>
    </div>
  );
};
