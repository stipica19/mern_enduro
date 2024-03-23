import React, { lazy } from "react";
import Showcase from "../components/Showcase";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";

// Lazy load ostalih komponenti
const About = lazy(() => import("../components/About"));
const Tour = lazy(() => import("../components/Tour"));
const BestEnduro = lazy(() => import("../components/BestEnduro"));
const Hotel = lazy(() => import("../components/Hotel"));
const Motors = lazy(() => import("../components/Motors"));
const Rules = lazy(() => import("../components/Rules"));

const Home = () => {
  return (
    <div className="home">
      <Showcase />
      <FloatingWhatsApp
        position="left"
        size="60px"
        phone="+38763136095"
        autoOpenTimeout={5000}
        zIndex={10000}
      />

      <About />
      <Tour />
      <BestEnduro />
      <Hotel />

      <Motors />
      <Rules />
    </div>
  );
};

export default Home;
