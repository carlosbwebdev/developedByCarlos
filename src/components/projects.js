import React from 'react';
import Title from '../components/title';
import * as styles from '../css/projects.module.css';
// import Blog from "./blog";
import Project from '../components/project';
import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export const Projects = ({ projects, title, subTitle, showLink }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.section}>
      <div className={styles.underline}></div>
      <Title title={t('Projectos')} />
      {subTitle && (
        <h4 className={styles.subtitle}>{t('Projectos em Destaque')}</h4>
      )}

      <div className={`${styles.sectionCenter} ${styles.projectsCenter}`}>
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
      {showLink && (
        <Link to="/projects/" className={`${styles.btn} ${styles.centerBtn}`}>
          {t('Projectos')}
        </Link>
      )}
    </div>
  );
};

export default Projects;
