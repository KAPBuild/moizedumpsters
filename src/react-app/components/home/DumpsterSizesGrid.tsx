import { Link } from 'react-router-dom';
import './DumpsterSizesGrid.css';

export const DumpsterSizesGrid = () => {
  const dumpsters = [
    {
      size: '10 Yard',
      dimensions: "3.5'H x 8'W x 12'L",
      description: 'Our 10-yard dumpsters are perfect for small projects and can fit in tight spaces.',
      image: '/images/ROll-OFF.png',
    },
    {
      size: '15 Yard',
      dimensions: "6'H x 8'W x 16'L",
      description: 'Our 15-yard dumpsters are perfect for small to medium-sized renovation projects and...',
      image: '/images/ROll-OFF.png',
    },
    {
      size: '20 Yard',
      dimensions: "6'H x 8'W x 22'L",
      description: 'Our 20-yard dumpsters are perfect for medium-sized projects, offering ample space at...',
      image: '/images/ROll-OFF.png',
    },
    {
      size: '30 Yard',
      dimensions: "6'H x 8'W x 22'L",
      description: 'Our 30-yard dumpsters are perfect for larger projects like renovations, home...',
      image: '/images/ROll-OFF.png',
    },
    {
      size: '40 Yard',
      dimensions: "8'H x 8'W x 22'L",
      description: 'Our 40 yard dumpsters are large and perfect for big construction projects or...',
      image: '/images/ROll-OFF.png',
    },
  ];

  return (
    <section className="dumpster-sizes-section">
      <div className="sizes-container">
        {/* Header */}
        <div className="sizes-header">
          <h2 className="sizes-title">DUMPSTER SIZES</h2>
          <p className="sizes-description">
            We offer a wide selection of container sizes including 10, 15, 20, 30, and 40-yard options. Whether it's a small cleanup or a major renovation, we've got the right dumpster for your residential or commercial project.
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
