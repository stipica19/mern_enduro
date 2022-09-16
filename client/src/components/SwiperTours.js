import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCube, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import './ImageSlider/Slider.css';
SwiperCore.use([EffectCube, Autoplay]);
const SwiperTours = ({ item }) => {
  console.log(item);
  const swiperOption = {
    loop: true,
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.1,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };
  return (
    <Swiper className="mySwiper" {...swiperOption}>
      {item &&
        item.map((i) => (
          <SwiperSlide key={i.id}>
            <img src={i.url} alt={i.alt} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperTours;
