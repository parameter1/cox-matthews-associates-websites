const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const { asyncRoute, cleanPath } = require('@parameter1/base-cms-utils');
const queryFragment = require('@cox-matthews-associates/package-global/graphql/fragments/website-section-page');
const cards = require('../templates/website-section/cards');
const products = require('../templates/website-section/products');
const section = require('../templates/website-section');

const emergingScholars = require('../templates/website-section/emerging-scholars');

const emergingScholarsYears = [
  '2021',
  '2020',
  '2019',
  '2018',
];

module.exports = (app) => {
  app.get('/:alias(awards-honors/emerging-scholars)', asyncRoute(async (req, res) => {
    const { alias } = req.params;
    res.redirect(301, `/${cleanPath(alias)}/${emergingScholarsYears[0]}`);
  }));
  emergingScholarsYears.forEach((year) => {
    app.get(`/:alias(awards-honors/emerging-scholars/${year})`, withWebsiteSection({
      template: emergingScholars,
      queryFragment,
    }));
  });
  app.get('/:alias(awards-honors/emerging-scholars)', withWebsiteSection({
    template: emergingScholars,
    queryFragment,
  }));
  app.get('/:alias(opinion)', withWebsiteSection({
    template: cards,
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
