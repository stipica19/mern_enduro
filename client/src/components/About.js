import React, { lazy } from "react";
import "../App.css";
import { useTranslation } from "react-i18next";
import { imageMladen } from "./data/SlideData";
import SwiperTours from "./SwiperTours";

import LazyLoad from "react-lazyload";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="features-sub-head bg-light py-1">
      <div className="container grid">
        <div>
          <LazyLoad height={200} offset={100} className="yt-video md-1 flex">
            <iframe
              title="YouTube Video"
              width="300"
              height="220"
              src={`https://www.youtube.com/embed/rG03gvcz9iE?si=zUgobwZocCZriIJk`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </LazyLoad>

          <h1 className="md">{t("about_title")}</h1>

          <p style={{ display: "inline" }}>{t("about_p1")} &#9995;</p>
          <p>{t("about_p2")}</p>
          <p>{t("about_p3")}</p>
          <p>{t("about_p4")}</p>
        </div>
        <SwiperTours item={imageMladen.slice(0, 2)} />
      </div>
    </section>
  );
};

export default About;
