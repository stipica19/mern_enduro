import React from "react";
import { useTranslation } from "react-i18next";
import mapa from "../images/nature/mapa.webp";
import vranica from "../images/nature/vranica.webp";
import prokosko from "../images/nature/prokosko.webp";
import ramsko from "../images/nature/ramsko.webp";
import radusa from "../images/nature/radusa.webp";
import tour from "../images/nature/tour.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BestEnduro = () => {
  const { t } = useTranslation();
  return (
    <section className="stats best-end">
      <div className="container">
        <h3 className="best-enduro text-center">{t("best_title")}</h3>
        <p>{t("best_p1")}</p>
        <p>{t("best_p2")}</p>
        <p>{t("best_p3")}</p>
        <p>{t("best_p4")}</p>
        <div className="best-enduro-location my-4">
          <h4> &#128205; {t("best_lokacija")}</h4>
          <p>{t("best_p5")}</p>
        </div>

        <div className="grid-4 my-4 grid text-center">
          <div>
            <LazyLoadImage src={prokosko} alt="prokoško jezero" effect="blur" />
            <h4>Prokoško {t("jezero")}</h4>
            <p>{t("best_p6")}</p>
          </div>

          <div>
            <LazyLoadImage src={vranica} alt="enduro bosnien" effect="blur" />
            <h4>Vranica</h4>
            <p>{t("best_p7")}</p>
          </div>
          <div>
            <LazyLoadImage src={ramsko} alt="enduro bosnien" effect="blur" />
            <h4>Rama {t("jezero")}</h4>
          </div>
          <div>
            <LazyLoadImage src={radusa} alt="enduro bosnien" effect="blur" />
            <h4>Raduša</h4>
          </div>

          <div>
            <LazyLoadImage src={mapa} alt="enduro bosnien" effect="blur" />
          </div>
          <div>
            <LazyLoadImage src={tour} alt="enduro bosnien" effect="blur" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestEnduro;
