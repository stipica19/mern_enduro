import React from "react";
import { SliderData } from "./data/SlideData";
import SlidingText from "./SlidingText/SlidingText";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Lazy } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/autoplay";
import "./ImageSlider/Slider.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

SwiperCore.use([Navigation, Autoplay, Lazy]);
const Showcase = () => {
  const swiperOptions = React.useMemo(
    () => ({
      loop: true,
      speed: 250,
      spaceBetween: 0,
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      lazy: {
        loadPrevNext: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    }),
    []
  );

  return (
    <section className="showcase">
      <SlidingText />
      <Swiper {...swiperOptions}>
        {SliderData?.map((single) => (
          <SwiperSlide key={single.image}>
            <div className="slid">
              <section className="slider minislider">
                <LazyLoadImage
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
              </section>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="poderano"></div>
    </section>
  );
};

export default Showcase;
