import { Link } from 'react-router-dom';
import './DumpsterSizesGrid.css';

export const DumpsterSizesGrid = () => {
  const dumpsters = [
    {
      size: '15 Yard',
      dimensions: "6'H x 8'W x 16'L",
      description: 'Our 15-yard dumpsters are perfect for small to medium-sized renovation projects and cleanouts.',
      image: '/images/dumpsters/15yd-front.jpg',
    },
    {
      size: '20 Yard',
      dimensions: "6'H x 8'W x 22'L",
      description: 'Our 20-yard dumpsters are perfect for medium-sized projects, offering ample space at an affordable price.',
      image: '/images/dumpsters/20yd-front.jpg',
    },
    {
      size: '30 Yard',
      dimensions: "6'H x 8'W x 22'L",
      description: 'Our 30-yard dumpsters are perfect for larger projects like renovations, home additions, and major cleanouts.',
      image: '/images/dumpsters/30yd-front.jpg',
    },
  ];

  return (
    <section className="dumpster-sizes-section">
      <div className="sizes-container">
        {/* Header */}
        <div className="sizes-header">
          <h2 className="sizes-title">DUMPSTER SIZES</h2>
          <p className="sizes-description">
            We offer 15, 20, and 30-yard containers to cover any job — from small residential cleanouts to major renovation and construction projects. Every dumpster you see here is from our fleet.
          </p>
        </div>

        {/* Grid */}
        <div className="sizes-grid">
          {dumpsters.map((dumpster, index) => (
            <div key={index} className="size-card">
              {/* Image Area with Badge */}
              <div className="card-image-area">
                <img
                  src={dumpster.image}
                  alt={dumpster.size}
                  className="dumpster-image"
                />
                <div className="dimension-badge">
                  {dumpster.dimensions}
                </div>
              </div>

              {/* Info Area */}
              <div className="card-info">
                <h3 className="card-title">{dumpster.size} DUMPSTERS</h3>
                <p className="card-description">{dumpster.description}</p>
                <Link to="/request" className="card-button">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
