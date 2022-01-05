import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Services from '../components/services';
import { graphql } from 'gatsby';

// import Blogs from "../components/blogs";
import Projects from '../components/projects';
import Seo from '../components/seo';
// import Skills from "../components/skills";
export const query = graphql`
  {
    allStrapiBlogs(limit: 3, sort: { fields: id, order: DESC }) {
      nodes {
        slug
        title
        id
        content
        category
        date(formatString: "Do MMMM, YYYY")
        desc
      }
    }
    allStrapiProjects(filter: { featured: { eq: true } }) {
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

// export default ({ data }) => {
const Index = ({ data }) => {
  const {
    // allStrapiBlogs: { nodes: blogs },
    allStrapiProjects: { nodes: projects },
  } = data;
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Services />
      <Projects projects={projects} title="projectos" subTitle showLink />
      {/* <Skills /> */}
      {/* <Blogs blogs={blogs} title="blog" subTitle showLink /> */}
    </Layout>
  );
};

export default Index;
