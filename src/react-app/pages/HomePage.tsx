import { Hero } from '../components/home/Hero';
import { ProcessSection } from '../components/home/ProcessSection';
import { ServicesSection } from '../components/services/ServicesSection';
import { DumpsterSizesGrid } from '../components/home/DumpsterSizesGrid';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ProcessSection />
      <ServicesSection />
      <DumpsterSizesGrid />
    </>
  );
};
