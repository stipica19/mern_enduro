import React from 'react';
import poderano from '../images/poderano.png';
import SwiperTours from './SwiperTours';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { tours } from './data/SlideData';

const Tour = () => {
  const { t } = useTranslation();

  return (
    <section className="tours bg-light  py-3">
      <div className="tour-poderano">
        <img src={poderano} alt="enduro drift" />
      </div>
      <div className="tour-title">
        <h2 data-aos="zoom-in" className="md text-center  ">
          {t('toure_title')}
        </h2>
      </div>

      <div className="container grid">
        <div>
          <h1>TOUR 1</h1>
          <p>{t('tour1_p1')}</p>
          <p>{t('tour1_p2')}</p>
          <p>{t('tour1_p3')}</p>
          <p>{t('tour1_p4')}</p>
          <p>{t('tour1_p5')}</p>
          <p>&nbsp; &nbsp; {t('tour1_p6')}</p>
          <p>&nbsp; &nbsp; {t('tour1_p7')}</p>
          <p>&nbsp; &nbsp; {t('tour1_p8')}</p>
          <div className="date-form">
            <Link to="/apply">
              <input
                type="submit"
                value="BOOK NOW"
                className="btn btn-outline"
              />
            </Link>
          </div>
        </div>

        <SwiperTours item={tours[0].tour1} />
      </div>
      <div className="container grid">
        <SwiperTours item={tours[1].tour2} />
        <div>
          <h1>TOUR 2</h1>
          <p>{t('tour2_p1')}</p>
          <p>{t('tour2_p2')}</p>
          <p>{t('tour2_p3')}</p>
          <p>{t('tour2_p4')}</p>
          <p>{t('tour2_p5')}</p>
          <p>&nbsp; &nbsp;{t('tour1_p6')}</p>
          <p>&nbsp; &nbsp; {t('tour1_p7')}</p>
          <p>&nbsp; &nbsp; {t('tour1_p8')}</p>
          <Link to="/apply">
            <input
              type="submit"
              value="BOOK NOW"
              className="btn btn-outline"
            />
          </Link>
        </div>
      </div>
      <div className="container grid">
        <div>
          <h1>TOUR 3</h1>
          <p>{t('tour3_p1')}</p>
          <p>{t('tour3_p2')}</p>
          <p>{t('tour3_p3')}</p>
          <p>{t('tour3_p4')}</p>
          <p>{t('tour3_p5')}</p>
          <p>&nbsp; &nbsp;{t('tour1_p6')}</p>
          <p>&nbsp; &nbsp; {t('tour1_p7')}</p>
          <p>&nbsp; &nbsp; {t('tour1_p8')}</p>
          <Link to="/apply">
            <input
              type="submit"
              value="BOOK NOW"
              className="btn btn-outline"
            />
          </Link>
        </div>
        <SwiperTours item={tours[2].tour3} />
      </div>
    </section>
  );
};

export default Tour;
