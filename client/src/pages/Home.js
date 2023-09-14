import React from "react";
import Showcase from "../components/Showcase";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";

import About from "../components/About";
import BestEnduro from "../components/BestEnduro";

import Motors from "../components/Motors";
import Tour from "../components/Tour";
import Rules from "../components/Rules";
import Hotel from "../components/Hotel";
import YouTube from "../components/YouTube";

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
      <YouTube />
      <Motors />
      <Rules />
    </div>
  );
};

export default Home;
