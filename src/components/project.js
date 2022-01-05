import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
// import { Link } from "gatsby";
import * as styles from '../css/project.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Project = ({ title, image, id, github, url }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container} key={id} id="projectDark">
      <GatsbyImage
        image={image.localFile.childImageSharp.gatsbyImageData}
        className={styles.boxImg}
      />
      <div className={styles.box}>
        <div className={styles.text}>
          <span>{title}</span>
          <a className={styles.boxLink} href={url}>
            {t('ir para...')}
          </a>
          <a className={styles.boxLink} href={github}>
            {t('repositorio github')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
