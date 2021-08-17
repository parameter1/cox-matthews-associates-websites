const diversePoll = require('../templates/static-pages/diverse-poll');

module.exports = (app) => {
  app.get('/diverse-poll', (req, res) => {
    res.marko(diversePoll);
  });
};
