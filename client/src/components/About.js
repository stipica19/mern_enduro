import React from "react";
import "../App.css";
import { useTranslation } from "react-i18next";
import { imageMladen } from "./data/SlideData";
import SwiperTours from "./SwiperTours";
import yt from "../images/yt.webp";

const About = React.memo(() => {
  const { t } = useTranslation();

  return (
    <section className="features-sub-head bg-light py-1">
      <div className="container grid">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={yt}
            width={300}
            height={180}
            loading="lazy"
            onClick={() =>
              window.open(
                "https://www.youtube.com/embed/rG03gvcz9iE?si=zUgobwZocCZriIJk",
                "_blank",
                "noreferrer"
              )
            }
          />

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
});

export default About;
