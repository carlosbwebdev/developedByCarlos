import React from 'react';
import Layout from '../components/layout';
import Projects from '../components/projects';
import * as styles from '../css/projects-page.module.css';

import { graphql } from 'gatsby';
import Seo from '../components/seo';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        github
        description
        title
        url
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
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
const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title="Projectos" />
      <section className={styles.projectsPage} id="projectDarkPage">
        <Projects projects={projects} title={t('Projectos')} id="opa" />
      </section>
    </Layout>
  );
};
export default ProjectsPage;
