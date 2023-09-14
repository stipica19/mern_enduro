import React from "react";
import { useTranslation } from "react-i18next";
import beta250 from "../images/betarr.webp";
import beta300 from "../images/betax.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Motors = () => {
  const { t } = useTranslation();
  return (
    <section className="stats">
      <div className="container">
        <h3 className="stats-heading  text-center">MOTORCYCLES</h3>
        <p>{t("moto_p1")}</p>
        <br />
        <p>{t("moto_p2")}</p>
        <p>{t("moto_p3")}</p>
        <p> {t("moto_p4")} 👇</p>
        <ul>
          <li>
            <i className="fa fa-motorcycle"></i> BETA 300 RR 2023
          </li>
          <li>
            <i className="fa fa-motorcycle"></i> BETA 300 XTRAINER 2023
          </li>
        </ul>
        <div className="grid-2 my-4 grid text-center">
          <div>
            <LazyLoadImage
              src={beta250}
              alt="enduro touren bosnien"
              effect="blur"
            />
            <h3>BETA 300 RR 2023</h3>
          </div>
          <div>
            <LazyLoadImage
              src={beta300}
              alt="enduro touren bosnien"
              effect="blur"
            />
            <h3>BETA 300 XTRAINER 2023</h3>
          </div>
        </div>
        <div>
          <h4 className="text-center">{t("gang_title")}</h4>
          <p>{t("gang")}</p>
        </div>
      </div>
    </section>
  );
};

export default Motors;
