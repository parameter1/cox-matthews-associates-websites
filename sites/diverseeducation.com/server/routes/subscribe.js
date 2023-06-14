const { newsletterState } = require('@cox-matthews-associates/package-global/middleware/newsletter-state');

const subscribe = require('../templates/subscribe');

module.exports = (app) => {
  app.get('/subscribe', newsletterState(), (_, res) => {
    res.marko(subscribe);
  });
};
