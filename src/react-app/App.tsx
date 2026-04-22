import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { RequestPage } from './pages/RequestPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { HomePageStyleA } from './pages/HomePageStyleA';
import { HomePageStyleB } from './pages/HomePageStyleB';
import { HomePageStyleC } from './pages/HomePageStyleC';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dumpsters" element={<HomePage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="request" element={<RequestPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="style-a" element={<HomePageStyleA />} />
          <Route path="style-b" element={<HomePageStyleB />} />
          <Route path="style-c" element={<HomePageStyleC />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
