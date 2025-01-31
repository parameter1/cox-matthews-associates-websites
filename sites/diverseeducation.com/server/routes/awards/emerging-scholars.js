const { newsletterState } = require('@cox-matthews-associates/package-global/middleware/newsletter-state');
const { withWebsiteSection } = require('@mindful-web/marko-web/middleware');
const { asyncRoute, cleanPath } = require('@mindful-web/utils');
const queryFragment = require('@mindful-web/marko-web-theme-monorail/graphql/fragments/website-section-page');
const emergingScholars = require('../../templates/website-section/awards-honors/emerging-scholars');

module.exports = (app) => {
  app.get('/:alias(awards-honors/emerging-scholars)', newsletterState(), asyncRoute(async (req, res) => {
    const { alias } = req.params;
    res.redirect(301, `/${cleanPath(alias)}/2025`);
  }));

  app.get('/:alias(awards-honors/emerging-scholars/\\d{4})', newsletterState(), withWebsiteSection({
    template: emergingScholars,
    queryFragment,
  }));
};
