const { newsletterState } = require('@cox-matthews-associates/package-global/middleware/newsletter-state');

const diversePoll = require('../templates/static-pages/diverse-poll');

module.exports = (app) => {
  app.get('/diverse-poll', newsletterState(), (req, res) => {
    res.marko(diversePoll);
  });
};
