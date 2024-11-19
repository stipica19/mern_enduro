import React, { useEffect, lazy, Suspense, useState, useMemo } from "react";
import debounce from "lodash.debounce";
import "./App.css";
import "./utilities.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar1 from "./components/navbar/Navbar1";
import Preloader from "./components/Preloader";

const CookieConset = lazy(() =>
  import("./components/CookieConset/CookieConset")
);
const TourGuide = lazy(() => import("./pages/TourGuide"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Home = lazy(() => import("./pages/Home"));
const Apply = lazy(() => import("./pages/Apply"));
const VideoGallery = lazy(() => import("./components/VideoGallery"));
const GuestBook = lazy(() => import("./pages/GuestBook"));
const Contact = lazy(() => import("./pages/Contact"));
const SocialMedia = lazy(() => import("./components/SocialMedia"));
const Termine = lazy(() => import("./pages/Termine"));

const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminApply = lazy(() => import("./components/AdminApply"));
const Login = lazy(() => import("./pages/Login"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  console.log("App component is rendering");
  useEffect(() => {
    const handleInit = debounce(() => {
      AOS.init();
    }, 100); // Dodaj lag
    handleInit();

    return () => {
      handleInit.cancel();
    };
  }, []);

  const languages = useMemo(
    () => [
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
    ],
    []
  );

  const currentLanguageCode = cookies.get("i18next") || "en";
  const { t, i18n } = useTranslation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("first");
    const loadResources = async () => {
      const resources = [
        import("./pages/Home"),
        import("./pages/Gallery"),
        import("./pages/Apply"),
        import("./pages/TourGuide"),
      ];
      await Promise.all(resources);
      setLoading(false);
    };

    loadResources();
  }, []);

  useEffect(() => {
    const language = languages.find((l) => l.code === currentLanguageCode);
    document.body.dir = language?.dir || "ltr";
    document.title = t("app_title");
    if (i18n) {
      i18n.changeLanguage(currentLanguageCode);
    }
  }, [currentLanguageCode]);

  return (
    <div className="">
      <BrowserRouter>
        <Suspense fallback={<Preloader />}>
          {loading ? (
            <Preloader />
          ) : (
            <>
              <Navbar1 />

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
            </>
          )}
        </Suspense>
        <Suspense fallback={<div>Učitavanje...</div>}>
          <CookieConset />
          <SocialMedia />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
