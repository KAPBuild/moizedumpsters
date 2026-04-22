import { Hero } from '../components/home/Hero';
import { ProcessSection } from '../components/home/ProcessSection';
import { ServicesSection } from '../components/services/ServicesSection';
import { DumpsterSizesGrid } from '../components/home/DumpsterSizesGrid';
import './HomePage.css';

export const HomePage = () => {
  return (
    <>
      <Hero />

      {/* Brand Strip */}
      <div className="brand-strip">
        <div className="brand-strip-inner">
          <img
            src="/images/logo-green-long.png"
            alt="Moize Dumpsters LLC"
            className="brand-strip-logo"
          />
          <div className="brand-strip-divider" />
          <div className="brand-strip-tagline">
            <span className="brand-strip-location">Capital Region, NY</span>
            <span className="brand-strip-sub">Reliable · Affordable · Fast</span>
          </div>
        </div>
      </div>

      <ProcessSection />
      <ServicesSection />
      <DumpsterSizesGrid />
    </>
  );
};
