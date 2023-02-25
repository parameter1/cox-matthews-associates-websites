const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const { asyncRoute, cleanPath } = require('@parameter1/base-cms-utils');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const graduateScholars = require('../../templates/website-section/awards-honors/graduate-scholars');

module.exports = (app) => {
  app.get('/:alias(awards-honors/graduate-scholars)', asyncRoute(async (req, res) => {
    const { alias } = req.params;
    res.redirect(301, `/${cleanPath(alias)}/2022`);
  }));

  app.get('/:alias(awards-honors/graduate-scholars/\\d{4})', withWebsiteSection({
    template: graduateScholars,
    queryFragment,
  }));
};
