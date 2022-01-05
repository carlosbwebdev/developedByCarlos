import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
const query = graphql`
  {
    site {
      siteMetadata {
        author
        contact
        siteDesc: description
        siteTitle: title
        image
        twitterUsername
      }
    }
  }
`;

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const { siteDesc, siteTitle, image, twitterUsername } = site.siteMetadata;

  return (
    <Helmet title={`${title} | ${siteTitle} `} htmlAttributes={{ lang: 'en' }}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creactor" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/doge7vn6i/image/upload/v1616156760/twitter-card_tadkg7.png"
      />
    </Helmet>
  );
};

export default Seo;
