const { asyncRoute } = require('@parameter1/base-cms-utils');
const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@cox-matthews-associates/package-global/graphql/fragments/website-section-page');
const emergingScholars = require('./awards/emerging-scholars');
const champions = require('../templates/website-section/awards-honors/champions');
const arthurAshe = require('../templates/website-section/awards-honors/arthur-ashe');
const mppwsa = require('../templates/static-pages/mppwsa');
const mppwcc = require('../templates/static-pages/mppwcc');

module.exports = (app) => {
  app.get('/:alias(awards-honors/diverse-champions)', withWebsiteSection({
    template: champions,
    queryFragment,
  }));

  // Emerging Scholars
  emergingScholars(app);

  app.get('/:alias(awards-honors/mppwsa)', asyncRoute(async (req, res) => {
    const { alias } = req.params;
    return res.marko(mppwsa, { alias });
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
    return res.marko(mppwcc, { alias });
  }));
};
