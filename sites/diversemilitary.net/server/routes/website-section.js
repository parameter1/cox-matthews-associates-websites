const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const { newsletterState } = require('@cox-matthews-associates/package-global/middleware/newsletter-state');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const cards = require('../templates/website-section/cards');
const products = require('../templates/website-section/products');
const section = require('../templates/website-section');

module.exports = (app) => {
  app.get('/:alias(opinion)', newsletterState(), withWebsiteSection({
    template: cards,
    queryFragment,
  }));
  app.get('/:alias(products)', newsletterState(), withWebsiteSection({
    template: products,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', newsletterState(), withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
