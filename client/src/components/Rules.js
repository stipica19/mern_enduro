import React from 'react';
import { useTranslation } from 'react-i18next';
const Rules = () => {
  const { t } = useTranslation();
  return (
    <section className="stats rules">
      <div className="container">
        <h3 className="stats-heading  text-center">
          {t('rule_title')}
        </h3>
        <div className="grid-2 my-1 grid">
          <div className="">
            <p>{t('rule_1')}</p>
            <p>{t('rule_2')}</p>
            <p>{t('rule_3')}</p>
            <p>{t('rule_4')}</p>
            <p>{t('rule_5')}</p>
            <p>{t('rule_6')}</p>
            <p>{t('rule_7')}</p>
            <p>{t('rule_8')}</p>
          </div>
          <div className="">
            <p>{t('rule_9')}</p>
            <p>{t('rule_10')}</p>
            <p>{t('rule_11')}</p>
            <p>{t('rule_12')}</p>
            <p>{t('rule_13')}</p>
            <p>{t('rule_14')}</p>
            <p>{t('rule_15')}</p>
            <p>{t('rule_16')}</p>
          </div>
        </div>
        <h4 className="stats-heading  text-center">
          {t('rule_17')} 👍
        </h4>
      </div>
    </section>
  );
};

export default Rules;
