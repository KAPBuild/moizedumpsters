import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePageStyleB } from './pages/HomePageStyleB';
import { AboutPage } from './pages/AboutPage';
import { RequestPage } from './pages/RequestPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { ResidentialPage } from './pages/ResidentialPage';
import { BusinessPage } from './pages/BusinessPage';
import { LocationsPage } from './pages/LocationsPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { ServicesPage } from './pages/ServicesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageStyleB />} />

          {/* Residential */}
          <Route path="residential" element={<ResidentialPage />} />
          <Route path="residential/sizes-pricing" element={<ResidentialPage />} />

          {/* Business */}
          <Route path="business" element={<BusinessPage />} />
          <Route path="business/construction" element={<BusinessPage />} />
          <Route path="business/property-management" element={<BusinessPage />} />
          <Route path="business/commercial" element={<BusinessPage />} />
          <Route path="business/small-business" element={<BusinessPage />} />

          {/* Services */}
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/same-day" element={<ServicesPage />} />
          <Route path="services/recycling" element={<ServicesPage />} />
          <Route path="services/materials" element={<ServicesPage />} />

          {/* Locations */}
          <Route path="locations" element={<LocationsPage />} />

          {/* Sustainability */}
          <Route path="sustainability" element={<SustainabilityPage />} />
          <Route path="sustainability/recycling" element={<SustainabilityPage />} />

          {/* Existing */}
          <Route path="about-us" element={<AboutPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="request" element={<RequestPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
