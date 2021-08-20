const content = require('./content');
const home = require('./home');
const awards = require('./awards');
const diversePoll = require('./diverse-poll');
const websiteSection = require('./website-section');
const subscribe = require('./subscribe');

module.exports = (app) => {
  // Homepage
  home(app);

  // Subscribe
  subscribe(app);

  // Content
  content(app);

  // Awards Honors
  awards(app);

  // Diverse Poll
  diversePoll(app);

  // Website Sections
  websiteSection(app);
};
