module.exports = {
  siteMetadata: {
    title: 'developedByCarlos',
    author: '@Carlos_webdev',
    contact: 'carlosbwebdev@gmail.com',
    description:
      'Freelance web designer and developer, based in the north of portugal',
    siteUrl: 'https://developedbycarlos.com',
    image: '/twitter-card.png',
    twitterUsername: '@Carlos_webdev',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/sun.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/',
      },
      __key: 'images',
    },

    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://app01test.herokuapp.com`,
        // apiURL: `http://localhost:1337`,
        queryLimit: 5000,
        collectionTypes: [`blogs`, `projects`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['300', '400', '500'],
            },
            {
              family: 'Open Sans Condensed',
              variants: ['300', '700'],
            },
            // {
            //   family: "Poppins",
            //   variants: ["100", "200", "300", "400", "500", "600", "700"],
            // },
            {
              family: 'Michroma',
              variants: ['400'],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`pt`, `en`],
        defaultLanguage: `pt`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://example.com/`,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
};
