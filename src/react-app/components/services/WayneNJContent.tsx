import './WayneNJContent.css';

export const WayneNJContent = () => {
  const checkmarkItems = [
    'Construction Sites',
    'Renovation Projects',
    'Disaster or Storm Cleanup',
    'Roofing Projects',
    'Community Cleanups',
    'Landscaping and Yard Work',
    'Residential Cleanups',
    'Commercial Business Waste',
  ];

  return (
    <>
      {/* Section 1: Capital Region Intro */}
      <section className="wayne-content-section">
        <div className="wayne-content-container">
          <h2 className="wayne-section-title">DUMPSTER RENTAL IN THE CAPITAL REGION</h2>
          <p className="wayne-section-description">
            Moize Dumpsters provides affordable dumpster rentals throughout the Capital Region for residential and commercial projects. With a range of dumpster sizes to choose from, we're here to make your next disposal experience as smooth as possible. Whether you're tackling a major cleanup or home remodel, having the right dumpster at your site is important to keep your budget and project on track. We focus on providing exceptional customer service with on-time delivery and quick pickup services. Our goal is to make waste management in the Capital Region simple, and we'll work with you from beginning to end to ensure all aspects of waste disposal go according to plan for your project.
          </p>
        </div>
      </section>

      {/* Section 2: Budget-Friendly */}
      <section className="wayne-content-section">
        <div className="wayne-content-container">
          <h2 className="wayne-section-title">BUDGET-FRIENDLY DUMPSTERS FOR YOUR CONSTRUCTION SITE</h2>
          <p className="wayne-section-description">
            From construction sites and major home remodels to spring cleanups and landscaping projects, our customers rely on our dumpster rental services for a variety of reasons. For homeowners tackling DIY projects, dumpster rentals make it simple to manage waste and debris, and building contractors rely on our affordable dumpster rentals to keep their job sites organized and safe. We cater to Capital Region landscapers and property managers who need help managing waste removal. No matter what your project is, having dependable dumpster rental services helps you stay on schedule, saves you money, and keeps your site clean.
          </p>

          {/* Checkmark List */}
          <div className="checkmark-list">
            {checkmarkItems.map((item, index) => (
              <div key={index} className="checkmark-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="checkmark-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Call for Quote */}
      <section className="wayne-content-section">
        <div className="wayne-content-container">
          <h2 className="wayne-section-title">CALL 862-366-1414 FOR A FREE QUOTE</h2>
          <p className="wayne-section-description">
            With our dedication to timely delivery, prompt removal, and outstanding customer service, we're here to help you manage waste disposal problems as efficiently as possible. From beginning to end we're focused on getting you the perfect dumpster rental for your project. You can avoid hidden fees and rent a dumpster in the Capital Region that meets your project and budget needs with our transparent pricing schedule. Our team is here to help guide you through the process and ensure that your rental goes as smoothly as possible. Let Moize Dumpsters help you make cleanup simpler than ever—reach out today and get started on your dumpster rental now.
          </p>
        </div>
      </section>
    </>
  );
};
