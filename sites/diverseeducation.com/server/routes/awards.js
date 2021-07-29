const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@cox-matthews-associates/package-global/graphql/fragments/website-section-page');
const emergingScholars = require('./awards/emerging-scholars');
const champions = require('../templates/website-section/awards-honors/champions');

module.exports = (app) => {
  app.get('/:alias(awards-honors/diverse-champions)', withWebsiteSection({
    template: champions,
    queryFragment,
  }));

  // Emerging Scholars
  emergingScholars(app);
};
