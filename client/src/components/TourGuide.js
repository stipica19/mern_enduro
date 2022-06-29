import React from "react";
import { useTranslation } from "react-i18next";
import { imageMladen } from "./ImageSlider/SlideData";

const TourGuide = () => {
  const { t } = useTranslation();
  return (
    <section className="docs-main">
      <div className="grid-1 container">
        <div className="card flex">
          <div className="tour-guide-text">
            <h2>{t("tour_guide")}</h2>
            <p>{t("tour_guide1")}</p>
          </div>
        </div>
        <div className="card flex">
          <div className="grid-inner">
            {imageMladen.map((item, index) => (
              <div className="item" key={item.link}>
                <div key={item.link} className="">
                  <img src={item.link} alt={item.text} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourGuide;
