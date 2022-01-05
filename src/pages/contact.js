import React from 'react';
import Layout from '../components/layout';
import * as styles from '../css/contact.module.css';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title="Contact" />
      <section className={styles.contactPage}>
        <article className={styles.contactForm}>
          <h3>{t('Contacta-me')}</h3>
          <form action="https://formspree.io/f/xqkgvnzn" method="POST">
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder={t('nome')}
                name="name"
                className={styles.formControl}
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className={styles.formControl}
              />
              <textarea
                id=""
                rows="5"
                placeholder={t('mensagem')}
                name="message"
                className={styles.formControl}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`${styles.submitBtn} ${styles.btn} `}
            >
              {t('enviar')}
            </button>
          </form>
        </article>
      </section>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
