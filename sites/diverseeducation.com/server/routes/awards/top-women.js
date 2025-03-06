const { withWebsiteSection } = require('@mindful-web/marko-web/middleware');
const { newsletterState } = require('@cox-matthews-associates/package-global/middleware/newsletter-state');
const { asyncRoute, cleanPath } = require('@mindful-web/utils');
const queryFragment = require('@mindful-web/marko-web-theme-monorail/graphql/fragments/website-section-page');
const topWomen = require('../../templates/website-section/awards-honors/top-women');

module.exports = (app) => {
  app.get('/:alias(awards-honors/top-women)', newsletterState(), asyncRoute(async (req, res) => {
    const { alias } = req.params;
    res.redirect(301, `/${cleanPath(alias)}/2025`);
  }));

  app.get('/:alias(awards-honors/top-women/\\d{4})', newsletterState(), withWebsiteSection({
    template: topWomen,
    queryFragment,
  }));
};
