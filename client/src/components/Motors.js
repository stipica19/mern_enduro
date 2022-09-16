import React from 'react';
import { useTranslation } from 'react-i18next';
import beta250 from '../images/beta250.webp';
import beta300 from '../images/beta300.webp';

const Motors = () => {
  const { t } = useTranslation();
  return (
    <section className="stats">
      <div className="container">
        <h3 className="stats-heading  text-center">MOTORCYCLES</h3>
        <p>{t('moto_p1')}</p>
        <br />
        <p>{t('moto_p2')}</p>
        <p>{t('moto_p3')}</p>
        <p> {t('moto_p4')} 👇</p>
        <ul>
          <li>
            <i className="fa fa-motorcycle"></i> BETA 250 2T
          </li>
          <li>
            <i className="fa fa-motorcycle"></i> BETA 300 2T
          </li>
        </ul>
        <div className="grid-2 my-4 grid text-center">
          <div>
            <img src={beta250} alt="enduro touren bosnien" />
            <h3>BETA 250</h3>
          </div>
          <div>
            <img src={beta300} alt="enduro touren bosnien" />
            <h3>BETA 300</h3>
          </div>
        </div>
        <div>
          <h4 className="text-center">{t('gang_title')}</h4>
          <p>{t('gang')}</p>
        </div>
      </div>
    </section>
  );
};

export default Motors;
