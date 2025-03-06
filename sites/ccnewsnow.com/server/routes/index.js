const hiringFeed = require('@cox-matthews-associates/package-global/routes/hiring-feed');
const content = require('./content');
const home = require('./home');
const websiteSection = require('./website-section');

module.exports = (app) => {
  // Hiring XML Feed
  hiringFeed(app, 119315);

  // Homepage
  home(app);

  // Content
  content(app);

  // Website Sections
  websiteSection(app);
};
