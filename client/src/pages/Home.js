import React, { lazy, Suspense } from "react";
import Showcase from "../components/Showcase";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import Loader from "../components/Loader";

// Lazy load ostalih komponenti
const About = lazy(() => import("../components/About"));
const Tour = lazy(() => import("../components/Tour"));
const BestEnduro = lazy(() => import("../components/BestEnduro"));
const Hotel = lazy(() => import("../components/Hotel"));
const YouTube = lazy(() => import("../components/YouTube"));
const Motors = lazy(() => import("../components/Motors"));
const Rules = lazy(() => import("../components/Rules"));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
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
        <YouTube />
        <Motors />
        <Rules />
      </div>
    </Suspense>
  );
};

export default Home;
