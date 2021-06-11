const events = require('../templates/published-content/supplier-events');
const webinars = require('../templates/published-content/webinars');
const whitePapers = require('../templates/published-content/white-papers');
const videos = require('../templates/published-content/videos');
const podcasts = require('../templates/published-content/podcasts');
const documents = require('../templates/published-content/documents');

module.exports = (app) => {
  app.get('/supplier-events', (_, res) => { res.marko(events); });
  app.get('/webinars', (_, res) => { res.marko(webinars); });
  app.get('/white-papers', (_, res) => { res.marko(whitePapers); });
  app.get('/videos', (_, res) => { res.marko(videos); });
  app.get('/podcasts', (_, res) => { res.marko(podcasts); });
  app.get('/downloads', (_, res) => { res.marko(documents); });
};
