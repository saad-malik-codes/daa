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
