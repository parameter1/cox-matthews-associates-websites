const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const { newsletterState } = require('@cox-matthews-associates/package-global/middleware/newsletter-state');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const queryFragmentWithLogo = require('@cox-matthews-associates/package-global/graphql/fragments/website-section-with-logo-page');
const cards = require('../templates/website-section/cards');
const podcasts = require('../templates/website-section/podcasts');
const products = require('../templates/website-section/products');
const section = require('../templates/website-section');
const webinars = require('../templates/website-section/webinars');
const jhf = require('../templates/website-section/john-hope-franklin');
const onTheMove = require('../templates/website-section/on-the-move');

module.exports = (app) => {
  app.get('/:alias(opinion)', newsletterState(), withWebsiteSection({
    template: cards,
    queryFragment,
  }));
  app.get('/:alias(podcasts)', newsletterState(), withWebsiteSection({
    template: podcasts,
    queryFragment: queryFragmentWithLogo,
  }));
  app.get('/:alias(products)', newsletterState(), withWebsiteSection({
    template: products,
    queryFragment,
  }));
  app.get('/:alias(webinars|events/diverse-talk-live)', newsletterState(), withWebsiteSection({
    template: webinars,
    queryFragment,
  }));
  app.get('/:alias(awards-honors/dr-john-hope-franklin)', newsletterState(), withWebsiteSection({
    template: jhf,
    queryFragment,
  }));
  app.get('/:alias(on-the-move)', newsletterState(), withWebsiteSection({
    template: onTheMove,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', newsletterState(), withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
