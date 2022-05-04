const { asyncRoute } = require('@parameter1/base-cms-utils');
const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const awardRedirects = require('./awards/redirects');
const emergingScholars = require('./awards/emerging-scholars');
const graduateScholars = require('./awards/graduate-scholars');
const champions = require('../templates/website-section/awards-honors/champions');
const arthurAshe = require('../templates/website-section/awards-honors/arthur-ashe');
const mppwsaYearly = require('../templates/static-pages/mppwsa-yearly');
const mppwccYearly = require('../templates/static-pages/mppwcc-yearly');

module.exports = (app) => {
  awardRedirects(app);

  app.get('/:alias(awards-honors/diverse-champions)', withWebsiteSection({
    template: champions,
    queryFragment,
  }));

  // Emerging Scholars
  emergingScholars(app);

  // Graduate Scholars
  graduateScholars(app);

  app.get('/:alias(awards-honors/mppwsa)', asyncRoute(async (req, res) => {
    const { alias } = req.params;
    return res.marko(mppwsaYearly, { alias });
  }));

  app.get('/:alias(awards-honors/mppwsa/\\d{4})', asyncRoute(async (req, res) => {
    const { alias } = req.params;
    return res.marko(mppwsaYearly, { alias });
  }));

  app.get('/:alias(awards-honors/arthur-ashe/\\d{4})', withWebsiteSection({
    template: arthurAshe,
    queryFragment,
  }));

  app.get('/:alias(awards-honors/arthur-ashe)', withWebsiteSection({
    template: arthurAshe,
    queryFragment,
  }));

  app.get('/:alias(awards-honors/mppwcc)', asyncRoute(async (req, res) => {
    const { alias } = req.params;
    return res.marko(mppwccYearly, { alias });
  }));

  app.get('/:alias(awards-honors/mppwcc/\\d{4})', asyncRoute(async (req, res) => {
    const { alias } = req.params;
    return res.marko(mppwccYearly, { alias });
  }));
};
