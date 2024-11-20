import React, { lazy, Suspense, useEffect, useState } from "react";
import Showcase from "../components/Showcase";
import Preloader from "../components/Preloader";
// Lazy učitavanje ostalih komponenti
import About from "../components/About";
import Tour from "../components/Tour";
const BestEnduro = lazy(() => import("../components/BestEnduro"));
const Hotel = lazy(() => import("../components/Hotel"));
const Motors = lazy(() => import("../components/Motors"));
const Rules = lazy(() => import("../components/Rules"));
import { FloatingWhatsApp } from "react-floating-whatsapp";

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
          style={{ position: "left" }}
          size="60px"
          phoneNumber="+38763136095"
          accountName="Enduro Drift Bosnien"
          avatar="../public/log.png"
          zIndex={10000}
        />
      )}
      <About />
      <Tour />
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
