import React from 'react';
import Title from './title';
import services from '../constants/services';
import * as styles from '../css/services.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className={`styles.section `}>
      <div className={styles.underline}></div>
      <Title title={t('Serviços')} />

      <div className={`styles.sectioCenter ${styles.servicesCenter}`}>
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article key={id} className={styles.service} id="serviceDark">
              {icon}

              <h4>{t(`${title}`)}</h4>

              <p>{t(`${text}`)}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
