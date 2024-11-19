import React from "react";
import { useTranslation } from "react-i18next";
import { imageMladen } from "../components/data/SlideData";

const TourGuide = () => {
  const { t } = useTranslation();

  return (
    <section className="docs-main">
      <div className="container grid-1">
        <div className="card flex">
          <div className="tour-guide-text">
            <h2>{t("tour_guide")}</h2>
            <p>{t("tour_guide1")}</p>
          </div>
        </div>
        <div className="card flex">
          <div className="grid-inner">
            {imageMladen.map((photo, index) => (
              <div className="item" key={photo.url}>
                <img src={photo.url} alt={photo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourGuide;
