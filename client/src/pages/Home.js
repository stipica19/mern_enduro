import React from 'react';
import About from '../components/About';
import BestEnduro from '../components/BestEnduro';
import Motors from '../components/Motors';
import Showcase from '../components/Showcase';
import Tour from '../components/Tour';
import YouTube from '../components/YouTube';

import { FloatingWhatsApp } from 'react-floating-whatsapp-button';
import 'react-floating-whatsapp-button/dist/index.css';
import Rules from '../components/Rules';
import Hotel from '../components/Hotel';

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
