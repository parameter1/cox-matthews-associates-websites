const withContent = require('@cox-matthews-associates/package-global/middleware/with-content');
const queryFragment = require('@cox-matthews-associates/package-global/graphql/fragments/content-page');
const contact = require('@cox-matthews-associates/package-global/templates/content/contact');
const company = require('@cox-matthews-associates/package-global/templates/content/company');
const product = require('@cox-matthews-associates/package-global/templates/content/product');
const whitepaper = require('@cox-matthews-associates/package-global/templates/content/whitepaper');
const content = require('../templates/content');

module.exports = (app) => {
  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment,
  }));

  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment,
  }));

  app.get('/*?product/:id(\\d{8})*', withContent({
    template: product,
    queryFragment,
  }));

  app.get('/*?whitepaper/:id(\\d{8})*', withContent({
    template: whitepaper,
    queryFragment,
  }));

  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
