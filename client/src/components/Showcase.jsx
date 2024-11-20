import React, { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const swiperOptions = React.useMemo(
    () => ({
      loop: true,
      speed: 250,
      spaceBetween: 0,
      observer: true,
      observeParents: true,
      preloadImages: false,
      slidesPerView: isMobile ? 1 : 1,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // Pauza na hover
      },
    }),
    [isMobile]
  );

  return (
    <section className="showcase">
      <SlidingText />
      {isMobile ? (
        <div className="single-slide">
          <LazyLoadImage
            className="image"
            src={SliderData[0].image}
            alt="enduro touren bosnien"
          />
        </div>
      ) : (
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
      )}

      <div className="poderano"></div>
    </section>
  );
};

export default Showcase;
