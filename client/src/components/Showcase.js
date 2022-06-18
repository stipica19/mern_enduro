import React from "react";
import { SliderData } from "./ImageSlider/SlideData";
import SlidingText from "./SlidingText/SlidingText";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Lazy } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./ImageSlider/Slider.css";

SwiperCore.use([Navigation, Autoplay, Lazy]);
const Showcase = () => {
  const swiperOption = {
    loop: true,
    speed: 250,
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    lazy: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <section className="showcase">
      <SlidingText />
      <Swiper {...swiperOption}>
        {SliderData &&
          SliderData.map((single, key) => {
            return (
              <SwiperSlide key={single.image}>
                <div className="slid">
                  <section className="slider minislider">
                    <img
                      className="image"
                      src={single.image}
                      alt="enduro touren bosnien"
                    />
                    <h1
                      className="title"
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                      {single.title}
                    </h1>
                    {single.title1 && (
                      <div className="title-2221">
                        <h1
                          className="title1"
                          data-aos="fade-right"
                          data-aos-duration="1500"
                          data-aos-easing="ease-in-sine"
                        >
                          {single.title1}
                        </h1>
                      </div>
                    )}
                  </section>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>

      <Swiper
        effect="fade"
        className="slider-active"
        {...swiperOption}
      ></Swiper>

      <div className="poderano"></div>
    </section>
  );
};

export default Showcase;
