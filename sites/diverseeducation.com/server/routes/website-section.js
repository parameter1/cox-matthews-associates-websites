const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@cox-matthews-associates/package-global/graphql/fragments/website-section-page');
const cards = require('../templates/website-section/cards');
const podcasts = require('../templates/website-section/podcasts');
const products = require('../templates/website-section/products');
const section = require('../templates/website-section');

module.exports = (app) => {
  app.get('/:alias(opinion)', withWebsiteSection({
    template: cards,
    queryFragment,
  }));
  app.get('/:alias(podcasts)', withWebsiteSection({
    template: podcasts,
    queryFragment,
  }));
  app.get('/:alias(products)', withWebsiteSection({
    template: products,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
