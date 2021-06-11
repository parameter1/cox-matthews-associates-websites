const { withContent } = require('@parameter1/base-cms-marko-web/middleware');
const companyQueryFragment = require('@cox-matthews-associates/package-common/graphql/fragments/content-company');
const queryFragment = require('../graphql/fragments/content-page');
const contactQueryFragment = require('../graphql/fragments/content-contact');
const company = require('../templates/content/company');
const content = require('../templates/content');
const contact = require('../templates/content/contact');
const podcast = require('../templates/content/podcast');
const webinar = require('../templates/content/webinar');
const document = require('../templates/content/document');

module.exports = (app) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyQueryFragment,
  }));
  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment: contactQueryFragment,
  }));
  app.get('/*?webinar/:id(\\d{8})*', withContent({
    template: webinar,
    queryFragment,
  }));
  app.get('/*?podcast/:id(\\d{8})*', withContent({
    template: podcast,
    queryFragment,
  }));
  app.get('/*?document/:id(\\d{8})*', withContent({
    template: document,
    queryFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
