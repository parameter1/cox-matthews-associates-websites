const content = require('@cox-matthews-associates/package-global/routes/content');
const home = require('./home');
const awards = require('./awards');
const staticPages = require('./static-pages');
const websiteSection = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Content
  content(app);

  // Awards Honors
  awards(app);

  // Static Pages
  staticPages(app);

  // Website Sections
  websiteSection(app);
};
