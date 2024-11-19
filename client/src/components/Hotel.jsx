import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { hotel } from "./data/SlideData";
import { useTranslation } from "react-i18next";

const Hotel = () => {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  const { t } = useTranslation();

  return (
    <section className="hotel stats">
      <div className="container">
        <h3 className=" text-center">{t("hotel_title")}</h3>
        <p></p>
        <Swiper
          slidesPerView={windowDimenion.winWidth < 500 ? 2 : 3}
          spaceBetween={5}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {hotel &&
            hotel.map((hotel, key) => {
              return (
                <SwiperSlide key={key}>
                  <LazyLoadImage
                    src={hotel.url}
                    alt={hotel.alt}
                    effect="blur"
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default Hotel;
