import React from "react";
import { useTranslation } from "react-i18next";
import mapa from "../images/mapa.webp";
import vranica from "../images/vranica.webp";
import prokosko from "../images/prokosko.webp";
import ramsko from "../images/ramsko.webp";
import radusa from "../images/radusa.webp";
import tour from "../images/tour.jpg";

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
            <img src={prokosko} alt="prokoško jezero" />
            <h4>Prokoško {t("jezero")}</h4>
            <p>{t("best_p6")}</p>
          </div>

          <div>
            <img src={vranica} alt="enduro bosnien" />
            <h4>Vranica</h4>
            <p>{t("best_p7")}</p>
          </div>
          <div>
            <img src={ramsko} alt="enduro bosnien" />
            <h4>Rama {t("jezero")}</h4>
          </div>
          <div>
            <img src={radusa} alt="enduro bosnien" />
            <h4>Raduša</h4>
          </div>

          <div>
            <img src={mapa} alt="enduro bosnien" />
          </div>
          <div>
            <img src={tour} alt="enduro bosnien" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestEnduro;
