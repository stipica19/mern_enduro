import React from "react";
import "../App.css";
import { useTranslation } from "react-i18next";
import { imageMladen } from "./data/SlideData";
import SwiperTours from "./SwiperTours";
import yt from "../images/yt.webp";

const About = React.memo(() => {
  const { t } = useTranslation();

  const aboutTexts = React.useMemo(
    () => ({
      title: t("about_title"),
      p1: t("about_p1"),
      p2: t("about_p2"),
      p3: t("about_p3"),
      p4: t("about_p4"),
    }),
    [t]
  );

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
            alt="YouTube enduro balkan"
            onClick={() =>
              window.open(
                "https://www.youtube.com/embed/rG03gvcz9iE?si=zUgobwZocCZriIJk",
                "_blank",
                "noreferrer"
              )
            }
          />

          <h1 className="md">{aboutTexts.title}</h1>
          <p style={{ display: "inline" }}>{aboutTexts.p1} &#9995;</p>
          <p>{aboutTexts.p2}</p>
          <p>{aboutTexts.p3}</p>
          <p>{aboutTexts.p4}</p>
        </div>
        <SwiperTours item={imageMladen.slice(0, 2)} />
      </div>
    </section>
  );
});

export default About;
