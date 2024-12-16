const { asyncRoute } = require('@mindful-web/utils');
const { withWebsiteSection } = require('@mindful-web/marko-web/middleware');
const { newsletterState } = require('@cox-matthews-associates/package-global/middleware/newsletter-state');
const queryFragment = require('@mindful-web/marko-web-theme-monorail/graphql/fragments/website-section-page');
const awardRedirects = require('./awards/redirects');
const emergingScholars = require('./awards/emerging-scholars');
const graduateScholars = require('./awards/graduate-scholars');
const topWomen = require('./awards/top-women');
const champions = require('../templates/website-section/awards-honors/champions');
const arthurAshe = require('../templates/website-section/awards-honors/arthur-ashe');
const mppwsaYearly = require('../templates/static-pages/mppwsa-yearly');
const mppwccYearly = require('../templates/static-pages/mppwcc-yearly');

module.exports = (app) => {
  awardRedirects(app);

  app.get('/:alias(awards-honors/diverse-champions)', newsletterState(), withWebsiteSection({
    template: champions,
    queryFragment,
  }));

  // Emerging Scholars
  emergingScholars(app);

  // Graduate Scholars
  graduateScholars(app);

  // Top Women
  topWomen(app);

  app.get('/:alias(awards-honors/mppwsa)', newsletterState(), asyncRoute(async (req, res) => {
    const { alias } = req.params;
    return res.marko(mppwsaYearly, { alias });
  }));

  app.get('/:alias(awards-honors/mppwsa/\\d{4})', newsletterState(), asyncRoute(async (req, res) => {
    const { alias } = req.params;
    return res.marko(mppwsaYearly, { alias });
  }));

  app.get('/:alias(awards-honors/arthur-ashe/\\d{4})', newsletterState(), withWebsiteSection({
    template: arthurAshe,
    queryFragment,
  }));

  app.get('/:alias(awards-honors/arthur-ashe)', newsletterState(), withWebsiteSection({
    template: arthurAshe,
    queryFragment,
  }));

  app.get('/:alias(awards-honors/mppwcc)', newsletterState(), asyncRoute(async (req, res) => {
    const { alias } = req.params;
    return res.marko(mppwccYearly, { alias });
  }));

  app.get('/:alias(awards-honors/mppwcc/\\d{4})', newsletterState(), asyncRoute(async (req, res) => {
    const { alias } = req.params;
    return res.marko(mppwccYearly, { alias });
  }));
};
