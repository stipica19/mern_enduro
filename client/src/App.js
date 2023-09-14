import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";

import "./utilities.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/customHooks/scrollToTop";
import Navbar1 from "./components/navbar/Navbar1";

const TourGuide = lazy(() => import("./pages/TourGuide"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Home = lazy(() => import("./pages/Home"));
const Apply = lazy(() => import("./pages/Apply"));
const VideoGallery = lazy(() => import("./components/VideoGallery"));
const GuestBook = lazy(() => import("./pages/GuestBook"));
const Contact = lazy(() => import("./pages/Contact"));
const SocialMedia = lazy(() => import("./components/SocialMedia"));
const Termine = lazy(() => import("./pages/Termine"));
const Preloader = lazy(() => import("./components/Preloader"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminApply = lazy(() => import("./components/AdminApply"));
const Login = lazy(() => import("./pages/Login"));
const Footer = lazy(() => import("./components/Footer"));

const languages = [
  {
    code: "de",
    name: "DEUTCH",
    country_code: "de",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

AOS.init();

function App() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <div className="">
      <BrowserRouter>
        <Navbar1 />
        <div className="app">
          <ScrollToTop>
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/video-gallery" element={<VideoGallery />} />
                <Route path="/tour-guide" element={<TourGuide />} />
                <Route path="/guest-book" element={<GuestBook />} />
                <Route path="/apply" element={<Apply />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dates-2023" element={<Termine />} />
                <Route path="/admin-apply/:id" element={<AdminApply />} />
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
            </Suspense>
          </ScrollToTop>
        </div>
      </BrowserRouter>

      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
