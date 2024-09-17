import React, { lazy, Suspense, useEffect, useState } from "react";
import Showcase from "../components/Showcase";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import Preloader from "../components/Preloader";
// Lazy učitavanje ostalih komponenti
const About = lazy(() => import("../components/About"));
const Tour = lazy(() => import("../components/Tour"));
const BestEnduro = lazy(() => import("../components/BestEnduro"));
const Hotel = lazy(() => import("../components/Hotel"));
const Motors = lazy(() => import("../components/Motors"));
const Rules = lazy(() => import("../components/Rules"));

const Home = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 5000); // Odgodi učitavanje za 5 sekundi
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="home">
      <Showcase />
      {showWhatsApp && (
        <FloatingWhatsApp
          position="left"
          size="60px"
          phone="+38763136095"
          autoOpenTimeout={5000}
          zIndex={10000}
        />
      )}

      <Suspense fallback={<Preloader />}>
        <About />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <Tour />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <BestEnduro />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <Hotel />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <Motors />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <Rules />
      </Suspense>
    </div>
  );
};

export default Home;
