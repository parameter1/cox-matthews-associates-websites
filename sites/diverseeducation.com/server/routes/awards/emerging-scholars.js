const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const { asyncRoute, cleanPath } = require('@parameter1/base-cms-utils');
const queryFragment = require('@cox-matthews-associates/package-global/graphql/fragments/website-section-page');
const emergingScholars = require('../../templates/website-section/awards-honors/emerging-scholars');

const emergingScholarsYears = [
  '2021',
  '2020',
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
};
