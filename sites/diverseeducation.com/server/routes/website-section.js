const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@cox-matthews-associates/package-theme-monorail/graphql/fragments/website-section-page');
const queryFragmentWithLogo = require('@cox-matthews-associates/package-global/graphql/fragments/website-section-with-logo-page');
const cards = require('../templates/website-section/cards');
const podcasts = require('../templates/website-section/podcasts');
const products = require('../templates/website-section/products');
const section = require('../templates/website-section');
const webinars = require('../templates/website-section/webinars');
const jhf = require('../templates/website-section/john-hope-franklin');

module.exports = (app) => {
  app.get('/:alias(opinion)', withWebsiteSection({
    template: cards,
    queryFragment,
  }));
  app.get('/:alias(podcasts)', withWebsiteSection({
    template: podcasts,
    queryFragment: queryFragmentWithLogo,
  }));
  app.get('/:alias(products)', withWebsiteSection({
    template: products,
    queryFragment,
  }));
  app.get('/:alias(webinars|events/diverse-talk-live)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));
  app.get('/:alias(awards-honors/dr-john-hope-franklin)', withWebsiteSection({
    template: jhf,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
