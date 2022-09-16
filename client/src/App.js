import './App.css';
import Navbar from './components/Navbar';
import './utilities.css';
import './App.css';
import TourGuide from './pages/TourGuide';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Apply from './pages/Apply';
import VideoGallery from './components/VideoGallery';
import GuestBook from './pages/GuestBook';
import Contact from './pages/Contact';
import SocialMedia from './components/SocialMedia';
import Termine from './pages/Termine';
import Preloader from './components/Preloader';
import AdminDashboard from './pages/AdminDashboard';
import AdminApply from './components/AdminApply';
import Login from './pages/Login';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/customHooks/scrollToTop';

const languages = [
  {
    code: 'de',
    name: 'DEUTCH',
    country_code: 'de',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
];

AOS.init();

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 1500);
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find(
    (l) => l.code === currentLanguageCode
  );
  const { t } = useTranslation();
  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr';
    document.title = t('app_title');
  }, [currentLanguage, t]);

  return (
    <div className="">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <BrowserRouter>
            <Navbar />
            <div className="app">
              <ScrollToTop>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route
                    path="/video-gallery"
                    element={<VideoGallery />}
                  />
                  <Route path="/tour-guide" element={<TourGuide />} />
                  <Route path="/guest-book" element={<GuestBook />} />
                  <Route path="/apply" element={<Apply />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/dates-2023" element={<Termine />} />
                  <Route
                    path="/admin-apply/:id"
                    element={<AdminApply />}
                  />
                  <Route path="/login" element={<Login />} />

                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute>
                        <AdminDashboard />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </ScrollToTop>
            </div>
          </BrowserRouter>
          <SocialMedia />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
