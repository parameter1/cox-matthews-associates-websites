const contentMetering = require('@parameter1/base-cms-marko-web-theme-monorail/middleware/content-metering');

const withContent = require('@cox-matthews-associates/package-global/middleware/with-content');
const { newsletterState, formatContentResponse } = require('@cox-matthews-associates/package-global/middleware/newsletter-state');
const queryFragment = require('@cox-matthews-associates/package-global/graphql/fragments/content-page');
const contact = require('@cox-matthews-associates/package-global/templates/content/contact');
const company = require('@cox-matthews-associates/package-global/templates/content/company');
const product = require('@cox-matthews-associates/package-global/templates/content/product');
const whitepaper = require('@cox-matthews-associates/package-global/templates/content/whitepaper');
const content = require('../templates/content');

const routesList = [
  { // contact
    regex: '/*?contact/:id(\\d{8})*',
    template: contact,
    queryFragment,
  },
  { // company
    regex: '/*?company/:id(\\d{8})*',
    template: company,
    queryFragment,
  },
  { // product
    regex: '/*?product/:id(\\d{8})*',
    template: product,
    queryFragment,
  },
  { // whitepaper
    regex: '/*?whitepaper/:id(\\d{8})*',
    template: whitepaper,
    queryFragment,
  },
  { // default
    regex: '/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)*',
    template: content,
    queryFragment,
    withContentMeter: true,
  },
];

module.exports = (app) => {
  const { site } = app.locals;
  const contentMeterEnable = site.get('contentMeter.enable');
  // determin to use newsletterstate or contentMeter middleware
  routesList.forEach((route) => {
    if (route.withContentMeter && contentMeterEnable) {
      app.get(route.regex, newsletterState({ setCookie: false }), contentMetering(), withContent({
        template: route.template,
        queryFragment: route.queryFragment,
        formatResponse: formatContentResponse,
      }));
    } else {
      app.get(route.regex, newsletterState({ setCookie: false }), withContent({
        template: route.template,
        queryFragment: route.queryFragment,
        formatResponse: formatContentResponse,
      }));
    }
  });
};
