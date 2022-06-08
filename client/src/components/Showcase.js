import React from "react";
import { SliderData } from "./ImageSlider/SlideData";
import SlidingText from "./SlidingText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./ImageSlider/Slider.css";
function imgUrl(index) {
  return SliderData[index].image;
}

function createSlide(index) {
  return (
    <SwiperSlide>
      <div className="slid">
        <section className="slider minislider">
          <img
            className="image"
            src={imgUrl(index)}
            alt="enduro touren bosnien"
          />
          <h1 className="title" data-aos="fade-up" data-aos-duration="500">
            {SliderData[index].title}
          </h1>
          {SliderData[index].title1 && (
            <div className="title-2221">
              <h1
                className="title1"
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-easing="ease-in-sine"
              >
                {SliderData[index].title1}
              </h1>
            </div>
          )}
        </section>
      </div>
    </SwiperSlide>
  );
}

const Showcase = () => {
  return (
    <section className="showcase">
      <SlidingText />
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        {createSlide(0)}
        {createSlide(1)}
        {createSlide(2)}
        {createSlide(3)}
      </Swiper>

      <div className="poderano"></div>
    </section>
  );
};

export default Showcase;
