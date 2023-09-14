import React, { Suspense, lazy } from "react";
import "../App.css";
import { useTranslation } from "react-i18next";
import { imageMladen } from "./data/SlideData";
import SwiperTours from "./SwiperTours";
import Loader from "./Loader";
const ReactPlayer = lazy(() => import("react-player"));

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="features-sub-head bg-light py-1">
      <div className="container grid">
        <div>
          <Suspense fallback={<Loader />}>
            <div className="yt-video md-1 flex">
              <ReactPlayer
                className="react-player"
                key="ENDURO DRIFT BOSNIEN"
                url="https://www.youtube.com/embed/rG03gvcz9iE&t=48s&ab_channel=Fumas"
                controls={true}
              />
            </div>
          </Suspense>

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
