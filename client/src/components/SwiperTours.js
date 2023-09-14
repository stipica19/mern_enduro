import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Autoplay } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "./ImageSlider/Slider.css";
SwiperCore.use([EffectCube, Autoplay]);
const SwiperTours = ({ item, effect }) => {
  console.log(item);
  const swiperOption = {
    loop: true,
    effect: "cube",
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
            <LazyLoadImage src={i.url} alt={i.alt} effect={effect} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperTours;
