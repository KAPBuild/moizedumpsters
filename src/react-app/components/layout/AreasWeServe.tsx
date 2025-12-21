import './AreasWeServe.css';

export const AreasWeServe = () => {
  const locations = [
    'Albany',
    'Amsterdam',
    'Ballston Spa',
    'Bethlehem',
    'Burnt Hills',
    'Clifton Park',
    'Cohoes',
    'Colonie',
    'Delmar',
    'Duanesburg',
    'East Greenbush',
    'Fonda',
    'Fulton County',
    'Glens Falls',
    'Glenville',
    'Green Island',
    'Guilderland',
    'Halfmoon',
    'Latham',
    'Malta',
    'Mechanicville',
    'Niskayuna',
    'Rensselaer',
    'Saratoga Springs',
    'Scotia',
    'Schenectady',
    'Slingerlands',
    'Troy',
    'Voorheesville',
    'Watervliet',
  ];

  // Split locations into 3 columns
  const itemsPerColumn = Math.ceil(locations.length / 3);
  const column1 = locations.slice(0, itemsPerColumn);
  const column2 = locations.slice(itemsPerColumn, itemsPerColumn * 2);
  const column3 = locations.slice(itemsPerColumn * 2);

  return (
    <section className="areas-we-serve">
      <div className="areas-container">
        <h2 className="areas-title">AREAS WE SERVE</h2>

        <div className="areas-content">
          {/* Left Side - Location Lists */}
          <div className="areas-locations">
            <div className="location-column">
              {column1.map((location, index) => (
                <div key={index} className="location-item">
                  {location}
                </div>
              ))}
            </div>
            <div className="location-column">
              {column2.map((location, index) => (
                <div key={index} className="location-item">
                  {location}
                </div>
              ))}
            </div>
            <div className="location-column">
              {column3.map((location, index) => (
                <div key={index} className="location-item">
                  {location}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="areas-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47966.41563144476!2d-73.75!3d42.6526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sAlbany%2C%20NY!2s!5e0!3m2!1sen!2sus!4v1700000000"
              width="100%"
              height="400"
              style={{ border: 'none' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <a href="https://maps.google.com/maps?q=Albany,+New+York" target="_blank" rel="noopener noreferrer" className="view-map-link">
              View larger map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
