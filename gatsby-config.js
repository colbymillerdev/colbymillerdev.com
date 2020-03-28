// const config = require('./config/site');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Colby Miller',
    description:
      'Experienced software engineer with a passion for full stack web and mobile development!',
    author: 'Colby Miller',
    siteUrl: 'https://colbymillerdev.com',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Colby Miller',
        short_name: 'Colby Miller',
        description:
          'Experienced software engineer with a passion for full stack web and mobile development!',
        lang: `en`,
        start_url: '/',
        background_color: '#4c4c4e',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'src/assets/site_icon.png',
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
      },
    },
  ],
};
