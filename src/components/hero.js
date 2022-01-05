import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import * as styles from '../css/hero.module.css';
import SocialLinks from '../constants/socialLinks';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `);

  const { t } = useTranslation();

  return (
    <header className={styles.hero} id="herodark">
      <div className={`${styles.sectionCenter} ${styles.heroCenter}`}>
        <article className={styles.heroInfo}>
          <div>
            <div className={styles.underline}></div>
            <h1>{t('ola')}</h1>
            <h4 id="heroinfo">{t('desc')}</h4>
            <Link to="/contact" className={styles.btn} id="btnDarkHover">
              {t('contacta-me')}
            </Link>
            <SocialLinks />
          </div>
        </article>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          placeholder="none"
          className={styles.heroImg}
        />
      </div>
    </header>
  );
};

export default Hero;
