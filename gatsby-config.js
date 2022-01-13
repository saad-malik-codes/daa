module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

// In your gatsby-config.js
const path = require('path');
module.exports = {
  plugins: [
    {
      resolve: '@builder.io/gatsby',
      options: {
        // public API Key
        publicAPIKey: '5c67c6209f1e4a6fbf577adc5c045a50',
        // optional
        // mapping model names to template files, the plugin will create a page for each entry of the model at its specified url
        templates: {
          // `page` can be any model of choice, camelCased
          page: path.resolve('templates/my-page.tsx'),
        },
        // optional
        mapEntryToContext: async ({ entry, graphql }) => {
          const result = await graphql('....');
          return {
            property: entry.data.property,
            anotherProperty: entry.data.whatever,
            dataFromQuery: result.data
            /* ... */
          };
        },
        // optional, to resolve a single entry to multiple, for e.g in localization
        resolveDynamicEntries: async (entries) => {
          const entriesToBuild = []
          for entry of entries {
            if (entry.data.myprop.isDynamic){
               entriesToBuild.push(await myEntryResolver(entry))
            }
            else {
               entriesToBuild.push(entry)
            }
          }
          return entriesToBuild;
        },
      },
    },
  ],
};
