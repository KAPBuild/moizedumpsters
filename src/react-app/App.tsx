import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePageStyleB } from './pages/HomePageStyleB';
import { AboutPage } from './pages/AboutPage';
import { RequestPage } from './pages/RequestPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { ResidentialPage } from './pages/ResidentialPage';
import { SizesPricingPage } from './pages/SizesPricingPage';
import { BusinessPage } from './pages/BusinessPage';
import { ConstructionPage } from './pages/ConstructionPage';
import { PropertyManagementPage } from './pages/PropertyManagementPage';
import { CommercialPage } from './pages/CommercialPage';
import { SmallBusinessPage } from './pages/SmallBusinessPage';
import { ServicesPage } from './pages/ServicesPage';
import { SameDayPage } from './pages/SameDayPage';
import { RecyclingServicePage } from './pages/RecyclingServicePage';
import { AcceptedMaterialsPage } from './pages/AcceptedMaterialsPage';
import { LocationsPage } from './pages/LocationsPage';
import { SustainabilityPage } from './pages/SustainabilityPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageStyleB />} />

          {/* Residential */}
          <Route path="residential" element={<ResidentialPage />} />
          <Route path="residential/sizes-pricing" element={<SizesPricingPage />} />

          {/* Business */}
          <Route path="business" element={<BusinessPage />} />
          <Route path="business/construction" element={<ConstructionPage />} />
          <Route path="business/property-management" element={<PropertyManagementPage />} />
          <Route path="business/commercial" element={<CommercialPage />} />
          <Route path="business/small-business" element={<SmallBusinessPage />} />

          {/* Services */}
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/same-day" element={<SameDayPage />} />
          <Route path="services/recycling" element={<RecyclingServicePage />} />
          <Route path="services/materials" element={<AcceptedMaterialsPage />} />

          {/* Locations */}
          <Route path="locations" element={<LocationsPage />} />

          {/* Sustainability */}
          <Route path="sustainability" element={<SustainabilityPage />} />
          <Route path="sustainability/recycling" element={<RecyclingServicePage />} />

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
