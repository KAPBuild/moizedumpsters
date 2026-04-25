import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePageStyleB } from './pages/HomePageStyleB';
import { AboutPage } from './pages/AboutPage';
import { RequestPage } from './pages/RequestPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageStyleB />} />
          <Route path="dumpsters" element={<HomePageStyleB />} />
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
