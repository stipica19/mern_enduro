import React, { useEffect, useRef, useState } from "react";

import "./Slider.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(
      () => setCurrent(current === length - 1 ? 0 : current + 1),
      5000
    );
    return () => {
      resetTimeout();
    };
  }, [current, length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slid">
      <section className="slider minislider">
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <>
                  {slide.title && (
                    <h1
                      className="title"
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                      {slide.title}
                    </h1>
                  )}

                  <div className="aafsaf">
                    <h1
                      className="title1"
                      data-aos="fade-right"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-sine"
                    >
                      {slide.title1}
                    </h1>
                  </div>

                  <img
                    src={slide.image}
                    alt="enduro bosnien"
                    className="image"
                  />
                </>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ImageSlider;
