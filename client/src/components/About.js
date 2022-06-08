import React from "react";
import "../App.css";
import mladen from "../images/001-9.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="features-sub-head bg-light py-3">
      <div className="container grid">
        <div>
          <h1 className="md">{t("about_title")}</h1>

          <p style={{ display: "inline" }}>{t("about_p1")} &#9995;</p>
          <p>{t("about_p2")}</p>
          <p>{t("about_p3")}</p>
          <p>{t("about_p4")}</p>
        </div>

        <img
          data-aos="fade-right"
          src={mladen}
          alt="enduro drift bosnien"
          className="about_image"
        />
      </div>
    </section>
  );
};

export default About;
