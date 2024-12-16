const { getAsObject } = require('@mindful-web/object-path');
const MarkoWebSearchConfig = require('@mindful-web/marko-web-search/config');
const middleware = require('@mindful-web/marko-web-search/middleware');
const template = require('../templates/search');

module.exports = (app, siteConfig) => {
  const {
    contentTypes = ['Article', 'Blog', 'Company', 'Podcast', 'Product', 'Video', 'Whitepaper'],
    assignedToWebsiteSectionIds,
  } = getAsObject(siteConfig, 'search');
  const config = new MarkoWebSearchConfig({
    resultsPerPage: { default: 18 },
    contentTypes,
    assignedToWebsiteSectionIds,
  });
  app.get('/search', middleware({ config, template }));
};
