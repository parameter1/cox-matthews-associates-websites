const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@cox-matthews-associates/package-shared/graphql/fragments/website-section-page');
const leadersFragment = require('@cox-matthews-associates/package-common/graphql/fragments/leaders-section');
const section = require('../templates/website-section');
const leaders = require('../templates/website-section/leaders');

module.exports = (app) => {
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
