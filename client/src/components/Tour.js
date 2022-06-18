import React from "react";
import poderano from "../images/poderano.png";
import image1 from "../images/b1-min.webp";
import image3 from "../images/b3-min.webp";
import image2 from "../images/b2-min.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Tour = () => {
  const { t } = useTranslation();
  return (
    <section className="tours bg-light  py-3">
      <div className="tour-poderano">
        <img src={poderano} alt="enduro drift" />
      </div>
      <div className="tour-title">
        {" "}
        <h2 data-aos="zoom-in" className="md text-center  ">
          {t("toure_title")}
        </h2>
      </div>

      <div className="container grid">
        <div>
          <h1>TOUR 1</h1>
          <p>{t("tour1_p1")}</p>
          <p>{t("tour1_p2")}</p>
          <p>{t("tour1_p3")}</p>
          <p>{t("tour1_p4")}</p>
          <p>{t("tour1_p5")}</p>
          <p>{t("tour1_p6")}</p>
          <p>{t("tour1_p7")}</p>
          <p>{t("tour1_p8")}</p>
          <div className="date-form">
            <Link to="/apply">
              {" "}
              <input
                type="submit"
                value="BOOK NOW"
                className="btn btn-outline"
              />
            </Link>
          </div>
        </div>

        <img
          data-aos="fade-right"
          data-aos-once="false"
          src={image1}
          alt="enduro drift bosnien"
          className="about_image"
        />
      </div>
      <div className="container grid">
        <img
          data-aos="fade-right"
          data-aos-once="false"
          src={image2}
          alt="enduro drift bosnien"
          className="about_image"
        />
        <div>
          <h1>TOUR 2</h1>

          <p>{t("tour2_p1")}</p>
          <p>{t("tour2_p2")}</p>
          <p>{t("tour2_p3")}</p>
          <p>{t("tour2_p4")}</p>
          <p>{t("tour2_p5")}</p>
          <p>{t("tour2_p6")}</p>
          <p>{t("tour2_p7")}</p>
          <p>{t("tour2_p8")}</p>
          <Link to="/apply">
            {" "}
            <input type="submit" value="BOOK NOW" className="btn btn-outline" />
          </Link>
        </div>
      </div>
      <div className="container grid">
        <div>
          <h1>TOUR 3</h1>
          <p>{t("tour3_p1")}</p>
          <p>{t("tour3_p2")}</p>
          <p>{t("tour3_p3")}</p>
          <p>{t("tour3_p4")}</p>
          <p>{t("tour3_p5")}</p>
          <p>{t("tour3_p6")}</p>
          <p>{t("tour3_p7")}</p>
          <p>{t("tour3_p8")}</p>

          <Link to="/apply">
            {" "}
            <input type="submit" value="BOOK NOW" className="btn btn-outline" />
          </Link>
        </div>
        <img
          data-aos="fade-right"
          data-aos-once="false"
          src={image3}
          alt="enduro drift bosnien"
          className="about_image"
        />
      </div>
    </section>
  );
};

export default Tour;
